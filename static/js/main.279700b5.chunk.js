(this.webpackJsonptriste=this.webpackJsonptriste||[]).push([[0],[,function(e,n,t){e.exports={game:"board_game__133qm",board:"board_board__5xYAb",lines:"board_lines__K2aWm",blockLine:"board_blockLine__2Shsx",next:"board_next__zhgk4",square:"board_square__19hXC",none:"board_none__25BgY",I:"board_I__v5VWo",J:"board_J__333YF",L:"board_L__3tq8V",O:"board_O__1CzkM",S:"board_S__2T1KA",T:"board_T__-Esw_",Z:"board_Z__2VCFE",internSquare:"board_internSquare__3Bn7h",commands:"board_commands__2BLja",descriptions:"board_descriptions__1dhGE",instructions:"board_instructions__E5mVe"}},,,,,,,function(e,n,t){e.exports=t(15)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(6),c=t.n(o),u=(t(13),t(14),t(2)),i=t(7);function s(e,n){var t=Object(r.useRef)(e);Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){var e=setInterval((function(){return t.current()}),n);return function(){return clearInterval(e)}}),[t,n])}var l,d=["I","J","L","O","S","T","Z"],m={I:[[[1,1,1,1]],[[0,1],[0,1],[0,1],[0,1]],[[1,1,1,1]],[[0,0,1],[0,0,1],[0,0,1],[0,0,1]]],J:[[[2,0,0],[2,2,2]],[[0,2],[0,2],[2,2]],[[2,2,2],[0,0,2]],[[2,2],[2,0],[2,0]]],L:[[[0,0,3],[3,3,3]],[[3,3],[0,3],[0,3]],[[3,3,3],[3,0,0]],[[3,0],[3,0],[3,3]]],O:[[[4,4],[4,4]]],S:[[[0,5,5],[5,5,0]],[[5,0],[5,5],[0,5]]],T:[[[0,6,0],[6,6,6]],[[0,6],[6,6],[0,6]],[[6,6,6],[0,6,0]],[[0,6,0],[0,6,6],[0,6,0]]],Z:[[[7,7,0],[0,7,7]],[[0,7],[7,7],[7,0]]]},f={I:{x:3,y:-1},J:{x:4,y:-1},L:{x:4,y:-1},O:{x:4,y:-1},S:{x:4,y:-1},T:{x:4,y:-1},Z:{x:4,y:-1}};function v(e,n){return new Array(n).fill(new Array(e)).map((function(e){return e.fill(0)}))}function b(){return d[Math.floor(Math.random()*Math.floor(d.length))]}function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return m[e][n]}function g(e,n,t,r,a){return r>=n&&r<n+e[0].length&&a>=t&&a<t+e.length?e[a-t][r-n]:0}function p(e,n,t,r){return n.some((function(n,a){return n.some((function(n,o){return n>0&&r+a>=0&&(void 0===e[r+a]||void 0===e[r+a][t+o]||e[r+a][t+o]>0)}))}))}function E(e,n,t,r){var a=e.length,o=e.map((function(e,a){return e.map((function(e,o){return e+g(n,t,r,o,a)}))})).filter((function(e){return e.some((function(e){return 0===e}))}));return o.splice.apply(o,[0,0].concat(Object(i.a)(v(e[0].length,a-o.length)))),o}!function(e){e[e.running=0]="running",e[e.paused=1]="paused",e[e.gameover=2]="gameover"}(l||(l={}));var h=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.join(" ")},w=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n-e+1;return Array.from({length:t},(function(n,t){return e+t}))},k=t(1),O=t.n(k),y=["none","I","J","L","O","S","T","Z"];var j=a.a.memo((function(e){var n=e.value;return a.a.createElement("div",{className:h(O.a.square,O.a[y[n]])},a.a.createElement("div",{className:h(O.a.internSquare,O.a[y[n]])}))}));function x(e){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=Object(r.useState)(l.paused),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)((function(){return v(e,n)})),d=Object(u.a)(i,2),_=d[0],g=d[1],h=Object(r.useState)(b),w=Object(u.a)(h,2),k=w[0],O=w[1],y=Object(r.useState)(b),j=Object(u.a)(y,2),x=j[0],S=j[1],L=Object(r.useState)(f[k].x),A=Object(u.a)(L,2),N=A[0],C=A[1],T=Object(r.useState)(f[k].y),I=Object(u.a)(T,2),q=I[0],J=I[1],M=Object(r.useState)(0),B=Object(u.a)(M,2),P=B[0],R=B[1],Z=function(){return c((function(e){return e===l.gameover?e:e===l.paused?l.running:l.paused}))},Y=Object(r.useCallback)((function(){S((function(e){return R(0),C(f[e].x),J(f[e].y),O(e),b()})),g(v(e,n)),c(l.running)}),[e,n]),V=Object(r.useCallback)((function(){o===l.running&&S((function(e){return R(0),C(f[e].x),J(f[e].y),O(e),b()}))}),[o]),W=Object(r.useCallback)((function(){o===l.running&&R((function(e){var n=(e+1)%m[k].length,t=m[k][n];return p(_,t,N,q)?e:n}))}),[o,_,k,N,q]),D=Object(r.useCallback)((function(){o===l.running&&C((function(e){return p(_,m[k][P],e-1,q)?e:e-1}))}),[o,_,k,P,q]),X=Object(r.useCallback)((function(){o===l.running&&C((function(e){return p(_,m[k][P],e+1,q)?e:e+1}))}),[o,_,k,P,q]),z=Object(r.useCallback)((function(){o===l.running&&J((function(e){return p(_,m[k][P],N,e+1)?(g((function(n){var t=E(n,m[k][P],N,e);return t[0].some((function(e){return e>0}))&&c(l.gameover),t})),V(),e):e+1}))}),[o,_,k,P,N,V]);return s((function(){o===l.running&&z()}),1e3),{state:o,board:_,currentTetromino:k,nextTetromino:x,posX:N,posY:q,rotation:P,next:V,rotate:W,left:D,right:X,down:z,togglePause:Z,reset:Y}}(e.width,e.height),t=n.state,o=n.board,c=n.currentTetromino,i=n.nextTetromino,d=n.posX,k=n.posY,y=n.rotation,x=n.rotate,S=n.down,L=n.left,A=n.right,N=n.next,C=n.togglePause,T=n.reset,I=Object(r.useMemo)((function(){return _(i)}),[i]),q=Object(r.useMemo)((function(){return _(c,y)}),[c,y]);return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{keydown:!0,keyup:!1},a=Object(r.useRef)(e);Object(r.useEffect)((function(){a.current=e}),[e]),Object(r.useEffect)((function(){var e=function(e){n.includes(e.code)&&a.current(e)},r=function(e){n.includes(e.code)&&a.current(e)};return t.keydown&&window.addEventListener("keydown",e),t.keyup&&window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",r)}}),[a,n,t.keyup,t.keydown])}((function(e){switch(e.code){case"ArrowUp":x();break;case"ArrowDown":S();break;case"ArrowLeft":L();break;case"ArrowRight":A();break;case"Space":N();break;case"Escape":C();break;case"Enter":T()}e.preventDefault()}),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","Escape","Enter"]),a.a.createElement("div",{className:h(O.a.board)},a.a.createElement("div",{className:O.a.commands},a.a.createElement("div",{className:O.a.descriptions},a.a.createElement("div",null,"\u2191"),a.a.createElement("div",null,"\u2190\u2193\u2192"),a.a.createElement("div",null,"escape"),a.a.createElement("div",null,"enter"),a.a.createElement("div",null,"space")),a.a.createElement("div",{className:O.a.instructions},a.a.createElement("div",null," Rotate"),a.a.createElement("div",null," Move"),a.a.createElement("div",null," Play/Pause game"),a.a.createElement("div",null," Restart game"),a.a.createElement("div",null," Cheat"))),a.a.createElement("div",{className:O.a.game},t===l.paused?"Paused":t===l.gameover?"Game Over":"Playing",a.a.createElement("div",{className:h(O.a.lines)},o.map((function(e,n){return a.a.createElement("div",{key:n,className:h(O.a.blockLine)},e.map((function(e,r){var o=t===l.gameover?4:e||g(q,d,k,r,n);return a.a.createElement(j,{value:o,key:"Cell-".concat(r).concat(n).concat(o)})})))})))),a.a.createElement("div",{className:h(O.a.next)},"Next Block",a.a.createElement("div",{className:h(O.a.lines)},w(1,4).map((function(e){return a.a.createElement("div",{key:e,className:h(O.a.blockLine)},w(1,6).map((function(n){var t=g(I,2,2,n,e);return a.a.createElement(j,{key:n,value:t})})))})))))}var S=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,{width:10,height:20}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.279700b5.chunk.js.map