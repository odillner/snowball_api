(this.webpackJsonpsnowball_frontend=this.webpackJsonpsnowball_frontend||[]).push([[0],{14:function(e,t,n){var a="http://localhost:3005/";a="/",e.exports={API_URL:a}},2:function(e,t,n){e.exports={info:function(){},error:function(){}}},31:function(e,t,n){e.exports=n(60)},36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),u=n.n(c),l=(n(36),n(1)),s=n.n(l),o=n(3),i=n(6),p=n(12),f=n(4),d=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"snowballer"))},m=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(p.b,{to:"/"},"Home"),r.a.createElement(p.b,{to:"/ownprofile"},"Profile"),r.a.createElement(p.b,{to:"/friends"},"Friends"),r.a.createElement(p.b,{to:"/allusers"},"All Users"),r.a.createElement(p.b,{to:"/newsnowball"},"New Snowball"),r.a.createElement(p.b,{to:"/allsnowballs"},"All Snowballs"),r.a.createElement(p.b,{to:"/login",className:"right"},"Sign In"),r.a.createElement(p.b,{to:"/newuser",className:"right"},"Sign Up"))},v=function(e){return null===e.message?null:r.a.createElement("div",{className:e.message.type},e.message.text)},b=function(){return r.a.createElement("div",null,"home")},w=n(5),h=n.n(w),E=n(14),g=n(2),x=n.n(g),y="api/users/",j=E.API_URL+y,O={getAll:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching users"),e.next=4,h.a.get(j);case 4:return t=e.sent,x.a.info(y,"Users fetched",t),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Creating user",t),e.next=4,h.a.post(j,t);case 4:return n=e.sent,x.a.info(y,"User created",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),getById:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching user",t),e.next=4,h.a.get(j+t);case 4:return n=e.sent,x.a.info(y,"User fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),getByName:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching user",t),e.next=4,h.a.get(j+"name/"+t);case 4:return n=e.sent,x.a.info(y,"User fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Deleting user",t),e.next=4,h.a.delete(j+t);case 4:return n=e.sent,x.a.info(y,"User deleted",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Updating user",t,n),e.next=4,h.a.put("".concat(j).concat(t),n);case 4:return a=e.sent,x.a.info(y,"User updated",a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),getFriends:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Fetching user friends",t.id),e.next=4,h.a.get(j+"friends/"+t.id);case 4:return n=e.sent,x.a.info(y,"Friends fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),addFriend:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Adding friend,",n,"to user",t),e.next=4,h.a.post(j+"friends/"+t.id,n);case 4:return a=e.sent,x.a.info(y,"Friend added to user",a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),addFriendByName:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Finding friend,",n),e.next=4,h.a.get(j+"name/"+n);case 4:if(a=e.sent){e.next=9;break}throw(r=new Error("Resource not found")).name="NotFoundError",r;case 9:return x.a.info(y,"Adding friend,",a.data,"to user",t),e.next=12,h.a.post(j+"friends/"+t.id,a.data);case 12:return c=e.sent,x.a.info(y,"Friend added to user",c),e.abrupt("return",a.data);case 17:throw e.prev=17,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,n){return e.apply(this,arguments)}}(),removeFriendByName:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info(y,"Finding friend,",n),e.next=4,h.a.get(j+"name/"+n);case 4:return a=e.sent,x.a.info(y,"Removing friend,",a,"from user",t),e.next=8,h.a.delete(j+"friends/"+t.id,a);case 8:return r=e.sent,x.a.info(y,"Friend removed from user",r),e.abrupt("return",a.data);case 13:throw e.prev=13,e.t0=e.catch(0),x.a.error(y,e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()},k=function(e){var t=e.snowball;return t?r.a.createElement("div",{className:"snowball"},r.a.createElement("b",null,"snowball "),r.a.createElement("p",null,"name: ",t.name," "),r.a.createElement("p",null,"owner id: ",t.owner," "),r.a.createElement("p",null,"snowball id: ",t.id," ")):r.a.createElement("div",null)},S=function(e){var t=e.snowball;return t?r.a.createElement("div",{className:"snowball"},r.a.createElement("b",null,"snowball "),r.a.createElement("p",null,"name: ",t.name," "),r.a.createElement("p",null,"snowball id: ",r.a.createElement("br",null),t.id," ")):r.a.createElement("div",null)},F=function(e){var t=e.snowballs;return t&&t[0]?r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,e.title),t.map((function(e){return r.a.createElement(k,{snowball:e,key:e.id})}))):r.a.createElement("div",null)},N=function(e){var t=e.snowballs;return t&&t[0]?r.a.createElement("div",{className:"wrapper"},t.map((function(e){return r.a.createElement(S,{snowball:e,key:e.id})}))):r.a.createElement("div",null)},U=function(e){var t=e.user;return r.a.createElement("div",{className:"profile"},r.a.createElement("h1",null,"profile"),r.a.createElement("p",null,"username: ",t.username," "),r.a.createElement("p",null,"email: ",t.email," "),r.a.createElement("p",null,"id: ",t.id," "),r.a.createElement(F,{title:"snowballs:",snowballs:t.own_snowballs}),r.a.createElement(F,{title:"participating in:",snowballs:t.part_snowballs}))},A=function(e){var t=e.user;return r.a.createElement("div",{className:"profile"},r.a.createElement("b",null,"profile"),r.a.createElement("p",null,"username: ",t.username," "),r.a.createElement("p",null,"id: ",t.id," "),r.a.createElement(N,{title:"snowballs:",snowballs:t.own_snowballs}))},C=function(e){var t=e.friends;return t[0]?r.a.createElement("div",{className:"wrapper"},t.map((function(e){return e?r.a.createElement(A,{user:e,key:e.username}):r.a.createElement("div",null)}))):r.a.createElement("div",null)},I=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)([]),p=Object(i.a)(l,2),f=p[0],d=p[1],m=e.display,v=e.user;Object(a.useEffect)((function(){v&&h()}),[]);var b=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.addFriendByName(v,c);case 4:n=e.sent,d(f.concat(n)),m.info("Friend successfully added"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),m.error("Error adding friend");case 12:u("");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.removeFriendByName(v,c);case 4:n=e.sent,d(f.filter((function(e){return e.username!==n.username}))),m.info("Friend successfully removed"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),m.error("Error removing friend");case 12:u("");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getFriends(v);case 3:t=e.sent,d(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.error("Error fetching friends");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return v?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{type:"submit",onClick:b},"Add Friend"),r.a.createElement("button",{type:"submit",onClick:w},"Remove Friend")),r.a.createElement("div",null)),r.a.createElement(C,{friends:f}))):r.a.createElement("div",null,"log in to add friends")},B=function(e){var t=e.user;return t?r.a.createElement("div",null,r.a.createElement(U,{user:t})):r.a.createElement("div",null,"log in to view profile")},_=E.API_URL+"api/login/",D={auth:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/login/","Authenticating user:",t),e.next=4,h.a.post(_,t);case 4:return n=e.sent,x.a.info("api/login/","User authenticated",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/login/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},R=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(""),p=Object(i.a)(l,2),f=p[0],d=p[1],m=Object(a.useState)(""),v=Object(i.a)(m,2),b=v[0],w=v[1],h=e.display,E=e.user,g=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:c,email:f,password:b},e.prev=2,e.next=5,O.create(n);case 5:h.info("Successfully created user"),x(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),h.error("Failed to create user");case 12:u(""),d(""),w("");case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(s.a.mark((function t(){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={username:c,password:b},t.prev=1,t.next=4,D.auth(n);case 4:a=t.sent,e.setSession(a),h.info("Successfully logged in"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),h.error("Failed to log in, password or username incorrect");case 12:u(""),w("");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return E?r.a.createElement("div",null,"already logged in"):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,"email: ",r.a.createElement("input",{value:f,onChange:function(e){d(e.target.value)}})),r.a.createElement("div",null,"password: ",r.a.createElement("input",{value:b,onChange:function(e){w(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:g},"Sign Up"))))},L=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],u=n[1],l=e.display;Object(a.useEffect)((function(){p()}),[]);var p=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getAll();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l.error("Error fetching users");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,c.map((function(e){return r.a.createElement(U,{user:e,key:e.username})})))},P=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],u=n[1],l=Object(a.useState)(""),p=Object(i.a)(l,2),f=p[0],d=p[1],m=e.display,v=e.user,b=function(){var t=Object(o.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={username:c,password:f},t.prev=2,t.next=5,D.auth(a);case 5:r=t.sent,e.setSession(r),m.info("Successfully logged in"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),m.error("Failed to log in, password or username incorrect");case 13:u(""),d("");case 15:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return v?r.a.createElement("div",null,"already logged in"):r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,"password: ",r.a.createElement("input",{value:f,onChange:function(e){d(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:b},"Log In"))))},J=E.API_URL+"api/snowballs/",T={getAll:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Fetching snowballs"),e.next=4,h.a.get(J);case 4:return t=e.sent,x.a.info("api/snowballs/","Snowballs fetched",t),e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Creating snowball",t),e.next=4,h.a.post(J,t);case 4:return n=e.sent,x.a.info("api/snowballs/","Snowball created",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),getById:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Fetching snowball",t),e.next=4,h.a.get(J+t);case 4:return n=e.sent,x.a.info("api/snowballs/","Snowball fetched",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Deleting snowball",t),e.next=4,h.a.delete(J+t);case 4:return n=e.sent,x.a.info("api/snowballs/","Snowball deleted",n),e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x.a.info("api/snowballs/","Updating snowball",t,n),e.next=4,h.a.put("".concat(J).concat(t),n);case 4:return a=e.sent,x.a.info("api/snowballs/","Snowball updated",a),e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),x.a.error("api/snowballs/",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},H=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],u=n[1],l=e.user,p=e.display,f=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:c,owner:l.id},e.prev=2,e.next=5,T.create(n);case 5:p.info("Snowball successfully created"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),p.error("Error creating snowball");case 11:u("");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return l?r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:f},"Create Snowball")))):r.a.createElement("div",null,"log in to create snowball")},M=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],u=n[1],l=e.display;Object(a.useEffect)((function(){p()}),[]);var p=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.getAll();case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l.error("Error fetching snowballs");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,c.map((function(e){return r.a.createElement(k,{snowball:e,key:e.name})})))};var q=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(null),l=Object(i.a)(u,2),w=l[0],h=l[1],E=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getById(t.user.id);case 2:(n=e.sent).token=t.token,c(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={info:function(e){h({text:e,type:"info"}),setTimeout((function(){h(null)}),5e3)},error:function(e){h({text:e,type:"error"}),setTimeout((function(){h(null)}),5e3)}};return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(m,null),r.a.createElement(v,{message:w}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(b,{user:n,display:g})),r.a.createElement(f.a,{exact:!0,path:"/login"},r.a.createElement(P,{user:n,display:g,setSession:E})),r.a.createElement(f.a,{path:"/ownprofile"},r.a.createElement(B,{user:n,display:g})),r.a.createElement(f.a,{path:"/friends"},r.a.createElement(I,{user:n,display:g})),r.a.createElement(f.a,{path:"/newuser"},r.a.createElement(R,{user:n,display:g,setSession:E})),r.a.createElement(f.a,{path:"/allusers"},r.a.createElement(L,{user:n,display:g})),r.a.createElement(f.a,{path:"/allsnowballs"},r.a.createElement(M,{user:n,display:g})),r.a.createElement(f.a,{path:"/newsnowball"},r.a.createElement(H,{user:n,display:g}))))))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d1f0f773.chunk.js.map