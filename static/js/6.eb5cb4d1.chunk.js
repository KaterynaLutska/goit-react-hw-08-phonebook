(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{183:function(t,e,n){t.exports={phonebookInputFields:"ContactForm_phonebookInputFields__1DCHk",phonebookInput:"ContactForm_phonebookInput__2p2Aq",filterInput:"ContactForm_filterInput__dyhuB"}},186:function(t,e,n){t.exports={filterInput:"Filter_filterInput__u16Kg"}},216:function(t,e,n){"use strict";n.r(e);var a=n(61),r=n(62),c=n(67),s=n(66),o=n(4),i=n(0),u=n.n(i),l=n(17),b=n(26),d=n.n(b),p=n(38),j=n(29),h=n.n(j),m=n(15),f={fetchContacts:function(){return function(){var t=Object(p.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(m.l)()),t.prev=1,t.next=4,h.a.get("/contacts");case 4:n=t.sent,e(Object(m.m)(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(m.k)(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){return function(){var e=Object(p.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(m.b)()),e.prev=1,e.next=4,h.a.post("/contacts",t);case 4:a=e.sent,n(Object(m.c)(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Object(m.a)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},deleteContacts:function(t){return function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(m.i)()),e.prev=1,e.next=4,h.a.delete("/contacts/".concat(t));case 4:e.sent,n(Object(m.j)(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Object(m.h)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},changeContact:function(t){return function(){var e=Object(p.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(m.e)()),e.prev=1,e.next=4,h.a.patch("/contacts/".concat(t));case 4:e.sent,n(Object(m.f)(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(Object(m.d)(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},O=n(45),x=function(t){return t.contacts.items},v=function(t){return t.contacts.filter},g={contactsArray:x,getFilter:v,getVisibleContacts:Object(O.a)([x,v],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},C=(n(75),n(183)),k=n.n(C),y=n(182),w=n(206),F=n(207),I=n(168),A=n(184),N=n.n(A),_=n(185),S=n.n(_),D=n(2),T=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(o.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n,a=t.props.contacts,r=t.state,c=r.name,s=r.number;return t.reset(),a.find((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):a.some((function(t){return t.number===s}))?alert("Number ".concat(s," is already in contacts")):(n={name:c,number:s},t.props.onSubmit(n))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(D.jsx)(y.a,{maxWidth:"sm",children:Object(D.jsx)("form",{onSubmit:this.handleSubmit,children:Object(D.jsxs)("div",{className:k.a.phonebookInputFields,children:[Object(D.jsx)("label",{htmlFor:this.nameInputId,className:"phonebook-label",children:Object(D.jsx)(w.a,{className:k.a.phonebookInput,startAdornment:Object(D.jsx)(F.a,{position:"start",children:Object(D.jsx)(N.a,{})}),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,title:"The name can only consist of letters, apostrophes, dashes and spaces. For example: Jacob Mercer...",placeholder:"name",onChange:this.handleChange,required:!0})}),Object(D.jsx)("label",{className:"phonebook-label",children:Object(D.jsx)(w.a,{startAdornment:Object(D.jsx)(F.a,{position:"start",children:Object(D.jsx)(S.a,{})}),className:k.a.phonebookInput,type:"tel",name:"number",value:n,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",placeholder:"number",title:"The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +",onChange:this.handleChange,required:!0})}),Object(D.jsx)(I.a,{color:"primary",variant:"contained",type:"submit",children:"Add contact"})]})})})}}]),n}(i.Component),z=Object(l.b)((function(t){return{contacts:g.contactsArray(t)}}),(function(t){return{onSubmit:function(e){return t(f.addContact(e))}}}))(T),L=n(8),q=n.n(L),B=n(186),J=n.n(B),M=n(187),W=n.n(M),Z=function(t){var e=t.filter,n=t.changeFilter;return Object(D.jsx)(y.a,{maxWidth:"sm",children:Object(D.jsx)("div",{children:Object(D.jsx)("label",{children:Object(D.jsx)(w.a,{className:J.a.filterInput,startAdornment:Object(D.jsx)(F.a,{position:"start",children:Object(D.jsx)(W.a,{})}),type:"text",value:e,placeholder:"find contacts by name...",onChange:n})})})})},V=Object(l.b)((function(t){return{filter:g.getFilter(t)}}),(function(t){return{changeFilter:function(e){return t(Object(m.g)(e.target.value))}}}))(Z);Z.protoType={filter:q.a.string,changeFilter:q.a.func};var E=n(160),H=n(210),K=n(211),P=n(212),$=n(213),G=n(165),Q=n(214),R=n(87),U=n(188),X=n(142),Y=n(217),tt=n(208),et=n(209),nt=Object(X.a)((function(t){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}}}));function at(t){t.id;var e=nt(),n=u.a.useState(!1),a=Object(U.a)(n,2),r=a[0],c=a[1];return Object(D.jsxs)("div",{children:[Object(D.jsx)(I.a,{size:"small",color:"primary",variant:"contained",type:"button",onClick:function(){c(!0)},children:"Edit"}),Object(D.jsx)(Y.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:r,onClose:function(){c(!1)},closeAfterTransition:!0,BackdropComponent:tt.a,BackdropProps:{timeout:500},children:Object(D.jsx)(et.a,{in:r,children:Object(D.jsx)("div",{className:e.paper,children:Object(D.jsx)(z,{})})})})]})}var rt=function(t){var e=t.contacts,n=t.onDelete,a=t.avatar,r=Object(R.a)();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(E.a,{}),Object(D.jsx)(y.a,{maxWidth:"md",className:r.cardCrid,children:Object(D.jsx)(H.a,{container:!0,spacing:4,children:e.map((function(t){return Object(D.jsx)(H.a,{item:!0,xs:12,sm:6,children:Object(D.jsxs)(K.a,{className:r.card,children:[Object(D.jsx)(P.a,{className:r.cardMedia,image:a,title:"imgTitle"}),Object(D.jsxs)($.a,{className:r.cardContent,children:[Object(D.jsxs)(G.a,{variant:"h5",children:[" ",t.name+":"," "]}),Object(D.jsx)(G.a,{variant:"h5",children:t.number}),Object(D.jsx)(G.a,{variant:"h4",children:t.message})]}),Object(D.jsxs)(Q.a,{children:[Object(D.jsx)(I.a,{onClick:function(){return n(t.id)},size:"small",color:"primary",variant:"contained",children:"Delete"}),Object(D.jsx)(at,{id:t.id})]})]})},t.id)}))})})]})},ct=n.p+"static/media/face.c3d96184.png",st=Object(l.b)((function(t){return{contacts:g.getVisibleContacts(t),avatar:ct}}),(function(t){return{onDelete:function(e){return t(f.deleteContacts(e))}}}))(rt),ot=function(t){Object(c.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props.items;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(z,{}),t.length>0&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(V,{}),Object(D.jsx)(st,{})]})]})}}]),n}(i.Component),it={fetchContacts:f.fetchContacts};e.default=Object(l.b)((function(t){return{items:g.contactsArray(t)}}),it)(ot)}}]);
//# sourceMappingURL=6.eb5cb4d1.chunk.js.map