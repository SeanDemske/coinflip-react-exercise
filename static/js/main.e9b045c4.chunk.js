(this["webpackJsonpcoin-flipper"]=this["webpackJsonpcoin-flipper"]||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(7),l=a.n(s),c=(a(13),a(2)),r=a(3),o=a(1),u=a(5),h=a(4),d=(a(14),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Coin-container"},this.props.isHeads?i.a.createElement("img",{src:"https://tinyurl.com/react-coin-heads-jpg",alt:"heads"}):i.a.createElement("img",{src:"https://tinyurl.com/react-coin-tails-jpg",alt:"tails"}))}}]),a}(n.Component));d.defaultProps={isHeads:!0};var p=d,f=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={heads:!0,totalCount:0,headCount:0,tailsCount:0},n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.flip=n.flip.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"handleClick",value:function(){this.flip()}},{key:"flip",value:function(){var t=this.state.totalCount+1;if(this.setState({totalCount:t}),Math.random()>=.5){var e=this.state.headCount+1;this.setState({headCount:e}),this.setState({heads:!0})}else{var a=this.state.tailsCount+1;this.setState({tailsCount:a}),this.setState({heads:!1})}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Coin Flipper"),i.a.createElement(p,{isHeads:this.state.heads}),i.a.createElement("p",null,"Out of ",this.state.totalCount," flips, there have been ",this.state.headCount," heads and ",this.state.tailsCount," tails"),i.a.createElement("button",{onClick:this.handleClick},"Flip"))}}]),a}(n.Component);a(15);var m=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e9b045c4.chunk.js.map