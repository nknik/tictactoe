(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),c=(n(13),n(7)),o=n(1),s=n(2),u=n(4),h=n(3),p=(n(14),n(15),n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"handleForm",value:function(e){e.preventDefault(),this.props.player(e.target.player.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("center",{class:"center"},r.a.createElement("form",{onSubmit:function(t){return e.handleForm(t)}},r.a.createElement("label",null,"Player X",r.a.createElement("input",{type:"radio",name:"player",value:"X"})),r.a.createElement("label",null,"Player O",r.a.createElement("input",{type:"radio",name:"player",value:"O"})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Start"})),r.a.createElement("br",null))}}]),n}(a.Component)),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"handleSetPlayer",value:function(e){this.props.setPlayer(e)}},{key:"renderHtml",value:function(){var e=this;return this.props.winner?r.a.createElement("h2",null,"Winner is ",this.props.winner):this.props.player?r.a.createElement("h2",null,"Next player is ",this.props.player):r.a.createElement(p,{player:function(t){return e.handleSetPlayer(t)}})}},{key:"render",value:function(){return r.a.createElement("center",null,r.a.createElement("span",null,this.renderHtml()))}}]),n}(a.Component),m=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("center",null,r.a.createElement("p",null,"Made with ",r.a.createElement("span",{class:"heart"},"\u2764")," & passion by Nikhil Chalikwar and Iconic Crew")))}}]),n}(a.Component)),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={board:Array(9).fill(null),player:null,winner:null},a}return Object(s.a)(n,[{key:"checkWinner",value:function(){this.checkMatch([["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]])}},{key:"checkMatch",value:function(e){for(var t=this,n=0;n<e.length;n++){var a=Object(c.a)(e[n],3),r=a[0],l=a[1],i=a[2],o=this.state.board;o[r]&&o[r]===o[l]&&o[r]===o[i]&&(this.setState({winner:this.state.player}),setTimeout((function(){alert(" MATCH FINISHED WINNER IS "+t.state.winner)}),150))}}},{key:"handleClick",value:function(e){if(this.state.player&&!this.state.winner){var t=this.state.board;null===this.state.board[e]&&(t[e]=this.state.player,this.setState({board:t,player:"X"===this.state.player?"O":"X"}),this.checkWinner())}}},{key:"setPlayer",value:function(e){this.setState({player:e})}},{key:"renderBoxes",value:function(){var e=this;return this.state.board.map((function(t,n){return r.a.createElement("div",{className:"box",key:n,onClick:function(){return e.handleClick(n)}},t," ")}))}},{key:"reset",value:function(){this.setState({player:null,winner:null,board:Array(9).fill(null)})}},{key:"render",value:function(){var e=this;return r.a.createElement("center",null,r.a.createElement("div",{className:"container"},r.a.createElement("header",{class:"header"},r.a.createElement("h2",null," Iconic Crew presents"),r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("ul",null,r.a.createElement("li",null,"step 1:select player"),r.a.createElement("li",null,"step 2:press start"),r.a.createElement("li",null,"step 3:press reset")),r.a.createElement("div",null,r.a.createElement("button",{disabled:!this.state.winner,onClick:function(){return e.reset()}}," ","Reset")," ",r.a.createElement("button",{onClick:function(){return alert("Sorry,under construction!!!")}},"play with CPU"))),r.a.createElement(f,{player:this.state.player,setPlayer:function(t){e.setPlayer(t)},winner:this.state.winner}),r.a.createElement("div",{className:"board"},this.renderBoxes(),r.a.createElement("br",null)),r.a.createElement("p",null," happy learning!!!!"),r.a.createElement(m,null)))}}]),n}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(d,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tictactoe",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/tictactoe","/service-worker.js");y?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):v(e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.3d39f6b6.chunk.js.map