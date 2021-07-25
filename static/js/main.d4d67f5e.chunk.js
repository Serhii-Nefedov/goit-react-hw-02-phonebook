(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={filter:"Filter_filter__9DUgv",filter__input:"Filter_filter__input__3I7ok",filter_label:"Filter_filter_label__1THiH"}},12:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__1GTy8",TaskList_item:"ContactList_TaskList_item__33I5k",completed:"ContactList_completed__24GUY",TaskList_text:"ContactList_TaskList_text__IJYF0",TaskList_actions:"ContactList_TaskList_actions__24cUA",TaskList_button:"ContactList_TaskList_button__agNR5"}},2:function(t,e,n){t.exports={TaskEditor:"ContactForm_TaskEditor__-ifRW",TaskEditor_label:"ContactForm_TaskEditor_label__2CgcN",TaskEditor_input:"ContactForm_TaskEditor_input__CWqH-",TaskEditorinput:"ContactForm_TaskEditorinput__18B9W",TaskEditor_button:"ContactForm_TaskEditor_button__21Ze5"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(14),c=n.n(s),r=n(15),o=n(4),l=n(7),u=n(8),b=n(10),d=n(9),m=n(3),_=n.n(m),h=n(6),j=n(2),f=n.n(j),p=n(0),k=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,i=n.value;t.setState(Object(h.a)({},a,i))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(o.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:f.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:f.a.TaskEditor_label,children:["Name",Object(p.jsx)("input",{className:f.a.TaskEditor_input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"Ivan Ivanov"})]}),Object(p.jsxs)("label",{className:f.a.TaskEditor_label,children:["Number",Object(p.jsx)("input",{className:f.a.TaskEditor_input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"111-11-11"})]}),Object(p.jsx)("button",{className:f.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(11),v=n.n(C);var O=function(t){var e=t.value,n=t.onChangeFilter;return Object(p.jsx)("div",{className:v.a.filter,children:Object(p.jsxs)("label",{className:v.a.filter_label,children:["Find contacts by name",Object(p.jsx)("input",{className:v.a.filter__input,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})},g=n(12),T=n.n(g),x=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(p.jsx)("ul",{className:T.a.TaskList,children:e.map((function(t){return Object(p.jsxs)("li",{className:T.a.TaskList_item,children:[t.name+": "+t.number,Object(p.jsx)("button",{className:T.a.TaskList_button,type:"button",name:"delte",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})},L=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={contacts:[{id:_.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:_.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:_.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:_.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else if(/\d{3}[-]\d{2}[-]\d{2}/g.test(e.number)){var n=Object(o.a)(Object(o.a)({},e),{},{id:_.a.generate()});t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[n])}}))}else alert("Enter the correct number phone!")},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(k,{onAddContact:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(p.jsx)(O,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&Object(p.jsx)(x,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(a.Component);n(29);c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d4d67f5e.chunk.js.map