(this.webpackJsonpprototype=this.webpackJsonpprototype||[]).push([[0],{19:function(e,t,a){},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=a(3),i=a(1),m=a(7),s=a(8),u=a(10),d=a(9),p=(a(27),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleuser=function(t){e.setState({username:t.target.value})},e.handlepsw=function(t){e.setState({password:t.target.value})},e.handlesubmit=function(){e.state.uname===e.state.username&&e.state.psw===e.state.password?(e.setState({Login:1}),sessionStorage.setItem("id",e.state.id),e.props.history.push("/finalroute"),window.location.reload()):(sessionStorage.setItem("id","invalid"),alert("Please Enter Correct Userid Or Password"),window.location.reload())},e.state={id:"",uname:"",psw:"",username:"",password:"",Login:""},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("uname",this.state.uname),console.log("psw",this.state.psw),console.log("username",this.state.username),console.log("password",this.state.password),console.log("login",this.state.Login),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:" content panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("center",null,"LOGIN SCREEN")),l.a.createElement("div",{className:"panel-body bgclass"},l.a.createElement("label",null," Enter User Name"),l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon"},l.a.createElement("i",{className:"glyphicon glyphicon-user"})),l.a.createElement("input",{placeholder:" Enter User Name",className:"form-control",onChange:this.handleuser,required:!0})),l.a.createElement("label",null,"Enter Password"),l.a.createElement("div",{className:"input-group"},l.a.createElement("span",{className:"input-group-addon"},l.a.createElement("i",{className:"glyphicon glyphicon-lock"})),l.a.createElement("input",{type:"password",placeholder:" Enter password",className:"form-control",onChange:this.handlepsw,required:!0}))),l.a.createElement("div",{className:"panel-footer"},l.a.createElement("center",null,l.a.createElement("button",{type:"submit",className:"btn btn-danger btn-lg",onClick:this.handlesubmit},"Submit"))))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://devapirt.herokuapp.com/mylogin/login",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({uname:t[0].username,psw:t[0].password,id:t[0]._id})}))}}]),a}(n.Component)),h=Object(i.e)(p);if("5f9f68ba213759f530667ab7"==="".concat(sessionStorage.getItem("id")))var E="/5f9f68ba213759f530667ab7add",f="/5f9f68ba213759f530667ab7update",g="/5f9f68ba213759f530667ab7delete";else E="/",f="/",g="/";var v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handlelogout=function(){sessionStorage.setItem("id","invalid"),e.setState({dat:"/"}),window.location.reload()},e.state={dat:""},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("dat value= ",this.state.dat),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-inverse"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement(o.b,{className:"navbar-brand"},l.a.createElement("img",{src:"https://content3.jdmagicbox.com/comp/rourkela/a9/9999px661.x661.170511131851.i7a9/catalogue/the-prestige-hotel-and-convention-civil-township-rourkela-hotels-lo2rr6bv01.jpg",className:"img imgresponsive",style:{marginLeft:50,height:30,width:50}}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(o.b,{to:E},"ADD")),l.a.createElement("li",null,l.a.createElement(o.b,{to:f},"UPDATE")),l.a.createElement("li",null,l.a.createElement(o.b,{to:g},"DELETE"))),l.a.createElement("ul",{class:"nav navbar-nav navbar-right"},l.a.createElement("li",{onClick:this.handlelogout},l.a.createElement(o.b,{to:this.state.dat},l.a.createElement("span",{class:"glyphicon glyphicon-log-out"})," Logout")))))))}}]),a}(n.Component),b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("hr",null),l.a.createElement("center",null,l.a.createElement("h3",null,"\xa9 Ratikanta ",e.year," ",e.month))))},N=(a(19),"https://devapirt.herokuapp.com/menu"),y=Math.floor(1e4*Math.random()).toString(),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name)}))},e.handlemeal=function(t){e.setState({mname:t.target.value});var a=t.target.value,n="".concat(N,"/").concat(a);fetch(n,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({mealid:t[0].mealid})})),console.log(n)},e.handleitemname=function(t){e.setState({iname:t.target.value})},e.handleitemprice=function(t){e.setState({iprice:t.target.value})},e.handleimage=function(t){e.setState({image:t.target.value})},e.handleSubmit=function(){var t={itemid:e.state.itemid,name:e.state.iname,price:e.state.iprice,mealid:e.state.mealid,image:e.state.image};fetch("https://devapirt.herokuapp.com/add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),alert("Data Added Successfully"),console.log(e.state)},e.state={id:"",mealname:"",mealid:"",itemid:y,name:"",price:"",image:""},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("meal id",this.state.mealid),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("center",null,"ADD")),l.a.createElement("div",{className:"panel-body add-panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("label",null,"Enter Meal Type"),l.a.createElement("select",{className:" form-control locationDropDown",onChange:this.handlemeal},l.a.createElement("option",null,"----SELECT MEAL---------"),this.renderCity(this.state.id)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Item Name"),l.a.createElement("input",{placeholder:"Enter Name here",className:"form-control input",onChange:this.handleitemname})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Price"),l.a.createElement("input",{placeholder:"Enter Price here",className:"form-control",onChange:this.handleitemprice})))),l.a.createElement("div",{className:"panel-footer "},l.a.createElement("center",null,l.a.createElement("button",{type:"submit",className:"btn btn-danger btn-lg",onClick:this.handleSubmit},"Add"))))))}},{key:"componentDidMount",value:function(){var e=this;fetch(N,{Method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({id:t})}))}}]),a}(n.Component),j=Object(i.e)(S),C=a(13),w=(a(33),"https://devapirt.herokuapp.com/item"),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name)}))},n.handlemeal=function(e){var t=e.target.value,a="".concat(w,"?mealid=").concat(t);fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({item:e})})),console.log(a)},n.handleitemname=function(e){var t=e.target.value,a="".concat(w,"?itemid=").concat(t);a==="".concat(w,"?itemid=----SELECT ITEM NAME---------")?n.setState({name:"",price:""}):fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({itm:e,name:e[0].name,price:e[0].price,itemid:e[0].itemid})}))},n.renderitem=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e.itemid},e.name)}))},n.renderitemname=function(e){if(e)return e.map((function(e){return l.a.createElement("input",{value:e.name})}))},n.handleEdit=function(){var e=n.state.itemid.toString(),t=n.state.price.toString(),a={itemid:e,name:n.state.name,price:t};fetch("https://devapirt.herokuapp.com/update",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}),alert("Data Updated Successfully")},n.state={id:"",item:"",itm:"",mname:"",mealname:"",mealid:"",itemid:"",name:"",price:""},n.handlename=n.handlename.bind(Object(C.a)(n)),n.handleitemprice=n.handleitemprice.bind(Object(C.a)(n)),n}return Object(s.a)(a,[{key:"handlename",value:function(e){this.setState({name:e.target.value})}},{key:"handleitemprice",value:function(e){this.setState({price:e.target.value})}},{key:"render",value:function(){return console.log("state data is = ",this.state),console.log("itm data ",this.state.itm),console.log("name =====",this.state.name),console.log("itemid =====",this.state.itemid),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("center",null,"UPDATE")),l.a.createElement("div",{className:"panel-body add-panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Meal Type"),l.a.createElement("select",{className:" form-control locationDropDown",onChange:this.handlemeal},l.a.createElement("option",null,"----SELECT MEAL---------"),this.renderCity(this.state.id))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Select Item Name"),l.a.createElement("select",{className:" form-control locationDropDown",onChange:this.handleitemname},l.a.createElement("option",null,"----SELECT ITEM NAME---------"),this.renderitem(this.state.item))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Item Name"),l.a.createElement("input",{type:"text",placeholder:"Enter Name here",className:"form-control input",value:this.state.name,onChange:this.handlename})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Price"),l.a.createElement("input",{type:"text",placeholder:"Enter Price here",value:this.state.price,className:"form-control input",onChange:this.handleitemprice})))),l.a.createElement("div",{className:"panel-footer"},l.a.createElement("center",null,l.a.createElement("button",{type:"submit",className:"btn btn-danger btn-lg",onClick:this.handleEdit},"EDIT"))))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://devapirt.herokuapp.com/menu",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({id:t})}))}}]),a}(n.Component),O=Object(i.e)(T),k="https://devapirt.herokuapp.com/item",D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).renderMeal=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name)}))},e.handlemeal=function(t){var a=t.target.value,n="".concat(k,"?mealid=").concat(a);fetch(n,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({item:t})})),console.log(n)},e.handleitemname=function(t){var a=t.target.value,n="".concat(k,"?itemid=").concat(a);n==="".concat(k,"?itemid=----SELECT ITEM NAME---------")?e.setState({name:"",price:""}):fetch(n,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({itm:t,name:t[0].name,price:t[0].price,itemid:t[0].itemid})}))},e.renderitem=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e.itemid},e.name)}))},e.renderitemname=function(e){if(e)return e.map((function(e){return l.a.createElement("input",{value:e.name})}))},e.handleDelete=function(){var t={itemid:e.state.itemid.toString()};fetch("https://devapirt.herokuapp.com/delete",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),alert("Data Deleted Successfully")},e.state={id:"",item:"",itm:"",mname:"",mealname:"",mealid:"",itemid:"",name:"",price:""},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("state data is = ",this.state),console.log("itm data ",this.state.itm),console.log("name =====",this.state.itemid),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("center",null,"DELETE")),l.a.createElement("div",{className:"panel-body add-panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Meal Type"),l.a.createElement("select",{className:" form-control locationDropDown",onChange:this.handlemeal},l.a.createElement("option",null,"----SELECT MEAL---------"),this.renderMeal(this.state.id))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Select Item Name"),l.a.createElement("select",{className:" form-control locationDropDown",onChange:this.handleitemname},l.a.createElement("option",null,"----SELECT ITEM NAME---------"),this.renderitem(this.state.item))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Item Name"),l.a.createElement("input",{type:"text",placeholder:"Enter Name here",className:"form-control",value:this.state.name,onChange:this.handlename,readOnly:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Enter Price"),l.a.createElement("input",{type:"text",placeholder:"Enter Price here",value:this.state.price,className:"form-control",onChange:this.handleitemprice,readOnly:!0})))),l.a.createElement("div",{className:"panel-footer"},l.a.createElement("center",null,l.a.createElement("button",{type:"submit",className:"btn btn-danger btn-lg",onClick:this.handleDelete},"DELETE"))))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://devapirt.herokuapp.com/menu",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({id:t})}))}}]),a}(n.Component),M=Object(i.e)(D),L="/".concat(sessionStorage.getItem("id"),"add"),I="/".concat(sessionStorage.getItem("id"),"update"),A="/".concat(sessionStorage.getItem("id"),"delete"),P=function(){return console.log("session ".concat(L)),l.a.createElement(o.a,null,l.a.createElement(v,null),l.a.createElement(i.a,{exact:!0,path:"/",component:h}),l.a.createElement(i.a,{path:L,component:j}),l.a.createElement(i.a,{path:I,component:O}),l.a.createElement(i.a,{path:A,component:M}),l.a.createElement(b,null))},x=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{exact:!0,path:"/",component:h}),l.a.createElement(i.a,{exact:!0,path:"/finalroute",component:P})))};c.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b58038fb.chunk.js.map