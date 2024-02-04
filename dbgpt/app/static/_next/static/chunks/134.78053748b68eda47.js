"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{12545:function(e,t,l){l.r(t),l.d(t,{default:function(){return ez}});var a=l(85893),s=l(67294),r=l(2093),n=l(43446),i=l(39332),o=l(99513),c=l(24019),d=l(50888),u=l(97937),m=l(63606),x=l(50228),h=l(87547),p=l(89035),g=l(92975),v=l(12767),f=l(94184),j=l.n(f),b=l(66309),y=l(81799),w=l(41468),N=l(29158),_=l(98165),Z=l(14079),k=l(38426),C=l(45396),S=l(44442),P=l(55241),E=l(36782),R=l(39156),D=l(71577),O=l(2453),I=l(57132),q=l(36096),M=l(79166),A=l(93179),L=l(20640),J=l.n(L);function F(e){let{code:t,light:l,dark:r,language:n,customStyle:i}=e,{mode:o}=(0,s.useContext)(w.p);return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(D.ZP,{className:"absolute right-3 top-2 text-gray-300 hover:!text-gray-200 bg-gray-700",type:"text",icon:(0,a.jsx)(I.Z,{}),onClick:()=>{let e=J()(t);O.ZP[e?"success":"error"](e?"Copy success":"Copy failed")}}),(0,a.jsx)(A.Z,{customStyle:i,language:n,style:"dark"===o?null!=r?r:q.Z:null!=l?l:M.Z,children:t})]})}var z=l(14313),T=l(47221),G=function(e){let{data:t}=e;return t&&t.length?(0,a.jsx)(T.Z,{bordered:!0,className:"my-3",expandIcon:e=>{let{isActive:t}=e;return(0,a.jsx)(z.Z,{rotate:t?90:0})},items:t.map((e,t)=>({key:t,label:(0,a.jsxs)("div",{className:"whitespace-normal",children:[(0,a.jsxs)("span",{children:[e.name," - ",e.agent]}),"complete"===e.status?(0,a.jsx)(m.Z,{className:"!text-green-500 ml-2"}):(0,a.jsx)(c.Z,{className:"!text-gray-500 ml-2"})]}),children:(0,a.jsx)(g.D,{components:en,children:e.markdown})}))}):null},U=l(32198),$=function(e){let{data:t}=e;return t&&t.length?(0,a.jsx)(a.Fragment,{children:t.map((e,t)=>(0,a.jsxs)("div",{className:"rounded my-4 md:my-6",children:[(0,a.jsxs)("div",{className:"flex items-center mb-3 text-sm",children:[e.model?(0,y.A)(e.model):(0,a.jsx)("div",{className:"rounded-full w-6 h-6 bg-gray-100"}),(0,a.jsxs)("div",{className:"ml-2 opacity-70",children:[e.sender,(0,a.jsx)(U.Z,{className:"mx-2 text-base"}),e.receiver]})]}),(0,a.jsx)("div",{className:"whitespace-normal text-sm",children:(0,a.jsx)(g.D,{components:en,children:e.markdown})})]},t))}):null},H=function(e){let{data:t}=e;return(0,a.jsxs)("div",{className:"rounded overflow-hidden",children:[(0,a.jsx)("div",{className:"p-3 text-white bg-red-500 whitespace-normal",children:t.display_type}),(0,a.jsxs)("div",{className:"p-3 bg-red-50",children:[(0,a.jsx)("div",{className:"mb-2 whitespace-normal",children:t.thought}),(0,a.jsx)(F,{code:(0,E.WU)(t.sql),language:"sql"})]})]})},V=l(8497),W=function(e){var t;let{data:l,type:s,sql:r}=e,n=(null==l?void 0:l[0])?null===(t=Object.keys(null==l?void 0:l[0]))||void 0===t?void 0:t.map(e=>({title:e,dataIndex:e,key:e})):[],i={key:"chart",label:"Chart",children:(0,a.jsx)(V._,{data:l,chartType:(0,V.a)(s)})},o={key:"sql",label:"SQL",children:(0,a.jsx)(F,{language:"sql",code:(0,E.WU)(r,{language:"mysql"})})},c={key:"data",label:"Data",children:(0,a.jsx)(C.Z,{dataSource:l,columns:n})},d="response_table"===s?[c,o]:[i,o,c];return(0,a.jsx)(S.Z,{defaultActiveKey:"response_table"===s?"data":"chart",items:d,size:"small"})},B=function(e){let{data:t}=e;return(0,a.jsx)(W,{data:t.data,type:t.type,sql:t.sql})};let Q=[[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]];var K=function(e){let{data:t}=e,l=(0,s.useMemo)(()=>{if(t.chart_count>1){let e=Q[t.chart_count-2],l=0;return e.map(e=>{let a=t.data.slice(l,l+e);return l=e,a})}return[t.data]},[t.data,t.chart_count]);return(0,a.jsx)("div",{className:"flex flex-col gap-3",children:l.map((e,t)=>(0,a.jsx)("div",{className:"flex gap-3",children:e.map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-1 flex-col justify-between p-4 rounded border border-gray-200 dark:border-gray-500 whitespace-normal",children:[(0,a.jsxs)("div",{children:[e.title&&(0,a.jsx)("div",{className:"mb-2 text-lg",children:e.title}),e.describe&&(0,a.jsx)("div",{className:"mb-4 text-sm text-gray-500",children:e.describe})]}),(0,a.jsx)(R._z,{data:e.data,chartType:(0,R.aG)(e.type)})]},"chart-".concat(t)))},"row-".concat(t)))})};let X={todo:{bgClass:"bg-gray-500",icon:(0,a.jsx)(c.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,a.jsx)(d.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,a.jsx)(u.Z,{className:"ml-2"})},complete:{bgClass:"bg-green-500",icon:(0,a.jsx)(m.Z,{className:"ml-2"})}};var Y=function(e){var t,l;let{data:s}=e,{bgClass:r,icon:n}=null!==(t=X[s.status])&&void 0!==t?t:{};return(0,a.jsxs)("div",{className:"bg-theme-light dark:bg-theme-dark-container rounded overflow-hidden my-2 flex flex-col lg:max-w-[80%]",children:[(0,a.jsxs)("div",{className:j()("flex px-4 md:px-6 py-2 items-center text-white text-sm",r),children:[s.name,n]}),s.result?(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm whitespace-normal",children:(0,a.jsx)(g.D,{components:en,rehypePlugins:[v.Z],children:null!==(l=s.result)&&void 0!==l?l:""})}):(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:s.err_msg})]})},ee=l(76199),et=l(67421),el=l(24136),ea=function(e){let{data:t}=e,{t:l}=(0,et.$G)(),[r,n]=(0,s.useState)(0);return(0,a.jsxs)("div",{className:"bg-[#EAEAEB] rounded overflow-hidden border border-theme-primary dark:bg-theme-dark text-sm",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex",children:t.code.map((e,t)=>(0,a.jsxs)("div",{className:j()("px-4 py-2 text-[#121417] dark:text-white cursor-pointer",{"bg-white dark:bg-theme-dark-container":t===r}),onClick:()=>{n(t)},children:["CODE ",t+1,": ",e[0]]},t))}),t.code.length&&(0,a.jsx)(F,{language:t.code[r][0],code:t.code[r][1],customStyle:{maxHeight:300,margin:0},light:el.Z,dark:M.Z})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-theme-dark-container px-4 py-2 text-[#121417] dark:text-white",children:[l("Terminal")," ",t.exit_success?(0,a.jsx)(m.Z,{className:"text-green-600"}):(0,a.jsx)(u.Z,{className:"text-red-600"})]})}),(0,a.jsx)("div",{className:"p-4 max-h-72 overflow-y-auto whitespace-normal bg-white dark:dark:bg-theme-dark",children:(0,a.jsx)(g.D,{components:en,remarkPlugins:[ee.Z],children:t.log})})]})]})};let es=["custom-view","chart-view","references","summary"],er={code(e){let{inline:t,node:l,className:s,children:r,style:n,...i}=e,o=String(r),{context:c,matchValues:d}=function(e){let t=es.reduce((t,l)=>{let a=RegExp("<".concat(l,"[^>]*/?>"),"gi");return e=e.replace(a,e=>(t.push(e),"")),t},[]);return{context:e,matchValues:t}}(o),u=(null==s?void 0:s.replace("language-",""))||"javascript";if("agent-plans"===u)try{let e=JSON.parse(o);return(0,a.jsx)(G,{data:e})}catch(e){return(0,a.jsx)(F,{language:u,code:o})}if("agent-messages"===u)try{let e=JSON.parse(o);return(0,a.jsx)($,{data:e})}catch(e){return(0,a.jsx)(F,{language:u,code:o})}if("vis-convert-error"===u)try{let e=JSON.parse(o);return(0,a.jsx)(H,{data:e})}catch(e){return(0,a.jsx)(F,{language:u,code:o})}if("vis-dashboard"===u)try{let e=JSON.parse(o);return(0,a.jsx)(K,{data:e})}catch(e){return(0,a.jsx)(F,{language:u,code:o})}if("vis-chart"===u)try{let e=JSON.parse(o);return(0,a.jsx)(B,{data:e})}catch(e){return(0,a.jsx)(F,{language:u,code:o})}if("vis-plugin"===u)try{let e=JSON.parse(o);return(0,a.jsx)(Y,{data:e})}catch(e){return(0,a.jsx)(F,{language:u,code:o})}if("vis-code"===u)try{let e=JSON.parse(o);return(0,a.jsx)(ea,{data:e})}catch(e){return(0,a.jsx)(F,{language:u,code:o})}return(0,a.jsxs)(a.Fragment,{children:[t?(0,a.jsx)("code",{...i,style:n,className:"p-1 mx-1 rounded bg-theme-light dark:bg-theme-dark text-sm",children:r}):(0,a.jsx)(F,{code:c,language:u}),(0,a.jsx)(g.D,{components:er,rehypePlugins:[v.Z],children:d.join("\n")})]})},ul(e){let{children:t}=e;return(0,a.jsx)("ul",{className:"py-1",children:t})},ol(e){let{children:t}=e;return(0,a.jsx)("ol",{className:"py-1",children:t})},li(e){let{children:t,ordered:l}=e;return(0,a.jsx)("li",{className:"text-sm leading-7 ml-5 pl-2 text-gray-600 dark:text-gray-300 ".concat(l?"list-decimal":"list-disc"),children:t})},table(e){let{children:t}=e;return(0,a.jsx)("table",{className:"my-2 rounded-tl-md rounded-tr-md max-w-full bg-white dark:bg-gray-800 text-sm rounded-lg overflow-hidden",children:t})},thead(e){let{children:t}=e;return(0,a.jsx)("thead",{className:"bg-[#fafafa] dark:bg-black font-semibold",children:t})},th(e){let{children:t}=e;return(0,a.jsx)("th",{className:"!text-left p-4",children:t})},td(e){let{children:t}=e;return(0,a.jsx)("td",{className:"p-4 border-t border-[#f0f0f0] dark:border-gray-700",children:t})},h1(e){let{children:t}=e;return(0,a.jsx)("h3",{className:"text-2xl font-bold my-4 border-b border-slate-300 pb-4",children:t})},h2(e){let{children:t}=e;return(0,a.jsx)("h3",{className:"text-xl font-bold my-3",children:t})},h3(e){let{children:t}=e;return(0,a.jsx)("h3",{className:"text-lg font-semibold my-2",children:t})},h4(e){let{children:t}=e;return(0,a.jsx)("h3",{className:"text-base font-semibold my-1",children:t})},a(e){let{children:t,href:l}=e;return(0,a.jsxs)("div",{className:"inline-block text-blue-600 dark:text-blue-400",children:[(0,a.jsx)(N.Z,{className:"mr-1"}),(0,a.jsx)("a",{href:l,target:"_blank",children:t})]})},img(e){let{src:t,alt:l}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(k.Z,{className:"min-h-[1rem] max-w-full max-h-full border rounded",src:t,alt:l,placeholder:(0,a.jsx)(b.Z,{icon:(0,a.jsx)(_.Z,{spin:!0}),color:"processing",children:"Image Loading..."}),fallback:"/images/fallback.png"})})},blockquote(e){let{children:t}=e;return(0,a.jsx)("blockquote",{className:"py-4 px-6 border-l-4 border-blue-600 rounded bg-white my-2 text-gray-500 dark:bg-slate-800 dark:text-gray-200 dark:border-white shadow-sm",children:t})},"chart-view":function(e){var t,l,s;let r,{content:n,children:i}=e;try{r=JSON.parse(n)}catch(e){console.log(e,n),r={type:"response_table",sql:"",data:[]}}let o=(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t[0])?null===(l=Object.keys(null==r?void 0:null===(s=r.data)||void 0===s?void 0:s[0]))||void 0===l?void 0:l.map(e=>({title:e,dataIndex:e,key:e})):[],c={key:"chart",label:"Chart",children:(0,a.jsx)(R._z,{data:null==r?void 0:r.data,chartType:(0,R.aG)(null==r?void 0:r.type)})},d={key:"sql",label:"SQL",children:(0,a.jsx)(F,{code:(0,E.WU)(null==r?void 0:r.sql,{language:"mysql"}),language:"sql"})},u={key:"data",label:"Data",children:(0,a.jsx)(C.Z,{dataSource:null==r?void 0:r.data,columns:o})},m=(null==r?void 0:r.type)==="response_table"?[u,d]:[c,d,u];return(0,a.jsxs)("div",{children:[(0,a.jsx)(S.Z,{defaultActiveKey:(null==r?void 0:r.type)==="response_table"?"data":"chart",items:m,size:"small"}),i]})},references:function(e){let t,{title:l,references:s,children:r}=e;if(r)try{l=(t=JSON.parse(r)).title,s=t.references}catch(e){return console.log("parse references failed",e),(0,a.jsx)("p",{className:"text-sm text-red-500",children:"Render Reference Error!"})}else try{s=JSON.parse(s)}catch(e){return console.log("parse references failed",e),(0,a.jsx)("p",{className:"text-sm text-red-500",children:"Render Reference Error!"})}return!s||(null==s?void 0:s.length)<1?null:(0,a.jsxs)("div",{className:"border-t-[1px] border-gray-300 mt-3 py-2",children:[(0,a.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-2",children:[(0,a.jsx)(N.Z,{className:"mr-2"}),(0,a.jsx)("span",{className:"font-semibold",children:l})]}),s.map((e,t)=>{var l;return(0,a.jsxs)("div",{className:"text-sm font-normal block ml-2 h-6 leading-6 overflow-hidden",children:[(0,a.jsxs)("span",{className:"inline-block w-6",children:["[",t+1,"]"]}),(0,a.jsx)("span",{className:"mr-2 lg:mr-4 text-blue-400",children:e.name}),null==e?void 0:null===(l=e.chunks)||void 0===l?void 0:l.map((t,l)=>(0,a.jsxs)("span",{children:["object"==typeof t?(0,a.jsx)(P.Z,{content:(0,a.jsxs)("div",{className:"max-w-4xl",children:[(0,a.jsx)("p",{className:"mt-2 font-bold mr-2 border-t border-gray-500 pt-2",children:"Content:"}),(0,a.jsx)("p",{children:(null==t?void 0:t.content)||"No Content"}),(0,a.jsx)("p",{className:"mt-2 font-bold mr-2 border-t border-gray-500 pt-2",children:"MetaData:"}),(0,a.jsx)("p",{children:(null==t?void 0:t.meta_info)||"No MetaData"}),(0,a.jsx)("p",{className:"mt-2 font-bold mr-2 border-t border-gray-500 pt-2",children:"Score:"}),(0,a.jsx)("p",{children:(null==t?void 0:t.recall_score)||""})]}),title:"Chunk Information",children:(0,a.jsx)("span",{className:"cursor-pointer text-blue-500 ml-2",children:null==t?void 0:t.id},"chunk_content_".concat(null==t?void 0:t.id))}):(0,a.jsx)("span",{className:"cursor-pointer text-blue-500 ml-2",children:t},"chunk_id_".concat(t)),l<(null==e?void 0:e.chunks.length)-1&&(0,a.jsx)("span",{children:","},"chunk_comma_".concat(l))]},"chunk_".concat(l)))]},"file_".concat(t))})]})},summary:function(e){let{children:t}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"mb-2",children:[(0,a.jsx)(Z.Z,{className:"mr-2"}),(0,a.jsx)("span",{className:"font-semibold",children:"Document Summary"})]}),(0,a.jsx)("div",{children:t})]})}};var en=er;let ei={todo:{bgClass:"bg-gray-500",icon:(0,a.jsx)(c.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,a.jsx)(d.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,a.jsx)(u.Z,{className:"ml-2"})},completed:{bgClass:"bg-green-500",icon:(0,a.jsx)(m.Z,{className:"ml-2"})}};function eo(e){return e.replaceAll("\\n","\n").replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>")}var ec=(0,s.memo)(function(e){let{children:t,content:l,isChartChat:r,onLinkClick:n}=e,{scene:i}=(0,s.useContext)(w.p),{context:o,model_name:c,role:d}=l,u="view"===d,{relations:m,value:f,cachePluginContext:N}=(0,s.useMemo)(()=>{if("string"!=typeof o)return{relations:[],value:"",cachePluginContext:[]};let[e,t]=o.split("	relations:"),l=t?t.split(","):[],a=[],s=0,r=e.replace(/<dbgpt-view[^>]*>[^<]*<\/dbgpt-view>/gi,e=>{try{var t;let l=e.replaceAll("\n","\\n").replace(/<[^>]*>|<\/[^>]*>/gm,""),r=JSON.parse(l),n="<custom-view>".concat(s,"</custom-view>");return a.push({...r,result:eo(null!==(t=r.result)&&void 0!==t?t:"")}),s++,n}catch(t){return console.log(t.message,t),e}});return{relations:l,cachePluginContext:a,value:r}},[o]),_=(0,s.useMemo)(()=>({"custom-view"(e){var t;let{children:l}=e,s=+l.toString();if(!N[s])return l;let{name:r,status:n,err_msg:i,result:o}=N[s],{bgClass:c,icon:d}=null!==(t=ei[n])&&void 0!==t?t:{};return(0,a.jsxs)("div",{className:"bg-white dark:bg-[#212121] rounded-lg overflow-hidden my-2 flex flex-col lg:max-w-[80%]",children:[(0,a.jsxs)("div",{className:j()("flex px-4 md:px-6 py-2 items-center text-white text-sm",c),children:[r,d]}),o?(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:(0,a.jsx)(g.D,{components:en,rehypePlugins:[v.Z],children:null!=o?o:""})}):(0,a.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:i})]})}}),[o,N]);return u||o?(0,a.jsxs)("div",{className:j()("relative flex flex-wrap w-full p-2 md:p-4 rounded-xl break-words",{"bg-white dark:bg-[#232734]":u,"lg:w-full xl:w-full pl-0":["chat_with_db_execute","chat_dashboard"].includes(i)}),children:[(0,a.jsx)("div",{className:"mr-2 flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full text-lg sm:mr-4",children:u?(0,y.A)(c)||(0,a.jsx)(x.Z,{}):(0,a.jsx)(h.Z,{})}),(0,a.jsxs)("div",{className:"flex-1 overflow-hidden items-center text-md leading-8 pb-2",children:[!u&&"string"==typeof o&&o,u&&r&&"object"==typeof o&&(0,a.jsxs)("div",{children:["[".concat(o.template_name,"]: "),(0,a.jsxs)("span",{className:"text-theme-primary cursor-pointer",onClick:n,children:[(0,a.jsx)(p.Z,{className:"mr-1"}),o.template_introduce||"More Details"]})]}),u&&"string"==typeof o&&(0,a.jsx)(g.D,{components:{...en,..._},rehypePlugins:[v.Z],children:eo(f)}),!!(null==m?void 0:m.length)&&(0,a.jsx)("div",{className:"flex flex-wrap mt-2",children:null==m?void 0:m.map((e,t)=>(0,a.jsx)(b.Z,{color:"#108ee9",children:e},e+t))})]}),t]}):(0,a.jsx)("div",{className:"h-12"})}),ed=l(59301),eu=l(41132),em=l(74312),ex=l(3414),eh=l(72868),ep=l(59562),eg=l(14553),ev=l(25359),ef=l(7203),ej=l(48665),eb=l(26047),ey=l(99056),ew=l(57814),eN=l(63955),e_=l(33028),eZ=l(40911),ek=l(66478),eC=l(83062),eS=l(43893),eP=e=>{var t;let{conv_index:l,question:r,knowledge_space:n,select_param:i}=e,{t:o}=(0,et.$G)(),{chatId:c}=(0,s.useContext)(w.p),[d,u]=(0,s.useState)(""),[m,x]=(0,s.useState)(4),[h,p]=(0,s.useState)(""),g=(0,s.useRef)(null),[v,f]=O.ZP.useMessage(),j=(0,s.useCallback)((e,t)=>{t?(0,eS.Vx)((0,eS.Eb)(c,l)).then(e=>{var t,l,a,s;let r=null!==(t=e[1])&&void 0!==t?t:{};u(null!==(l=r.ques_type)&&void 0!==l?l:""),x(parseInt(null!==(a=r.score)&&void 0!==a?a:"4")),p(null!==(s=r.messages)&&void 0!==s?s:"")}).catch(e=>{console.log(e)}):(u(""),x(4),p(""))},[c,l]),b=(0,em.Z)(ex.Z)(e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#FBFCFD":"#0E0E10",...t.typography["body-sm"],padding:t.spacing(1),display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,width:"100%",height:"100%"}});return(0,a.jsxs)(eh.L,{onOpenChange:j,children:[f,(0,a.jsx)(eC.Z,{title:o("Rating"),children:(0,a.jsx)(ep.Z,{slots:{root:eg.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,a.jsx)(ed.Z,{})})}),(0,a.jsxs)(ev.Z,{children:[(0,a.jsx)(ef.Z,{disabled:!0,sx:{minHeight:0}}),(0,a.jsx)(ej.Z,{sx:{width:"100%",maxWidth:350,display:"grid",gap:3,padding:1},children:(0,a.jsx)("form",{onSubmit:e=>{e.preventDefault();let t={conv_uid:c,conv_index:l,question:r,knowledge_space:n,score:m,ques_type:d,messages:h};console.log(t),(0,eS.Vx)((0,eS.VC)({data:t})).then(e=>{v.open({type:"success",content:"save success"})}).catch(e=>{v.open({type:"error",content:"save error"})})},children:(0,a.jsxs)(eb.Z,{container:!0,spacing:.5,columns:13,sx:{flexGrow:1},children:[(0,a.jsx)(eb.Z,{xs:3,children:(0,a.jsx)(b,{children:o("Q_A_Category")})}),(0,a.jsx)(eb.Z,{xs:10,children:(0,a.jsx)(ey.Z,{action:g,value:d,placeholder:"Choose one…",onChange:(e,t)=>u(null!=t?t:""),...d&&{endDecorator:(0,a.jsx)(eg.ZP,{size:"sm",variant:"plain",color:"neutral",onMouseDown:e=>{e.stopPropagation()},onClick:()=>{var e;u(""),null===(e=g.current)||void 0===e||e.focusVisible()},children:(0,a.jsx)(eu.Z,{})}),indicator:null},sx:{width:"100%"},children:i&&(null===(t=Object.keys(i))||void 0===t?void 0:t.map(e=>(0,a.jsx)(ew.Z,{value:e,children:i[e]},e)))})}),(0,a.jsx)(eb.Z,{xs:3,children:(0,a.jsx)(b,{children:(0,a.jsx)(eC.Z,{title:(0,a.jsx)(ej.Z,{children:(0,a.jsx)("div",{children:o("feed_back_desc")})}),variant:"solid",placement:"left",children:o("Q_A_Rating")})})}),(0,a.jsx)(eb.Z,{xs:10,sx:{pl:0,ml:0},children:(0,a.jsx)(eN.Z,{"aria-label":"Custom",step:1,min:0,max:5,valueLabelFormat:function(e){return({0:o("Lowest"),1:o("Missed"),2:o("Lost"),3:o("Incorrect"),4:o("Verbose"),5:o("Best")})[e]},valueLabelDisplay:"on",marks:[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"}],sx:{width:"90%",pt:3,m:2,ml:1},onChange:e=>{var t;return x(null===(t=e.target)||void 0===t?void 0:t.value)},value:m})}),(0,a.jsx)(eb.Z,{xs:13,children:(0,a.jsx)(e_.Z,{placeholder:o("Please_input_the_text"),value:h,onChange:e=>p(e.target.value),minRows:2,maxRows:4,endDecorator:(0,a.jsx)(eZ.ZP,{level:"body-xs",sx:{ml:"auto"},children:o("input_count")+h.length+o("input_unit")}),sx:{width:"100%",fontSize:14}})}),(0,a.jsx)(eb.Z,{xs:13,children:(0,a.jsx)(ek.Z,{type:"submit",variant:"outlined",sx:{width:"100%",height:"100%"},children:o("submit")})})]})})})]})]})},eE=l(32983),eR=l(36147),eD=l(96486),eO=l(19409),eI=l(98399),eq=l(87740),eM=l(80573),eA=(0,s.memo)(function(e){let{content:t}=e,{scene:l}=(0,s.useContext)(w.p),r="view"===t.role;return(0,a.jsx)("div",{className:j()("relative w-full p-2 md:p-4 rounded-xl break-words",{"bg-white dark:bg-[#232734]":r,"lg:w-full xl:w-full pl-0":["chat_with_db_execute","chat_dashboard"].includes(l)}),children:r?(0,a.jsx)(g.D,{components:en,rehypePlugins:[v.Z],children:t.context.replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>")}):(0,a.jsx)("div",{className:"",children:t.context})})}),eL=e=>{var t;let{messages:l,onSubmit:n}=e,{dbParam:c,currentDialogue:d,scene:u,model:m,refreshDialogList:x,chatId:h,agent:p,docId:g}=(0,s.useContext)(w.p),{t:v}=(0,et.$G)(),f=(0,i.useSearchParams)(),b=null!==(t=f&&f.get("spaceNameOriginal"))&&void 0!==t?t:"",[N,_]=(0,s.useState)(!1),[Z,k]=(0,s.useState)(!1),[C,S]=(0,s.useState)(l),[P,E]=(0,s.useState)(""),[R,D]=(0,s.useState)(),q=(0,s.useRef)(null),M=(0,s.useMemo)(()=>"chat_dashboard"===u,[u]),A=(0,eM.Z)(),L=(0,s.useMemo)(()=>{switch(u){case"chat_agent":return p;case"chat_excel":return null==d?void 0:d.select_param;default:return b||c}},[u,p,d,c,b]),F=async e=>{if(!N&&e.trim()){if("chat_agent"===u&&!p){O.ZP.warning(v("choice_agent_tip"));return}try{_(!0),await n(e,{select_param:null!=L?L:""})}finally{_(!1)}}},z=e=>{try{return JSON.parse(e)}catch(t){return e}},[T,G]=O.ZP.useMessage(),U=async e=>{let t=null==e?void 0:e.replace(/\trelations:.*/g,""),l=J()(t);l?t?T.open({type:"success",content:v("Copy_success")}):T.open({type:"warning",content:v("Copy_nothing")}):T.open({type:"error",content:v("Copry_error")})},$=async()=>{!N&&g&&(_(!0),await A(g),_(!1))};return(0,r.Z)(async()=>{let e=(0,eI.a_)();e&&e.id===h&&(await F(e.message),x(),localStorage.removeItem(eI.rU))},[h]),(0,s.useEffect)(()=>{let e=l;M&&(e=(0,eD.cloneDeep)(l).map(e=>((null==e?void 0:e.role)==="view"&&"string"==typeof(null==e?void 0:e.context)&&(e.context=z(null==e?void 0:e.context)),e))),S(e.filter(e=>["view","human"].includes(e.role)))},[M,l]),(0,s.useEffect)(()=>{(0,eS.Vx)((0,eS.Lu)()).then(e=>{var t;D(null!==(t=e[1])&&void 0!==t?t:{})}).catch(e=>{console.log(e)})},[]),(0,s.useEffect)(()=>{setTimeout(()=>{var e;null===(e=q.current)||void 0===e||e.scrollTo(0,q.current.scrollHeight)},50)},[l]),(0,a.jsxs)(a.Fragment,{children:[G,(0,a.jsx)("div",{ref:q,className:"flex flex-1 overflow-y-auto pb-8 w-full flex-col",children:(0,a.jsx)("div",{className:"flex items-center flex-1 flex-col text-sm leading-6 text-slate-900 dark:text-slate-300 sm:text-base sm:leading-7",children:C.length?C.map((e,t)=>{var l;return"chat_agent"===u?(0,a.jsx)(eA,{content:e},t):(0,a.jsx)(ec,{content:e,isChartChat:M,onLinkClick:()=>{k(!0),E(JSON.stringify(null==e?void 0:e.context,null,2))},children:"view"===e.role&&(0,a.jsxs)("div",{className:"flex w-full border-t border-gray-200 dark:border-theme-dark",children:["chat_knowledge"===u&&e.retry?(0,a.jsxs)(ek.Z,{onClick:$,slots:{root:eg.ZP},slotProps:{root:{variant:"plain",color:"primary"}},children:[(0,a.jsx)(eq.Z,{}),"\xa0",(0,a.jsx)("span",{className:"text-sm",children:v("Retry")})]}):null,(0,a.jsxs)("div",{className:"flex w-full flex-row-reverse",children:[(0,a.jsx)(eP,{select_param:R,conv_index:Math.ceil((t+1)/2),question:null===(l=null==C?void 0:C.filter(t=>(null==t?void 0:t.role)==="human"&&(null==t?void 0:t.order)===e.order)[0])||void 0===l?void 0:l.context,knowledge_space:b||c||""}),(0,a.jsx)(eC.Z,{title:v("Copy"),children:(0,a.jsx)(ek.Z,{onClick:()=>U(null==e?void 0:e.context),slots:{root:eg.ZP},slotProps:{root:{variant:"plain",color:"primary"}},sx:{borderRadius:40},children:(0,a.jsx)(I.Z,{})})})]})]})},t)}):(0,a.jsx)(eE.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"flex items-center justify-center flex-col h-full w-full",description:"Start a conversation"})})}),(0,a.jsx)("div",{className:j()("relative after:absolute after:-top-8 after:h-8 after:w-full after:bg-gradient-to-t after:from-theme-light after:to-transparent dark:after:from-theme-dark",{"cursor-not-allowed":"chat_excel"===u&&!(null==d?void 0:d.select_param)}),children:(0,a.jsxs)("div",{className:"flex flex-wrap w-full py-2 sm:pt-6 sm:pb-10 items-center",children:[m&&(0,a.jsx)("div",{className:"mr-2 flex",children:(0,y.A)(m)}),(0,a.jsx)(eO.Z,{loading:N,onSubmit:F,handleFinish:_})]})}),(0,a.jsx)(eR.default,{title:"JSON Editor",open:Z,width:"60%",cancelButtonProps:{hidden:!0},onOk:()=>{k(!1)},onCancel:()=>{k(!1)},children:(0,a.jsx)(o.Z,{className:"w-full h-[500px]",language:"json",value:P})})]})},eJ=l(34625),eF=l(45247),ez=()=>{var e;let t=(0,i.useSearchParams)(),{scene:l,chatId:o,model:c,agent:d,setModel:u,history:m,setHistory:x}=(0,s.useContext)(w.p),h=(0,n.Z)({}),p=null!==(e=t&&t.get("initMessage"))&&void 0!==e?e:"",[g,v]=(0,s.useState)(!1),[f,b]=(0,s.useState)(),y=async()=>{v(!0);let[,e]=await (0,eS.Vx)((0,eS.$i)(o));x(null!=e?e:[]),v(!1)},N=e=>{var t;let l=null===(t=e[e.length-1])||void 0===t?void 0:t.context;if(l)try{let e=JSON.parse(l);b((null==e?void 0:e.template_name)==="report"?null==e?void 0:e.charts:void 0)}catch(e){b(void 0)}};(0,r.Z)(async()=>{let e=(0,eI.a_)();e&&e.id===o||await y()},[p,o]),(0,s.useEffect)(()=>{var e,t;if(!m.length)return;let l=null===(e=null===(t=m.filter(e=>"view"===e.role))||void 0===t?void 0:t.slice(-1))||void 0===e?void 0:e[0];(null==l?void 0:l.model_name)&&u(l.model_name),N(m)},[m.length]),(0,s.useEffect)(()=>()=>{x([])},[]);let _=(0,s.useCallback)((e,t)=>new Promise(a=>{let s=[...m,{role:"human",context:e,model_name:c,order:0,time_stamp:0},{role:"view",context:"",model_name:c,order:0,time_stamp:0}],r=s.length-1;x([...s]),h({data:{...t,chat_mode:l||"chat_normal",model_name:c,user_input:e},chatId:o,onMessage:e=>{s[r].context=e,x([...s])},onDone:()=>{N(s),a()},onClose:()=>{N(s),a()},onError:e=>{s[r].context=e,x([...s]),a()}})}),[m,h,o,c,d,l]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(eF.Z,{visible:g}),(0,a.jsx)(eJ.Z,{refreshHistory:y,modelChange:e=>{u(e)}}),(0,a.jsxs)("div",{className:"px-4 flex flex-1 flex-wrap overflow-hidden relative",children:[!!(null==f?void 0:f.length)&&(0,a.jsx)("div",{className:"w-full pb-4 xl:w-3/4 h-3/5 xl:pr-4 xl:h-full overflow-y-auto",children:(0,a.jsx)(R.ZP,{chartsData:f})}),!(null==f?void 0:f.length)&&"chat_dashboard"===l&&(0,a.jsx)(eE.Z,{image:"/empty.png",imageStyle:{width:320,height:320,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:"w-full xl:w-3/4 h-3/5 xl:h-full pt-0 md:pt-10"}),(0,a.jsx)("div",{className:j()("flex flex-1 flex-col overflow-hidden",{"px-0 xl:pl-4 h-2/5 w-full xl:w-auto xl:h-full border-t xl:border-t-0 xl:border-l dark:border-gray-800":"chat_dashboard"===l,"h-full lg:px-8":"chat_dashboard"!==l}),children:(0,a.jsx)(eL,{messages:m,onSubmit:_})})]})]})}},19409:function(e,t,l){l.d(t,{Z:function(){return D}});var a=l(85893),s=l(27496),r=l(79531),n=l(71577),i=l(67294),o=l(2487),c=l(83062),d=l(2453),u=l(46735),m=l(55241),x=l(39479),h=l(51009),p=l(58299),g=l(577),v=l(30119),f=l(67421);let j=e=>{let{data:t,loading:l,submit:s,close:r}=e,{t:n}=(0,f.$G)(),i=e=>()=>{s(e),r()};return(0,a.jsx)("div",{style:{maxHeight:400,overflow:"auto"},children:(0,a.jsx)(o.Z,{dataSource:null==t?void 0:t.data,loading:l,rowKey:e=>e.prompt_name,renderItem:e=>(0,a.jsx)(o.Z.Item,{onClick:i(e.content),children:(0,a.jsx)(c.Z,{title:e.content,children:(0,a.jsx)(o.Z.Item.Meta,{style:{cursor:"copy"},title:e.prompt_name,description:n("Prompt_Info_Scene")+"：".concat(e.chat_scene,"，")+n("Prompt_Info_Sub_Scene")+"：".concat(e.sub_chat_scene)})})},e.prompt_name)})})};var b=e=>{let{submit:t}=e,{t:l}=(0,f.$G)(),[s,r]=(0,i.useState)(!1),[n,o]=(0,i.useState)("common"),{data:b,loading:y}=(0,g.Z)(()=>(0,v.PR)("/prompt/list",{prompt_type:n}),{refreshDeps:[n],onError:e=>{d.ZP.error(null==e?void 0:e.message)}});return(0,a.jsx)(u.ZP,{theme:{components:{Popover:{minWidth:250}}},children:(0,a.jsx)(m.Z,{title:(0,a.jsx)(x.Z.Item,{label:"Prompt "+l("Type"),children:(0,a.jsx)(h.default,{style:{width:150},value:n,onChange:e=>{o(e)},options:[{label:l("Public")+" Prompts",value:"common"},{label:l("Private")+" Prompts",value:"private"}]})}),content:(0,a.jsx)(j,{data:b,loading:y,submit:t,close:()=>{r(!1)}}),placement:"topRight",trigger:"click",open:s,onOpenChange:e=>{r(e)},children:(0,a.jsx)(c.Z,{title:l("Click_Select")+" Prompt",children:(0,a.jsx)(p.Z,{className:"bottom-[30%]"})})})})},y=l(41468),w=l(43893),N=l(80573),_=l(5392),Z=l(84553);function k(e){let{dbParam:t,setDocId:l}=(0,i.useContext)(y.p),{onUploadFinish:s,handleFinish:r}=e,o=(0,N.Z)(),[c,d]=(0,i.useState)(!1),u=async e=>{d(!0);let a=new FormData;a.append("doc_name",e.file.name),a.append("doc_file",e.file),a.append("doc_type","DOCUMENT");let n=await (0,w.Vx)((0,w.iG)(t||"default",a));if(!n[1]){d(!1);return}l(n[1]),s(),d(!1),null==r||r(!0),await o(n[1]),null==r||r(!1)};return(0,a.jsx)(Z.default,{customRequest:u,showUploadList:!1,maxCount:1,multiple:!1,className:"absolute z-10 top-2 left-2",accept:".pdf,.ppt,.pptx,.xls,.xlsx,.doc,.docx,.txt,.md",children:(0,a.jsx)(n.ZP,{loading:c,size:"small",shape:"circle",icon:(0,a.jsx)(_.Z,{})})})}var C=l(11163),S=l(82353),P=l(1051);function E(e){let{document:t}=e;switch(t.status){case"RUNNING":return(0,a.jsx)(S.Rp,{});case"FINISHED":default:return(0,a.jsx)(S.s2,{});case"FAILED":return(0,a.jsx)(P.Z,{})}}function R(e){let{documents:t,dbParam:l}=e,s=(0,C.useRouter)(),r=e=>{s.push("/knowledge/chunk/?spaceName=".concat(l,"&id=").concat(e))};return(null==t?void 0:t.length)?(0,a.jsx)("div",{className:"absolute flex overflow-scroll h-12 top-[-35px] w-full z-10",children:t.map(e=>{let t;switch(e.status){case"RUNNING":t="#2db7f5";break;case"FINISHED":default:t="#87d068";break;case"FAILED":t="#f50"}return(0,a.jsx)(c.Z,{title:e.result,children:(0,a.jsxs)(n.ZP,{style:{color:t},onClick:()=>{r(e.id)},className:"shrink flex items-center mr-3",children:[(0,a.jsx)(E,{document:e}),e.doc_name]})},e.id)})}):null}var D=function(e){let{children:t,loading:l,onSubmit:o,handleFinish:c,...d}=e,{dbParam:u,scene:m}=(0,i.useContext)(y.p),[x,h]=(0,i.useState)(""),p=(0,i.useMemo)(()=>"chat_knowledge"===m,[m]),[g,v]=(0,i.useState)([]),f=(0,i.useRef)(0);async function j(){if(!u)return null;let[e,t]=await (0,w.Vx)((0,w._Q)(u,{page:1,page_size:f.current}));v(null==t?void 0:t.data)}(0,i.useEffect)(()=>{p&&j()},[u]);let N=async()=>{f.current+=1,await j()};return(0,a.jsxs)("div",{className:"flex-1 relative",children:[(0,a.jsx)(R,{documents:g,dbParam:u}),p&&(0,a.jsx)(k,{handleFinish:c,onUploadFinish:N,className:"absolute z-10 top-2 left-2"}),(0,a.jsx)(r.default.TextArea,{className:"flex-1 ".concat(p?"pl-10":""," pr-10"),size:"large",value:x,autoSize:{minRows:1,maxRows:4},...d,onPressEnter:e=>{if(x.trim()&&13===e.keyCode){if(e.shiftKey){h(e=>e+"\n");return}o(x),setTimeout(()=>{h("")},0)}},onChange:e=>{if("number"==typeof d.maxLength){h(e.target.value.substring(0,d.maxLength));return}h(e.target.value)}}),(0,a.jsx)(n.ZP,{className:"ml-2 flex items-center justify-center absolute right-0 bottom-0",size:"large",type:"text",loading:l,icon:(0,a.jsx)(s.Z,{}),onClick:()=>{o(x)}}),(0,a.jsx)(b,{submit:e=>{h(x+e)}}),t]})}},45247:function(e,t,l){var a=l(85893),s=l(50888);t.Z=function(e){let{visible:t}=e;return t?(0,a.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,a.jsx)(s.Z,{})}):null}},43446:function(e,t,l){var a=l(1375),s=l(2453),r=l(67294),n=l(58989),i=l(83454);t.Z=e=>{let{queryAgentURL:t="/api/v1/chat/completions"}=e,l=(0,r.useMemo)(()=>new AbortController,[]),o=(0,r.useCallback)(async e=>{let{data:r,chatId:o,onMessage:c,onClose:d,onDone:u,onError:m}=e;if(!(null==r?void 0:r.user_input)&&!(null==r?void 0:r.doc_id)){s.ZP.warning(n.Z.t("no_context_tip"));return}let x={...r,conv_uid:o};if(!x.conv_uid){s.ZP.error("conv_uid 不存在，请刷新后重试");return}try{var h;await (0,a.L)("".concat(null!==(h=i.env.API_BASE_URL)&&void 0!==h?h:"").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x),signal:l.signal,openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===a.a)return},onclose(){l.abort(),null==d||d()},onerror(e){throw Error(e)},onmessage:e=>{let t=e.data;try{t=JSON.parse(t).vis}catch(e){t.replaceAll("\\n","\n")}"[DONE]"===t?null==u||u():(null==t?void 0:t.startsWith("[ERROR]"))?null==m||m(null==t?void 0:t.replace("[ERROR]","")):null==c||c(t)}})}catch(e){l.abort(),null==m||m("Sorry, We meet some error, please try agin later.",e)}},[t]);return(0,r.useEffect)(()=>()=>{l.abort()},[]),o}},80573:function(e,t,l){var a=l(41468),s=l(67294),r=l(43446),n=l(43893);t.Z=()=>{let{history:e,setHistory:t,chatId:l,model:i,docId:o}=(0,s.useContext)(a.p),c=(0,r.Z)({queryAgentURL:"/knowledge/document/summary"}),d=(0,s.useCallback)(async e=>{let[,a]=await (0,n.Vx)((0,n.$i)(l)),s=[...a,{role:"human",context:"",model_name:i,order:0,time_stamp:0},{role:"view",context:"",model_name:i,order:0,time_stamp:0,retry:!0}],r=s.length-1;t([...s]),await c({data:{doc_id:e||o,model_name:i},chatId:l,onMessage:e=>{s[r].context=e,t([...s])}})},[e,i,o,l]);return d}}}]);