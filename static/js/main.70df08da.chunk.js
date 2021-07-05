(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var a,r=t(1),c=t.n(r),i=t(9),o=t.n(i),s=(t(18),t(12)),b=t(10),u=t(4),d=t(5),l=t(7),h=t(6),j=t(2),m=t(3),p=m.a.button(a||(a=Object(j.a)(["\n  font-weight: 400;\n  line-height: 1.33;\n  display: block;\n  background-color: orange;\n  margin-top: 15px;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  text-align: center;\n  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),\n    0px 2px 1px rgb(0 0 0 / 20%);\n"]))),x=t(0);var O,f,g,v,C=function(n){var e=n.onClick,t=n.text;return Object(x.jsx)(p,{onClick:e,children:t})},k=m.a.form(O||(O=Object(j.a)(["background - color: #fff;\npadding: 15px;"]))),S=function(n){Object(l.a)(t,n);var e=Object(h.a)(t);function t(){return Object(u.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var n=this.props,e=n.onSubmit,t=n.onChange,a=(n.onClick,n.contacts,n.name),r=n.number;return Object(x.jsx)("div",{children:Object(x.jsxs)(k,{onSubmit:e,children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("h2",{children:"Name"}),Object(x.jsx)("input",{type:"text",name:"name",value:a,onChange:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("h2",{children:"Number"}),Object(x.jsx)("input",{type:"tel",name:"number",value:r,onChange:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsx)(C,{text:"Add contact"})]})})}}]),t}(r.Component),w=m.a.ul(f||(f=Object(j.a)(["\n  display: block;\n  border-radius: 4px;\n  padding: 24px;\n  //   background-color: #7c7c7c;\n  //   color: #fff;\n"]))),y=m.a.li(g||(g=Object(j.a)(["\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n"]))),A=function(n){Object(l.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={isShow:!1},n.show=function(){n.setState({isShow:!0})},n}return Object(d.a)(t,[{key:"render",value:function(){var n=this.props.contacts,e=this.state.isShow;return Object(x.jsx)(w,{children:""===n?e:n.map((function(n){return Object(x.jsxs)(y,{children:[n.name,": ",n.number]},n.id)}))})}}]),t}(r.Component),F=m.a.div(v||(v=Object(j.a)(["\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  max-width: 400px;\n"])));var z=function(n){var e=n.children;return Object(x.jsx)(F,{children:e})},B=t(25),J=function(n){Object(l.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(b.a)({},r,a))},n.handleSubmit=function(e){e.preventDefault();var t=Object(B.a)(),a=n.state;a.name,a.number;n.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[{id:t,name:n.state.name,number:n.state.number}])}})),n.clearForm()},n.clearForm=function(){n.setState({number:"",name:""})},n}return Object(d.a)(t,[{key:"render",value:function(){var n=this.state,e=n.contacts,t=n.name,a=n.number;return Object(x.jsxs)(z,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(S,{onSubmit:this.handleSubmit,contacts:e,name:t,number:a,onChange:this.handleChange}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(A,{contacts:e,name:t})]})}}]),t}(r.Component),P=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root")),P()}},[[23,1,2]]]);
//# sourceMappingURL=main.70df08da.chunk.js.map