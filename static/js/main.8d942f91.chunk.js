(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(48),c=a.n(l),i=(a(60),a(20)),u=a(9),s=a(10),m=a(49),o=a(50),d=a(54),b=a(51),E=a(53),h=a(6),v=a(52),p=a.n(v),f=a(21),w=a.n(f);function F(e){var t=e.subsciberList,a=e.deleteSubscriber;return r.a.createElement("section",{className:"directory-list"},r.a.createElement("table",null,t.length>0&&r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Phone No.")),t.map(function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:a(t)},"Delete")))})))}function S(e){var t=e.showValidationError,a=e.currentItem;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"validataion-error"},"Please enter valid",!a.name&&!a.number&&r.a.createElement("span",null,"   name and number"),!a.name&&r.a.createElement("span",null,"  name"),!a.number&&r.a.createElement("span",null,"  number")))}function N(e){var t=e.currentItem,a=e.showAddForm,n=e.showValidationError,l=e.updateField,c=e.addSubscriber;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("section",{className:"register-form"},r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"Name"),r.a.createElement("span",null,r.a.createElement("input",{onChange:l("name"),value:t.name}))),r.a.createElement("div",null,r.a.createElement("div",{className:"label"},"Phone No."),r.a.createElement("span",null,r.a.createElement("input",{type:"number",onChange:l("number"),value:t.number}))),r.a.createElement(S,{showValidationError:n,currentItem:t}),r.a.createElement("div",{className:"notification"},r.a.createElement("div",null,"Subscriber to be added"),t.name&&r.a.createElement("div",null,"Name: ",r.a.createElement("b",null,t.name)),t.number&&r.a.createElement("div",null,"Phone no: ",r.a.createElement("b",null,t.number))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-secondary add-subsciber",onClick:c},"Add Subscriber"))))}a(119);var y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).deleteSubscriber=function(e){return function(t){var n=a.state.subsciberList,r=[].concat(Object(s.a)(n.slice(0,e)),Object(s.a)(n.slice(e+1,n.length)));a.updateState({subsciberList:r})}},a.updateField=function(e){return function(t){var n=Object(u.a)({},e,t.target.value),r=Object(i.a)({},a.state.currentItem,n);a.updateState({currentItem:r,showValidationError:!1})}},a.state={subsciberList:[],currentItem:{name:"",number:""},showValidationError:!1,showAddForm:!1},p()(Object(h.a)(Object(h.a)(a)),["addSubscriber","addForm","hideForm","updateState"]),a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"addSubscriber",value:function(e){var t=this.state,a=t.currentItem,n=t.subsciberList,r=a.name,l=a.number;if(w()(r)||w()(l))this.updateState({showValidationError:!0});else{var c=[].concat(Object(s.a)(n),[a]);this.updateState({subsciberList:c,currentItem:{name:"",number:""}})}}},{key:"addForm",value:function(){this.updateState({showAddForm:!0,currentItem:{name:"",number:""}})}},{key:"hideForm",value:function(){this.updateState({showAddForm:!1})}},{key:"updateState",value:function(e){this.setState(Object(i.a)({},e))}},{key:"render",value:function(){var e=this.state,t=e.currentItem,a=e.showAddForm,n=e.showValidationError,l=e.subsciberList;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stick-header-title"},"Phone Directory"),r.a.createElement("div",{className:"directory-container"},r.a.createElement("div",{className:"btn btn-primary",onClick:this.addForm},"ADD"),a&&r.a.createElement("div",{className:"btn back-button",onClick:this.hideForm},"Hide Form"),r.a.createElement(F,{subsciberList:l,deleteSubscriber:this.deleteSubscriber}),r.a.createElement(N,{currentItem:t,showAddForm:a,updateField:this.updateField,addSubscriber:this.addSubscriber,showValidationError:n})))}}]),t}(n.Component);c.a.render(r.a.createElement(y,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a(120)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.8d942f91.chunk.js.map