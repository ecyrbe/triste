(this.webpackJsonptriste=this.webpackJsonptriste||[]).push([[0],{1:function(e,t,a){e.exports={game:"board_game__133qm",over:"board_over__ZBIGv","animate-game-over":"board_animate-game-over__35jMU",paused:"board_paused__22pYZ","animate-paused":"board_animate-paused__23Z1H",running:"board_running__3HKDn","animate-running":"board_animate-running__kh52d",board:"board_board__5xYAb",border:"board_border__3Hrc3",lines:"board_lines__K2aWm",blockLine:"board_blockLine__2Shsx",next:"board_next__zhgk4",square:"board_square__19hXC",help:"board_help__3El-x",descriptions:"board_descriptions__1dhGE",instructions:"board_instructions__E5mVe",scores:"board_scores__2Bjqx",score:"board_score__GF9Zs",values:"board_values__1lHjc",highscores:"board_highscores__l_5RI",highscore:"board_highscore__Jg8Q7",normal:"board_normal__1mFcu",none:"board_none__25BgY",I:"board_I__v5VWo",J:"board_J__333YF",L:"board_L__3tq8V",O:"board_O__1CzkM",S:"board_S__2T1KA",T:"board_T__-Esw_",Z:"board_Z__2VCFE",internSquare:"board_internSquare__3Bn7h"}},14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(7),l=a.n(c),i=(a(14),a(15),a(1)),u=a.n(i),s=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.join(" ")},d=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},m=["I","J","L","O","S","T","Z"],f={I:[[[0,0,0,0],[1,1,1,1]],[[0,0,1],[0,0,1],[0,0,1],[0,0,1]],[[0,0,0,0],[0,0,0,0],[1,1,1,1]],[[0,1],[0,1],[0,1],[0,1]]],J:[[[2,0,0],[2,2,2]],[[0,2,2],[0,2,0],[0,2,0]],[[0,0,0],[2,2,2],[0,0,2]],[[0,2],[0,2],[2,2]]],L:[[[0,0,3],[3,3,3]],[[0,3,0],[0,3,0],[0,3,3]],[[0,0,0],[3,3,3],[3,0,0]],[[3,3],[0,3],[0,3]]],O:[[[0,4,4],[0,4,4]],[[0,4,4],[0,4,4]],[[0,4,4],[0,4,4]],[[0,4,4],[0,4,4]]],S:[[[0,5,5],[5,5,0]],[[0,5,0],[0,5,5],[0,0,5]],[[0,0,0],[0,5,5],[5,5,0]],[[5,0],[5,5],[0,5]]],T:[[[0,6,0],[6,6,6]],[[0,6,0],[0,6,6],[0,6,0]],[[0,0,0],[6,6,6],[0,6,0]],[[0,6],[6,6],[0,6]]],Z:[[[7,7,0],[0,7,7]],[[0,0,7],[0,7,7],[0,7,0]],[[0,0,0],[7,7,0],[0,7,7]],[[0,7],[7,7],[7,0]]]},v={I:{x:3,y:-2},J:{x:3,y:-2},L:{x:3,y:-2},O:{x:3,y:-2},S:{x:3,y:-2},T:{x:3,y:-2},Z:{x:3,y:-2}};function b(){return m[Math.floor(Math.random()*Math.floor(m.length))]}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Up;return f[e][t]}!function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left"}(n||(n={}));var _=a(5);function g(e,t){return new Array(t).fill(new Array(e)).map((function(e){return e.fill(0)}))}function E(e,t,a,n,r){return n>=t&&n<t+e[0].length&&r>=a&&r<a+e.length?e[r-a][n-t]:0}function p(e,t,a,n){return t.some((function(t,r){return t.some((function(t,o){return t>0&&n+r>=0&&(void 0===e[n+r]||void 0===e[n+r][a+o]||e[n+r][a+o]>0)}))}))}function O(e,t,a,n){return e.map((function(e,r){return e.map((function(e,o){return e+E(t,a,n,o,r)}))}))}function j(e){var t=e.length,a=e.filter((function(e){return e.some((function(e){return 0===e}))})),n=t-a.length;return n>0?(a.splice.apply(a,[0,0].concat(Object(_.a)(g(e[0].length,t-a.length)))),{board:a,cleared:n}):{board:e,cleared:n}}var w=["none","I","J","L","O","S","T","Z"];var k=o.a.memo((function(e){var t=e.value;return o.a.createElement("div",{className:s(u.a.square,u.a[w[t]])},o.a.createElement("div",{className:s(u.a.internSquare,u.a[w[t]])}))})),y=a(2);function S(e,t){var a=Object(r.useRef)(e);Object(r.useEffect)((function(){a.current=e}),[e]),Object(r.useEffect)((function(){var e=setInterval((function(){return a.current()}),t);return function(){return clearInterval(e)}}),[a,t])}var M=[Math.floor(53e3/60),Math.floor(49e3/60),Math.floor(750),Math.floor(41e3/60),Math.floor(37e3/60),Math.floor(550),Math.floor(28e3/60),Math.floor(22e3/60),Math.floor(17e3/60),Math.floor(11e3/60),Math.floor(1e4/60),Math.floor(150),Math.floor(8e3/60),Math.floor(7e3/60),Math.floor(100),Math.floor(100),Math.floor(5e3/60),Math.floor(5e3/60),Math.floor(4e3/60),Math.floor(4e3/60),Math.floor(50),Math.floor(2e3/60),Math.floor(1e3/60)],N=[0,40,100,300,1200];function x(){var e=Object(r.useState)(0),t=Object(y.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)(0),c=Object(y.a)(o,2),l=c[0],i=c[1],u=Object(r.useState)(0),s=Object(y.a)(u,2),d=s[0],m=s[1],f=Object(r.useState)(M[0]),v=Object(y.a)(f,2),b=v[0],h=v[1],_=Object(r.useCallback)((function(e){var t=a+e,r=Math.floor(t/10),o=M[r],c=l+(r+1)*N[e];n(t),m(r),h(o),i(c)}),[a,l]),g=Object(r.useCallback)((function(){n(0),m(0),h(M[0]),i(0)}),[]);return{lines:a,score:l,level:d,rate:b,updateScore:_,resetScore:g}}var L,C=a(8);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=Object(r.useState)((function(){try{var t=localStorage.getItem("highscores");if(t)return JSON.parse(t)}catch(a){}return new Array(e).fill({score:0,date:"--"})})),a=Object(y.a)(t,2),n=a[0],o=a[1],c=Object(r.useCallback)((function(t){o((function(a){var n=Object(C.orderBy)([].concat(Object(_.a)(a),[{score:t,date:(new Date).toLocaleDateString()}]),["score"],["desc"]).slice(0,e);return localStorage.setItem("highscores",JSON.stringify(n)),n}))}),[e]);return{highscores:n,addHighscore:c}}!function(e){e[e.running=0]="running",e[e.paused=1]="paused",e[e.gameover=2]="gameover"}(L||(L={}));var I=o.a.memo((function(e){var t=e.lines,a=e.level,n=e.score;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u.a.descriptions},"Stats"),o.a.createElement("div",{className:s(u.a.scores,u.a.border)},o.a.createElement("div",{className:u.a.score},o.a.createElement("div",null,"Lines:"),o.a.createElement("div",null,"Level:"),o.a.createElement("div",null,"Score:")),o.a.createElement("div",{className:u.a.values},o.a.createElement("div",null,t),o.a.createElement("div",null,a),o.a.createElement("div",null,n))))}));var J=o.a.memo((function(e){var t=e.computeColor;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u.a.descriptions},"Next"),o.a.createElement("div",{className:s(u.a.lines,u.a.border)},d(1,4).map((function(e){return o.a.createElement("div",{key:e,className:s(u.a.blockLine)},d(1,6).map((function(a){return o.a.createElement(k,{key:a,value:t(a,e)})})))}))))}));var T=o.a.memo((function(){return o.a.createElement("div",{className:u.a.help},o.a.createElement("div",{className:u.a.descriptions},o.a.createElement("div",null,"\u2191"),o.a.createElement("div",null,"\u2190\u2193\u2192"),o.a.createElement("div",null,"escape"),o.a.createElement("div",null,"enter")),o.a.createElement("div",{className:u.a.instructions},o.a.createElement("div",null," Rotate"),o.a.createElement("div",null," Move"),o.a.createElement("div",null," Play/Pause game"),o.a.createElement("div",null," Restart game")))}));var Z=o.a.memo((function(e){var t=e.highscores;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u.a.descriptions}," Highscores"),o.a.createElement("div",{className:s(u.a.highscores,u.a.border)},t.map((function(e,t){return o.a.createElement("div",{className:u.a.highscore,key:"SC-".concat(t,"-").concat(e.score)},o.a.createElement("div",null,t+1),o.a.createElement("div",{className:u.a.normal},e.score," "))}))))}));function q(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=Object(r.useState)(L.paused),o=Object(y.a)(a,2),c=o[0],l=o[1],i=Object(r.useState)((function(){return g(e,t)})),u=Object(y.a)(i,2),s=u[0],d=u[1],m=Object(r.useState)(b),f=Object(y.a)(m,2),_=f[0],E=f[1],w=Object(r.useState)(b),k=Object(y.a)(w,2),M=k[0],N=k[1],C=Object(r.useState)(v[_].x),I=Object(y.a)(C,2),J=I[0],T=I[1],Z=Object(r.useState)(v[_].y),q=Object(y.a)(Z,2),R=q[0],D=q[1],B=Object(r.useState)(n.Up),F=Object(y.a)(B,2),H=F[0],U=F[1],P=Object(r.useState)(-1),Y=Object(y.a)(P,2),G=Y[0],V=Y[1],W=x(),K=W.lines,X=W.level,z=W.score,Q=W.rate,$=W.updateScore,ee=W.resetScore,te=A(),ae=te.highscores,ne=te.addHighscore,re=function(){return l((function(e){return e===L.gameover?e:e===L.paused?L.running:L.paused}))},oe=Object(r.useCallback)((function(){N((function(e){return U(0),T(v[e].x),D(v[e].y),E(e),b()})),ee(),d(g(e,t)),l(L.running)}),[e,t,ee]),ce=Object(r.useCallback)((function(){c===L.running&&N((function(e){return U(0),T(v[e].x),D(v[e].y),E(e),b()}))}),[c]),le=Object(r.useCallback)((function(){c===L.running&&U((function(e){var t=(e+1)%4,a=h(_,t);return p(s,a,J,R)?e:t}))}),[c,s,_,J,R]),ie=Object(r.useCallback)((function(){c===L.running&&T((function(e){return p(s,h(_,H),e-1,R)?e:e-1}))}),[c,s,_,H,R]),ue=Object(r.useCallback)((function(){c===L.running&&T((function(e){return p(s,h(_,H),e+1,R)?e:e+1}))}),[c,s,_,H,R]),se=Object(r.useCallback)((function(){c===L.running&&V(R+1)}),[c,R]);return Object(r.useEffect)((function(){if(G===R+1)if(p(s,h(_,H),J,G)){var e=j(O(s,h(_,H),J,R)),t=e.board,a=e.cleared;t[0].some((function(e){return e>0}))?(l(L.gameover),V(0)):(d(t),a&&$(a),ce())}else D(G)}),[s,_,H,J,R,G,ce,$]),Object(r.useEffect)((function(){c===L.gameover&&ne(z)}),[c,z,ne]),S((function(){c===L.running&&se()}),Q),{lines:K,level:X,score:z,highscores:ae,state:c,board:s,currentTetromino:_,nextTetromino:M,posX:J,posY:R,rotation:H,next:ce,rotate:le,left:ie,right:ue,down:se,togglePause:re,reset:oe}}(e.width,e.height),a=t.state,c=t.board,l=t.lines,i=t.level,d=t.score,m=t.highscores,f=t.currentTetromino,_=t.nextTetromino,w=t.posX,M=t.posY,N=t.rotation,C=t.rotate,q=t.down,R=t.left,D=t.right,B=t.next,F=t.togglePause,H=t.reset,U=Object(r.useMemo)((function(){return h(_)}),[_]),P=Object(r.useMemo)((function(){return h(f,N)}),[f,N]),Y=Object(r.useCallback)((function(e,t){return E(U,2,2,e,t)}),[U]);return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{keydown:!0,keyup:!1},n=Object(r.useRef)(e);Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){var e=function(e){t.includes(e.code)&&n.current(e)},r=function(e){t.includes(e.code)&&n.current(e)};return a.keydown&&window.addEventListener("keydown",e),a.keyup&&window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",r)}}),[n,t,a.keyup,a.keydown])}((function(e){switch(e.code){case"ArrowUp":C();break;case"ArrowDown":q();break;case"ArrowLeft":R();break;case"ArrowRight":D();break;case"Space":B();break;case"Escape":F();break;case"Enter":H()}e.preventDefault()}),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Escape","Enter"]),o.a.createElement("div",{className:s(u.a.board)},o.a.createElement(T,null),o.a.createElement("div",{className:s(u.a.game,a===L.paused?u.a.paused:a===L.gameover?u.a.over:u.a.running)},a===L.paused?"Paused":a===L.gameover?"Game Over":"Playing",o.a.createElement("div",{className:s(u.a.lines,u.a.border)},c.map((function(e,t){return o.a.createElement("div",{key:t,className:s(u.a.blockLine)},e.map((function(e,n){var r=a===L.gameover?1:e||E(P,w,M,n,t);return o.a.createElement(k,{value:r,key:"Cell-".concat(n).concat(t).concat(r)})})))})))),o.a.createElement("div",{className:s(u.a.next)},o.a.createElement(J,{computeColor:Y}),o.a.createElement(I,{lines:l,level:i,score:d}),o.a.createElement(Z,{highscores:m})))}var R=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(q,{width:10,height:20}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.3625896a.chunk.js.map