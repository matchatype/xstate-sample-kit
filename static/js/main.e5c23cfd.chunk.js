(this["webpackJsonpxstate-sample-architecture"]=this["webpackJsonpxstate-sample-architecture"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,u,l,s=n(0),d=n.n(s),f=n(65),b=n.n(f),m=(n(103),n(7)),p=(n(104),n(37)),O=n(54),j=Object(s.createContext)({send:function(){},state:{}}),h=(j.Provider,j.Consumer,n(61)),v=n(22),g=n(67),E=function(e){s.useEffect((function(){g.a.push(/^\//.test(e)?e:"/".concat(e))}),[e])},y=function(e){return s.useEffect((function(){console.warn("Redirecting to: ".concat(e.to)),e.send({type:"GOTO",route:"".concat(e.to)})}),[e.to,e.send]),null},w=function(e){var t=s.useContext(j).send;return s.createElement(y,Object.assign({},e,{send:t}))},k=n(24),C=n.n(k),x=n(35),T=n(6),S=n(10),F=n(18),_=n(11),L=n(5),N=n(81),R=n.n(N),P=n(63),V={flex:"1 1 auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},A=function(e){return s.createElement(s.Fragment,null,s.createElement("div",{className:R.a.content,style:V},e.children),s.createElement(P.a,{progress:e.loading?void 0:0}))},U=function(e){return!!e&&("string"===typeof e?!!e.trim():"number"===typeof e?!isNaN(e)&&e!==1/0&&(e>0||e<0):Array.isArray(e)?e.length>0:!!e)},B=function(e){return null!=e},D=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,I=function(e){return function(t){return t[e]}},W=function(e,t){return function(n){return n[e][t]}},q=W("currentTarget","value"),$=I,M=function(e){return function(t){return e(t),t}},H=function(){},J=function(e){return e.trim()},K=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return Object.keys(e).reduce((function(n,r){return t.includes(r)&&(n[r]=e[r]),n}),{})}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){return setTimeout(t,e)}))},G=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.replace(/%(\d+)/g,(function(e,t){return"undefined"!=typeof n[t]?n[t]:e}))},Q=n(23),X=Q.d({id:Q.b,name:Q.c,username:Q.c,email:Q.c},"User"),Y=(I("id"),I("username")),Z=n(82),ee=function(e){return s.createElement("div",{id:"welcome"},G(Z["Welcome %username"],Y(e.user)))},te=function(e){var t=s.useRef(null);return s.useLayoutEffect((function(){e.takeFocus&&setTimeout((function(){var e;null===(e=t.current)||void 0===e||e.focus()}),250)}),[e.takeFocus,t.current]),s.createElement(h.a,{ref:t,"data-test":"btn-reset",onClick:e.onClick},e.children)},ne=(n(83),Q.d({code:Q.b,error:Q.c})),re=function(e){return function(t){return t.reason===e}},ae=function(e){return function(t){return{reason:e,error:t}}},ce=ae("api"),oe=ae("decode"),ie=ae("error"),ue=re("api"),le=re("decode"),se=(re("error"),function(e){return Object({NODE_ENV:"production",PUBLIC_URL:"/xstate-sample-kit",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_DISABLE_Q_SHUFFLE,function(){var t=Object(x.a)(C.a.mark((function t(n){var r,a,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(2e3);case 2:return t.prev=2,t.next=5,n();case 5:return r=t.sent,t.next=8,r.json();case 8:a=t.sent,Object({NODE_ENV:"production",PUBLIC_URL:"/xstate-sample-kit",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_DISABLE_Q_SHUFFLE,t.next=21;break;case 16:if(3!==c){t.next=20;break}throw Error(".. my hands up in the air sometime!");case 20:4===c&&delete a.username;case 21:return t.abrupt("return",Object(_.pipe)(e.decode(a),F.mapLeft((function(e){return Object(_.pipe)(ne.decode(a),F.map(ce),F.fold(Object(L.constant)(oe(e)),L.identity))}))));case 24:return t.prev=24,t.t0=t.catch(2),t.abrupt("return",F.left(ie(t.t0 instanceof Error?t.t0:Error("".concat(t.t0)))));case 28:case"end":return t.stop()}}),t,null,[[2,24]])})));return function(e){return t.apply(this,arguments)}}()}),de=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e?G.apply(void 0,[e].concat(n)):null},fe=function(e){var t=ue(e.failure)?de(e.api,e.failure.error.code,e.failure.error.error):le(e.failure)?de(e.decode):de(e.error,e.failure.error);return t?s.createElement("span",{"data-test":"FailureMessage"},t):null},be=n(26),me=function(e){return s.createElement(fe,{failure:e.failure,api:be["The server responded with code %code"],decode:be["The server has responded with an unknown response."],error:be["The following error has occurred"]})},pe=n(84),Oe=n(38),je=n(71),he=n.n(je),ve=(n(118),n(47)),ge=function(e){var t;return s.createElement("div",{className:he.a["form-field"]},null!==(t=e.label)&&void 0!==t?t:s.createElement(ve.a,{use:"subtitle2"},e.label),e.children)},Ee=function(e){var t=[];return e.horizontal&&t.push(he.a["form-fields-horizontal"]),e.centered&&t.push(he.a["form-fields-centered"]),s.createElement("div",{className:t.join(" ")},e.children)},ye=function(e){var t=Object(Oe.b)(),n=Object(m.a)(t,1)[0];return s.createElement("form",null,s.createElement(ge,null,s.createElement(ve.a,{use:"headline6"},"[".concat(n(pe.titleOfShow),"]"))),s.createElement(ge,null,e.usernameInput),s.createElement(ge,null,e.passwordInput),s.createElement(Ee,{horizontal:!0,centered:!0},s.createElement(ge,null,e.loginButton),s.createElement(ge,null,e.resetButton)))},we=function(e){return s.createElement(h.a,Object.assign({},e,{raised:!0,"data-test":"btn-login",disabled:e.disabled,onClick:e.onClick}),be.Login)},ke=n(135),Ce=n(137),xe=n(139),Te=n(70),Se=n(133),Fe=n(136),_e=n(88),Le=n(4),Ne=n(62),Re=n(73),Pe=n(75),Ve=n(72),Ae="edit",Ue="pristine",Be="dirty",De="touched",Ie="touching",We="untouched",qe="focused",$e="blurred",Me="valid",He="invalid",Je="CHANGE",Ke="FOCUS",ze="BLUR",Ge="RESET",Qe={type:"parallel",context:{},states:(u={},Object(T.a)(u,Ae,{on:Object(T.a)({},Je,{actions:"assignValue"})}),Object(T.a)(u,Ue,{initial:Ue,states:(r={},Object(T.a)(r,Ue,{on:Object(T.a)({},Je,{target:Be,cond:"isHuman"})}),Object(T.a)(r,Be,{on:Object(T.a)({},Ge,Ue)}),r)}),Object(T.a)(u,De,{initial:We,states:(a={},Object(T.a)(a,We,{on:Object(T.a)({},Ke,{target:Ie})}),Object(T.a)(a,Ie,{on:Object(T.a)({},ze,{target:De})}),Object(T.a)(a,De,{on:Object(T.a)({},Ge,We)}),a)}),Object(T.a)(u,Me,{initial:He,states:(o={},Object(T.a)(o,He,{on:Object(T.a)({"":{target:Me,cond:"isValid"}},Je,{target:Me,cond:"isValid"})}),Object(T.a)(o,Me,{on:(c={},Object(T.a)(c,Je,{target:He,cond:"isNotValid"}),Object(T.a)(c,Ge,He),c)}),o)}),Object(T.a)(u,qe,{initial:$e,states:(i={},Object(T.a)(i,qe,{on:Object(T.a)({},ze,$e)}),Object(T.a)(i,$e,{on:Object(T.a)({},Ke,qe)}),i)}),u)},Xe=function(e){return e.type===Je},Ye=function(){return{type:Ke}},Ze=function(){return{type:ze}},et=function(e,t){return Object(s.useEffect)((function(){var n=0,r=e.subscribe((function(e){return t&&console.groupCollapsed("".concat(t," (").concat(++n,")")),console.log(JSON.stringify(e.value,null,2)),console.log(JSON.stringify(e.context,null,2)),console.log(e),t&&console.groupEnd(),function(){r.unsubscribe()}}))}),[e,t])},tt=function(e){return/^done.invoke/.test(e.type)},nt=n(138),rt=n(134),at=new(n(94).a),ct=function(){return at.next()},ot=$("value"),it=$("robot"),ut=(l=it,new Se.a(S.none)),lt=ut.pipe(Object(_e.a)((function(e){return Object(_.pipe)(e,S.map((function(e){return Object(_.pipe)(e,F.fold(Object(L.constant)(!1),Object(L.constant)(!0)))})),S.fold(Object(L.constant)(!1),Object(L.constant)(!0)))})),Object(rt.a)(B)),st=new Se.a({value:"",robot:!0}),dt=new Se.a({value:"",robot:!0}),ft=st.pipe(Object(_e.a)(ot)),bt=dt.pipe(Object(_e.a)(ot)),mt=(Object(nt.a)(ft,bt).pipe(Object(_e.a)((function(e){var t=Object(m.a)(e,2);return{username:t[0],password:t[1]}}))),ut.getValue.bind(ut),Object(L.flow)(st.getValue.bind(st),ot)),pt=Object(L.flow)(dt.getValue.bind(dt),ot),Ot=M(ut.next.bind(ut)).bind(null,S.none),jt=function(e){return function(t){return{value:t,robot:e}}},ht=jt(!1),vt=jt(!0),gt=Object(L.flow)(J,ht,M(st.next.bind(st)),ot),Et=Object(L.flow)(J,ht,M(dt.next.bind(dt)),ot),yt=Object(L.flow)(J,vt,M(st.next.bind(st)),ot).bind(null,""),wt=Object(L.flow)(J,vt,M(dt.next.bind(dt)),ot).bind(null,""),kt=Object(L.flow)(yt,wt);ut.pipe(Object(_e.a)((function(e){return Object(_.pipe)(e,S.map((function(e){return Object(_.pipe)(e,F.fold(Object(L.constant)(null),Q.a))})),S.fold(Object(L.constant)(null),Q.a))})),Object(rt.a)(B));at.subscribe(Object(L.flow)(kt,Ot));var Ct,xt,Tt,St,Ft=n(95),_t=n(48),Lt=function(e){var t=s.useRef(null);s.useLayoutEffect((function(){e.takeFocus&&setTimeout((function(){var e;return null===(e=t.current)||void 0===e?void 0:e.focus()}),100)}),[e.takeFocus]);var n=s.useMemo((function(){return function(t){13===t.which&&e.onEnter?e.onEnter():e.onKeyPress&&e.onKeyPress(t)}}),[e.onEnter,e.onKeyPress]),r=(e.takeFocus,e.onEnter,Object(Ft.a)(e,["takeFocus","onEnter"]));return s.createElement(_t.a,Object.assign({},r,{inputRef:t,onKeyPress:n}))},Nt=Lt,Rt=function(e){return e},Pt=Re.map(q),Vt=function(e){var t,n,r=e.name,a=e.isValid,c=void 0===a?Object(L.constant)(!0):a,o=e.withConfig,i=e.value$,u=e.update,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isValid,n=void 0===t?function(){return!0}:t,r=e.withConfig,a=r?r(Qe):Qe;return Object(Ve.b)(a,{actions:{assignValue:Object(Le.b)({value:function(e,t){return Xe(t)?t.value:e.value}})},guards:{isHuman:function(e,t){return!!Xe(t)&&!t.isRobot},isValid:function(e,t){return n(Xe(t)?t.value:e.value)},isNotValid:function(e,t){return!n(Xe(t)?t.value:e.value)}}})}({isValid:c,withConfig:Object(L.flow)((function(e){var t=e.entry?Array.isArray(e.entry)?e.entry:[e.entry]:[];return Object(v.a)({},e,{context:Object(v.a)({},e.context,{reset$Ref:null,change$Ref:null}),entry:[].concat(Object(Te.a)(t),[Object(Le.b)({reset$Ref:function(){return Object(Ne.c)(at.pipe(Object(ke.a)({type:Ge})))},change$Ref:function(){return Object(Ne.c)(i.pipe(Object(Fe.a)((function(e){})),Object(_e.a)((function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:Je,value:e,isRobot:t}}(ot(e),it(e))}))))}})])})}),o||L.identity)}),d=Re.chain(Object(L.flow)((t=u,n=L.identity,function(e){return t(e),n(e)}),L.constant)),f=new Se.a(S.none),b=S.map((function(e){return e.matches("valid.valid")})),O=f.pipe(Object(_e.a)((function(e){return Object(_.pipe)(e,b,S.fold(Object(L.constant)(!1),L.identity))}))),j=function(e){var t,n,r=Object(p.useMachine)(l),a=Object(m.a)(r,3),c=a[0],o=a[1];a[2];n=c,(t=f).next(S.some(n)),s.useEffect((function(){return function(){return t.next(S.none)}}),[t]);var u=Object(xe.a)(i.pipe(Object(_e.a)(ot)),""),b=Object(_.pipe)(Rt,Pt,d),O=Object(L.flow)(Ye,o,H),j=Object(L.flow)(Ze,o,H);return e.children({value:u,invalid:c.matches("touched.touched")&&c.matches("valid.invalid"),focused:c.matches("focused.focused"),onChange:b,onFocus:O,onBlur:j})};return Object.defineProperty(j,"displayName",{value:"".concat(r,"(InputProvider)")}),[j,O,f]},At=Vt,Ut=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Pe.getFunctionSemigroup(Pe.semigroupAll)(),r=n.concat(t.required?U:Object(L.constant)(!0),t.isValid||Object(L.constant)(!0)),a=new Se.a({value:"",robot:!0}),c=Object(L.flow)(J,ht,M(a.next.bind(a)),ot),o=Vt({name:e,isValid:r,value$:a,update:c}),i=Object(m.a)(o,3),u=i[0],l=i[1],d=i[2],f=K("invalid","focused","value"),b=function(e){return s.createElement(u,null,(function(t){return s.createElement(s.Fragment,null,s.createElement(Lt,Object.assign({},e,t)),e.children?e.children(f(t)):null)}))};return Object.defineProperty(b,"displayName",{value:"".concat(e,"(StringInputProvider)")}),[b,a,l,c,d]},Bt=n(25),Dt=n(90),It=s.createElement(ve.a,{use:"subtitle2"},Dt.usernameLabel),Wt={block:{display:"block"}},qt=function(e){return s.createElement(s.Fragment,null,It,s.createElement("div",null,s.createElement(Nt,{"data-test":"input-username",value:e.value,placeholder:"Username",required:!0,disabled:e.disabled,onEnter:e.onEnter,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur,style:Wt.block,takeFocus:e.takeFocus,icon:s.createElement(Bt.a,{icon:"person",theme:e.focused?"primary":void 0}),helpText:{children:e.invalid?s.createElement("span",null,"A username is required!"):s.createElement("br",null),validationMsg:!0}})))},$t=at.pipe(Object(ke.a)(2),Object(Ce.a)((function(e,t){return e+t}))),Mt=At({name:"username",isValid:U,update:gt,value$:st}),Ht=Object(m.a)(Mt,3),Jt=Ht[0],Kt=Ht[1],zt=(Ht[2],function(e){var t=Object(xe.a)($t,1);return s.createElement(Jt,null,(function(n){return s.createElement(qt,Object.assign({},n,e,{takeFocus:t}))}))}),Gt=n(91),Qt=s.createElement(ve.a,{use:"subtitle2"},Gt.passwordLabel),Xt={display:"block"},Yt=function(e){return s.createElement(s.Fragment,null,s.createElement("div",null,Qt),s.createElement("div",null,s.createElement(Nt,{"data-test":"input-password",value:e.value,placeholder:"Password",type:"password",required:!0,"data-status":e.invalid?"error":void 0,disabled:e.disabled,onEnter:e.onEnter,onChange:e.onChange,onFocus:e.onFocus,onBlur:e.onBlur,style:Object.assign({},e.style,Xt),icon:s.createElement(Bt.a,{icon:e.focused?"lock_open":"lock",theme:e.focused?"primary":void 0}),helpText:{children:e.invalid?s.createElement("span",null,"A password is required!"):s.createElement("br",null),validationMsg:!0}})))},Zt=At({name:"password",isValid:U,update:Et,value$:dt}),en=Object(m.a)(Zt,3),tn=en[0],nn=en[1],rn=(en[2],function(e){return s.createElement(tn,null,(function(t){return s.createElement(Yt,Object.assign({},t,e))}))}),an=function(e){return d.a.createElement(ye,{usernameInput:d.a.createElement(zt,{disabled:e.isSubmitting,onEnter:e.onLogin}),passwordInput:d.a.createElement(rn,{disabled:e.isSubmitting,onEnter:e.onLogin}),loginButton:d.a.createElement(we,{disabled:e.canNotSubmit,onClick:e.onLogin}),resetButton:e.resetButton})},cn=function(){var e=Object(x.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",se(X)((function(){return fetch("https://jsonplaceholder.typicode.com/users/1")})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),on="inProgress",un="submitting",ln="done",sn="Valid",dn="InValid",fn="SUBMIT",bn="RESET",mn="VALID",pn="INVALID",On={id:"operator",initial:on,on:Object(T.a)({},bn,{target:on}),states:(Tt={},Object(T.a)(Tt,on,{initial:dn,states:(xt={},Object(T.a)(xt,sn,{on:(Ct={},Object(T.a)(Ct,pn,dn),Object(T.a)(Ct,fn,{target:"#operator.".concat(un)}),Ct)}),Object(T.a)(xt,dn,{on:Object(T.a)({},mn,sn)}),xt)}),Object(T.a)(Tt,un,{invoke:{id:"submitOperation",src:"submitOperation",onDone:ln,onError:ln}}),Object(T.a)(Tt,ln,{}),Tt)},jn=(St=fn,function(e){return e.type===St}),hn={submitOperation:function(e,t){return jn(t)?t.promiser():Promise.reject("submitService invoked by non-submit event!")}},vn=function(e){return Object(Ve.b)(e?e(On):On,{services:hn})},gn=Object(nt.a)(Kt,nn).pipe(Object(_e.a)((function(e){var t=Object(m.a)(e,2),n=t[0],r=t[1];return n&&r}))),En=Object(nt.a)(Kt,nn).pipe(Object(_e.a)((function(e){var t=Object(m.a)(e,2),n=t[0],r=t[1];return n||r}))),yn=vn((function(e){return Object(v.a)({},e,{states:Object(v.a)({},e.states,Object(T.a)({},ln,{entry:"assignDone"})),context:{reset$Ref:null},entry:Object(Le.b)({reset$Ref:function(){return Object(Ne.c)(at.pipe(Object(ke.a)({type:bn})))},isValid$Ref:function(){return Object(Ne.c)(gn.pipe(Object(_e.a)((function(e){return{type:e?mn:pn}}))))}})})})).withConfig({actions:{assignDone:function(e,t){return tt(t)&&ut.next(S.some(t.data))}}}),wn=function(){var e=Object(p.useMachine)(yn),t=Object(m.a)(e,3),n=t[0],r=t[1],a=t[2],c=Object(xe.a)(gn,!1),o=Object(xe.a)(En,!1),i=Object(xe.a)(ut,S.none);et(a,"login");var u=n.matches(on),l=!u,s=n.matches(un),f=l||!c,b=Object(_.pipe)(i,S.fold(Object(L.constant)(!1),(function(e){return Object(_.pipe)(e,F.fold(Object(L.constant)(!1),Object(L.constant)(!0)))}))),O=u?be.Reset:s?be.Cancel:b?be.Logout:be["Try again"],j=d.a.createElement(te,{disabled:!o,onClick:ct,takeFocus:n.matches(ln)},O),h=d.a.createElement(an,{isSubmitting:s,canNotSubmit:f,onLogin:function(){r({type:fn,promiser:function(){var e=Object(x.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,cn({username:mt(),password:pt()});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})},resetButton:j}),v=Object(_.pipe)(i,S.fold(Object(L.constant)(h),(function(e){return Object(_.pipe)(e,F.fold((function(e){return d.a.createElement(d.a.Fragment,null,d.a.createElement(me,{failure:e}),j)}),(function(e){return d.a.createElement("div",null,d.a.createElement(ee,{user:e}),d.a.createElement("br",null),j)})))})));return d.a.createElement(A,{loading:s},v)},kn=function(e){return s.createElement(_t.b,{validationMsg:!0,persistent:!0},e.invalid?e.children:e.defaultText||s.createElement("br",null))},Cn=Ut("name",{required:!0}),xn=Object(m.a)(Cn,4),Tn=xn[0],Sn=(xn[1],xn[2]),Fn=xn[3],_n=Ut("email",{required:!0,isValid:function(e){return U(e)&&D.test(e)}}),Ln=Object(m.a)(_n,4),Nn=Ln[0],Rn=(Ln[1],Ln[2]),Pn=Ln[3],Vn=Ut("message"),An=Object(m.a)(Vn,4),Un=An[0],Bn=(An[1],An[2],An[3]),Dn=new Se.a(S.none),In=Object(nt.a)(Sn,Rn).pipe(Object(_e.a)((function(e){var t=Object(m.a)(e,2),n=t[0],r=t[1];return n&&r}))),Wn=function(){Fn(""),Pn(""),Bn(""),ct()},qn=vn((function(e){return Object(v.a)({},e,{states:Object(v.a)({},e.states,Object(T.a)({},ln,{entry:"assignDone"})),entry:Object(Le.b)({reset$Ref:function(){return Object(Ne.c)(at.pipe(Object(ke.a)({type:bn})))},isValid$Ref:function(){return Object(Ne.c)(In.pipe(Object(_e.a)((function(e){return{type:e?mn:pn}}))))}})})})).withConfig({actions:{assignDone:function(e,t){return tt(t)&&Dn.next(S.some(t.data))}}}),$n=n(40),Mn=function(){var e=Object(Oe.b)(),t=Object(m.a)(e,1)[0],n=Object(p.useMachine)(qn),r=Object(m.a)(n,3),a=r[0],c=r[1],o=r[2],i=(Object(xe.a)(lt,!1),Object(xe.a)(Dn,S.none)),u=Object(xe.a)(In,!1);et(o,"contactUs");var l=s.useMemo((function(){return function(e){return function(t){return s.createElement(kn,Object.assign({},t,{defaultText:t.value?"Hi ".concat(t.value,"!"):""}),e("This field is required"))}}(t)}),[t]),d=s.useMemo((function(){return function(e){return s.createElement(kn,e,U(e.value)?"A valid e-mail address is required.":"This field is required.")}}),[t]),f=function(){var e={type:fn,promiser:function(){var e=Object(x.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(2e3);case 2:return t=F.right(!0),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};c(e)},b=a.matches("inProgress"),O=s.createElement("form",{style:{minWidth:"50vw"}},s.createElement(ge,null,s.createElement(ve.a,{use:"headline4"},t("Contact-us"))),s.createElement(ge,null,s.createElement(Tn,{label:t($n.Name),takeFocus:!0,onEnter:f,disabled:!b},l)),s.createElement(ge,null,s.createElement(Nn,{label:t($n["E-mail"]),onEnter:f,disabled:!b},d)),s.createElement(ge,null,s.createElement(Un,{label:t($n.Message),onEnter:f,disabled:!b})),s.createElement(Ee,{horizontal:!0,centered:!0},s.createElement(ge,null,s.createElement(h.a,{disabled:!u||!b,raised:!0,onClick:f},t($n.Submit))),s.createElement(ge,null,s.createElement(h.a,{onClick:Wn},t($n[b?"Reset":"Cancel"]))))),j=Object(_.pipe)(i,S.fold(Object(L.constant)(O),(function(e){return Object(_.pipe)(e,F.fold(Object(L.constant)(s.createElement("div",null,t($n["We were unable to process your request. Please contact us at 1.800.267.2001"]))),Object(L.constant)(s.createElement("div",null,t($n["Thank you for contacting us. We will be in touch with you as soon as possible."])))))})));return s.createElement(A,{loading:a.matches("submitting")},j)},Hn=Object(Ve.b)({id:"routes",initial:"home",context:{},on:{GOTO:[{target:".home",cond:"home"},{target:".login",cond:"login"},{target:".signup",cond:"signup"},{target:".contactUs",cond:"contactUs"},{target:".404"}]},states:{home:{},signup:{},login:{},contactUs:{},404:{}}},{actions:{},guards:{home:function(e,t){return"home"===t.route},login:function(e,t){return"login"===t.route},signup:function(e,t){return"signup"===t.route},contactUs:function(e,t){return"contact-us"===t.route}}}),Jn=function(){return E("404"),s.createElement("div",null,"404")},Kn=function(e){return E(e.path),s.createElement(s.Fragment,null,e.children)},zn=function(e){var t=e.state;return t.matches("home")?s.createElement(w,{to:"login"}):t.matches("login")?s.createElement(Kn,{path:"login"},s.createElement(wn,null)):t.matches("contactUs")?s.createElement(Kn,{path:"contact-us"},s.createElement(Mn,null)):t.matches("404")?s.createElement(Jn,null):s.createElement(w,{to:"404"})},Gn=[/login/,/signup/,/contact-us/],Qn=function(e){var t=s.useState(!1),n=Object(m.a)(t,2),r=n[0],a=n[1];return s.useEffect((function(){var t=function(e){var t=e.replace(/^\/|\/$/g,"");return Gn.reduce((function(e,n){if(e.match)return e;if(n instanceof RegExp&&n.test(t)){var r=n.exec(t);if(r){var a=r.groups||{},c=Object.keys(a).reduce((function(e,t){var n=a[t];return e.replace("/".concat(n),"")}),r.input).replace(/\//g,".").replace(/^\.|\.$/,"");return{match:!0,event:Object(v.a)({type:"GOTO",route:c},a)}}}return e}),{match:!1,event:{type:"GOTO",route:"home"}}).event}(g.a.location.pathname);e.send(t),a(!0)}),[e.send]),r?s.createElement(s.Fragment,null,s.createElement(zn,{state:e.state})):null},Xn=function(e){var t=s.useContext(j).send.bind(null,Object(v.a)({type:"GOTO",route:e.to},e.params),void 0);return e.children({onClick:t})},Yn=function(){var e=Object(p.useMachine)(Hn),t=Object(m.a)(e,3),n=t[0],r=t[1],a=t[2];et(a,"xassy.router");var c=Object(xe.a)(lt,!1);return s.createElement(j.Provider,{value:{state:n,send:r}},s.createElement(O.a,null,s.createElement(O.c,null,s.createElement(O.d,null,s.createElement(O.e,null,"Xassy")))),s.createElement(O.b,null),s.createElement("nav",{className:"dark-bg"},s.createElement(Xn,{to:"home"},(function(e){var t=e.onClick;return s.createElement(h.a,{icon:"home",theme:n.matches("home")?["secondaryBg"]:[],onClick:t,unelevated:n.matches("home"),outlined:!n.matches("home")},"Home")})),s.createElement(Xn,{to:"login"},(function(e){var t=e.onClick;return s.createElement(h.a,{theme:n.matches("login")?["secondaryBg"]:[],onClick:t,unelevated:n.matches("login"),outlined:!n.matches("login")},"Login")})),s.createElement(Xn,{to:"contact-us"},(function(e){var t=e.onClick;return s.createElement(h.a,{theme:c&&n.matches("home")?["secondaryBg"]:[],onClick:t,disabled:!c,unelevated:n.matches("contactUs"),outlined:!n.matches("contactUs")},"Contact Us")}))),s.createElement(Qn,{send:r,state:n}))},Zn=function(){var e=Object(Oe.b)(),t=Object(m.a)(e,2)[1];return d.a.useEffect((function(){t.changeLanguage("nl"),setTimeout((function(){t.changeLanguage("en")}),2500)}),[t]),null},er=function(){return d.a.createElement(s.Suspense,{fallback:"..."},d.a.createElement(Yn,null),d.a.createElement(Zn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tr=n(76),nr=n(92),rr=n(93);tr.a.use(nr.a).use(rr.a).use(Oe.a).init({fallbackLng:"en",debug:!0,backend:{loadPath:"".concat("/xstate-sample-kit","/locales/{{lng}}/{{ns}}.json")},interpolation:{escapeValue:!1}});tr.a;b.a.render(d.a.createElement(er,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e){e.exports=JSON.parse('{"Login":"Login","Reset":"Reset","Logout":"Logout","Cancel":"Cancel","Try again":"Try again","The server responded with code %code":"The server responded with %0: %1","The server has responded with an unknown response.":"The server has responded with an unknown response.","The following error has occurred":"The following error has occurred: %0"}')},40:function(e){e.exports=JSON.parse('{"Contact us":"Contact us","Name":"Name","Name is a required field.":"Name is a required field.","E-mail":"E-mail","An e-mail is a required.":"An e-mail is a required.","The e-mail is not a valid address.":"The e-mail is not a valid address.","Message":"Message","Submit":"Submit","Reset":"Reset","Cancel":"Cancel","Thank you for contacting us. We will be in touch with you as soon as possible.":"Thank you for contacting us. We will be in touch with you as soon as possible.","We were unable to process your request. Please contact us at 1.800.267.2001":"We were unable to process your request. Please contact us at 1.800.267.2001"}')},71:function(e,t,n){e.exports={"form-field":"FormField_form-field__2IFQ9","form-fields-horizontal":"FormField_form-fields-horizontal__1dymU","form-fields-centered":"FormField_form-fields-centered__2C1LC"}},81:function(e,t,n){e.exports={content:"Content_content__1kQCU"}},82:function(e){e.exports=JSON.parse('{"Welcome %username":"Welcome %0"}')},84:function(e){e.exports=JSON.parse('{"titleOfShow":"title of show"}')},90:function(e){e.exports=JSON.parse('{"usernameLabel":"Username"}')},91:function(e){e.exports=JSON.parse('{"passwordLabel":"Password"}')},98:function(e,t,n){e.exports=n(125)}},[[98,1,2]]]);
//# sourceMappingURL=main.e5c23cfd.chunk.js.map