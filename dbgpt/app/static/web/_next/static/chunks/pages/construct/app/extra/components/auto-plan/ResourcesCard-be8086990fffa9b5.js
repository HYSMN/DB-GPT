(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5550],{45128:function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/app/extra/components/auto-plan/ResourcesCard",function(){return i(49264)}])},70065:function(e,l,i){"use strict";var n=i(91321);let a=(0,n.Z)({scriptUrl:"//at.alicdn.com/t/a/font_4440880_ljyggdw605.js"});l.Z=a},2856:function(e,l,i){"use strict";i.r(l);var n=i(85893),a=i(76212),t=i(65654),u=i(99859),o=i(34041),s=i(72269),r=i(93967),d=i.n(r),c=i(67294),v=i(67421);l.default=e=>{let{uid:l,initValue:i,updateData:r,classNames:f,resourceTypeOptions:m,setCurIcon:x}=e,[p]=u.default.useForm(),h=u.default.useWatch("type",p),j=u.default.useWatch("is_dynamic",p),g=u.default.useWatch("value",p),{t:_}=(0,v.$G)(),y=(0,c.useMemo)(()=>(null==m?void 0:m.filter(e=>"all"!==e.value))||[],[m]),{run:Z,data:w,loading:b}=(0,t.Z)(async e=>{var l;let[,n]=await (0,a.Vx)((0,a.RX)({type:e}));return p.setFieldsValue({value:(null==i?void 0:i.value)||(null==n?void 0:null===(l=n[0])||void 0===l?void 0:l.key)}),n||[]},{manual:!0});(0,c.useEffect)(()=>{h&&Z(h)},[Z,h]);let N=(0,c.useMemo)(()=>(null==w?void 0:w.map(e=>({...e,label:e.label,value:e.key+""})))||[],[w]);return(0,c.useEffect)(()=>{let e=p.getFieldsValue(),i=(null==e?void 0:e.is_dynamic)?"":null==e?void 0:e.value;r({uid:l,...e,value:i})},[l,j,p,r,g,h]),(0,n.jsx)("div",{className:d()("flex flex-1",f),children:(0,n.jsxs)(u.default,{style:{width:"100%"},form:p,labelCol:{span:4},initialValues:{...i},children:[(0,n.jsx)(u.default.Item,{label:_("resource_type"),name:"type",children:(0,n.jsx)(o.default,{className:"w-2/5",options:y,onChange:e=>{x({uid:l,icon:e})}})}),(0,n.jsx)(u.default.Item,{label:_("resource_dynamic"),name:"is_dynamic",children:(0,n.jsx)(s.Z,{style:{background:j?"#1677ff":"#ccc"}})}),!j&&(0,n.jsxs)(n.Fragment,{children:[" ","image_file"===h||"internet"===h||["text_file","excel_file"].includes(h)?null:(0,n.jsx)(u.default.Item,{label:_("resource_value"),name:"value",required:!0,children:(0,n.jsx)(o.default,{placeholder:_("please_select_param"),options:N,loading:b,className:"w-3/5",allowClear:!0})})]})]})})}},49264:function(e,l,i){"use strict";i.r(l),i.d(l,{default:function(){return _}});var n=i(85893),a=i(32983),t=i(93967),u=i.n(t),o=e=>{let{className:l,imgUrl:i="/pictures/empty.png"}=e;return(0,n.jsx)("div",{className:u()("m-auto",{className:l}),children:(0,n.jsx)(a.Z,{image:i,imageStyle:{margin:"0 auto",width:"100%",height:"100%"}})})},s=i(48689),r=i(24969),d=i(34041),c=i(7075),v=i(86738),f=i(14726),m=i(96486),x=i(67294),p=i(67421),h=i(25934),j=i(83072),g=i(2856),_=e=>{var l;let{name:i,updateData:a,resourceTypeOptions:t,initValue:_}=e,{t:y}=(0,p.$G)(),Z=(0,x.useRef)(_||[]),[w,b]=(0,x.useState)({uid:"",icon:""}),[N,k]=(0,x.useState)((null==_?void 0:_.map(e=>({...e,icon:e.type,initVal:e})))||[]),[C,E]=(0,x.useState)([...N]),[S,I]=(0,x.useState)((null==N?void 0:null===(l=N[0])||void 0===l?void 0:l.uid)||""),[T,V]=(0,x.useState)(""),P=(e,l)=>{var n,t;null==e||e.stopPropagation();let u=null===(n=Z.current)||void 0===n?void 0:n.findIndex(e=>e.uid===S),o=null==N?void 0:N.filter(e=>e.uid!==l.uid);Z.current=Z.current.filter(e=>e.uid!==l.uid)||[],a([i,Z.current]),k(o),u===(null==N?void 0:N.length)-1&&0!==u&&setTimeout(()=>{var e;I((null==o?void 0:null===(e=o[o.length-1])||void 0===e?void 0:e.uid)||"")},0),I((null==o?void 0:null===(t=o[u])||void 0===t?void 0:t.uid)||"")};return(0,x.useEffect)(()=>{E([...N])},[N]),(0,x.useEffect)(()=>{k(N.map(e=>(null==w?void 0:w.uid)===e.uid?{...e,icon:w.icon}:e))},[w]),(0,n.jsxs)("div",{className:"flex flex-1  h-64 px-3 py-4 border border-[#d6d8da] rounded-md",children:[(0,n.jsxs)("div",{className:"flex flex-col w-40 h-full",children:[(0,n.jsx)(d.default,{options:t,className:"w-full h-8",variant:"borderless",defaultValue:"all",onChange:e=>{var l,i;if("all"===e)E(N),I((null==N?void 0:null===(l=N[0])||void 0===l?void 0:l.uid)||"");else{let l=null==N?void 0:N.filter(l=>(null==l?void 0:l.icon)===e);I((null==l?void 0:null===(i=l[0])||void 0===i?void 0:i.uid)||""),E(l)}}}),(0,n.jsx)("div",{className:"flex flex-1 flex-col gap-1 overflow-y-auto",children:null==C?void 0:C.map(e=>(0,n.jsxs)("div",{className:u()("flex h-8 items-center px-3 pl-[0.6rem] rounded-md hover:bg-[#f5faff] hover:dark:bg-[#606264] cursor-pointer relative",{"bg-[#f5faff] dark:bg-[#606264]":e.uid===S}),onClick:()=>{I(e.uid||"")},onMouseEnter:()=>{V(e.uid||"")},onMouseLeave:()=>{V("")},children:[j.resourceTypeIcon[e.icon||""],(0,n.jsx)(c.Z.Text,{className:u()("flex flex-1 items-center text-sm p-0 m-0 mx-2 line-clamp-1",{"text-[#0c75fc]":e.uid===S}),editable:{autoSize:{maxRows:1},onChange:l=>{k(N.map(i=>i.uid===e.uid?{...i,name:l}:i)),Z.current=Z.current.map(i=>i.uid===e.uid?{...i,name:l}:i),a([i,Z.current])}},ellipsis:{tooltip:!0},children:e.name}),(0,n.jsx)(v.Z,{title:y("want_delete"),onConfirm:l=>{P(l,e)},onCancel:e=>null==e?void 0:e.stopPropagation(),children:(0,n.jsx)(s.Z,{className:"text-sm cursor-pointer  absolute right-2 ".concat(T===e.uid?"opacity-100":"opacity-0"),style:{top:"50%",transform:"translateY(-50%)"},onClick:e=>e.stopPropagation()})})]},e.uid))}),(0,n.jsx)(f.ZP,{className:"w-full h-8",type:"dashed",block:!0,icon:(0,n.jsx)(r.Z,{}),onClick:()=>{var e,l;let n=(0,h.Z)();Z.current=(0,m.concat)(Z.current,[{is_dynamic:!1,type:null===(e=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===e?void 0:e[0].value,value:"",uid:n,name:y("resource")+" ".concat(Z.current.length+1)}].filter(Boolean)),a([i,Z.current]),k(e=>{var l,i,a;return[...e,{icon:(null===(l=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===l?void 0:null===(i=l[0])||void 0===i?void 0:i.value)||"",uid:n,initVal:{is_dynamic:!1,type:null===(a=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===a?void 0:a[0].value,value:"",uid:n,name:y("resource")+" ".concat(e.length+1)},name:y("resource")+" ".concat(e.length+1)}]}),I(n),b({uid:n,icon:null===(l=null==t?void 0:t.filter(e=>"all"!==e.value))||void 0===l?void 0:l[0].value})},children:y("add_resource")})]}),(0,n.jsx)("div",{className:"flex flex-1 ml-6 ",children:C&&(null==C?void 0:C.length)>0?(0,n.jsx)("div",{className:"flex flex-1",children:null==C?void 0:C.map(e=>(0,n.jsx)(g.default,{classNames:e.uid===S?"block":"hidden",resourceTypeOptions:t,initValue:e.initVal,setCurIcon:b,updateData:e=>{var l;Z.current=null===(l=Z.current)||void 0===l?void 0:l.map(l=>(null==l?void 0:l.uid)===(null==e?void 0:e.uid)?{...l,...e}:l),a([i,Z.current])},uid:e.uid||""},e.uid))}):(0,n.jsx)(o,{className:"w-40 h-40"})})]})}},83072:function(e,l,i){"use strict";i.r(l),i.d(l,{agentIcon:function(){return _},resourceTypeIcon:function(){return y}});var n=i(85893),a=i(70065),t=i(89035),u=i(48869),o=i(61086),s=i(57132),r=i(97879),d=i(32319),c=i(79383),v=i(13520),f=i(14079),m=i(10524),x=i(56466),p=i(26911),h=i(97175),j=i(16801),g=i(13179);i(67294);let _={CodeEngineer:(0,n.jsx)(t.Z,{}),Reporter:(0,n.jsx)(u.Z,{}),DataScientist:(0,n.jsx)(o.Z,{}),Summarizer:(0,n.jsx)(s.Z,{}),ToolExpert:(0,n.jsx)(a.Z,{type:"icon-plugin",style:{fontSize:17.25,marginTop:2}}),Indicator:(0,n.jsx)(r.Z,{}),Dbass:(0,n.jsx)(d.Z,{})},y={all:(0,n.jsx)(c.Z,{}),database:(0,n.jsx)(v.Z,{}),knowledge:(0,n.jsx)(f.Z,{}),internet:(0,n.jsx)(m.Z,{}),plugin:(0,n.jsx)(x.Z,{}),text_file:(0,n.jsx)(p.Z,{}),excel_file:(0,n.jsx)(h.Z,{}),image_file:(0,n.jsx)(j.Z,{}),awel_flow:(0,n.jsx)(g.Z,{})};l.default=()=>(0,n.jsx)(n.Fragment,{})}},function(e){e.O(0,[3662,2648,3791,2913,7075,4041,9859,389,9774,2888,179],function(){return e(e.s=45128)}),_N_E=e.O()}]);