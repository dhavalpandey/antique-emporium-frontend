(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),s=a.n(r),i=(a(105),a(106),a(78)),d=a(79),l=a(52),o=a(88),j=a(87),u=URL="https://antique-emporium-backend.herokuapp.com",b=a(176),m=a(158),h=a(56),p=a.n(h),O=(a(107),a(2)),f=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={name:"",email:"",password:"",password2:""},c.submit=c.submit.bind(Object(l.a)(c)),c}return Object(d.a)(a,[{key:"handleName",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePass",value:function(e){this.setState({password:e.target.value})}},{key:"handlePass2",value:function(e){this.setState({password2:e.target.value})}},{key:"submit",value:function(){fetch(u+"/signup",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:this.state.name,email:this.state.email,password:this.state.password,password2:this.state.password2})}).then((function(e){return e.json()})).then((function(e){alert(e.success)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"signup",children:Object(O.jsxs)(m.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(O.jsx)(b.a,{type:"text",onChange:this.handleName.bind(this),id:"filled-textarea",label:"Name:",placeholder:"Name",multiline:!0,required:!0}),Object(O.jsx)(m.a,{item:!0,children:Object(O.jsx)(p.a,{})}),Object(O.jsx)(m.a,{item:!0,children:Object(O.jsx)(b.a,{type:"email",onChange:this.handleEmail.bind(this),id:"input-with-icon-grid",label:"Email:",placeholder:"Email",required:!0})}),Object(O.jsx)(b.a,{id:"filled-password-input",label:"Password:",type:"password",autoComplete:"current-password",onChange:this.handlePass.bind(this),required:!0,placeholder:"Password"}),Object(O.jsx)(b.a,{id:"filled-password-input",label:"Re-Enter Password:",type:"password",autoComplete:"current-password",onChange:this.handlePass2.bind(this),required:!0,placeholder:"Password"}),Object(O.jsx)("div",{className:"wrap",children:Object(O.jsx)("button",{ref:"btn",onClick:this.submit,type:"submit",className:"button",children:"Sign Up!"})})]})})})}}]),a}(c.Component),x=a(65),v=a(12),g=(a(113),function(){return Object(O.jsxs)("h1",{className:"header",children:[Object(O.jsx)("h1",{children:"Upload product"}),Object(O.jsxs)("form",{onSubmit:!0,children:[Object(O.jsx)("label",{children:"Title"}),Object(O.jsx)("input",{onChange:!0,type:"text"})]})]})}),N=a(31),_=a(19),w=a(15),y=a(168),C=a(162),F=a(178),k=a(167),S=a(163),E=a(80),P=a.n(E),R=a(81),D=a.n(R),M=a(4),H=a(166),I=(a(114),Object(H.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"25ch"}}})));var T=function(){var e,t=I(),a=n.a.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),c=Object(w.a)(a,2),r=c[0],s=c[1];return Object(O.jsxs)("form",{className:"login",method:"POST",action:"https://antique-emporium-backend.herokuapp.com/login",children:[Object(O.jsxs)(m.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(O.jsx)(m.a,{item:!0,children:Object(O.jsx)(p.a,{})}),Object(O.jsx)(m.a,{item:!0,children:Object(O.jsx)(b.a,{type:"email",id:"input-with-icon-grid",label:"Email:",placeholder:"Email",required:!0,name:"email"})})]}),Object(O.jsxs)(S.a,{className:Object(M.a)(t.margin,t.textField),children:[Object(O.jsx)(F.a,{htmlFor:"standard-adornment-password",children:"Password:"}),Object(O.jsx)(C.a,{placeholder:"Password",name:"password",required:!0,id:"standard-adornment-password",type:r.showPassword?"text":"password",value:r.password,onChange:(e="password",function(t){s(Object(_.a)(Object(_.a)({},r),{},Object(N.a)({},e,t.target.value)))}),endAdornment:Object(O.jsx)(k.a,{position:"end",children:Object(O.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){s(Object(_.a)(Object(_.a)({},r),{},{showPassword:!r.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:r.showPassword?Object(O.jsx)(P.a,{}):Object(O.jsx)(D.a,{})})})})]}),Object(O.jsx)("div",{className:"wrap",children:Object(O.jsx)("button",{type:"submit",className:"button",children:"Log in"})})]})},L=a(82),Y=(a(115),a(83)),A=a.n(Y),q=a(169),$=a(170),B=a(172),V=a(171),U=a(173),G=a(127),K=(a(120),Object(H.a)({root:{width:320}}));var z=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(0),s=Object(w.a)(r,2),i=s[0],d=(s[1],Object(c.useState)(4)),l=Object(w.a)(d,2),o=l[0],j=(l[1],K()),b=[];Object(c.useEffect)((function(){m({skip:i,limit:o})}),[]);var m=function(e){fetch(u+"/api/products",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}},e).then((function(e){return e.json()})).then((function(e){b=e,console.log(b),n(e)})).catch((function(e){console.error(e)}))},h=a.map((function(e,t){new Date(e.date).toLocaleDateString();return Object(O.jsx)("div",{className:"item",children:Object(O.jsxs)(q.a,{className:j.root,children:[Object(O.jsxs)($.a,{children:[Object(O.jsx)(L.LazyLoadImage,{alt:"".concat(e._id),src:"".concat(e.imageUrl),width:200,effect:"blur"}),Object(O.jsxs)(V.a,{children:[Object(O.jsx)(G.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(O.jsx)(A.a,{once:!0,children:Object(O.jsx)(G.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})})]})]}),Object(O.jsx)(B.a,{children:Object(O.jsx)(U.a,{variant:"contained",color:"primary",href:"http://localhost:5000/".concat(e._id),children:"View"})})]},e._id)})}));return Object(O.jsxs)("div",{className:"shopping-page",children:[Object(O.jsx)("h1",{children:"Shop"}),0===a.length?Object(O.jsx)("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)("h2",{children:"Loading..."})}):Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container",children:[a.map((function(e,t){})),h]})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"}})]})},J=a(66),W=a.n(J),Z=a(84),Q=a(64),X=a(85),ee=a(179),te=a(174),ae=a(5),ce=(a(89),(new Date).getFullYear()),ne=Array.from({length:12},(function(e,t){var a=t+1;return a<=9?"0"+a:a})),re=Array.from({length:9},(function(e,t){return ce+t})),se=Object(ae.a)((function(e){return{tooltip:{backgroundColor:"#000000",color:"#FFFFFF",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #1b1e23"}}}))(ee.a);function ie(e){var t=e.cardMonth,a=e.cardYear,r=e.onUpdateState,s=e.cardNumberRef,i=e.cardHolderRef,d=e.cardDateRef,l=e.onCardInputFocus,o=e.onCardInputBlur,j=e.cardCvv,u=e.children,m=Object(c.useState)(""),h=Object(w.a)(m,2),p=h[0],f=h[1],x=/^[a-zA-Z\s]*$/,v=n.a.useState({name:"Hello"}),g=Object(w.a)(v,2),y=g[0],F=g[1],k=function(e){var t=e.target,a=t.name,c=t.value;F(Object(_.a)(Object(_.a)({},y),{},Object(N.a)({},a,e.target.value))),r(a,c)};return Object(O.jsxs)("div",{className:"card-form",children:[Object(O.jsx)("div",{className:"card-list",children:u}),Object(O.jsx)("div",{className:"card-form__inner",children:Object(O.jsxs)("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",children:[Object(O.jsx)(se,{TransitionComponent:te.a,arrow:!0,title:"Any information entered here is not stored and is private",interactive:!0,children:Object(O.jsx)("h1",{children:"Please fill out your billing details:"})}),Object(O.jsx)("div",{className:"card-input",children:Object(O.jsx)(ee.a,{placement:"right",arrow:!0,title:"Only accepts numbers",interactive:!0,children:Object(O.jsx)(b.a,{required:!0,onlyAlphanumericRegex:!0,type:"tel",id:"outlined-basic",label:"Card Number",inputProps:{maxlength:19},variant:"outlined",name:"cardNumber",className:"card-input__input",autoComplete:"off",onChange:function(e){var t=e.target,a=t.value,c=t.name,n=a;a=a.replace(/\D/g,""),/^3[47]\d{0,13}$/.test(a)||/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(a)?n=a.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{6})/,"$1 $2 "):/^\d{0,16}$/.test(a)&&(n=a.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{4})/,"$1 $2 ").replace(/(\d{4}) (\d{4}) (\d{4})/,"$1 $2 $3 ")),f(n.trimRight()),r(c,n)},maxLength:"19",ref:s,onFocus:function(e){return l(e,"cardNumber")},onBlur:o,value:p})})}),Object(O.jsx)("div",{className:"card-input",children:Object(O.jsx)(ee.a,{placement:"right",arrow:!0,title:"Only accepts letters",interactive:!0,children:Object(O.jsx)(b.a,{required:!0,type:"text",id:"outlined-basic",label:"Card Holder",variant:"outlined",className:"card-input__input",autoComplete:"off",name:"cardHolder",onChange:k,ref:i,onFocus:function(e){return l(e,"cardHolder")},onBlur:o,inputProps:{maxlength:25},onKeyPress:function(e){x.test(e.key)||e.preventDefault()}})})}),Object(O.jsxs)("div",{className:"card-form__row",children:[Object(O.jsx)("div",{className:"card-form__col",children:Object(O.jsxs)("div",{className:"card-form__group",children:[Object(O.jsx)("label",{htmlFor:"cardMonth",className:"card-input__label",children:"Expiration Date"}),Object(O.jsxs)("select",{className:"card-input__input -select",value:t,name:"cardMonth",onChange:k,ref:d,onFocus:function(e){return l(e,"cardDate")},onBlur:o,children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Month"}),ne.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))]}),Object(O.jsxs)("select",{name:"cardYear",className:"card-input__input -select",value:a,onChange:k,onFocus:function(e){return l(e,"cardDate")},onBlur:o,children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Year"}),re.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))]})]})}),Object(O.jsxs)("div",{className:"card-form__col -cvv",children:[Object(O.jsx)("label",{htmlFor:"cardCVV",className:"card-input__label",children:"CVV"}),Object(O.jsxs)("div",{className:"card-input",children:[Object(O.jsx)(C.a,{placeholder:"CVV",id:"outlined-basic",label:"CVV",variant:"outlined",onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},type:"tel",className:"card-input__input",inputProps:{maxlength:4},autoComplete:"off",name:"cardCvv",onChange:k,onFocus:function(e){r("isCardFlipped",!0)},onBlur:function(e){r("isCardFlipped",!1)},ref:j}),Object(O.jsx)("button",{type:"submit",children:"Enter"})]})]})]})]})})]})}var de=a(180),le=a(177),oe=a(175),je=(a(122),{visa:"^4",amex:"^(34|37)",mastercard:"^5[1-5]",discover:"^6011",unionpay:"^62",troy:"^9792",diners:"^(30[0-5]|36)"}),ue=function(){var e=Math.floor(25*Math.random()+1);return"".concat(e,".jpeg")}(),be=function(e){var t=e.cardHolder,a=e.cardNumber,n=e.cardMonth,r=e.cardYear,s=e.cardCvv,i=e.isCardFlipped,d=e.currentFocusedElm,l=e.onCardElementClick,o=e.cardNumberRef,j=e.cardHolderRef,u=e.cardDateRef,b=Object(c.useState)(null),m=Object(w.a)(b,2),h=m[0],p=m[1],f=Object(c.useMemo)((function(){return function(e){for(var t,a=e,c=0,n=Object.entries(je);c<n.length;c++){var r=Object(w.a)(n[c],2),s=r[0],i=r[1];if(t=new RegExp(i),null!=a.match(t))return s}return"visa"}(a)}),[a]);Object(c.useEffect)((function(){if(d){var e=(t=d.current)?{width:"".concat(t.offsetWidth,"px"),height:"".concat(t.offsetHeight,"px"),transform:"translateX(".concat(t.offsetLeft,"px) translateY(").concat(t.offsetTop,"px)")}:null;p(e)}var t}),[d]);return Object(O.jsxs)("div",{className:"card-item "+(i?"-active":""),children:[Object(O.jsxs)("div",{className:"card-item__side -front",children:[Object(O.jsx)("div",{className:"card-item__focus ".concat(d?"-active":""),style:h}),Object(O.jsx)("div",{className:"card-item__cover",children:Object(O.jsx)("img",{alt:"",src:"/card-background/".concat(ue),className:"card-item__bg"})}),Object(O.jsxs)("div",{className:"card-item__wrapper",children:[Object(O.jsxs)("div",{className:"card-item__top",children:[Object(O.jsx)("img",{src:"/chip.png",alt:"",className:"card-item__chip"}),Object(O.jsx)("div",{className:"card-item__type",children:Object(O.jsx)("img",{alt:f,src:"/card-type/".concat(f,".png"),className:"card-item__typeImg"})})]}),Object(O.jsx)("label",{className:"card-item__number",ref:o,onClick:function(){return l("cardNumber")},children:Object(O.jsx)(de.a,{className:"slide-fade-up",component:"div",children:a?function(e){var t=e.split("");return t.forEach((function(e,a){a>4&&a<14&&" "!==t[a]&&(t[a]="*")})),t}(a).map((function(e,t){return Object(O.jsx)(le.a,{classNames:"slide-fade-up",timeout:250,children:Object(O.jsx)("div",{className:"card-item__numberItem",children:e})},t)})):Object(O.jsx)(le.a,{classNames:"slide-fade-up",timeout:250,children:Object(O.jsx)("div",{className:"card-item__numberItem",children:"#"})})})}),Object(O.jsxs)("div",{className:"card-item__content",children:[Object(O.jsxs)("label",{className:"card-item__info",onClick:function(){return l("cardHolder")},ref:j,children:[Object(O.jsx)("div",{className:"card-item__holder",children:"Card Holder"}),Object(O.jsx)("div",{className:"card-item__name",children:Object(O.jsx)(de.a,{component:"div",className:"slide-fade-up",children:"FULL NAME"===t?Object(O.jsx)(le.a,{classNames:"slide-fade-up",timeout:250,children:Object(O.jsx)("div",{children:"FULL NAME"})}):t.split("").map((function(e,t){return Object(O.jsx)(le.a,{timeout:250,classNames:"slide-fade-right",children:Object(O.jsx)("span",{className:"card-item__nameItem",children:e})},t)}))})})]}),Object(O.jsxs)("div",{className:"card-item__date",onClick:function(){return l("cardDate")},ref:u,children:[Object(O.jsx)("label",{className:"card-item__dateTitle",children:"Expires"}),Object(O.jsx)("label",{className:"card-item__dateItem",children:Object(O.jsx)(oe.a,{"in-out":!0,children:Object(O.jsx)(le.a,{classNames:"slide-fade-up",timeout:200,children:Object(O.jsxs)("span",{children:[n||"MM"," "]})},n)})}),"/",Object(O.jsx)("label",{htmlFor:"cardYear",className:"card-item__dateItem",children:Object(O.jsx)(oe.a,{"out-in":!0,children:Object(O.jsx)(le.a,{classNames:"slide-fade-up",timeout:250,children:Object(O.jsx)("span",{children:r?r.toString().substr(-2):"YY"})},r)})})]})]})]})]}),Object(O.jsxs)("div",{className:"card-item__side -back",children:[Object(O.jsx)("div",{className:"card-item__cover",children:Object(O.jsx)("img",{alt:"",src:"/card-background/".concat(ue),className:"card-item__bg"})}),Object(O.jsx)("div",{className:"card-item__band"}),Object(O.jsxs)("div",{className:"card-item__cvv",children:[Object(O.jsx)("div",{className:"card-item__cvvTitle",children:"CVV"}),Object(O.jsx)("div",{className:"card-item__cvvBand",children:Object(O.jsx)(de.a,{children:s.split("").map((function(e,t){return Object(O.jsx)(le.a,{classNames:"zoom-in-out",timeout:250,children:Object(O.jsx)("span",{children:"*"})},t)}))})}),Object(O.jsx)("div",{className:"card-item__type",children:Object(O.jsx)("img",{alt:"card-type",src:"/card-type/visa.png",className:"card-item__typeImg"})})]})]})]})},me={cardNumber:"#### #### #### ####",cardHolder:"FULL NAME",cardMonth:"",cardYear:"",cardCvv:"",isCardFlipped:!1},he=function(){var e=Object(c.useState)(me),t=Object(w.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(w.a)(r,2),i=s[0],d=s[1],l=Object(c.useState)(null),o=Object(w.a)(l,2),j=o[0],u=o[1];Object(c.useEffect)((function(){(function(){var e=Object(Z.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(X.a)("pk_test_51IGQq0I6UP1sMoBUZ9R2ncKJu6YZKT3OfO3wyO0HkGmSeDAT9lw2M6eyEc0ETNVnqrkhgK7uj7TOLdtpGmYgqYyt003SAN0Qe4"),u(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=Object(c.useCallback)((function(e,t){n(Object(_.a)(Object(_.a)({},a),{},Object(N.a)({},e,t||me[e])))}),[a]),m={cardNumber:Object(c.useRef)(),cardHolder:Object(c.useRef)(),cardDate:Object(c.useRef)(),cardCvv:Object(c.useRef)()},h=Object(c.useCallback)((function(e){m[e].current.focus()})),p={cardNumber:Object(c.useRef)(),cardHolder:Object(c.useRef)(),cardDate:Object(c.useRef)()},f=Object(c.useCallback)((function(){d(null)}),[]);return Object(O.jsx)("div",{className:"wrapper",children:j?Object(O.jsx)(Q.Elements,{stripe:j,children:Object(O.jsx)(ie,{cardMonth:a.cardMonth,cardYear:a.cardYear,onUpdateState:b,cardNumberRef:m.cardNumber,cardHolderRef:m.cardHolder,cardDateRef:m.cardDate,onCardInputFocus:function(e,t){d(p[t])},onCardInputBlur:f,children:Object(O.jsx)(be,{cardNumber:a.cardNumber,cardHolder:a.cardHolder,cardMonth:a.cardMonth,cardYear:a.cardYear,cardCvv:a.cardCvv,isCardFlipped:a.isCardFlipped,currentFocusedElm:i,onCardElementClick:h,cardNumberRef:p.cardNumber,cardHolderRef:p.cardHolder,cardDateRef:p.cardDate})})}):null})};function pe(){var e=Object(v.f)().id,t=Object(c.useState)({}),a=Object(w.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){s()}),[]);var s=function(t){fetch(u+"/api/"+e,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){console.error(e)}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)(ee.a,{disableFocusListener:!0,interactive:!0,placement:"bottom-start",title:"Product ID: ".concat(n._id),children:Object(O.jsx)("h1",{children:n.name})}),Object(O.jsx)("p",{children:n.price})]})}var Oe=function(){return Object(O.jsx)("div",{className:"app",children:Object(O.jsx)(x.a,{children:Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{exact:!0,path:"/signup",component:f}),Object(O.jsx)(v.a,{exact:!0,path:"/shop",component:z}),Object(O.jsx)(v.a,{exact:!0,path:"/login",component:T}),Object(O.jsx)(v.a,{exact:!0,path:"/upload",component:g}),Object(O.jsx)(v.a,{exact:!0,path:"/pay",component:he}),Object(O.jsx)(v.a,{exact:!0,path:"/:id",name:"id",component:pe})]})})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,181)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(Oe,{})}),document.getElementById("root")),fe()}},[[124,1,2]]]);
//# sourceMappingURL=main.79ed514c.chunk.js.map