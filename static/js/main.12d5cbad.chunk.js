(this["webpackJsonpmove-thrower"]=this["webpackJsonpmove-thrower"]||[]).push([[0],{25:function(e,t,s){},29:function(e,t,s){"use strict";var a=s(13),n=s(14),i=s(6),r=s(19),o=s(18),l=s(4),c=s.n(l),h=(s(25),s(20)),u=s(10);var p=function(){h.a.initializeApp({apiKey:"AIzaSyCAZBBhtcON0bguoWRHr9CuGSRksxHmMeM",authDomain:"movecalc.firebaseapp.com",projectId:"movecalc",storageBucket:"movecalc.appspot.com",messagingSenderId:"330689954497",appId:"1:330689954497:web:0050e1da2ac081abca4a40",measurementId:"G-KTL8R238RY",databaseURL:"https://movecalc-default-rtdb.firebaseio.com/"}),h.a.analytics()},d=s(2),m=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(e){var n;Object(a.a)(this,s),(n=t.call(this,e)).sendLogIn=n.sendLogIn.bind(Object(i.a)(n)),n.sendSignUp=n.sendSignUp.bind(Object(i.a)(n)),n.sendSignOut=n.sendSignOut.bind(Object(i.a)(n)),n.signInDisplay=n.signInDisplay.bind(Object(i.a)(n)),n.loggedInDisplay=n.loggedInDisplay.bind(Object(i.a)(n)),n.updateEmail=n.updateEmail.bind(Object(i.a)(n)),n.updatePassword=n.updatePassword.bind(Object(i.a)(n)),n.resetErrors=n.resetErrors.bind(Object(i.a)(n)),n.updateUserInfo=n.updateUserInfo.bind(Object(i.a)(n));var r=!1;return n.props.state&&(r=!0),n.state={signedIn:!1,uid:"",username:"",password:"",loginError:"",signUpError:"",preference:"",fireBaseInitialized:r,isButtonDisabled:!1},n}return Object(n.a)(s,[{key:"updateUserInfo",value:function(){}},{key:"updateEmail",value:function(e){this.setState({username:e.target.value,isButtonDisabled:!1})}},{key:"updatePassword",value:function(e){this.setState({password:e.target.value,isButtonDisabled:!1})}},{key:"resetErrors",value:function(){this.setState({logInError:!1,signUpError:!1})}},{key:"sendLogIn",value:function(){var e=this;this.resetErrors(),h.a.auth().signInWithEmailAndPassword(this.state.username,this.state.password).then((function(t){var s=t.user;h.a.database().ref("users/"+s.uid).once("value",(function(e){e.val()})),e.setState({signedIn:!0,uid:s.uid,preference:""})})).catch((function(t){t.code;var s=t.message;console.log(s),e.setState({logInError:s,isButtonDisabled:!0})}))}},{key:"sendSignUp",value:function(){var e=this;this.resetErrors(),h.a.auth().createUserWithEmailAndPassword(this.state.username,this.state.password).then((function(t){var s=t.user;h.a.database();h.a.database().ref("users/"+s.uid).set({username:e.state.username}),e.setState({signedIn:!0,uid:s.uid,preference:""})})).catch((function(t){t.code;var s=t.message;console.log(s),e.setState({signUpError:s,isButtonDisabled:!0})}))}},{key:"sendSignOut",value:function(){var e=this;this.resetErrors(),h.a.auth().signOut().then((function(){e.setState({signedIn:!1,uid:"",username:"",password:"",preference:"",isButtonDisabled:!1})})).catch((function(t){t.code;var s=t.message;console.log(s),e.setState({logInError:s,isButtonDisabled:!0})}))}},{key:"componentDidMount",value:function(){!1===this.state.fireBaseInitialized&&(p(),this.setState({fireBaseInitialized:!0}))}},{key:"signInDisplay",value:function(){var e=this.state.signUpError,t=""!==e?Object(d.jsx)("p",{children:e}):null,s=this.state.logInError,a=""!==s?Object(d.jsx)("p",{children:s}):null,n=this.state.signedIn?Object(d.jsx)(u.a,{push:!0,to:{pathname:"/",state:{uid:this.state.uid,username:this.state.username,password:this.state.password,fireBaseInitialized:this.state.fireBaseInitialized}}}):null;return Object(d.jsxs)("div",{classname:"signInDisplay",children:[Object(d.jsx)("b",{children:"Email: "}),Object(d.jsx)("input",{type:"text",onChange:this.updateEmail,onBlur:this.updateEmail}),Object(d.jsx)("br",{}),Object(d.jsx)("b",{children:"Password: "}),Object(d.jsx)("input",{type:"password",onChange:this.updatePassword,onBlur:this.updatePassword}),Object(d.jsxs)("div",{className:"signInButtons",children:[Object(d.jsx)("button",{onClick:this.sendLogIn,disabled:this.state.isButtonDisabled,children:"Log In"}),Object(d.jsx)("button",{onClick:this.sendSignUp,disabled:this.state.isButtonDisabled,children:"Sign Up"})]}),Object(d.jsxs)("div",{style:{fontSize:15},children:[a,t,n]})]})}},{key:"loggedInDisplay",value:function(){var e=this.state.username;return Object(d.jsxs)("div",{classname:"loggedInDisplay",children:[Object(d.jsxs)("p",{children:["Hello, ",e,"!"]}),Object(d.jsx)("div",{className:"loggedInButtons",children:Object(d.jsx)("button",{onClick:this.sendSignOut,disabled:this.state.isButtonDisabled,children:"Log Out"})})]})}},{key:"render",value:function(){var e=""===this.state.uid?this.signInDisplay():this.loggedInDisplay();return Object(d.jsx)("div",{className:"signIn",children:e})}}]),s}(c.a.Component);t.a=m},32:function(e,t,s){"use strict";(function(e){var a=s(13),n=s(14),i=s(6),r=s(19),o=s(18),l=s(4),c=s.n(l),h=s(33),u=s(42),p=(s(59),s(60),s(43)),d=(s(61),s(62),s(63),s(37),s(2)),m=function(t){Object(r.a)(l,t);var s=Object(o.a)(l);function l(e){var t;Object(a.a)(this,l),(t=s.call(this,e)).retrievePkmnFromList=t.retrievePkmnFromList.bind(Object(i.a)(t)),t.updatePkmnInfo=t.updatePkmnInfo.bind(Object(i.a)(t)),t.retrievePkmnInfo=t.retrievePkmnInfo.bind(Object(i.a)(t)),t.updatePkmnEV=t.updatePkmnEV.bind(Object(i.a)(t)),t.updatePkmnIV=t.updatePkmnIV.bind(Object(i.a)(t)),t.updatePkmnLevel=t.updatePkmnLevel.bind(Object(i.a)(t)),t.retrieveNatureFromList=t.retrieveNatureFromList.bind(Object(i.a)(t)),t.getTypeColor=t.getTypeColor.bind(Object(i.a)(t));return t.natureList=["Hardy","Lonely","Brave","Adamant","Naughty","Bold","Docile","Relaxed","Impish","Lax","Timid","Hasty","Serious","Jolly","Naive","Modest","Mild","Quiet","Bashful","Rash","Calm","Gentle","Sassy","Careful","Quirky"],t.statCalculator=new u.a,t.state={uid:"",curPkmn:"",baseStats:{HP:0,Atk:0,SpAtk:0,Def:0,SpDef:0,Spd:0},ivInfo:{HP:0,Atk:0,SpAtk:0,Def:0,SpDef:0,Spd:0},evInfo:{HP:0,Atk:0,SpAtk:0,Def:0,SpDef:0,Spd:0},totalStats:{HP:0,Atk:0,SpAtk:0,Def:0,SpDef:0,Spd:0},level:1,nature:"Hardy",moves:[],types:[],pkmnImg:"",isAdvanced:!0},t}return Object(n.a)(l,[{key:"getTypeColor",value:function(e){switch(e){case"fire":return"#EE8130";case"water":return"#6390F0";case"electric":return"#F7D02C";case"grass":return"#7AC74C";case"ice":return"#96D9D6";case"fighting":return"#C22E28";case"poison":return"#A33EA1";case"ground":return"#E2BF65";case"flying":return"#A98FF3";case"psychic":return"#F95587";case"bug":return"#A6B91A";case"rock":return"#B6A136";case"ghost":return"#735797";case"dragon":return"#6F35FC";case"dark":return"#705746";case"steel":return"#B7B7CE";case"fairy":return"#D685AD";default:return"#A8A77A"}}},{key:"componentDidMount",value:function(){this.readPokemonFromFile(p.a)}},{key:"retrieveNatureFromList",value:function(e){this.setState({nature:e}),this.updateTotalStats(this.statCalculator.getStatTotals(this.state.baseStats,this.state.evInfo,this.state.ivInfo,this.state.level,e))}},{key:"retrievePkmnFromList",value:function(e){this.setState({curPkmn:e}),this.retrievePkmnInfo(e)}},{key:"retrievePkmnInfo",value:function(e){var t=this,s=e.toLowerCase();fetch("https://pokeapi.co/api/v2/pokemon/"+s).then((function(e){return e.json()})).then((function(e){return t.updatePkmnInfo(e)}))}},{key:"updateTotalStats",value:function(e){this.setState({totalStats:e}),this.props.getPkmnInfo(this.state)}},{key:"updatePkmnInfo",value:function(e){var t=e.stats,s={HP:t[0].base_stat,Atk:t[1].base_stat,SpAtk:t[3].base_stat,Def:t[2].base_stat,SpDef:t[4].base_stat,Spd:t[5].base_stat};console.log(e.moves);var a=e.moves,n=e.sprites.front_default,i=[];if(1===e.past_types.length)if("generation-v"===e.past_types[0].generation.name)for(var r=0;r<e.past_types[0].types.length;r++)i.push(e.past_types[0].types[r].type.name);else for(var o=0;o<e.types.length;o++)i.push(e.types[o].type.name);else for(var l=0;l<e.types.length;l++)i.push(e.types[l].type.name);this.setState({baseStats:s,moves:a,pkmnImg:n,types:i}),this.updateTotalStats(this.statCalculator.getStatTotals(s,this.state.evInfo,this.state.ivInfo,this.state.level,this.state.nature))}},{key:"updatePkmnLevel",value:function(e){var t=this.state.nature,s=this.state.ivInfo,a=this.state.baseStats,n=this.state.evInfo,i=parseInt(e.target.value);i>=100?i=100:i<=0?i=1:i||(i=1),this.setState({level:i}),this.updateTotalStats(this.statCalculator.getStatTotals(a,n,s,i,t))}},{key:"updatePkmnEV",value:function(e,t){var s=this.state.level,a=this.state.nature,n=this.state.ivInfo,i=this.state.baseStats,r=this.state.evInfo,o=parseInt(e.target.value);o>=252?o=252:o<0?o=0:o||(o=0),"HP"===t?r.HP=o:"Atk"===t?r.Atk=o:"SpAtk"===t?r.SpAtk=o:"Def"===t?r.Def=o:"SpDef"===t?r.SpDef=o:"Spd"===t&&(r.Spd=o),this.setState({evInfo:r}),this.updateTotalStats(this.statCalculator.getStatTotals(i,r,n,s,a))}},{key:"updatePkmnIV",value:function(e,t){var s=this.state.level,a=this.state.nature,n=this.state.evInfo,i=this.state.baseStats,r=this.state.ivInfo,o=parseInt(e.target.value);o>=31?o=31:o<0?o=0:o||(o=0),"HP"===t?r.HP=o:"Atk"===t?r.Atk=o:"SpAtk"===t?r.SpAtk=o:"Def"===t?r.Def=o:"SpDef"===t?r.SpDef=o:"Spd"===t&&(r.Spd=o),this.setState({ivInfo:r}),this.updateTotalStats(this.statCalculator.getStatTotals(i,n,r,s,a))}},{key:"readPokemonFromFile",value:function(e){var t=this;fetch(e).then((function(e){return e.text()})).then((function(e){return t.getPokemonHelper(e)}))}},{key:"getPokemonHelper",value:function(e){var t=[];t=e.split("\n");for(var s=0;s<t.length;s++)(t[s][t[s].length-1]<48||t[s][t[s].length-1]>122)&&(t[s]=t[s].substring(0,t[s].length-1));return(null==t[t.length-1]||t[t.length-1].length<2)&&(t=t.slice(0,t.length-1)),this.setState({pokemonList:t}),t}},{key:"render",value:function(){var t=this,s=Object(d.jsxs)("div",{className:"advancedStat",children:[Object(d.jsx)("b",{className:"statText",children:"IV"}),Object(d.jsx)("b",{className:"statText",children:"EV"})]}),a=this.state.pokemonList?Object(d.jsx)(h.a,{names:this.state.pokemonList,getOption:this.retrievePkmnFromList}):null,n=this.state.pkmnImg?Object(d.jsx)("img",{className:"pkmnImg",src:this.state.pkmnImg,alt:"pokemonImage"}):null,i=Object(d.jsxs)("div",{className:"advancedStat",children:[Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.ivInfo.HP,onChange:function(e){return t.updatePkmnIV(e,"HP")},onBlur:function(e){return t.updatePkmnIV(e,"HP")}}),Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.evInfo.HP,onChange:function(e){return t.updatePkmnEV(e,"HP")},onBlur:function(e){return t.updatePkmnEV(e,"HP")}})]}),r=Object(d.jsxs)("div",{className:"advancedStat",children:[Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.ivInfo.Atk,onChange:function(e){return t.updatePkmnIV(e,"Atk")},onBlur:function(e){return t.updatePkmnIV(e,"Atk")}}),Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.evInfo.Atk,onChange:function(e){return t.updatePkmnEV(e,"Atk")},onBlur:function(e){return t.updatePkmnEV(e,"Atk")}})]}),o=Object(d.jsxs)("div",{className:"advancedStat",children:[Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.ivInfo.Def,onChange:function(e){return t.updatePkmnIV(e,"Def")},onBlur:function(e){return t.updatePkmnIV(e,"Def")}}),Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.evInfo.Def,onChange:function(e){return t.updatePkmnEV(e,"Def")},onBlur:function(e){return t.updatePkmnEV(e,"Def")}})]}),l=Object(d.jsxs)("div",{className:"advancedStat",children:[Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.ivInfo.SpAtk,onChange:function(e){return t.updatePkmnIV(e,"SpAtk")},onBlur:function(e){return t.updatePkmnIV(e,"SpAtk")}}),Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.evInfo.SpAtk,onChange:function(e){return t.updatePkmnEV(e,"SpAtk")},onBlur:function(e){return t.updatePkmnEV(e,"SpAtk")}})]}),c=Object(d.jsxs)("div",{className:"advancedStat",children:[Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.ivInfo.SpDef,onChange:function(e){return t.updatePkmnIV(e,"SpDef")},onBlur:function(e){return t.updatePkmnIV(e,"SpDef")}}),Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.evInfo.SpDef,onChange:function(e){return t.updatePkmnEV(e,"SpDef")},onBlur:function(e){return t.updatePkmnEV(e,"SpDef")}})]}),u=Object(d.jsxs)("div",{className:"advancedStat",children:[Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.ivInfo.Spd,onChange:function(e){return t.updatePkmnIV(e,"Spd")},onBlur:function(e){return t.updatePkmnIV(e,"Spd")}}),Object(d.jsx)("input",{className:"App-textBox",type:"number",value:this.state.evInfo.Spd,onChange:function(e){return t.updatePkmnEV(e,"Spd")},onBlur:function(e){return t.updatePkmnEV(e,"Spd")}})]}),p=e.advancedToggle?Object(d.jsxs)("div",{className:"statCol",children:[s,i,r,o,l,c,u]}):null,m=e.advancedToggle?"repeat(2, 1fr)":"repeat(1, 1fr)",f="repeat("+this.state.types.length+", 1fr)",b=this.state.types.length>0?this.state.types[0].charAt(0).toUpperCase()+this.state.types[0].slice(1):null,v=this.state.types.length>1?this.state.types[1].charAt(0).toUpperCase()+this.state.types[1].slice(1):null,y=this.state.types.length>1?Object(d.jsx)("b",{className:"type",style:{backgroundColor:this.getTypeColor(this.state.types[1])},children:v}):null,j=this.state.types.length>0?Object(d.jsxs)("div",{className:"typeRow",style:{gridTemplateColumns:f},children:[Object(d.jsx)("b",{className:"type",style:{backgroundColor:this.getTypeColor(this.state.types[0])},children:b}),y]}):null;return Object(d.jsxs)("div",{className:"pokemon",children:[a,Object(d.jsx)("br",{}),n,Object(d.jsx)("br",{}),j,Object(d.jsxs)("div",{className:"pkmnLevel",children:[Object(d.jsx)("b",{children:"Level:"}),Object(d.jsx)("input",{type:"number",value:this.state.level,onChange:this.updatePkmnLevel,onBlur:this.updatePkmnLevel})]}),Object(d.jsxs)("div",{className:"nature",children:[Object(d.jsx)("b",{children:"Nature: "}),Object(d.jsx)(h.a,{names:this.natureList,getOption:this.retrieveNatureFromList})]}),Object(d.jsxs)("div",{className:"statRow",style:{gridTemplateColumns:m},children:[Object(d.jsxs)("div",{className:"statCol",children:[Object(d.jsx)("b",{className:"statText",children:"Stats"}),Object(d.jsx)("br",{}),Object(d.jsxs)("b",{className:"statText",children:["HP: ",this.state.totalStats.HP]}),Object(d.jsx)("br",{}),Object(d.jsxs)("b",{className:"statText",children:["ATK: ",this.state.totalStats.Atk]}),Object(d.jsx)("br",{}),Object(d.jsxs)("b",{className:"statText",children:["DEF: ",this.state.totalStats.Def]}),Object(d.jsx)("br",{}),Object(d.jsxs)("b",{className:"statText",children:["SP ATK: ",this.state.totalStats.SpAtk]}),Object(d.jsx)("br",{}),Object(d.jsxs)("b",{className:"statText",children:["SP DEF: ",this.state.totalStats.SpDef]}),Object(d.jsx)("br",{}),Object(d.jsxs)("b",{className:"statText",children:["SPD: ",this.state.totalStats.Spd]})]}),p]})]})}}]),l}(c.a.Component);t.a=m}).call(this,s(23))},33:function(e,t,s){"use strict";var a=s(13),n=s(14),i=s(6),r=s(19),o=s(18),l=s(4),c=s.n(l),h=s(2),u=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).onOptionChange=n.onOptionChange.bind(Object(i.a)(n)),n.getOptionList=n.getOptionList.bind(Object(i.a)(n)),n.state={uid:""},n}return Object(n.a)(s,[{key:"onOptionChange",value:function(e){this.setState({option:e.target.value}),this.props.getOption(e.target.value)}},{key:"getOptionList",value:function(e){var t=[];return e.forEach((function(e){return t.push(Object(h.jsx)("option",{name:e,children:e},e))})),t}},{key:"componentDidMount",value:function(){this.setState({optionsList:this.getOptionList(this.props.names)})}},{key:"render",value:function(){var e=this.state.optionsList;return Object(h.jsx)("select",{value:this.state.option,onChange:this.onOptionChange,children:e})}}]),s}(c.a.Component);t.a=u},37:function(e,t){},39:function(e,t,s){"use strict";(function(e){var a=s(34),n=s(13),i=s(14),r=s(6),o=s(19),l=s(18),c=s(4),h=s.n(c),u=(s(25),s(29)),p=s(32),d=s(44),m=s(45),f=(s(37),s(2)),b=function(t){Object(o.a)(c,t);var s=Object(l.a)(c);function c(t){var a;return Object(n.a)(this,c),(a=s.call(this,t)).retrieveAtkPokemonInfo=a.retrieveAtkPokemonInfo.bind(Object(r.a)(a)),a.retrieveDefPokemonInfo=a.retrieveDefPokemonInfo.bind(Object(r.a)(a)),a.calculateMoves=a.calculateMoves.bind(Object(r.a)(a)),a.switchPokemon=a.switchPokemon.bind(Object(r.a)(a)),a.advancedOptions=a.advancedOptions.bind(Object(r.a)(a)),a.moveCalculator=new d.a,a.state={atkPkmnInfo:{},defPkmnInfo:{},isAdvanced:!1,calculatedMoves:null,calculating:!1},e.advancedToggle=!1,a}return Object(i.a)(c,[{key:"componentDidMount",value:function(){}},{key:"retrieveAtkPokemonInfo",value:function(e){this.setState({atkPkmnInfo:Object(a.a)({},e)})}},{key:"retrieveDefPokemonInfo",value:function(e){this.setState({defPkmnInfo:Object(a.a)({},e)})}},{key:"switchPokemon",value:function(){console.log("Placeholder for next iteration.")}},{key:"calculateMoves",value:function(e){console.log("Hello there, inside of calculateMoves"),this.setState({calculating:!0});var t=this.moveCalculator.moveCalculator(this.state.atkPkmnInfo,this.state.defPkmnInfo,3,{weather:1});console.log("calcMoves",t),this.setState({calculatedMoves:t,calculating:!1})}},{key:"advancedOptions",value:function(){e.advancedToggle=!e.advancedToggle,this.forceUpdate()}},{key:"render",value:function(){console.log(this.state.calculatedMoves);var e=this.state.calculatedMoves?Object(f.jsx)(m.a,{calculatedMoves:this.state.calculatedMoves}):null,t=this.state.calculating?Object(f.jsx)("button",{className:"button",children:"Calculating..."}):Object(f.jsx)("button",{className:"button",onClick:this.calculateMoves,children:"CALCULATE"});return Object(f.jsxs)("div",{className:"App",style:{fontSize:25},children:[Object(f.jsxs)("div",{className:"App-hcontainer",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)("h1",{children:"Pokemon Move Thrower!"})}),Object(f.jsx)("div",{className:"App-login",children:Object(f.jsx)(u.a,{})})]}),Object(f.jsxs)("div",{className:"App-mid",children:[Object(f.jsxs)("div",{className:"App-body",children:[Object(f.jsx)("b",{children:"Attacking Pokemon"}),Object(f.jsx)(p.a,{getPkmnInfo:this.retrieveAtkPokemonInfo})]}),Object(f.jsxs)("div",{className:"App-body",children:[Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"button",style:{fontSize:18,backgroundColor:"white"},onClick:this.switchPokemon,children:"Switch Roles"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),t,Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"Advanced Options"}),Object(f.jsx)("input",{type:"checkbox",style:{height:20,width:20,backgroundColor:"white"},onChange:this.advancedOptions}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"button",style:{fontSize:18,backgroundColor:"white"},children:"Reset Settings"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("b",{style:{textDecoration:"underline"},children:"Recommended Moves"})]}),Object(f.jsxs)("div",{className:"App-body",children:[Object(f.jsx)("b",{children:"Defending Pokemon"}),Object(f.jsx)(p.a,{getPkmnInfo:this.retrieveDefPokemonInfo})]})]}),Object(f.jsx)("div",{className:"App-body",style:{display:"flex",minWidth:"100%"},children:e})]})}}]),c}(h.a.Component);t.a=b}).call(this,s(23))},42:function(e,t,s){"use strict";var a=s(13),n=s(14),i=function(){function e(){Object(a.a)(this,e),this.getStatTotals=this.getStatTotals.bind(this)}return Object(n.a)(e,[{key:"getStatTotals",value:function(e,t,s,a,n){var i=n.toLowerCase();return{HP:this.setHealth(e.HP,t.HP,s.HP,a,i),Atk:this.setAttack(e.Atk,t.Atk,s.Atk,a,i),Def:this.setDefense(e.Def,t.Def,s.Def,a,i),SpAtk:this.setSpAttack(e.SpAtk,t.SpAtk,s.SpAtk,a,i),SpDef:this.setSpDefense(e.SpDef,t.SpDef,s.SpDef,a,i),Spd:this.setSpeed(e.Spd,t.Spd,s.Spd,a,i)}}},{key:"setHealth",value:function(e,t,s,a,n){var i=(2*e+s+Math.floor(t/4))*a;return i=(i=Math.floor(i/100))+a+10}},{key:"setAttack",value:function(e,t,s,a,n){var i=(2*e+s+Math.floor(t/4))*a;i=Math.floor(i/100),i+=5;var r=1;return"lonely"!==n&&"brave"!==n&&"adamant"!==n&&"naughty"!==n||(r=1.1),"bold"!==n&&"timid"!==n&&"modest"!==n&&"calm"!==n||(r=.9),i=Math.floor(i*r)}},{key:"setDefense",value:function(e,t,s,a,n){var i=(2*e+s+Math.floor(t/4))*a;i=Math.floor(i/100),i+=5;var r=1;return"bold"!==n&&"relaxed"!==n&&"impish"!==n&&"lax"!==n||(r=1.1),"lonely"!==n&&"hasty"!==n&&"mild"!==n&&"gentle"!==n||(r=.9),i=Math.floor(i*r)}},{key:"setSpAttack",value:function(e,t,s,a,n){var i=(2*e+s+Math.floor(t/4))*a;i=Math.floor(i/100),i+=5;var r=1;return"modest"!==n&&"mild"!==n&&"quiet"!==n&&"rash"!==n||(r=1.1),"adamant"!==n&&"impish"!==n&&"jolly"!==n&&"careful"!==n||(r=.9),i=Math.floor(i*r)}},{key:"setSpDefense",value:function(e,t,s,a,n){var i=(2*e+s+Math.floor(t/4))*a;i=Math.floor(i/100),i+=5;var r=1;return"calm"!==n&&"gentle"!==n&&"sassy"!==n&&"careful"!==n||(r=1.1),"naughty"!==n&&"lax"!==n&&"naive"!==n&&"rash"!==n||(r=.9),i=Math.floor(i*r)}},{key:"setSpeed",value:function(e,t,s,a,n){var i=(2*e+s+Math.floor(t/4))*a;i=Math.floor(i/100),i+=5;var r=1;return"timid"!==n&&"hasty"!==n&&"jolly"!==n&&"naive"!==n||(r=1.1),"brave"!==n&&"relaxed"!==n&&"quiet"!==n&&"sassy"!==n||(r=.9),i=Math.floor(i*r)}}]),e}();t.a=i},43:function(e,t,s){"use strict";t.a=s.p+"static/media/gen3pokemon.7050a959.txt"},44:function(e,t,s){"use strict";var a=s(13),n=s(14),i=function(){function e(){Object(a.a)(this,e),console.log("TEST!"),this.moveCalculator=this.moveCalculator.bind(this),this.gen1matchups=[[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1],[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5],[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5],[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5],[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5],[1,1,.5,1,2,.5,1,1,2,2,1,1,1,1,2],[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1],[1,1,1,1,2,1,1,.5,.5,1,1,2,.5,.5,1],[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1],[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1],[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1],[1,.5,1,1,2,1,.5,2,1,.5,2,1,1,.5,1],[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]],this.gen2to5matchups=[[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5],[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2],[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1],[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1],[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5],[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5],[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2],[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0],[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2],[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5],[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5],[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5],[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,.5],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5],[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,.5],[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5]],this.gen6to8matchups=[[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5,1],[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2,1],[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1,1],[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1,1],[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5,1],[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5,1],[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2,.5],[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0,2],[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2,1],[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5,1],[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5,1],[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5,.5],[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5,1],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5,0],[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,1,.5],[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5,2],[1,.5,1,1,1,1,2,.5,1,1,1,1,1,1,2,2,.5,1]],this.elemental_types={Normal:0,Fire:1,Water:2,Electric:3,Grass:4,Ice:5,Fight:6,Poison:7,Ground:8,Flying:9,Psychic:10,Bug:11,Rock:12,Ghost:13,Dragon:14,Dark:15,Steel:16,Fairy:17},this.physical_types=[this.elemental_types.Normal,this.elemental_types.Fighting,this.elemental_types.Flying,this.elemental_types.Poison,this.elemental_types.Ground,this.elemental_types.Rock,this.elemental_types.Bug,this.elemental_types.Ghost,this.elemental_types.Steel],this.speical_types=[this.elemental_types.Fire,this.elemental_types.Water,this.elemental_types.Grass,this.elemental_types.Electric,this.elemental_types.Psychic,this.elemental_types.Ice,this.elemental_types.Dragon,this.elemental_types.Dark,this.elemental_types.Fairy],this.weather_types={Clear:1,Harsh_Sunlight:2,Rain:3,Sandstorm:4,Hail:5,Shadowy_Aura:6,Fog:7,Strong_Winds:8},this.move_category={Physical:1,Special:2}}return Object(n.a)(e,[{key:"moveCalculator",value:function(e,t,s,a){var n=this,i=[];return e.moves.forEach((function(r){var o=n.calculateDamage(r,e,t,s,a);i.push({move:r,min_dmg:o.min_damage,max_dmg:o.max_damage})})),i.sort((function(e,t){return t.max_dmg-e.max_dmg}))}},{key:"calculateDamage",value:function(e,t,s,a,n){var i=1,r=1,o=1,l=0,c=0;if(1==a){var h=2*t.level,u=t.level,p=e.power,d=0,m=0;this.physical_types.indexOf(e.type)>-1?(d=t.statTotals.Atk,m=s.statTotals.Def):(d=t.statTotals.SpAtk,m=s.statTotals.SpDef),e.type.in(t.types)&&(r=1.5),l=((2*h/5+2)*p*d/m/50+2)*(1*i*1*1*r*o*1*1*1*1),c=((2*u/5+2)*p*d/m/50+2)*(1*i*1*1*r*o*1*1*1*1)}if(2==a){t.level,t.level;this.physical_types.indexOf(e.type)>-1?(t.attack,s.defense):(t.special_attack,s.special_defense),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Fire&&(i=1.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Water&&(i=1.5),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Water&&(i=.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Fire&&(i=.5)}if(3==a){var f=t.level,b=e.power,v=0,y=0;this.physical_types.indexOf(e.type)>-1?(v=t.totalStats.attack,y=s.totalStats.defense):(v=t.totalStats.SpAtk,y=s.totalStats.SpDef),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Fire&&(i=1.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Water&&(i=1.5),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Water&&(i=.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Fire&&(i=.5);console.log("move inside of moveCalculator",e),console.log("AtkPokemon.type",t.types),e.type in t.types&&(r=1.5),o=this.gen2to5matchups[this.elemental_types[e.type]][this.elemental_types[s.types[0]]],console.log(s.types[0],"--first"),o*=null==s.types[1]?1:this.gen2to5matchups[this.elemental_types[e.type]][this.elemental_types[s.types[1]]],console.log(o,"--second");var j=1*i*1*1*1*r*o*1*1*1*1,g=1*i*1*1*.85*r*o*1*1*1*1;console.log(j,"--third"),console.log(f),l=((2*t.level/5+2)*b*v/y/50+2)*j,c=((2*t.level/5+2)*b*v/y/50+2)*g,console.log(o),console.log("max ",l," min ",c)}if(4==a){if(e.category<=this.move_category.Physical)t.attack,s.defense;else if(e.category<=this.move_category.Special)t.special_attack,s.special_defense;n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Fire&&(i=1.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Water&&(i=1.5),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Water&&(i=.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Fire&&(i=.5)}if(5==a){if(e.category<=this.move_category.Physical)t.attack,s.defense;else if(e.category<=this.move_category.Special)t.special_attack,s.special_defense;n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Fire&&(i=1.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Water&&(i=1.5),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Water&&(i=.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Fire&&(i=.5)}if(6==a){if(e.category<=this.move_category.Physical)t.attack,s.defense;else if(e.category<=this.move_category.Special)t.special_attack,s.special_defense;n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Fire&&(i=1.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Water&&(i=1.5),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Water&&(i=.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Fire&&(i=.5)}if(7==a){if(e.category<=this.move_category.Physical)t.attack,s.defense;else if(e.category<=this.move_category.Special)t.special_attack,s.special_defense;n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Fire&&(i=1.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Water&&(i=1.5),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Water&&(i=.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Fire&&(i=.5)}if(8==a){if(e.category<=this.move_category.Physical)t.attack,s.defense;else if(e.category<=this.move_category.Special)t.special_attack,s.special_defense;n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Fire&&(i=1.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Water&&(i=1.5),n.weather==this.weather_types.Harsh_Sunlight&&e.type==this.elemental_types.Water&&(i=.5),n.weather==this.weather_types.Rain&&e.type==this.elemental_types.Fire&&(i=.5)}return{min_damage:c,max_damage:l}}}]),e}();t.a=i},45:function(e,t,s){"use strict";var a=s(13),n=s(14),i=s(6),r=s(19),o=s(18),l=s(4),c=s.n(l),h=(s(25),s(2)),u=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).createMoveList=n.createMoveList.bind(Object(i.a)(n)),n}return Object(n.a)(s,[{key:"createMoveList",value:function(){console.log("Inside of createMoveList");var e=this.props.calculatedMoves,t=[];return e.foreach((function(e){console.log(e.move),t.push(Object(h.jsx)("li",{className:"moveItem",children:Object(h.jsx)("b",{children:e.move})}))})),t}},{key:"render",value:function(){var e=this.createMoveList();return Object(h.jsx)("ol",{className:"moveList",children:e})}}]),s}(c.a.Component);t.a=u},50:function(e,t,s){},59:function(e,t,s){"use strict";s.p},60:function(e,t,s){"use strict";s.p},61:function(e,t,s){"use strict";s.p},62:function(e,t,s){"use strict";s.p},63:function(e,t,s){"use strict";s.p},64:function(e,t,s){"use strict";s.r(t);var a=s(4),n=s.n(a),i=s(38),r=s.n(i),o=(s(50),s(25),s(26)),l=s(10),c=s(39),h=(s(29),s(2));var u=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{children:Object(h.jsx)(l.d,{children:Object(h.jsx)(l.b,{exact:!0,path:"/",component:c.a})})})})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),p()}},[[64,1,2]]]);
//# sourceMappingURL=main.12d5cbad.chunk.js.map