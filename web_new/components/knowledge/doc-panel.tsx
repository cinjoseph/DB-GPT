import {
  apiInterceptors,
  delDocument,
  editChunk,
  getDocumentList,
  getKnowledgeAdmins,
  searchDocumentList,
  syncDocument,
  updateKnowledgeAdmins,
} from '@/client/api';
import { IDocument, ISpace } from '@/types/knowledge';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  LoadingOutlined,
  PlusOutlined,
  SearchOutlined,
  SyncOutlined,
  ToolFilled,
  WarningOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import { useFavicon, useRequest } from 'ahooks';
import { Button, Card, Divider, Dropdown, Empty, Form, Input, Modal, Select, Space, Spin, Tag, Tooltip, message, notification } from 'antd';
import cls from 'classnames';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArgumentsModal from './arguments-modal';
import DocIcon from './doc-icon';

interface IProps {
  space: ISpace;
  addStatus: string;
  onAddDoc: (spaceName: string) => void;
  onDeleteDoc: () => void;
}

const { confirm } = Modal;

const SyncContent: React.FC<{ name: string; id: number }> = ({ name, id }) => {
  const [syncLoading, setSyncLoading] = useState<boolean>(false);

  const handleSync = async (spaceName: string, id: number) => {
    setSyncLoading(true);
    const res = await apiInterceptors(syncDocument(spaceName, { doc_ids: [id] }));
    setSyncLoading(false);
    if (res[2]?.success) {
      message.success('同步已发起，请稍后');
    }
  };

  if (syncLoading) {
    return <Spin indicator={<LoadingOutlined spin />} />;
  }
  return (
    <Space
      onClick={() => {
        handleSync(name, id);
      }}
    >
      <SyncOutlined />
      <span>同步</span>
    </Space>
  );
};

export default function DocPanel(props: IProps) {
  const [form] = Form.useForm();
  const { space, addStatus } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const page_size = 18;

  const [admins, setAdmins] = useState<string[]>([]);
  const [documents, setDocuments] = useState<any>([]);
  const [searchDocuments, setSearchDocuments] = useState<any>([]);
  const [argumentsShow, setArgumentsShow] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [curDoc, setCurDoc] = useState<IDocument>();

  const currentPageRef = useRef(1);

  const hasMore = useMemo(() => {
    return documents?.length < total;
  }, [documents, total]);

  const showDeleteConfirm = (row: any) => {
    confirm({
      title: t('Tips'),
      icon: <WarningOutlined />,
      content: `${t('Del_Document_Tips')}?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await handleDelete(row);
      },
    });
  };

  const {
    run: fetchDocuments,
    refresh,
    loading: isLoading,
  } = useRequest(
    async () =>
      await apiInterceptors(
        getDocumentList(+space.id, {
          page: currentPageRef.current,
          page_size,
        }),
      ),
    {
      manual: true,
      onSuccess: (res) => {
        const [, data] = res;
        setDocuments(data?.data);
        setSearchDocuments(data?.data);
        setTotal(data?.total || 0);
      },
    },
  );

  const loadMoreDocuments = async () => {
    if (!hasMore) {
      return;
    }
    currentPageRef.current += 1;
    const [_, data] = await apiInterceptors(
      getDocumentList(+space.id, {
        page: currentPageRef.current,
        page_size,
      }),
    );
    setDocuments([...documents, ...data!.data]);
    setSearchDocuments([...documents, ...data!.data]);
  };

  const handleDelete = async (row: any) => {
    await apiInterceptors(delDocument(space.name, { doc_name: row.doc_name }));
    fetchDocuments();
    props.onDeleteDoc();
  };

  const handleAddDocument = () => {
    props.onAddDoc(space.name);
  };

  const handleArguments = () => {
    setArgumentsShow(true);
  };

  const renderResultTag = (status: string, result: string) => {
    let color;
    switch (status) {
      case 'TODO':
        color = 'gold';
        break;
      case 'RUNNING':
        color = '#2db7f5';
        break;
      case 'FINISHED':
        color = 'cyan';
        break;
      case 'FAILED':
        color = 'red';
        break;
      default:
        color = 'red';
        break;
    }
    return (
      <Tooltip title={result}>
        <Tag color={color}>{status}</Tag>
      </Tooltip>
    );
  };
  const getAdmins = useCallback(async () => {
    const [err, data] = await apiInterceptors(getKnowledgeAdmins(space.id as string));

    if (!data || !data.length) return;
    setAdmins(data as string[]);
  }, [space.id]);

  useEffect(() => {
    fetchDocuments();
    getAdmins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAdmins]);

  useEffect(() => {
    if (addStatus === 'finish') {
      fetchDocuments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addStatus]);

  const updateAdmins = useCallback(
    async (options: string[]) => {
      const { data } = await updateKnowledgeAdmins({
        space_id: space.id as string,
        user_nos: options as any,
      });
      if (!data.success) {
        getAdmins();
        notification.error({ description: data.err_msg, message: 'Update Error' });
      } else {
        message.success(t('Edit_Success'));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [space.id, getAdmins],
  );
  const handleChange = (value: string[]) => {
    updateAdmins(value);
    setAdmins(value);
  };

  const { run: search, loading: searchLoading } = useRequest(
    async (id, doc_name: string) => {
      const [, res] = await apiInterceptors(searchDocumentList(id, { doc_name }));
      return res;
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess: (data) => {
        console.log(data);
        setSearchDocuments(data?.data);
      },
    },
  );

  const { run: editChunkRun, loading: chunkLoading } = useRequest(
    async (values: any) => {
      return await editChunk(props.space.name, {
        questions: values.questions.map((item: any) => item.question),
        doc_id: curDoc?.id || '',
        doc_name: values.doc_name,
      });
    },
    {
      manual: true,
      onSuccess: async (res) => {
        if (res.data.success) {
          message.success('编辑成功');
          await fetchDocuments();
          setEditOpen(false);
        } else {
          message.error(res.data.err_msg);
        }
      },
    },
  );

  const renderDocumentCard = () => {
    return (
      <div className="w-full h-full">
        <div className="mb-4">
          <div className="mb-1">管理员（工号，去前缀0）：</div>
          <div className="flex w-full justify-between">
            <Select
              mode="tags"
              value={admins}
              style={{ width: '50%' }}
              onChange={handleChange}
              tokenSeparators={[',']}
              options={admins.map((item: string) => ({ label: item, value: item }))}
            />
            <Button
              type="primary"
              onClick={async () => {
                await refresh();
              }}
              loading={isLoading}
            >
              刷新状态
            </Button>
          </div>
        </div>
        <div className="flex flex-col h-full p-3 border rounded-md">
          {documents?.length > 0 ? (
            <>
              <div className="flex flex-1 justify-between items-center">
                <Input
                  className="w-1/3"
                  prefix={<SearchOutlined />}
                  placeholder={t('please_enter_the_keywords')}
                  onChange={async (e) => {
                    await search(space.id, e.target.value);
                  }}
                  allowClear
                />
                <Button
                  onClick={async () => {
                    await apiInterceptors(syncDocument(space.name, { doc_ids: [] }));
                    message.success('同步已发起，请稍后');
                  }}
                  className="border"
                >
                  一键同步
                </Button>
              </div>
              <Spin spinning={searchLoading}>
                <>
                  {searchDocuments.length > 0 ? (
                    <div className="h-96 mt-3 grid grid-cols-3 gap-x-6 gap-y-5 overflow-y-auto">
                      {searchDocuments.map((document: IDocument) => {
                        return (
                          <Card
                            key={document.id}
                            className=" dark:bg-[#484848] relative  shrink-0 grow-0 cursor-pointer rounded-[10px] border border-gray-200 border-solid w-full max-h-64"
                            title={
                              <Tooltip title={document.doc_name}>
                                <div className="truncate ">
                                  <DocIcon type={document.doc_type} />
                                  <span>{document.doc_name}</span>
                                </div>
                              </Tooltip>
                            }
                            extra={
                              <Dropdown
                                menu={{
                                  items: [
                                    {
                                      key: 'publish',
                                      label: (
                                        <Space
                                          onClick={() => {
                                            router.push(`/construct/knowledge/chunk/?spaceName=${space.name}&id=${document.id}`);
                                          }}
                                        >
                                          <EyeOutlined />
                                          <span>详情</span>
                                        </Space>
                                      ),
                                    },
                                    {
                                      key: 'sync',
                                      label: <SyncContent name={space.name} id={document.id} />,
                                    },
                                    {
                                      key: 'edit',
                                      label: (
                                        <Space
                                          onClick={() => {
                                            setEditOpen(true);
                                            setCurDoc(document);
                                          }}
                                        >
                                          <EditOutlined />
                                          <span>编辑</span>
                                        </Space>
                                      ),
                                    },
                                    {
                                      key: 'del',
                                      label: (
                                        <Space
                                          onClick={() => {
                                            showDeleteConfirm(document);
                                          }}
                                        >
                                          <DeleteOutlined />
                                          <span>删除</span>
                                        </Space>
                                      ),
                                    },
                                  ],
                                }}
                                getPopupContainer={(node) => node.parentNode as HTMLElement}
                                placement="bottomRight"
                                autoAdjustOverflow={false}
                                className="bg-gray-100 rounded-md"
                              >
                                <EllipsisOutlined className="p-2" />
                              </Dropdown>
                            }
                          >
                            <p className="mt-2 font-semibold ">{t('Size')}:</p>
                            <p>{document.chunk_size} chunks</p>
                            <p className="mt-2 font-semibold ">{t('Last_Sync')}:</p>
                            <p>{moment(document.last_sync).format('YYYY-MM-DD HH:MM:SS')}</p>
                            <p className="mt-2 mb-2">{renderResultTag(document.status, document.result)}</p>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <Empty className="flex flex-1 w-full py-10 flex-col items-center justify-center" image={Empty.PRESENTED_IMAGE_DEFAULT} />
                  )}
                </>
                {hasMore && (
                  <Divider>
                    <span className="cursor-pointer" onClick={loadMoreDocuments}>
                      {t('Load_more')}
                    </span>
                  </Divider>
                )}
              </Spin>
            </>
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_DEFAULT}>
              <Button type="primary" className="flex items-center mx-auto" icon={<PlusOutlined />} onClick={handleAddDocument}>
                Create Now
              </Button>
            </Empty>
          )}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!curDoc) {
      return;
    }
    form.setFieldsValue({
      doc_name: curDoc.doc_name,
      questions: curDoc.questions?.map((ques) => {
        return {
          question: ques,
        };
      }),
    });
  }, [curDoc, form]);

  return (
    <div className="px-4">
      <Space>
        <Button size="middle" type="primary" className="flex items-center" icon={<PlusOutlined />} onClick={handleAddDocument}>
          {t('Add_Datasource')}
        </Button>
        <Button size="middle" className="flex items-center mx-2" icon={<ToolFilled />} onClick={handleArguments}>
          Arguments
        </Button>
      </Space>
      <Divider />
      <Spin spinning={isLoading}>{renderDocumentCard()}</Spin>
      <ArgumentsModal space={space} argumentsShow={argumentsShow} setArgumentsShow={setArgumentsShow} />
      {/* 编辑弹窗 */}
      <Modal
        title="编辑文档"
        open={editOpen}
        onCancel={() => setEditOpen(false)}
        destroyOnClose={true}
        footer={[
          <Button key="back" onClick={() => setEditOpen(false)}>
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={chunkLoading}
            onClick={async () => {
              const values = form.getFieldsValue();
              await editChunkRun(values);
            }}
          >
            确认
          </Button>,
        ]}
      >
        <Form
          form={form}
          initialValues={{
            doc_name: curDoc?.doc_name,
            questions: curDoc?.questions?.map((ques) => {
              return {
                question: ques,
              };
            }),
          }}
        >
          <Form.Item label="文档名" name="doc_name">
            <Input />
          </Form.Item>
          <Form.Item label="关联问题">
            <Form.List name="questions">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }, index) => (
                    <div key={key} className={cls('flex flex-1 items-center gap-8 mb-6')}>
                      <Form.Item label="" name={[name, 'question']} className="grow">
                        <Input placeholder="请输入" />
                      </Form.Item>
                      <Form.Item>
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(name);
                          }}
                        />
                      </Form.Item>
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add({ question: '', valid: false });
                      }}
                      block
                      icon={<PlusOutlined />}
                    >
                      添加问题
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}