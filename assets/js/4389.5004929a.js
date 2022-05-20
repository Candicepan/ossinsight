"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4389],{83321:function(e,t,i){i.d(t,{Z:function(){return Z}});var n=i(63366),o=i(87462),a=i(67294),r=i(86010),s=i(47925),d=i(27192),l=i(41796),c=i(11496),p=i(33616),u=i(47739),m=i(98216),g=i(28979);function x(e){return(0,g.Z)("MuiButton",e)}var h=(0,i(76087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=a.createContext({}),S=i(85893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],v=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,c.ZP)(u.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],t[`${i.variant}${(0,m.Z)(i.color)}`],t[`size${(0,m.Z)(i.size)}`],t[`${i.variant}Size${(0,m.Z)(i.size)}`],"inherit"===i.color&&t.colorInherit,i.disableElevation&&t.disableElevation,i.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:(0,l.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,l.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,o.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${h.focusVisible}`]:(0,o.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${h.disabled}`]:(0,o.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,l.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${h.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${h.disabled}`]:{boxShadow:"none"}})),$=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(i.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},v(e)))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(i.size)}`]]}})((({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},v(e))));var Z=a.forwardRef((function(e,t){const i=a.useContext(b),l=(0,s.Z)(i,e),c=(0,p.Z)({props:l,name:"MuiButton"}),{children:u,color:g="primary",component:h="button",className:v,disabled:Z=!1,disableElevation:k=!1,disableFocusRipple:W=!1,endIcon:y,focusVisibleClassName:M,fullWidth:C=!1,size:R="medium",startIcon:N,type:I,variant:G="text"}=c,P=(0,n.Z)(c,f),L=(0,o.Z)({},c,{color:g,component:h,disabled:Z,disableElevation:k,disableFocusRipple:W,fullWidth:C,size:R,type:I,variant:G}),B=(e=>{const{color:t,disableElevation:i,fullWidth:n,size:a,variant:r,classes:s}=e,l={root:["root",r,`${r}${(0,m.Z)(t)}`,`size${(0,m.Z)(a)}`,`${r}Size${(0,m.Z)(a)}`,"inherit"===t&&"colorInherit",i&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(a)}`]},c=(0,d.Z)(l,x,s);return(0,o.Z)({},s,c)})(L),E=N&&(0,S.jsx)($,{className:B.startIcon,ownerState:L,children:N}),F=y&&(0,S.jsx)(z,{className:B.endIcon,ownerState:L,children:y});return(0,S.jsxs)(w,(0,o.Z)({ownerState:L,className:(0,r.Z)(v,i.className),component:h,disabled:Z,focusRipple:!W,focusVisibleClassName:(0,r.Z)(B.focusVisible,M),ref:t,type:I},P,{classes:B,children:[E,u,F]}))}))},27948:function(e,t,i){i.d(t,{Z:function(){return h}});var n=i(63366),o=i(87462),a=i(67294),r=i(86010),s=i(27192),d=i(33616),l=i(11496),c=i(28979);function p(e){return(0,c.Z)("MuiContainer",e)}(0,i(76087).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var u=i(98216),m=i(85893);const g=["className","component","disableGutters","fixed","maxWidth"],x=(0,l.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`maxWidth${(0,u.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}})((({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,i)=>{const n=e.breakpoints.values[i];return 0!==n&&(t[e.breakpoints.up(i)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));var h=a.forwardRef((function(e,t){const i=(0,d.Z)({props:e,name:"MuiContainer"}),{className:a,component:l="div",disableGutters:c=!1,fixed:h=!1,maxWidth:b="lg"}=i,S=(0,n.Z)(i,g),f=(0,o.Z)({},i,{component:l,disableGutters:c,fixed:h,maxWidth:b}),v=(e=>{const{classes:t,fixed:i,disableGutters:n,maxWidth:o}=e,a={root:["root",o&&`maxWidth${(0,u.Z)(String(o))}`,i&&"fixed",n&&"disableGutters"]};return(0,s.Z)(a,p,t)})(f);return(0,m.jsx)(x,(0,o.Z)({as:l,ownerState:f,className:(0,r.Z)(v.root,a),ref:t},S))}))},86886:function(e,t,i){i.d(t,{ZP:function(){return $}});var n=i(63366),o=i(87462),a=i(67294),r=i(86010),s=i(95408),d=i(39707),l=i(27192),c=i(11496),p=i(33616);var u=a.createContext(),m=i(28979);function g(e){return(0,m.Z)("MuiGrid",e)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var h=(0,i(76087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...x.map((e=>`grid-xs-${e}`)),...x.map((e=>`grid-sm-${e}`)),...x.map((e=>`grid-md-${e}`)),...x.map((e=>`grid-lg-${e}`)),...x.map((e=>`grid-xl-${e}`))]),b=i(85893);const S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function f(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function v(e,t,i={}){if(!t||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[i[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:n,sm:o,md:a,lg:r,xl:s}=e;return[Number(n)>0&&(i[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`),Number(o)>0&&(i[`spacing-sm-${String(o)}`]||`spacing-sm-${String(o)}`),Number(a)>0&&(i[`spacing-md-${String(a)}`]||`spacing-md-${String(a)}`),Number(r)>0&&(i[`spacing-lg-${String(r)}`]||`spacing-lg-${String(r)}`),Number(s)>0&&(i[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const w=(0,c.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:i,direction:n,item:o,lg:a,md:r,sm:s,spacing:d,wrap:l,xl:c,xs:p,zeroMinWidth:u}=e.ownerState;return[t.root,i&&t.container,o&&t.item,u&&t.zeroMinWidth,...v(d,i,t),"row"!==n&&t[`direction-xs-${String(n)}`],"wrap"!==l&&t[`wrap-xs-${String(l)}`],!1!==p&&t[`grid-xs-${String(p)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==r&&t[`grid-md-${String(r)}`],!1!==a&&t[`grid-lg-${String(a)}`],!1!==c&&t[`grid-xl-${String(c)}`]]}})((({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const i=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},i,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${h.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:i,rowSpacing:n}=t;let o={};if(i&&0!==n){const t=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});o=(0,s.k9)({theme:e},t,(t=>{const i=e.spacing(t);return"0px"!==i?{marginTop:`-${f(i)}`,[`& > .${h.item}`]:{paddingTop:f(i)}}:{}}))}return o}),(function({theme:e,ownerState:t}){const{container:i,columnSpacing:n}=t;let o={};if(i&&0!==n){const t=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});o=(0,s.k9)({theme:e},t,(t=>{const i=e.spacing(t);return"0px"!==i?{width:`calc(100% + ${f(i)})`,marginLeft:`-${f(i)}`,[`& > .${h.item}`]:{paddingLeft:f(i)}}:{}}))}return o}),(function({theme:e,ownerState:t}){let i;return e.breakpoints.keys.reduce(((n,a)=>{let r={};if(t[a]&&(i=t[a]),!i)return n;if(!0===i)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===i)r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const d=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof d?d[a]:d;if(null==l)return n;const c=Math.round(i/l*1e8)/1e6+"%";let p={};if(t.container&&t.item&&0!==t.columnSpacing){const i=e.spacing(t.columnSpacing);if("0px"!==i){const e=`calc(${c} + ${f(i)})`;p={flexBasis:e,maxWidth:e}}}r=(0,o.Z)({flexBasis:c,flexGrow:0,maxWidth:c},p)}return 0===e.breakpoints.values[a]?Object.assign(n,r):n[e.breakpoints.up(a)]=r,n}),{})}));var $=a.forwardRef((function(e,t){const i=(0,p.Z)({props:e,name:"MuiGrid"}),s=(0,d.Z)(i),{className:c,columns:m,columnSpacing:x,component:h="div",container:f=!1,direction:$="row",item:z=!1,lg:Z=!1,md:k=!1,rowSpacing:W,sm:y=!1,spacing:M=0,wrap:C="wrap",xl:R=!1,xs:N=!1,zeroMinWidth:I=!1}=s,G=(0,n.Z)(s,S),P=W||M,L=x||M,B=a.useContext(u),E=m||B||12,F=(0,o.Z)({},s,{columns:E,container:f,direction:$,item:z,lg:Z,md:k,sm:y,rowSpacing:P,columnSpacing:L,wrap:C,xl:R,xs:N,zeroMinWidth:I}),T=(e=>{const{classes:t,container:i,direction:n,item:o,lg:a,md:r,sm:s,spacing:d,wrap:c,xl:p,xs:u,zeroMinWidth:m}=e,x={root:["root",i&&"container",o&&"item",m&&"zeroMinWidth",...v(d,i),"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==c&&`wrap-xs-${String(c)}`,!1!==u&&`grid-xs-${String(u)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==r&&`grid-md-${String(r)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==p&&`grid-xl-${String(p)}`]};return(0,l.Z)(x,g,t)})(F);return j=(0,b.jsx)(w,(0,o.Z)({ownerState:F,className:(0,r.Z)(T.root,c),as:h,ref:t},G)),12!==E?(0,b.jsx)(u.Provider,{value:E,children:j}):j;var j}))}}]);