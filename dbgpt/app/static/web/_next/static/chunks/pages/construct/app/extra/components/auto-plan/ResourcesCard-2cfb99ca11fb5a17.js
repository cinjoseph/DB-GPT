(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5550],{45128:function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/app/extra/components/auto-plan/ResourcesCard",function(){return i(2584)}])},33984:function(e,l,i){"use strict";var n=i(91321);let a=(0,n.Z)({scriptUrl:"//at.alicdn.com/t/a/font_4440880_ljyggdw605.js"});l.Z=a},2856:function(e,l,i){"use strict";i.r(l);var n=i(85893),a=i(76212),t=i(65654),u=i(99859),o=i(66184),d=i(72269),s=i(93967),r=i.n(s),c=i(67294);l.default=e=>{let{uid:l,initValue:i,updateData:s,classNames:v,resourceTypeOptions:f,setCurIcon:m}=e,[x]=u.default.useForm(),p=u.default.useWatch("type",x),h=u.default.useWatch("is_dynamic",x),j=u.default.useWatch("value",x),g=(0,c.useMemo)(()=>(null==f?void 0:f.filter(e=>"all"!==e.value))||[],[f]),{run:y,data:Z,loading:_}=(0,t.Z)(async e=>{var l;let[,n]=await (0,a.Vx)((0,a.RX)({type:e}));return x.setFieldsValue({value:(null==i?void 0:i.value)||(null==n?void 0:null===(l=n[0])||void 0===l?void 0:l.key)}),n||[]},{manual:!0});(0,c.useEffect)(()=>{p&&y(p)},[y,p]);let b=(0,c.useMemo)(()=>(null==Z?void 0:Z.map(e=>({...e,label:e.label,value:e.key+""})))||[],[Z]);return(0,c.useEffect)(()=>{let e=x.getFieldsValue(),i=(null==e?void 0:e.is_dynamic)?"":null==e?void 0:e.value;s({uid:l,...e,value:i})},[l,h,x,s,j,p]),(0,n.jsx)("div",{className:r()("flex flex-1",v),children:(0,n.jsxs)(u.default,{style:{width:"100%"},form:x,labelCol:{span:4},initialValues:{...i},children:[(0,n.jsx)(u.default.Item,{label:"资源类型",name:"type",children:(0,n.jsx)(o.default,{className:"w-2/5",options:g,onChange:e=>{m({uid:l,icon:e})}})}),(0,n.jsx)(u.default.Item,{label:"动态",name:"is_dynamic",children:(0,n.jsx)(d.Z,{style:{background:h?"#1677ff":"#ccc"}})}),!h&&(0,n.jsxs)(n.Fragment,{children:[" ","image_file"===p||"internet"===p||["text_file","excel_file"].includes(p)?null:(0,n.jsx)(u.default.Item,{label:"参数",name:"value",required:!0,children:(0,n.jsx)(o.default,{placeholder:"请选择参数",options:b,loading:_,className:"w-3/5",allowClear:!0})})]})]})})}},2584:function(e,l,i){"use strict";i.r(l),i.d(l,{default:function(){return g}});var n=i(85893),a=i(32983),t=i(93967),u=i.n(t),o=e=>{let{className:l,imgUrl:i="/images/empty.png"}=e;return(0,n.jsx)("div",{className:u()("m-auto",{className:l}),children:(0,n.jsx)(a.Z,{image:i,imageStyle:{margin:"0 auto",width:"100%",height:"100%"}})})},d=i(48689),s=i(24969),r=i(66184),c=i(22850),v=i(86738),f=i(14726),m=i(96486),x=i(67294),p=i(25934),h=i(83072),j=i(2856),g=e=>{var l;let{name:i,updateData:a,resourceTypeOptions:t,initValue:g}=e,y=(0,x.useRef)(g||[]),[Z,_]=(0,x.useState)({uid:"",icon:""}),[b,w]=(0,x.useState)((null==g?void 0:g.map((e,l)=>({...e,icon:e.type,initVal:e})))||[]),[N,k]=(0,x.useState)([...b]),[C,E]=(0,x.useState)((null==b?void 0:null===(l=b[0])||void 0===l?void 0:l.uid)||""),[S,I]=(0,x.useState)(""),T=(e,l)=>{var n,t;null==e||e.stopPropagation();let u=null===(n=y.current)||void 0===n?void 0:n.findIndex(e=>e.uid===C),o=null==b?void 0:b.filter(e=>e.uid!==l.uid);y.current=y.current.filter(e=>e.uid!==l.uid)||[],a([i,y.current]),w(o),u===(null==b?void 0:b.length)-1&&0!==u&&setTimeout(()=>{var e;E((null==o?void 0:null===(e=o[o.length-1])||void 0===e?void 0:e.uid)||"")},0),E((null==o?void 0:null===(t=o[u])||void 0===t?void 0:t.uid)||"")};return(0,x.useEffect)(()=>{k([...b])},[b]),(0,x.useEffect)(()=>{w(b.map(e=>(null==Z?void 0:Z.uid)===e.uid?{...e,icon:Z.icon}:e))},[Z]),(0,n.jsxs)("div",{className:"flex flex-1  h-64 px-3 py-4 border border-[#d6d8da] rounded-md",children:[(0,n.jsxs)("div",{className:"flex flex-col w-40 h-full",children:[(0,n.jsx)(r.default,{options:t,className:"w-full h-8",variant:"borderless",defaultValue:"all",onChange:e=>{var l,i;if("all"===e)k(b),E((null==b?void 0:null===(l=b[0])||void 0===l?void 0:l.uid)||"");else{let l=null==b?void 0:b.filter(l=>(null==l?void 0:l.icon)===e);E((null==l?void 0:null===(i=l[0])||void 0===i?void 0:i.uid)||""),k(l)}}}),(0,n.jsx)("div",{className:"flex flex-1 flex-col gap-1 overflow-y-auto",children:null==N?void 0:N.map(e=>(0,n.jsxs)("div",{className:u()("flex h-8 items-center px-3 pl-[0.6rem] rounded-md hover:bg-[#f5faff] hover:dark:bg-[#606264] cursor-pointer relative",{"bg-[#f5faff] dark:bg-[#606264]":e.uid===C}),onClick:()=>{E(e.uid||"")},onMouseEnter:()=>{I(e.uid||"")},onMouseLeave:()=>{I("")},children:[h.resourceTypeIcon[e.icon||""],(0,n.jsx)(c.Z.Text,{className:u()("flex flex-1 items-center text-sm p-0 m-0 mx-2 line-clamp-1",{"text-[#0c75fc]":e.uid===C}),editable:{autoSize:{maxRows:1},onChange:l=>{w(b.map(i=>i.uid===e.uid?{...i,name:l}:i)),y.current=y.current.map(i=>i.uid===e.uid?{...i,name:l}:i),a([i,y.current])}},ellipsis:{tooltip:!0},children:e.name}),(0,n.jsx)(v.Z,{title:"您确定要删除吗？",onConfirm:l=>{T(l,e)},onCancel:e=>null==e?void 0:e.stopPropagation(),children:(0,n.jsx)(d.Z,{className:"text-sm cursor-pointer  absolute right-2 ".concat(S===e.uid?"opacity-100":"opacity-0"),style:{top:"50%",transform:"translateY(-50%)"},onClick:e=>e.stopPropagation()})})]},e.uid))}),(0,n.jsx)(f.ZP,{className:"w-full h-8",type:"dashed",block:!0,icon:(0,n.jsx)(s.Z,{}),onClick:()=>{var e,l;let n=(0,p.Z)();y.current=(0,m.concat)(y.current,[{is_dynamic:!1,type:null===(e=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===e?void 0:e[0].value,value:"",uid:n,name:"资源".concat(y.current.length+1)}].filter(Boolean)),a([i,y.current]),w(e=>{var l,i,a;return[...e,{icon:(null===(l=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===l?void 0:null===(i=l[0])||void 0===i?void 0:i.value)||"",uid:n,initVal:{is_dynamic:!1,type:null===(a=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===a?void 0:a[0].value,value:"",uid:n,name:"资源".concat(e.length+1)},name:"资源".concat(e.length+1)}]}),E(n),_({uid:n,icon:null===(l=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===l?void 0:l[0].value})},children:"添加资源"})]}),(0,n.jsx)("div",{className:"flex flex-1 ml-6 ",children:N&&(null==N?void 0:N.length)>0?(0,n.jsx)("div",{className:"flex flex-1",children:null==N?void 0:N.map(e=>(0,n.jsx)(j.default,{classNames:e.uid===C?"block":"hidden",resourceTypeOptions:t,initValue:e.initVal,setCurIcon:_,updateData:e=>{var l;y.current=null===(l=y.current)||void 0===l?void 0:l.map(l=>(null==l?void 0:l.uid)===(null==e?void 0:e.uid)?{...l,...e}:l),a([i,y.current])},uid:e.uid||""},e.uid))}):(0,n.jsx)(o,{className:"w-40 h-40"})})]})}},83072:function(e,l,i){"use strict";i.r(l),i.d(l,{agentIcon:function(){return y},resourceTypeIcon:function(){return Z}});var n=i(85893),a=i(33984),t=i(89035),u=i(48869),o=i(61086),d=i(57132),s=i(97879),r=i(32319),c=i(79383),v=i(13520),f=i(14079),m=i(10524),x=i(56466),p=i(26911),h=i(97175),j=i(16801),g=i(13179);i(67294);let y={CodeEngineer:(0,n.jsx)(t.Z,{}),Reporter:(0,n.jsx)(u.Z,{}),DataScientist:(0,n.jsx)(o.Z,{}),Summarizer:(0,n.jsx)(d.Z,{}),ToolExpert:(0,n.jsx)(a.Z,{type:"icon-plugin",style:{fontSize:17.25,marginTop:2}}),Indicator:(0,n.jsx)(s.Z,{}),Dbass:(0,n.jsx)(r.Z,{})},Z={all:(0,n.jsx)(c.Z,{}),database:(0,n.jsx)(v.Z,{}),knowledge:(0,n.jsx)(f.Z,{}),internet:(0,n.jsx)(m.Z,{}),plugin:(0,n.jsx)(x.Z,{}),text_file:(0,n.jsx)(p.Z,{}),excel_file:(0,n.jsx)(h.Z,{}),image_file:(0,n.jsx)(j.Z,{}),awel_flow:(0,n.jsx)(g.Z,{})};l.default=()=>(0,n.jsx)(n.Fragment,{})}},function(e){e.O(0,[3662,7779,3791,7656,2913,6184,9859,2850,474,9774,2888,179],function(){return e(e.s=45128)}),_N_E=e.O()}]);