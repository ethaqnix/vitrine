(this.webpackJsonpvitrine=this.webpackJsonpvitrine||[]).push([[0],{111:function(e,a,t){},128:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(10),r=t.n(l),i=(t(111),t(55)),c=t(12),f=t(90),o=t.n(f),u=t(2);var j=function(e){return Object(u.jsx)("div",{className:o.a.container,children:Object(u.jsx)("h1",{children:"Page not found"})})},d=t(17),p=t(168),b=t(162),h=t(72),O=t(166),x=t(186),v=t(167),m=Object(b.a)((function(e){return{root:{width:250,margin:e.spacing(1)},input:{width:50}}})),g=function(e){var a=e.onChange,t=e.value,s=e.min,n=e.max,l=e.name,r=e.hasInput,i=m();return Object(u.jsxs)("div",{className:i.root,children:[Object(u.jsx)(h.a,{id:"input-slider",gutterBottom:!0,children:l}),Object(u.jsxs)(O.a,{container:!0,spacing:2,alignItems:"center",children:[Object(u.jsx)(O.a,{item:!0,xs:!0,children:Object(u.jsx)(x.a,{value:t,onChange:function(e,t){Array.isArray(t)||a(t)},"aria-labelledby":"input-slider",min:s,max:n})}),r&&Object(u.jsx)(O.a,{item:!0,children:Object(u.jsx)(v.a,{className:i.input,value:t,margin:"dense",onChange:function(e){var t;t=""===e.target.value?0:Number(e.target.value),a(t<s?s:t>n?n:t)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]})]})};var y=function(e,a){var t=Object(s.useRef)(e);Object(s.useEffect)((function(){t.current=e}),[e]),Object(s.useEffect)((function(){if(null!==a){var e=setInterval((function(){return t.current()}),a);return function(){return clearInterval(e)}}}),[a])},w=Object(b.a)((function(e){return{root:{display:"flex",flex:1},rules:{flex:1,margin:e.spacing(1),padding:e.spacing(1),backgroundColor:"grey"},renderArea:{margin:e.spacing(1),flex:2,justifyContent:""}}})),A=t(39),C=t(40),P=t(43),S=t(42),N=function(e){Object(P.a)(t,e);var a=Object(S.a)(t);function t(e){var s;return Object(A.a)(this,t),(s=a.call(this,e)).state={},s}return Object(C.a)(t,[{key:"render",value:function(){var e=this.props,a=e.pointA,t=e.pointB,s=e.style||{stroke:"black"};return Object(u.jsx)("line",{x1:a.x,y1:a.y,x2:t.x,y2:t.y,style:s,strokeWidth:"1",onClick:function(e){return console.log(e)}})}}]),t}(n.a.Component),k=Object(b.a)((function(e){return{root:{}}})),E=function(e){e.handlePlay;var a=k();return Object(u.jsx)("div",{className:a.root})},B=function(){var e=w(),a=Object(s.useState)(1),t=Object(d.a)(a,2),n=t[0],l=t[1],r=Object(s.useState)(1),i=Object(d.a)(r,2),c=i[0],f=i[1],o=Object(s.useState)(!1),j=Object(d.a)(o,2),b=j[0],h=j[1],O=function(){return new Array(c).fill(0).map((function(e,a){return{y:500+500*Math.sin(a/c*(2*Math.PI)),x:500+500*Math.cos(a/c*(2*Math.PI))}}))};y((function(){2e3===c?(l(n+1),f(2)):f(c+1)}),b?100:null);var x=function(){h(!b)},v=function(){for(var e=O(),a=[],t=0;t<c;t++)a.push(e[t*n%c]);return a}(),m=O();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsxs)("div",{className:e.rules,children:[Object(u.jsx)(E,{handlePlay:x}),Object(u.jsx)(p.a,{variant:"contained",onClick:x,children:b?"Stop":"Play"}),Object(u.jsx)(g,{name:"nombre d'it\xe9rations",value:c,onChange:function(e){f(e)},max:2e3,min:1,hasInput:!0}),Object(u.jsx)(g,{name:"coefficient",value:n,onChange:function(e){l(e)},max:100,min:2,hasInput:!0})]}),Object(u.jsxs)("svg",{viewBox:"0 0 1000 1000",height:"600",width:"600",className:e.renderArea,children:[Object(u.jsx)("circle",{cx:"500",cy:"500",r:"500",fill:"url(#exampleGradient)",stroke:"black",strokeWidth:1}),v.map((function(e,a){return Object(u.jsx)(N,{pointA:m[a%c],pointB:e})}))]})]})},R=t(11),I=t(18),M=function(e,a){var t=[],s=[e.dimensions[0]<a.length?a.length:e.dimensions[0],e.dimensions[1]<a[0].length?a.length:e.dimensions[1]];if(e.dimensions[1]>a[0].length){var n=s[1]-a[0].length;t=a.map((function(e){return[].concat(Object(I.a)(Array(Math.round(n/2)).fill(!1)),Object(I.a)(e),Object(I.a)(Array(Math.ceil(n/2)).fill(!1)))}))}if(e.dimensions[0]>a.length){var l=s[0]-a.length;t=[].concat(Object(I.a)(Array(Math.round(l/2)).fill(Array(s[0]).fill(!1))),Object(I.a)(t),Object(I.a)(Array(Math.ceil(l/2)).fill(Array(s[0]).fill(!1))))}return Object(R.a)(Object(R.a)({},e),{},{dimensions:s,board:t})},L={board:[[!0]],dimensions:[1,1]},F={board:new Array(50).fill([]).map((function(){return Array(50).fill(!1)})),dimensions:[50,50]},T=L,D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;if(a)switch(a.type){case"SET_BOARD":return Object(R.a)(Object(R.a)({},e),{},{board:a.payload});case"PLAY":return Object(R.a)(Object(R.a)({},e),{},{board:a.payload(e.board)});case"SET_DIMENSIONS":return Object(R.a)(Object(R.a)({},e),{},{dimensions:a.payload});case"SET_PATTERN":return M(e,a.payload);case"CLEAR":return Object(R.a)(Object(R.a)({},e),{},{board:[]});default:throw new Error("Unhandled action type: ".concat(a.type))}},z=n.a.createContext(T),G=n.a.createContext(null);var _=function(){var e=n.a.useContext(z),a=n.a.useContext(G);if(void 0===e||void 0===a)throw new Error("useLifeGame must be used within a LifeGameProvider");return[e,a]},J=function(e){var a=e.children,t=e.initialState,n=void 0===t?T:t,l=Object(s.useReducer)(D,n),r=Object(d.a)(l,2),i=r[0],c=r[1];return Object(u.jsx)(z.Provider,{value:i,children:Object(u.jsx)(G.Provider,{value:c,children:a})})},U=t(182),q=t(170),V=t(21),H=t.n(V),K=t(36),W=function(){var e=Object(K.a)(H.a.mark((function e(a,t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"PLAY",payload:t});case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(K.a)(H.a.mark((function e(a,t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"SET_DIMENSIONS",payload:t});case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(K.a)(H.a.mark((function e(a,t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"SET_BOARD",payload:t});case 1:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),X=function(e){Object(P.a)(t,e);var a=Object(S.a)(t);function t(){return Object(A.a)(this,t),a.apply(this,arguments)}return Object(C.a)(t,[{key:"render",value:function(){var e=this.props,a=e.valuesArray,t=e.nbLines,s=e.nbRows,n=e.filledColor,l=e.onClickSquare,r=s||t,i=new Array(r+1).fill(0).map((function(e,a){return{pointA:{x:a/r*1e3,y:0},pointB:{x:a/r*1e3,y:1e3}}})),c=new Array(t+1).fill(0).map((function(e,a){return{pointA:{x:0,y:a/t*1e3},pointB:{x:1e3,y:a/t*1e3}}}));return[a.map((function(e,a){return e.map((function(e,s){return Object(u.jsx)("rect",{x:s*(1e3/r),y:a*(1e3/t),width:1e3/r,height:1e3/t,fill:e?n||"#000000":"#FFFFFF",onClick:(i=a,c=s,function(){l&&l(i,c)})},"square".concat(s,"/").concat(a));var i,c}))})),c.map((function(e,a){return Object(u.jsx)(N,{pointA:e.pointA,pointB:e.pointB},"horizontal-svg-line-".concat(a))})),i.map((function(e,a){return Object(u.jsx)(N,{pointA:e.pointA,pointB:e.pointB},"vertical-svg-line-".concat(a))}))]}}]),t}(n.a.Component),Z=function(e){var a=e.changeSquareColorOnClick,t=_(),s=Object(d.a)(t,2),n=s[0],l=n.dimensions,r=n.board,i=s[1],c=w();return Object(u.jsx)("svg",{viewBox:"0 0 1000 1000",height:"600",width:"600",className:c.renderArea,children:Object(u.jsx)(X,{nbLines:l[0],nbRows:l[1],valuesArray:r,onClickSquare:a?function(e,a){i&&Q(i,[].concat(Object(I.a)(r.slice(0,e)),[[].concat(Object(I.a)(r[e].slice(0,a)),[!0!==r[e][a]],Object(I.a)(r[e].slice(a+1)))],Object(I.a)(r.slice(e+1))))}:void 0})})},$=t(94),ee=function(){var e=w(),a=_(),t=Object(d.a)(a,2),s=t[0].dimensions,n=t[1],l=function(e){return e.map((function(a,t){return a.map((function(a,n){var l=e[t][n],r=[n>0&&e[t][n-1],n>0&&t>0&&e[t-1][n-1],n>0&&t<s[0]-1&&e[t+1][n-1],n<s[0]-1&&e[t][n+1],n<s[0]-1&&t>0&&e[t-1][n+1],n<s[0]-1&&t<s[0]-1&&e[t+1][n+1],t>0&&e[t-1][n],t<s[0]-1&&e[t+1][n]].reduce((function(e,a){return a?e+1:e}),0);if(l){if(2===r||3===r)return!0}else if(3===r)return!0;return!1}))}))};return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsxs)("div",{className:e.rules,children:[Object(u.jsx)(p.a,{variant:"contained",onClick:function(){n&&W(n,l)},children:"Play"}),Object(u.jsx)(U.a,{onChange:function(e){var a,t;n&&e.target.value&&(a=n,t=$[e.target.value],a({type:"SET_PATTERN",payload:t}))},children:Object.keys($).map((function(e){return Object(u.jsx)(q.a,{value:e,children:e},e)}))})]}),Object(u.jsx)("div",{className:e.renderArea,children:Object(u.jsx)(Z,{changeSquareColorOnClick:!0})})]})},ae=t(5),te=function(e){Object(P.a)(t,e);var a=Object(S.a)(t);function t(e){var s;return Object(A.a)(this,t),(s=a.call(this,e)).state={},s}return Object(C.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.rule,s=e.result,n=e.onResultChange;return Object(u.jsxs)("div",{className:a.root,children:[Object(u.jsxs)("svg",{viewBox:"0 0 30 10",height:"30",width:"150",style:{margin:10},children:[t.map((function(e,a){return e?Object(u.jsx)("rect",{x:10*a,y:0,width:10,height:10,fill:"#000000"},"square_".concat(a)):null})),Object(u.jsx)(N,{pointA:{x:0,y:0},pointB:{x:0,y:10}}),Object(u.jsx)(N,{pointA:{x:10,y:0},pointB:{x:10,y:10}}),Object(u.jsx)(N,{pointA:{x:20,y:0},pointB:{x:20,y:10}}),Object(u.jsx)(N,{pointA:{x:30,y:0},pointB:{x:30,y:10}}),Object(u.jsx)(N,{pointA:{x:0,y:0},pointB:{x:30,y:0}}),Object(u.jsx)(N,{pointA:{x:0,y:10},pointB:{x:30,y:10}})]}),Object(u.jsxs)("svg",{viewBox:"0 0 10 10",height:"30",width:"50",style:{margin:10},onClick:function(){return n(!s)},children:[s&&Object(u.jsx)("rect",{x:0,y:0,width:10,height:10,fill:"#000000"}),Object(u.jsx)(N,{pointA:{x:0,y:0},pointB:{x:0,y:10}}),Object(u.jsx)(N,{pointA:{x:10,y:0},pointB:{x:10,y:10}}),Object(u.jsx)(N,{pointA:{x:0,y:0},pointB:{x:10,y:0}}),Object(u.jsx)(N,{pointA:{x:0,y:10},pointB:{x:10,y:10}})]})]})}}]),t}(n.a.Component),se=Object(ae.a)({root:{margin:10,display:"flex",flex:1}})(te),ne=function(e){Object(P.a)(t,e);var a=Object(S.a)(t);function t(){var e;Object(A.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).onRulesChange=function(a,t){e.props.onRulesChange(e.props.rules.map((function(e,s){return a===s?{pattern:e.pattern,result:t}:e})))},e}return Object(C.a)(t,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{children:this.props.rules.map((function(a,t){return Object(u.jsx)(se,{rule:a.pattern,result:a.result,onResultChange:function(a){return e.onRulesChange(t,a)}},"rule_".concat(t))}))})}}]),t}(n.a.Component),le=[{pattern:[!1,!1,!1],result:!0},{pattern:[!1,!1,!0],result:!0},{pattern:[!1,!0,!1],result:!0},{pattern:[!1,!0,!0],result:!0},{pattern:[!0,!1,!1],result:!0},{pattern:[!0,!1,!0],result:!0},{pattern:[!0,!0,!1],result:!1},{pattern:[!0,!0,!0],result:!1}],re=function(){var e=w(),a=_(),t=Object(d.a)(a,2),n=t[0].dimensions,l=t[1],r=Object(s.useState)(le),i=Object(d.a)(r,2),c=i[0],f=i[1],o=Object(s.useState)(!1),j=Object(d.a)(o,2),b=j[0],h=j[1],O=function(e){var a=!1;return c.forEach((function(t){t.pattern.length===e.length&&t.pattern.every((function(a,t){return a===e[t]}))&&(a=t.result)})),a},x=function(e){var a=e[e.length-1];return[].concat(Object(I.a)(e.map((function(e){return[!1].concat(Object(I.a)(e),[!1])}))),[[!1].concat(Object(I.a)(a),[!1]).reduce((function(e,t,s,n){return 0===s?[O([!1,t,a[0]])]:s===a.length+1?[].concat(Object(I.a)(e),[O([a[a.length-1],t,!1])]):[].concat(Object(I.a)(e),[O([n[s-1],t,n[s+1]])])}),[])])};y((function(){l&&Y(l,[n[0]+1,n[1]+2]),l&&W(l,x)}),b?1e3:null);var v=function(){var e=Object(K.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(!b);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsxs)("div",{className:e.rules,children:[Object(u.jsx)(p.a,{variant:"contained",onClick:v,children:b?"Stop":"Play"}),Object(u.jsx)(p.a,{variant:"contained",onClick:function(){l&&Y(l,[1,1]),l&&Q(l,[[!0]])},children:"RESET"}),Object(u.jsx)(ne,{rules:c,onRulesChange:f})]}),Object(u.jsx)("div",{className:e.renderArea,children:Object(u.jsx)(Z,{})})]})},ie=function(){var e=Object(c.g)();return Object(u.jsx)(J,{initialState:"/LifeGame2d"===e.location.pathname?F:L,children:"/LifeGame2d"===e.location.pathname?Object(u.jsx)(ee,{}):Object(u.jsx)(re,{})})},ce=t(177),fe=t(129),oe=t(171),ue=t(172),je=t(173),de=t(174),pe=Object(b.a)((function(e){return{paper:{padding:e.spacing(1)}}})),be=function(e){var a=e.title,t=e.description,s=e.technologies,n=pe();return Object(u.jsxs)(oe.a,{children:[Object(u.jsx)(ue.a,{children:Object(u.jsx)(je.a,{})}),Object(u.jsx)(de.a,{children:Object(u.jsxs)(fe.a,{elevation:3,className:n.paper,children:[Object(u.jsx)(h.a,{variant:"h6",component:"h1",children:a}),Object(u.jsx)(h.a,{variant:"subtitle2",children:s}),Array.isArray(t)?t.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{variant:"caption",children:e})},e)})):Object(u.jsx)(h.a,{variant:"caption",children:t})]})})]})},he=t(175),Oe=Object(b.a)((function(e){return{root:{},paper:{padding:e.spacing(1)},header:{display:"flex"},date:{display:"flex",textAlign:"left",alignItems:"center"},img:{marginRight:e.spacing(2),width:50,height:50}}})),xe=function(e){var a=e.title,t=e.date,s=e.description,n=e.icon,l=Oe();return Object(u.jsxs)(oe.a,{className:l.root,children:[Object(u.jsx)(de.a,{children:Object(u.jsxs)(fe.a,{elevation:1,className:l.paper,children:[Object(u.jsxs)("div",{className:l.header,children:[Object(u.jsx)("div",{className:l.img,children:Object(u.jsx)("img",{alt:a,src:n,height:50})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{variant:"h6",component:"h1",children:a}),Object(u.jsx)(h.a,{variant:"subtitle1",children:"".concat(t.start," - ").concat(t.end)})]})]}),Array.isArray(s)?s.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(h.a,{variant:"caption",children:e})},e)})):Object(u.jsx)(h.a,{variant:"caption",children:s})]})}),Object(u.jsx)(ue.a,{children:Object(u.jsx)(je.a,{})}),Object(u.jsx)(he.a,{classes:{root:l.date},children:Object(u.jsx)(h.a,{variant:"body2",color:"textSecondary",children:t.start})})]})},ve=t(185),me=t(176),ge=t(70),ye=t.n(ge),we=function(){return Object(u.jsxs)(oe.a,{children:[Object(u.jsx)(de.a,{}),Object(u.jsx)(ue.a,{children:Object(u.jsx)(me.a,{children:Object(u.jsx)(ye.a,{})})}),Object(u.jsx)(he.a,{})]})},Ae=function(){var e=Object(ve.a)("CV").t;return Object(u.jsxs)(oe.a,{children:[Object(u.jsx)(de.a,{children:Object(u.jsx)(h.a,{variant:"body2",color:"textSecondary",children:e("Experiences.title")})}),Object(u.jsxs)(ue.a,{children:[Object(u.jsx)(me.a,{children:Object(u.jsx)(ye.a,{})}),Object(u.jsx)(je.a,{})]}),Object(u.jsx)(he.a,{children:Object(u.jsx)(h.a,{variant:"body2",color:"textSecondary",children:e("Projects.title")})})]})};function Ce(){var e=Object(ve.a)("CV").t;return Object(u.jsxs)(ce.a,{children:[Object(u.jsx)(Ae,{}),Object(u.jsx)(xe,{title:e("Formations.epitech.title"),description:e("Formations.epitech.description"),date:{start:e("Formations.epitech.date.start"),end:e("Formations.epitech.date.end")},icon:"https://newsroom.ionis-group.com/wp-content/uploads/2018/12/epitech-logo-signature-quadri.png"}),Object(u.jsx)(be,{title:e("Projects.orizon.title"),description:e("Projects.orizon.description",{returnObjects:!0}),technologies:e("Projects.orizon.technologies",{joinArrays:" - "})}),Object(u.jsx)(be,{title:e("Projects.scalpel.title"),description:e("Projects.scalpel.description"),technologies:e("Projects.scalpel.technologies",{joinArrays:" - "})}),Object(u.jsx)(xe,{title:e("Experiences.obvious.title"),description:e("Experiences.obvious.description",{returnObjects:!0}),date:{start:e("Experiences.obvious.date.start"),end:e("Experiences.obvious.date.end")},icon:"https://pbs.twimg.com/profile_images/1113003983860350977/Cay7oMKt_400x400.png"}),Object(u.jsx)(be,{title:e("Projects.agenz.title"),description:e("Projects.agenz.description"),technologies:e("Projects.agenz.technologies",{joinArrays:" - "})}),Object(u.jsx)(be,{title:e("Projects.flow.title"),description:e("Projects.flow.description"),technologies:e("Projects.flow.technologies",{joinArrays:" - "})}),Object(u.jsx)(we,{})]})}var Pe=Object(b.a)((function(e){return{root:{height:"100%",display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},avatar:{overflow:"hidden",margin:20,width:200,height:200,backgroundColor:"black",borderRadius:180},name:{textAlign:"center"}}})),Se=function(){var e=Pe();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)("div",{className:e.avatar,children:Object(u.jsx)("img",{width:200,height:200,src:"https://eip.epitech.eu/2019/o-rizon/Dist/Images/team/romain.denizot.jpg",alt:"C'est moi"})}),Object(u.jsx)("div",{className:e.name,children:Object(u.jsx)(h.a,{variant:"h4",children:"Romain Denizot"})}),Object(u.jsx)("div",{className:e.name,children:Object(u.jsx)(h.a,{variant:"h5",children:"Full Stack Developer"})})]})},Ne=Object(b.a)((function(e){return{root:{display:"flex",flex:1},sidebar:{flex:1,display:"flex",backgroundColor:"grey"},fixed:{zIndex:1,display:"flex",position:"fixed",width:"25%",height:"100%"},mainContent:{display:"flex",flex:3}}})),ke=[{title:"CV",path:"/vitrine",component:function(){var e=Ne();return Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)("div",{className:e.sidebar,children:Object(u.jsx)("div",{className:e.fixed,children:Object(u.jsx)(Se,{})})}),Object(u.jsx)("div",{className:e.mainContent,children:Object(u.jsx)(Ce,{})})]})},isPrivate:!1,onMenu:!0},{title:"Mandelbrot",path:"/mandelbrot",component:B,isPrivate:!1,onMenu:!0},{title:"LifeGame1d",path:"/LifeGame1d",component:ie,isPrivate:!1,onMenu:!0},{title:"LifeGame2d",path:"/LifeGame2d",component:ie,isPrivate:!1,onMenu:!0},{title:"Page not found",path:"/*",component:j,isPrivate:!1,onMenu:!1}];function Ee(){return(Ee=Object(K.a)(H.a.mark((function e(a){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"LOGOUT"}),localStorage.removeItem("currentUser"),localStorage.removeItem("token");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Be={username:localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).username:"",password:localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")).password:"",connected:!1,loading:!1,errorMessage:null},Re=function(e,a){switch(a.type){case"REQUEST_LOGIN":return Object(R.a)(Object(R.a)({},e),{},{loading:!0,connected:!1});case"LOGIN_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{connected:!0,username:a.payload.username,password:a.payload.password,loading:!1,errorMessage:null});case"LOGOUT":return Object(R.a)(Object(R.a)({},e),{},{username:"",password:"",connected:!1});case"LOGIN_ERROR":return Object(R.a)(Object(R.a)({},e),{},{loading:!1,errorMessage:a.error,connected:!1});default:throw new Error("Unhandled action type: ".concat(a.type))}},Ie=n.a.createContext(),Me=n.a.createContext();function Le(){var e=n.a.useContext(Ie);if(void 0===e)throw new Error("useAuthState must be used within a AuthProvider");return e}var Fe=function(e){var a=e.children,t=Object(s.useReducer)(Re,Be),n=Object(d.a)(t,2),l=n[0],r=n[1];return Object(u.jsx)(Ie.Provider,{value:l,children:Object(u.jsx)(Me.Provider,{value:r,children:a})})},Te=t(53),De=t(180),ze=t(181),Ge=t(4),_e=t(184),Je=t(169),Ue=t(130),qe=t(179),Ve=t(98),He=t.n(Ve),Ke=t(178),We=Object(b.a)((function(e){return{list:{width:250},fullList:{width:"auto"},hide:{display:"none"},menuButton:{marginRight:e.spacing(2)}}}));function Ye(){var e=We(),a=n.a.useState({isOpen:!1}),t=Object(d.a)(a,2),s=t[0].isOpen,l=t[1],r=Object(c.g)(),i=Le().password,f=Boolean(i),o=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l({isOpen:e})}};return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)(Ke.a,{color:"inherit","aria-label":"open drawer",onClick:o(!0),edge:"start",className:Object(Ge.a)(e.menuButton,s&&e.hide),children:Object(u.jsx)(He.a,{})}),Object(u.jsx)(_e.a,{anchor:"left",open:s,onClose:o(!1),children:Object(u.jsx)("div",{className:e.list,role:"presentation",onClick:o(!1),onKeyDown:o(!1),children:Object(u.jsx)(Je.a,{children:ke.filter((function(e){var a=e.isPrivate;return e.onMenu&&(!a||f)})).map((function(e){var a=e.title,t=e.path;return Object(u.jsx)(Ue.a,{button:!0,onClick:function(){r.push(t)},children:Object(u.jsx)(qe.a,{primary:a})},a)}))})})})]})}var Qe=Object(b.a)((function(e){return{root:{minHeight:56},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Xe(e){var a=e.title,t=(Object(Te.a)(e,["title"]),Qe()),s=function(){var e=n.a.useContext(Me);if(void 0===e)throw new Error("useAuthDispatch must be used within a AuthProvider");return e}(),l=Object(c.g)();return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(De.a,{position:"fixed",children:Object(u.jsxs)(ze.a,{children:[Object(u.jsx)(Ye,{}),Object(u.jsx)(h.a,{variant:"h6",className:t.title,children:a}),Object(u.jsx)(p.a,{color:"inherit",onClick:function(){!function(e){Ee.apply(this,arguments)}(s),l.push("/login")},children:"Logout"})]})})})}var Ze=function(e){var a=e.title,t=e.children;return Object(u.jsxs)("div",{style:{display:"flex",minHeight:"100vh",flexDirection:"column"},children:[Object(u.jsx)(Xe,{title:a}),Object(u.jsx)("div",{style:{display:"flex",flexGrow:1},children:t})]})},$e=function(e){var a=e.component,t=e.title,s=(e.isPrivate,Object(Te.a)(e,["component","title","isPrivate"]));return Object(u.jsx)(Ze,{title:t,children:Object(u.jsx)(a,Object(R.a)({},s))})},ea=function(e){var a=e.component,t=e.path,s=e.isPrivate,n=e.title,l=Object(Te.a)(e,["component","path","isPrivate","title"]),r=Le();return Object(u.jsx)(c.b,Object(R.a)({path:t,render:function(e){return s&&!Boolean(r.password)?Object(u.jsx)(c.a,{to:{pathname:"/login"}}):Object(u.jsx)($e,Object(R.a)({component:a,isPrivate:s,title:n},e))}},l))},aa=t(81),ta=t(60),sa={fr:{CV:t(99)}};aa.a.use(ta.e).init({resources:sa,lng:"fr",interpolation:{escapeValue:!1}});aa.a;var na=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(Fe,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(c.d,{children:ke.map((function(e){return Object(u.jsx)(ea,{path:e.path,component:e.component,isPrivate:e.isPrivate,title:e.title},e.path)}))})})})})},la=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,188)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,l=a.getLCP,r=a.getTTFB;t(e),s(e),n(e),l(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(na,{})}),document.getElementById("root")),la()},90:function(e,a,t){e.exports={container:"notfound_container__3vuE5"}},94:function(e){e.exports=JSON.parse('{"block":[[false,false,false,false],[false,true,true,false],[false,true,true,false],[false,false,false,false]],"bee-hive":[[false,false,false,false,false,false],[false,false,true,true,false,false],[false,true,false,false,true,false],[false,false,true,true,false,false],[false,false,false,false,false,false]],"loaf":[[false,false,false,false,false,false],[false,false,true,true,false,false],[false,true,false,false,true,false],[false,false,true,false,true,false],[false,false,false,true,false,false],[false,false,false,false,false,false]],"boat":[[false,false,false,false,false],[false,true,true,false,false],[false,true,false,true,false],[false,false,true,false,false],[false,false,false,false,false]],"tub":[[false,false,false,false,false],[false,false,true,false,false],[false,true,false,true,false],[false,false,true,false,false],[false,false,false,false,false]],"blinker":[[false,false,false,false,false],[false,true,true,true,false],[false,false,false,false,false]],"toad":[[false,false,false,false,false,false],[false,false,true,true,true,false],[false,true,true,true,false,false],[false,false,false,false,false,false]],"beacon":[[true,true,false,false],[true,true,false,false],[false,false,true,true],[false,false,true,true]],"glider":[[true,false,false,false,false,false,false,false],[false,true,true,false,false,false,false,false],[true,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false]],"lwss":[[false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,true,false],[false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,true,false],[false,false,false,false,false,false,true,true,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false]],"mwss":[[false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,true,false],[false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,true,false],[false,false,false,false,false,false,true,true,true,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false]],"hwss":[[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false],[false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false],[false,false,false,false,false,false,false,false,true,true,true,true,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]]}')},99:function(e){e.exports=JSON.parse('{"Formations":{"title":"Formations","BTS":{"title":"BTS IRIS","date":{"start":"ao\xfbt 2013","end":"juillet 2015"},"description":"J\'y ai d\xe9couvert de d\xe9veloppement en C, C++ et le HTML/CSS"},"epitech":{"title":"Epitech","date":{"start":"Octobre 2015","end":"juillet 2015"},"description":"Durant les premi\xe8re ann\xe9e, j\'ai am\xe9lior\xe9 mes comp\xe9tences globale en d\xe9veloppement (C/C++/python). J\'ai concentr\xe9 les ann\xe9e suivante au d\xe9veloppement javascript, notamment ReactJs et Angular2."}},"Experiences":{"title":"Exp\xe9riences","obvious":{"title":"Obvious Technologies","date":{"start":"Avril 2019","end":"D\xe9cembre 2020"},"description":["Developpeur Javascript, d\'abord au poste de d\xe9veloppeur mobile, puis d\xe9veloppeur Full Stack.","J\'y ai d\xe9velopper les projects Agenz, Flow ainsi qu\'une interface d\'administration."]},"fourjs":{}},"Projects":{"title":"Projets","orizon":{"title":"O-rizon","date":{"start":"Octobre 2016","end":"Juillet 2019"},"description":["Project lanc\xe9 dans le cadre des EIP, projet de fin d\'\xe9tude Epitech.","Il s\'agit d\'un espace num\xe9rique de travail orient\xe9 pour les coll\xe9giens/lyc\xe9ens ayant pour objectif de les aider des leur orientation."],"technologies":["ReactJs","Meteor","MongoDB"]},"scalpel":{"title":"Scalpel","date":{"start":"Decembre 2017","end":"Juin 2018"},"description":"Projet r\xe9alis\xe9 dans le cadre de la 4\xe8me ann\xe9e Epitech, Moteur de recherche d\'image \xe0 destination des m\xe9tiers du visuel.","technologies":["Angular","Python","Django","Amazon Recognizion"]},"agenz":{"title":"Agenz","date":{"start":"Avril 2019","end":"D\xe9cembre 2019"},"description":"","technologies":["React Native","Typescript"]},"flow":{"title":"Flow","date":{"start":"Janvier 2019","end":"Decembre 2020"},"description":"","technologies":["React","Node.js"]}}}')}},[[128,1,2]]]);
//# sourceMappingURL=main.c8187865.chunk.js.map