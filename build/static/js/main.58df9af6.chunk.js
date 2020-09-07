(this.webpackJsonpsnowball_frontend=this.webpackJsonpsnowball_frontend||[]).push([[0],{14:function(e,t,n){var a="http://localhost:3005/";a="/",e.exports={API_URL:a}},2:function(e,t,n){e.exports={info:function(){},error:function(){}}},31:function(e,t,n){e.exports=n(60)},36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),l=n.n(c),u=(n(36),n(1)),s=n.n(u),o=n(3),i=n(7),p=n(11),f=n(4),m=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"snowballer"))},d=function(e){return e.state.user?r.a.createElement("div",{className:"navbar"},r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/ownprofile"},"Profile"),r.a.createElement(p.b,{to:"/friends"},"Friends"),r.a.createElement(p.b,{to:"/allusers"},"All Users"),r.a.createElement(p.b,{to:"/newsnowball"},"New Snowball"),r.a.createElement(p.b,{to:"/allsnowballs"},"All Snowballs")):r.a.createElement("div",{className:"navbar"},r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/login",className:"right"},"Sign In"),r.a.createElement(p.b,{to:"/newuser",className:"right"},"Sign Up"))},v=function(e){return null===e.message?null:r.a.createElement("div",{className:e.message.type},e.message.text)},b=function(){return r.a.createElement("div",null,"home")},w=n(5),E=n.n(w),h=n(14),g=n(2),x=n.n(g),y="api/users/",j=h.API_URL+y,O={getAll:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching users"),e.next=4,E.a.get(j);case 4:return t=e.sent,x.a.info(y,"Users fetched",t),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Creating user",t),e.next=4,E.a.post(j,t);case 4:return n=e.sent,x.a.info(y,"User created",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),getById:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching user",t),e.next=4,E.a.get(j+t);case 4:return n=e.sent,x.a.info(y,"User fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),getByName:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching user",t),e.next=4,E.a.get(j+"name/"+t);case 4:return n=e.sent,x.a.info(y,"User fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Deleting user",t),e.next=4,E.a.delete(j+t);case 4:return n=e.sent,x.a.info(y,"User deleted",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Updating user",t,n),e.next=4,E.a.put("".concat(j).concat(t),n);case 4:return a=e.sent,x.a.info(y,"User updated",a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),getFriends:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching user friends",t.id),e.next=4,E.a.get(j+"friends/"+t.id);case 4:return n=e.sent,x.a.info(y,"Friends fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),addFriend:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Adding friend,",n,"to user",t),e.next=4,E.a.post(j+"friends/"+t.id,n);case 4:return a=e.sent,x.a.info(y,"Friend added to user",a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),addFriendByName:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Finding friend,",n),e.next=4,E.a.get(j+"name/"+n);case 4:if(a=e.sent){e.next=9;break}throw(r=new Error("Resource not found")).name="NotFoundError",r;case 9:return x.a.info(y,"Adding friend,",a.data,"to user",t),e.next=12,E.a.post(j+"friends/"+t.id,a.data);case 12:return c=e.sent,x.a.info(y,"Friend added to user",c),e.abrupt("return",a.data);case 17:throw e.prev=17,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,n){return e.apply(this,arguments)}}(),removeFriendByName:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Finding friend,",n),e.next=4,E.a.get(j+"name/"+n);case 4:return a=e.sent,x.a.info(y,"Removing friend,",a,"from user",t),e.next=8,E.a.delete(j+"friends/"+t.id,a);case 8:return r=e.sent,x.a.info(y,"Friend removed from user",r),e.abrupt("return",a.data);case 13:throw e.prev=13,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()},k=function(e){var t=e.snowball;return t?r.a.createElement("div",{className:"snowball"},r.a.createElement("b",null,"snowball "),r.a.createElement("p",null,"name: ",t.name," "),r.a.createElement("p",null,"owner id: ",t.owner," "),r.a.createElement("p",null,"snowball id: ",t.id," ")):r.a.createElement("div",null)},S=function(e){var t=e.snowball;return t?r.a.createElement("div",{className:"snowball"},r.a.createElement("b",null,"snowball "),r.a.createElement("p",null,"name: ",t.name," "),r.a.createElement("p",null,"snowball id: ",r.a.createElement("br",null),t.id," ")):r.a.createElement("div",null)},F=function(e){var t=e.snowballs;return t!=[]&&t&&t[0]&&t[0].id?r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,e.title),t.map((function(e){return r.a.createElement(k,{snowball:e,key:e.id})}))):r.a.createElement("div",null)},N=function(e){var t=e.snowballs;return t!=[]&&t&&t[0]&&t[0].id?r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,e.title),t.map((function(e){return r.a.createElement(S,{snowball:e,key:e.id})}))):r.a.createElement("div",null)},U=function(e){var t=e.user;return t?r.a.createElement("div",{className:"profile"},r.a.createElement("h1",null,"profile"),r.a.createElement("p",null,"username: ",t.username," "),r.a.createElement("p",null,"email: ",t.email," "),r.a.createElement("p",null,"id: ",t.id," "),r.a.createElement(F,{title:"snowballs:",snowballs:t.ownSnowballs}),r.a.createElement(F,{title:"participating in:",snowballs:t.partSnowballs}),r.a.createElement(F,{title:"history:",snowballs:t.histSnowballs})):r.a.createElement("div",null)},A=function(e){var t=e.user;return t?r.a.createElement("div",{className:"profile"},r.a.createElement("b",null,"profile"),r.a.createElement("p",null,"username: ",t.username," "),r.a.createElement("p",null,"id: ",t.id," "),r.a.createElement(N,{snowballs:t.ownSnowballs})):r.a.createElement("div",null)},C=function(e){var t=e.friends;return t[0]?r.a.createElement("div",{className:"wrapper"},t.map((function(e){return e?r.a.createElement(A,{user:e,key:e.username}):r.a.createElement("div",null)}))):r.a.createElement("div",null)},I=function(e){var t=e.state,n=t.user,c=(t.users,t.display),l=Object(a.useState)(""),u=Object(i.a)(l,2),p=u[0],f=u[1],m=Object(a.useState)(null),d=Object(i.a)(m,2),v=d[0],b=d[1];Object(a.useEffect)((function(){n&&!v&&b(n.friends)}),[]);var w=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.addFriendByName(n,p);case 4:a=e.sent,r=v.concat(a),b(r),c.info("Friend successfully added"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c.error("Error adding friend");case 13:f("");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.removeFriendByName(n,p);case 4:a=e.sent,r=v.filter((function(e){return e.username!==a.username})),b(r),c.info("Friend successfully removed"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c.error("Error removing friend");case 13:f("");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return v?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:p,onChange:function(e){f(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:w},"Add Friend"),r.a.createElement("button",{type:"submit",onClick:E},"Remove Friend")),r.a.createElement("div",null)),r.a.createElement(C,{friends:v}))):r.a.createElement("div",null,"log in to add friends")},B=function(e){var t=e.state.user;return t?r.a.createElement("div",null,r.a.createElement(U,{user:t})):r.a.createElement("div",null,"log in to view profile")},D=h.API_URL+"api/login/",R={auth:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/login/","Authenticating user:",t),e.next=4,E.a.post(D,t);case 4:return n=e.sent,x.a.info("api/login/","User authenticated",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/login/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},_=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(""),p=Object(i.a)(u,2),f=p[0],m=p[1],d=Object(a.useState)(""),v=Object(i.a)(d,2),b=v[0],w=v[1],E=e.state,h=E.user,g=E.display,x=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:c,email:f,password:b},e.prev=2,e.next=5,O.create(n);case 5:g.info("Successfully created user"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),g.error("Failed to create user");case 11:l(""),m(""),w("");case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return h?r.a.createElement("div",null,"already logged in"):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",null,"email: ",r.a.createElement("input",{value:f,onChange:function(e){m(e.target.value)}})),r.a.createElement("div",null,"password: ",r.a.createElement("input",{value:b,onChange:function(e){w(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:x},"Sign Up"))))},L=function(e){var t=e.state.users;return t&&t[0]?r.a.createElement("div",null,t.map((function(e){return r.a.createElement(U,{user:e,key:e.username})}))):r.a.createElement("div",null)},P=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(""),p=Object(i.a)(u,2),f=p[0],m=p[1],d=e.state,v=d.user,b=d.display,w=function(){var t=Object(o.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={username:c,password:f},t.prev=2,t.next=5,R.auth(a);case 5:r=t.sent,e.setSession(r),b.info("Successfully logged in"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),b.error("Failed to log in, password or username incorrect");case 13:l(""),m("");case 15:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return v?r.a.createElement("div",null,"already logged in"):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",null,"password: ",r.a.createElement("input",{value:f,onChange:function(e){m(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:w},"Log In"))))},H=h.API_URL+"api/snowballs/",J={getAll:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Fetching snowballs"),e.next=4,E.a.get(H);case 4:return t=e.sent,x.a.info("api/snowballs/","Snowballs fetched",t),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Creating snowball",t),e.next=4,E.a.post(H,t);case 4:return n=e.sent,x.a.info("api/snowballs/","Snowball created",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),getById:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Fetching snowball",t),e.next=4,E.a.get(H+t);case 4:return n=e.sent,x.a.info("api/snowballs/","Snowball fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Deleting snowball",t),e.next=4,E.a.delete(H+t);case 4:return n=e.sent,x.a.info("api/snowballs/","Snowball deleted",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Updating snowball",t,n),e.next=4,E.a.put("".concat(H).concat(t),n);case 4:return a=e.sent,x.a.info("api/snowballs/","Snowball updated",a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},T=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],u=e.state,p=u.user,f=u.display,m=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:c,owner:p.id},e.prev=2,e.next=5,J.create(n);case 5:f.info("Snowball successfully created"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),f.error("Error creating snowball");case 11:l("");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return p?r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:m},"Create Snowball")))):r.a.createElement("div",null,"log in to create snowball")},M=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],l=n[1],u=e.display;Object(a.useEffect)((function(){p()}),[]);var p=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.getAll();case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u.error("Error fetching snowballs");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return c?r.a.createElement("div",null,c.map((function(e){return r.a.createElement(k,{snowball:e,key:e.name})}))):r.a.createElement("div",null)};var q=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],l=function(e){c({text:e,type:"info"}),setTimeout((function(){c(null)}),5e3)},u=function(e){c({text:e,type:"error"}),setTimeout((function(){c(null)}),5e3)},w=Object(a.useState)({user:null,users:null,display:{info:l,error:u}}),E=Object(i.a)(w,2),h=E[0],g=E[1],x=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getById(t.user.id);case 2:return(n=e.sent).token=t.token,e.next=6,O.getAll();case 6:a=e.sent,g({user:n,users:a,display:{info:l,error:u}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(d,{state:h}),r.a.createElement(v,{message:n}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(b,{state:h})),r.a.createElement(f.a,{exact:!0,path:"/login"},r.a.createElement(P,{state:h,setSession:x})),r.a.createElement(f.a,{path:"/ownprofile"},r.a.createElement(B,{state:h})),r.a.createElement(f.a,{path:"/friends"},r.a.createElement(I,{state:h})),r.a.createElement(f.a,{path:"/newuser"},r.a.createElement(_,{state:h})),r.a.createElement(f.a,{path:"/allusers"},r.a.createElement(L,{state:h})),r.a.createElement(f.a,{path:"/allsnowballs"},r.a.createElement(M,{state:h})),r.a.createElement(f.a,{path:"/newsnowball"},r.a.createElement(T,{state:h}))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.58df9af6.chunk.js.map