import BlurredCard, { ChatButton, InnerDropdown } from '@/ant-components/common/blurredCard';
import ConstructLayout from '@/ant-components/layout/Construct';
import { ChatContext } from '@/app/chat-context';
import { apiInterceptors, delSpace, getSpaceList, newDialogue } from '@/client/api';
import DocPanel from '@/components/knowledge/doc-panel';
import DocTypeForm from '@/components/knowledge/doc-type-form';
import DocUploadForm from '@/components/knowledge/doc-upload-form';
import Segmentation from '@/components/knowledge/segmentation';
import SpaceForm from '@/components/knowledge/space-form';
import { File, ISpace, StepChangeParams } from '@/types/knowledge';
import { PlusOutlined, ReadOutlined, WarningOutlined } from '@ant-design/icons';
import { Button, Modal, Steps, Tag } from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Knowledge = () => {
  const { setCurrentDialogInfo } = useContext(ChatContext);
  const [spaceList, setSpaceList] = useState<Array<ISpace> | null>([]);
  const [isAddShow, setIsAddShow] = useState<boolean>(false);
  const [isPanelShow, setIsPanelShow] = useState<boolean>(false);
  const [currentSpace, setCurrentSpace] = useState<ISpace>();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [spaceName, setSpaceName] = useState<string>('');
  const [files, setFiles] = useState<Array<File>>([]);
  const [docType, setDocType] = useState<string>('');
  const [addStatus, setAddStatus] = useState<string>('');

  const { t } = useTranslation();
  const addKnowledgeSteps = [
    { title: t('Knowledge_Space_Config') },
    { title: t('Choose_a_Datasource_type') },
    { title: t('Upload') },
    { title: t('Segmentation') },
  ];
  const router = useRouter();

  async function getSpaces() {
    const [_, data] = await apiInterceptors(getSpaceList());
    setSpaceList(data);
  }
  useEffect(() => {
    getSpaces();
  }, []);

  const handleChat = async (space: ISpace) => {
    const [_, data] = await apiInterceptors(
      newDialogue({
        chat_mode: 'chat_knowledge',
      }),
    );
    // 知识库对话都默认私有知识库应用下
    if (data?.conv_uid) {
      setCurrentDialogInfo?.({
        chat_scene: data.chat_mode,
        app_code: data.chat_mode,
      });
      localStorage.setItem(
        'cur_dialog_info',
        JSON.stringify({
          chat_scene: data.chat_mode,
          app_code: data.chat_mode,
        }),
      );
      router.push(`/chat?scene=chat_knowledge&id=${data?.conv_uid}&knowledge_id=${space.id}`);
    }
  };
  const handleStepChange = ({ label, spaceName, docType, files }: StepChangeParams) => {
    if (label === 'finish') {
      setIsAddShow(false);
      getSpaces();
      setSpaceName('');
      setDocType('');
      setAddStatus('finish');
      localStorage.removeItem('cur_space_id');
    } else if (label === 'forward') {
      activeStep === 0 && getSpaces();
      setActiveStep((step) => step + 1);
    } else {
      setActiveStep((step) => step - 1);
    }
    files && setFiles(files);
    spaceName && setSpaceName(spaceName);
    docType && setDocType(docType);
  };

  function onAddDoc(spaceName: string) {
    setSpaceName(spaceName);
    setActiveStep(1);
    setIsAddShow(true);
    setAddStatus('start');
  }
  const showDeleteConfirm = (space: ISpace) => {
    Modal.confirm({
      title: t('Tips'),
      icon: <WarningOutlined />,
      content: `${t('Del_Knowledge_Tips')}?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        await apiInterceptors(delSpace({ name: space?.name }));
        getSpaces();
      },
    });
  };

  return (
    <ConstructLayout>
      <div className="page-body p-4 md:p-6 h-[90vh] overflow-auto">
        {/* <Button
          type="primary"
          className="flex items-center"
          icon={<PlusOutlined />}
          onClick={() => {
            setIsAddShow(true);
          }}
        >
          Create
        </Button> */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            {/* <Input
              variant="filled"
              prefix={<SearchOutlined />}
              placeholder={t('please_enter_the_keywords')}
              // onChange={onSearch}
              // onPressEnter={onSearch}
              allowClear
              className="w-[230px] h-[40px] border-1 border-white backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60"
            /> */}
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="border-none text-white bg-button-gradient"
              icon={<PlusOutlined />}
              onClick={() => {
                setIsAddShow(true);
              }}
            >
              {t('create_knowledge')}
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap mt-4 mx-[-8px]">
          {spaceList?.map((space: ISpace) => (
            <BlurredCard
              onClick={() => {
                setCurrentSpace(space);
                setIsPanelShow(true);
                localStorage.setItem('cur_space_id', JSON.stringify(space.id));
              }}
              description={space.desc}
              name={space.name}
              key={space.id}
              logo="/images/knowledge.png"
              RightTop={
                <InnerDropdown
                  menu={{
                    items: [
                      {
                        key: 'del',
                        label: (
                          <span className="text-red-400" onClick={() => showDeleteConfirm(space)}>
                            删除
                          </span>
                        ),
                      },
                    ],
                  }}
                />
              }
              rightTopHover={false}
              Tags={
                <div>
                  <Tag>
                    <span className="flex items-center gap-1">
                      <ReadOutlined className="mt-[1px]" />
                      {space.docs}
                    </span>
                  </Tag>
                </div>
              }
              LeftBottom={
                <div className="flex gap-2">
                  <span>{space.owner}</span>
                  <span>•</span>
                  {space?.gmt_modified && <span>{moment(space?.gmt_modified).fromNow() + ' ' + t('update')}</span>}
                </div>
              }
              RightBottom={
                <ChatButton
                  text={t('start_chat')}
                  onClick={() => {
                    handleChat(space);
                  }}
                />
              }
            />
          ))}
        </div>
      </div>
      <Modal
        className="h-5/6 overflow-hidden"
        open={isPanelShow}
        width={'70%'}
        onCancel={() => setIsPanelShow(false)}
        footer={null}
        destroyOnClose={true}
      >
        <DocPanel space={currentSpace!} onAddDoc={onAddDoc} onDeleteDoc={getSpaces} addStatus={addStatus} />
      </Modal>
      <Modal
        title="新增知识库"
        centered
        open={isAddShow}
        destroyOnClose={true}
        onCancel={() => {
          setIsAddShow(false);
        }}
        width={1000}
        afterClose={() => {
          setActiveStep(0);
          getSpaces();
        }}
        footer={null}
      >
        <Steps current={activeStep} items={addKnowledgeSteps} />
        {activeStep === 0 && <SpaceForm handleStepChange={handleStepChange} />}
        {activeStep === 1 && <DocTypeForm handleStepChange={handleStepChange} />}
        <DocUploadForm
          className={classNames({ hidden: activeStep !== 2 })}
          spaceName={spaceName}
          docType={docType}
          handleStepChange={handleStepChange}
        />
        {activeStep === 3 && <Segmentation spaceName={spaceName} docType={docType} uploadFiles={files} handleStepChange={handleStepChange} />}
      </Modal>
    </ConstructLayout>
  );
};

export default Knowledge;