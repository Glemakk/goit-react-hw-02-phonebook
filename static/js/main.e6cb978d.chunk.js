(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a,r=t(2),c=t.n(r),o=t(12),i=t.n(o),s=(t(20),t(14)),b=t(10),l=t(5),d=t(6),u=t(8),j=t(7),h=t(3),x=t(4),p=x.a.button(a||(a=Object(h.a)(["\n  font-weight: 400;\n  line-height: 1.33;\n\n  background-color: orange;\n  margin-top: 15px;\n  margin-left: 27px;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  text-align: center;\n  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),\n    0px 2px 1px rgb(0 0 0 / 20%);\n    &:focus,\n  &:hover {\n    box-shadow: 2px 3px 17px 0px rgb(0 0 0 / 78%), -1px 0px 2px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);\n    transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),f=t(1);var g,O,m,v,C,w,y,k=function(e){var n=e.onClick,t=e.text;return Object(f.jsx)(p,{onClick:n,children:t})},S=t(9),z=t(0),A=x.a.form(g||(g=Object(h.a)(["background - color: #fff;\npadding: 15px;"]))),F=x.a.div(O||(O=Object(h.a)(["\n  display: flex;\n"]))),P=x.a.input(m||(m=Object(h.a)(["\n \n  padding: 3px 10px;\n border: 2px solid rgba(33, 33, 33, 0.2);\n box-sizing: border-box;\n  border-radius: 4px;\n  &:focus,\n  &:hover {\n    border-color: #00adffa8;\n    outline: none;\n    transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);"]))),L=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).handleChange=function(n){var t=n.target,a=t.value,r=t.name;e.setState(Object(b.a)({},r,a))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.onSubmit,t=e.onChange,a=e.name,r=e.number;return Object(f.jsx)("div",{children:Object(f.jsxs)(A,{onSubmit:n,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("h2",{children:"Name"}),Object(f.jsxs)(F,{children:[Object(f.jsx)(z.b.Provider,{value:{size:"23px"},children:Object(f.jsx)(S.a,{})}),"\xa0",Object(f.jsx)(P,{type:"text",name:"name",value:a,onChange:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})]})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("h2",{children:"Number"}),Object(f.jsxs)(F,{children:[Object(f.jsx)(z.b.Provider,{value:{size:"23px"},children:Object(f.jsx)(S.b,{})}),"\xa0",Object(f.jsx)(P,{type:"tel",name:"number",value:r,onChange:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off"})]})]}),Object(f.jsx)(k,{text:"Add contact"})]})})}}]),t}(r.Component),B=x.a.ul(v||(v=Object(h.a)(["\n  border-radius: 4px;\n  padding: 24px;\n  //   background-color: #7c7c7c;\n  //   color: #fff;\n"]))),D=x.a.li(C||(C=Object(h.a)(["\n  display: flex;\n\n  justify-content: space-between;\n  align-items: baseline;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n"]))),J=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={isShow:!1},e.show=function(){e.setState({isShow:!0})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.contacts,t=e.onClick;this.state.isShow;return Object(f.jsx)(B,{children:n.map((function(e){return Object(f.jsxs)(D,{children:[e.name,": ",e.number,Object(f.jsx)(k,{type:"button",text:"Delete",onClick:function(){return t(e.id)}})]},e.id)}))})}}]),t}(r.Component),T=x.a.div(w||(w=Object(h.a)(["\n  padding: 15px;\n"])));function Z(e){var n=e.filter,t=e.onChange;return Object(f.jsx)("label",{children:Object(f.jsxs)(T,{children:[Object(f.jsx)("h3",{children:"Find contacts by name"}),Object(f.jsxs)(F,{children:[Object(f.jsx)(z.b.Provider,{value:{size:"23px"},children:Object(f.jsx)(S.c,{})}),"\xa0",Object(f.jsx)(P,{type:"text",name:"filter",value:n,onChange:t,placeholder:"Search contact",autoComplete:"off"})]})]})})}var q=x.a.div(y||(y=Object(h.a)(["\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: rgb(0 0 0 / 12%);\n  background-image: linear-gradient(28deg, #a8ff36, transparent);\n  border: 2px solid #4a4a4a;\n  border-radius: 5px;\n  max-width: 400px;\n"])));var I=function(e){var n=e.children;return Object(f.jsx)(q,{children:n})},M=t(27),N=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"}],filter:""},e.handleChange=function(n){var t=n.currentTarget,a=t.value,r=t.name;e.setState(Object(b.a)({},r,a))},e.handleSubmit=function(n){n.preventDefault();var t=Object(M.a)(),a=e.state,r=a.name,c=a.number,o=a.contacts;o.find((function(e){return e.name.includes(r)}))?alert("".concat(r," is already in contacts")):e.setState({contacts:[].concat(Object(s.a)(o),[{id:t,name:r,number:c}])}),e.clearForm()},e.clearForm=function(){e.setState({number:"",name:""})},e.getVisibleContacts=function(){var n=e.state,t=n.filter,a=n.contacts,r=t.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(n){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.number,a=e.filter,r=this.getVisibleContacts();return Object(f.jsxs)(I,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(L,{onSubmit:this.handleSubmit,name:n,number:t,onChange:this.handleChange}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(Z,{onChange:this.handleChange,filter:a}),Object(f.jsx)(J,{contacts:r,onClick:this.deleteContact})]})}}]),t}(r.Component),V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),V()}},[[25,1,2]]]);
//# sourceMappingURL=main.e6cb978d.chunk.js.map