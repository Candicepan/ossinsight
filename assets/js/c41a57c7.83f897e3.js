"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2305,486],{82680:(e,t,n)=>{n.d(t,{o:()=>i,a:()=>v});var l=n(87462),r=n(67294),a=n(79072);function o(e,t,n){return 0===Object.keys(t).length?e:e instanceof Array?e.map(((e,n)=>o(e,t,n))):r.isValidElement(e)?(0,r.cloneElement)(e,Object.assign({},e.props,t,{key:e.key??n})):e}function i(e){let{xs:t,sm:n,md:i,lg:m,xl:c,children:s,...A}=e;const u=(0,r.useMemo)((()=>{const e={};return t&&(e.xs=t),n&&(e.sm=n),i&&(e.md=i),m&&(e.lg=m),c&&(e.xl=c),e}),[t,n,i,m,c]);return r.createElement(a.ZP,(0,l.Z)({container:!0,spacing:[2,4,8]},A),o(s,u))}var m=n(49837),c=n(29630),s=n(40172),A=n(54225),u=n(21448),d=n(30120),P=n(50522),E=n(39960),p=n(13919);function v(e){let{title:t,aspectRatio:n=16/9,image:o,description:i,readMore:v,buttonText:C="read more",buttonVariant:h,codeStyleDescription:z=!0,elevation:g,cardSx:f,tags:D,link:b,top:j,size:Z,...w}=e;const T=r.createElement(r.Fragment,null,r.createElement(c.Z,{variant:"h3",sx:{mb:1,fontWeight:"bold",minHeight:50,fontSize:"small"===Z?18:void 0}},t),o?r.createElement(s.ZP,{ratio:n},o):void 0,D?r.createElement(d.Z,{sx:{my:2}},D.map(((e,t)=>r.createElement(u.Z,{size:"small",label:e,key:t,sx:{mr:2}})))):void 0,i?r.createElement(c.Z,{variant:"body1",sx:{mt:1,color:"text.secondary",minHeight:72,fontSize:"small"===Z?14:void 0}},i):void 0,v?r.createElement(A.Z,{component:E.Z,rel:(0,p.Z)(v)?void 0:"noopener",to:v,size:"small",variant:h??"text",sx:{mt:2}},C):void 0);return r.createElement(a.ZP,(0,l.Z)({item:!0},w),j,function(e,t){let{link:n,cardSx:l,elevation:a,size:o}=t;const[i,c]=(0,r.useState)(a??3),s=(0,r.useCallback)((()=>{c(2*(a??3))}),[]),A=(0,r.useCallback)((()=>{c(a??3)}),[]);return n?r.createElement(m.Z,{sx:{userSelect:"none",...l},elevation:i,onMouseEnter:s,onMouseLeave:A,onMouseDown:A},r.createElement(P.Z,{component:E.Z,rel:(0,p.Z)(n)?void 0:"noopener",to:n,sx:{textAlign:"left",p:"small"===o?2:4,display:"block","&:hover":{textDecoration:"none",color:"unset",elevation:4}}},e)):r.createElement(m.Z,{sx:{userSelect:"none",p:"small"===o?2:4,...l},elevation:i??3},e)}(T,{link:b,elevation:g,cardSx:f,size:Z}))}},88579:(e,t,n)=>{n.d(t,{Z:()=>A});var l=n(67294),r=n(90244),a=n(93978),o=n(5605),i=n(39807),m=n(69417),c=n(39960),s=n(45344);function A(e){let{stats:t,showTable:n=!1}=e;return l.createElement(r.Z,{className:"clearTable"},l.createElement(a.Z,null,l.createElement(m.Z,null,n?l.createElement(o.Z,null,"Table"):void 0,l.createElement(o.Z,null,"Index"),l.createElement(o.Z,null,"Calls"))),l.createElement(i.Z,null,t.map((e=>l.createElement(m.Z,{key:`${e.tableName}.${e.indexName}`},n?l.createElement(o.Z,null,l.createElement(c.Z,{to:`/stats/tables/${e.tableName}`},e.tableName)):void 0,l.createElement(o.Z,null,e.indexName),l.createElement(o.Z,null,l.createElement(s.Z,{value:e.calls??0,hasComma:!0,duration:200,size:14})))))))}},98322:(e,t,n)=>{n.d(t,{Y:()=>a});var l=n(67294),r=n(73766);function a(e,t){(0,l.useEffect)((()=>{const n=(0,r.v)(e,t);return()=>(0,r.r)(n)}),[e,t])}},72179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var l=n(67294),r=n(84451),a=n(16550),o=n(6971),i=n(88579),m=n(14850),c=n(78016),s=n(90244),A=n(93978),u=n(5605),d=n(39807),P=n(69417),E=n(21448);function p(e){let{infos:t}=e;return l.createElement(s.Z,{className:"clearTable"},l.createElement(A.Z,null,l.createElement(P.Z,null,l.createElement(u.Z,null,"Index Name"),l.createElement(u.Z,null,"Columns"),l.createElement(u.Z,null,"Clustered"),l.createElement(u.Z,null,"Visible"),l.createElement(u.Z,null,"Unique"))),l.createElement(d.Z,null,t.map((e=>l.createElement(P.Z,{key:e.indexName},l.createElement(u.Z,null,e.indexName),l.createElement(u.Z,null,e.columns.split(",").map((e=>l.createElement(E.Z,{key:e,size:"small",label:e,sx:{m:.25}})))),l.createElement(u.Z,null,e.clustered),l.createElement(u.Z,null,e.isVisible),l.createElement(u.Z,null,e.nonUnique?"NO":"YES"))))))}var v=n(56545),C=n(18661),h=n(74065),z=n(47028),g=n(29618),f=n(23508),D=n(31486),b=n.n(D);const j=[{key:"tableSchema"},{key:"tableName"},{key:"tableRows",humanFormat:{}},{key:"avgRowLength",humanFormat:{unit:"B"}},{key:"dataLength",humanFormat:{unit:"B"}},{key:"indexLength",humanFormat:{unit:"B"}},{key:"createTime"},{key:"tableCollation"},{key:"createOptions"},{key:"rowIdShardingInfo"},{key:"pkType"}];function Z(e){let{info:t}=e;return l.createElement(h.Z,null,l.createElement(g.Z,{expandIcon:l.createElement(f.Z,null)},"Table Info"),l.createElement(z.Z,null,l.createElement(s.Z,{className:"clearTable",size:"small"},l.createElement(d.Z,null,j.map((e=>{let{key:n,humanFormat:r}=e;return l.createElement(P.Z,{key:n},l.createElement(u.Z,{sx:{fontWeight:"bold"}},n),l.createElement(u.Z,null,r?b()((null==t?void 0:t[n])||0,r):(null==t?void 0:t[n])||"--"))}))))))}var w=n(20486),T=n(30120),W=n(98322),x=n(64489),k=n(39960);function y(){const{params:{slug:e}}=(0,a.$B)(),[t,n]=(0,l.useState)("index-usage"),{data:i}=(0,o.WV)("stats-table-info",{tableName:e},!1,!0);return(0,l.useMemo)((()=>0===(null==i?void 0:i.data.length)),[i])?l.createElement(w.default,null):l.createElement(r.Z,{title:`Stats - ${e}`},l.createElement(c.Z,{maxWidth:"lg"},l.createElement(x.Z,{sx:{my:2}},l.createElement(k.Z,{to:"/stats"},"Stats"),l.createElement("span",null,"Tables"),l.createElement("span",null,e)),l.createElement(Z,{info:null==i?void 0:i.data[0]}),l.createElement(v.Z,{onChange:(e,t)=>n(t),value:t,sx:{mt:2}},l.createElement(C.Z,{label:"Index Usage",value:"index-usage"}),l.createElement(C.Z,{label:"Index Info",value:"index-info"}),l.createElement(C.Z,{label:"DDL",value:"ddl"})),"index-usage"===t?l.createElement(B,{slug:e}):void 0,"index-info"===t?l.createElement(S,{slug:e}):void 0,"ddl"===t?l.createElement(V,{slug:e}):void 0,l.createElement(T.Z,{height:16})))}function B(e){let{slug:t}=e;const{data:n,reload:r}=(0,o.WV)("stats-index-usage",{tableName:t},!1,!0,"unique");return(0,W.Y)(r,1e3),l.createElement(i.Z,{stats:(null==n?void 0:n.data)??[]})}function S(e){let{slug:t}=e;const{data:n}=(0,o.WV)("stats-index-info",{tableName:t},!1,!0);return l.createElement(p,{infos:(null==n?void 0:n.data)??[]})}function V(e){let{slug:t}=e;const{data:n}=(0,o.WV)("stats-table-ddl",{tableName:t},!1,!0),r=(0,l.useMemo)((()=>null==n?void 0:n.data[0]["Create Table"]),[n]);return r?l.createElement(m.Z,{className:"language-sql"},r):null}},33457:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(67294),r=n(30120),a=n(78016),o=n(41556);const i="#242526",m="#1C1E21";function c(e){let{id:t,darker:n=!1,pt:c,maxWidth:s="xl",children:A}=e;return l.createElement(r.Z,{component:"section",id:t,sx:[(0,o.j)("py",2,4,6),{backgroundColor:n?m:i,pt:c}]},l.createElement(a.Z,{maxWidth:s,sx:{padding:1}},A))}},41556:(e,t,n)=>{function l(e,t,n,l){return r=>({[e]:l,[r.breakpoints.down("lg")]:{[e]:n},[r.breakpoints.down("md")]:{[e]:t}})}function r(e,t){return"function"==typeof t?t(e):t}function a(e,t,n){return t=>({...r(t,n),[t.breakpoints.down("md")]:r(t,e),[t.breakpoints.down("lg")]:r(t,e)})}n.d(t,{j:()=>l,m:()=>a})},8106:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(67294),r=n(86010),a=n(95999);const o={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function i(e){let{code:t,className:n}=e;const[i,m]=(0,l.useState)(!1),c=(0,l.useRef)(void 0),s=(0,l.useCallback)((()=>{var e;e=t,navigator.clipboard.writeText(e).catch(console.error),m(!0),c.current=window.setTimeout((()=>{m(!1)}),1e3)}),[t]);return(0,l.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),l.createElement("button",{type:"button","aria-label":i?(0,a.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,a.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,a.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,o.copyButton,i&&o.copyButtonCopied),onClick:s},l.createElement("span",{className:o.copyButtonIcons,"aria-hidden":"true"},l.createElement("svg",{className:o.copyButtonIcon,viewBox:"0 0 24 24"},l.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),l.createElement("svg",{className:o.copyButtonSuccessIcon,viewBox:"0 0 24 24"},l.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}},84451:(e,t,n)=>{n.d(t,{Z:()=>P});var l=n(87462),r=n(30120),a=n(25098),o=n(67294),i=n(29630),m=n(82680),c=n(33457),s=n(54225),A=n(39960);const u=e=>o.createElement(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:4}},o.createElement("img",{src:e,alt:"logo",width:"54",height:"54"}));function d(){return o.createElement(o.Fragment,null,o.createElement(c.Z,null,o.createElement(i.Z,{variant:"h2",sx:{fontSize:40},align:"center"},"Wonder how OSS Insight works?"),o.createElement(m.o,{sx:{mt:2},xs:12,sm:6,md:4},o.createElement(m.a,{title:"How do we implement OSS Insight ?",description:"Blog: 10 min read",codeStyleDescription:!1,readMore:"/blog/why-we-choose-tidb-to-support-ossinsight",buttonVariant:"outlined",top:u(n(2107).Z),cardSx:{backgroundColor:"#2c2c2c"}}),o.createElement(m.a,{title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",description:"Tutorial: 10 min read",codeStyleDescription:!1,readMore:"/blog/try-it-yourself",buttonVariant:"outlined",top:u(n(39784).Z),cardSx:{backgroundColor:"#2c2c2c"}}),o.createElement(m.a,{title:"Join a Workshop to Setup a Mini OSS Insight",description:"Tutorial: 25 min",codeStyleDescription:!1,readMore:"/docs/workshop/mini-ossinsight/introduction",buttonVariant:"outlined",top:u(n(82674).Z),cardSx:{backgroundColor:"#2c2c2c"}})),o.createElement(r.Z,{textAlign:"center",sx:{fontSize:24,mt:6}},"Want to create your own IDEAInsight in a day?\xa0",o.createElement("br",null),o.createElement(s.Z,{sx:{fontSize:24,fontWeight:"bold",verticalAlign:"baseline",textDecoration:"underline"},component:A.Z,href:"https://share.hsforms.com/1E-qtGQWrTVmctP8kBT34gw2npzm",rel:"noopener"},"Join a workshop!"))),o.createElement(c.Z,{darker:!0},o.createElement("div",{className:"text--center"},o.createElement("h3",null,"Follow us at\xa0",o.createElement("a",{href:"https://twitter.com/OSSInsight"},"@OSSInsight"),"\xa0and join the conversation using the hashtags",o.createElement("br",null),o.createElement("a",{href:"https://twitter.com/hashtag/OSSInsight",target:"_blank"},"#OSSInsight"),"\xa0",o.createElement("a",{href:"https://twitter.com/hashtag/TiDBCloud",target:"_blank"},"#TiDBCloud")))))}function P(e){let{children:t,header:n,footer:i=!0,dark:m,sideWidth:c,Side:s,...A}=e;return(0,o.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),o.createElement(a.Z,(0,l.Z)({},A,{header:n,sideWidth:c,side:c&&s?o.createElement(r.Z,{component:"aside",width:c,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},o.createElement(r.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},o.createElement(s,null))):void 0}),o.createElement("div",{hidden:!0,style:{height:72}}),o.createElement("div",{style:{paddingLeft:c,paddingRight:c}},o.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t,i?o.createElement(d,null):void 0)))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(95999),a=n(1944),o=n(25098),i=n(16550),m=n(29630),c=n(70754);function s(){const e=(0,i.k6)(),[t,n]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{var t,l;let{pathname:r,search:a,hash:o}=window.location;a=null==(t=a)?void 0:t.replace(/^\?/,""),o=null==(l=o)?void 0:l.replace(/^#/,"");const[i,...m]=r.split("/");if("analyze"===i){if(m.length>=1&&m.length<=2)return void e.replace({pathname:r,search:a,hash:o});if(0===m.length)return void e.replace({pathname:"/analyze/pingcap/tidb",search:a,hash:o})}n(!0)}),[]),l.createElement(l.Fragment,null,l.createElement(a.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})?void 0:"Loading...",description:"The comprehensive Open Source Software insight tool by analyzing massive events from GitHub, powered by TiDB, the best insight building database of data agility.",image:"/img/screenshots/homepage.png"}),l.createElement(o.Z,null,t?l.createElement("main",{className:"container margin-vert--xl"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6 col--offset-3"},l.createElement("h1",{className:"hero__title"},l.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.createElement("p",null,l.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),l.createElement("p",null,l.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))):l.createElement("main",{className:"container margin-vert--xl"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6 col--offset-3"},l.createElement(m.Z,{variant:"body1",fontSize:24},"Loading... \xa0",l.createElement(c.Z,{sx:{display:"inline-block"},size:24})))))))}},2107:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"},39784:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"},82674:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"}}]);