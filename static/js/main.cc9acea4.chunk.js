(this["webpackJsonpmeme-gen"]=this["webpackJsonpmeme-gen"]||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r),m=(a(19),a(20),a(6),function(){return l.a.createElement("div",{className:"header"},"MEME GEN")}),i=a(1),s=a(2),c=a(4),u=a(3),d=(a(7),a(5)),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).increaseSize=function(){var e=document.getElementsByClassName("meme-download")[0],t=window.getComputedStyle(e,null).getPropertyValue("font-size"),a=parseFloat(t);e.style.fontSize=a+5+"px"},n.decreaseSize=function(){var e=document.getElementsByClassName("meme-download")[0],t=window.getComputedStyle(e,null).getPropertyValue("font-size"),a=parseFloat(t);e.style.fontSize=a-5+"px"},n.setColor=function(){var e=document.getElementById("color-input").value;document.getElementsByClassName("meme-download")[0].style.color=e},n.setFont=function(){var e=document.getElementById("select-font").value;document.getElementsByClassName("meme-download")[0].style.fontFamily=" "+e+" , sans-serif"},n.toggleTextShadow=function(){var e=document.getElementsByTagName("p");if(n.state.textShadow){for(var t=0;t<e.length;t++)e[t].style.textShadow="none";n.setState({textShadow:!1})}else{for(var a=0;a<e.length;a++)e[a].style.textShadow=" #000 0px 0px 1px, #000 0px 0px 1px,   #000 0px 0px 1px,#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px,#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px,#000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px";n.setState({textShadow:!0})}},n.state={textShadow:!0},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"meme-font-edit"},l.a.createElement("div",{className:"meme-font-edit-option"},l.a.createElement("button",{className:"make-meme-button",onClick:this.decreaseSize},"-"),"Font Size",l.a.createElement("button",{className:"make-meme-button",onClick:this.increaseSize},"+")),l.a.createElement("div",{className:"meme-font-edit-option"},"Select Font Color",l.a.createElement("input",{type:"color",id:"color-input",onChange:this.setColor})),l.a.createElement("div",{className:"meme-font-edit-option"},"Select Font",l.a.createElement("select",{id:"select-font",onChange:this.setFont},l.a.createElement("option",{value:"Roboto"},"Roboto"),l.a.createElement("option",{value:"Impact"},"Impact"),l.a.createElement("option",{value:"Arial"},"Arial"))),l.a.createElement("div",{className:"meme-font-edit-option"},l.a.createElement("button",{className:"make-meme-button",onClick:this.toggleTextShadow},"Toggle text shadow")))}}]),a}(n.Component),p=(a(10),a(13)),g=a.n(p),v=a(8),f=a.n(v),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateState=function(e){n.state.text=e.target.value},n.addText=function(){var e=n.state.text;document.getElementsByTagName("p")[n.state.textID].innerHTML=e;var t=n.state.textID-1;n.setState({text:"",textID:t})},n.resetText=function(){var e=document.getElementsByTagName("p"),t=0;for(t=0;t<e.length;t++)e[t].innerHTML="";document.getElementById("make-meme-text-input").value="",n.setState({textID:4})},n.increaseFont=function(){var e=document.getElementsByClassName("meme-download")[0],t=window.getComputedStyle(e,null).getPropertyValue("font-size"),a=parseFloat(t);e.style.fontSize=a+5+"px"},n.decreaseFont=function(){var e=document.getElementsByClassName("meme-download")[0],t=window.getComputedStyle(e,null).getPropertyValue("font-size"),a=parseFloat(t);e.style.fontSize=a-5+"px"},n.imgStyle=function(){var e=document.getElementById("meme-img");e.setAttribute("width","600"),e.setAttribute("height","600")},n.usestyle={"--width":"200","--height":"100","--top":"0"},n.state={imgurl:"",text:"",textID:6,width:600,height:600},n.addText=n.addText.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"make-meme"},l.a.createElement("div",{className:"make-meme-image"},l.a.createElement("div",{className:"meme-download"},l.a.createElement("img",{alt:"your meme goes here",width:this.state.width,height:this.state.height,src:this.state.imgurl}),l.a.createElement("deckgo-drr",{style:this.usestyle,unit:"px"},l.a.createElement("p",null)),l.a.createElement("deckgo-drr",{style:this.usestyle,unit:"px"},l.a.createElement("p",null)),l.a.createElement("deckgo-drr",{style:this.usestyle,unit:"px"},l.a.createElement("p",null)),l.a.createElement("deckgo-drr",{style:this.usestyle,unit:"px"},l.a.createElement("p",null)),l.a.createElement("deckgo-drr",{style:this.usestyle,unit:"px"},l.a.createElement("p",null)),l.a.createElement("deckgo-drr",{style:this.usestyle,unit:"px"},l.a.createElement("p",null)),l.a.createElement("deckgo-drr",{style:this.usestyle,unit:"px"},l.a.createElement("p",null)))),l.a.createElement("div",{className:"make-meme-text"},l.a.createElement("div",{id:"make-meme-text-head"},"Add your magic !"),l.a.createElement("input",{id:"make-meme-text-input",onChange:function(t){return e.updateState(t)},placeholder:"Your text here"}),l.a.createElement("button",{className:"make-meme-button",id:"add-button",onClick:this.addText},"Add"),l.a.createElement(h,null),l.a.createElement("div",{className:"make-meme-action-button"},l.a.createElement("button",{className:"make-meme-button",onClick:this.resetText},"Reset"),l.a.createElement("button",{className:"make-meme-button",onClick:function(){g.a.toBlob(document.getElementsByClassName("meme-download")[0]).then((function(e){f.a.saveAs(e,"meme.png")}))}},"Save"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.heightTowidth>=1?{imgurl:e.memeurl,width:600/e.heightTowidth,height:600}:{imgurl:e.memeurl,width:600,height:600*e.heightTowidth}}}]),a}(n.Component),x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setURL=function(e){var t=e.height/e.width;n.setState({activeMeme:e.url,htwratio:t}),window.scrollTo(0,700)},n.state={memeArray:[],activeMeme:"",htwratio:1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"meme-gallery"},this.state.memeArray.map((function(t){var a="0%",n="0%";return t.height>=t.width?(a="100%",n="auto"):(a="auto",n="100%"),l.a.createElement("div",{className:"meme-card",onClick:function(){return e.setURL(t)}},l.a.createElement("img",{className:"meme-img",src:t.url,height:a,width:n}),l.a.createElement("div",{className:"meme-name"},t.name))}))),l.a.createElement(E,{memeurl:this.state.activeMeme,heightTowidth:this.state.htwratio}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{memeArray:e.memeArray}}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={memes:[],isLoaded:!1,error:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,memes:t.data.memes})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){return this.state.error?l.a.createElement("div",null,"Error Loading. Reload."):l.a.createElement(x,{memeArray:this.state.memes})}}]),a}(n.Component),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={memeurl:""},e.display=function(t){var a=new FileReader;a.onload=function(){e.setState({memeurl:a.result})},a.readAsDataURL(t.target.files[0])},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"upload-image"},l.a.createElement("label",{for:"upload-image-input",className:"upload-image-label"},l.a.createElement("input",{type:"file",id:"upload-image-input",accept:"image/*",onChange:function(t){return e.display(t)}}),"Choose Meme")),l.a.createElement(E,{memeurl:this.state.memeurl}))}}]),a}(n.Component),w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).Tabs=[{tabId:"0",tabName:"From Templates",tabContent:l.a.createElement(b,null)},{tabId:"1",tabName:"From Gallery",tabContent:l.a.createElement(y,null)}],n.onClickTab=function(e){var t=e.target.id,a=n.Tabs.findIndex((function(e){return e.tabId===t}));n.setState({activeTab:a})},n.state={activeTab:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"tabs"},l.a.createElement("ol",{className:"tab-list"},this.Tabs.map((function(t){var a="tab-list-item";return t.tabId==e.state.activeTab&&(a+=" tab-list-active"),l.a.createElement("li",{className:a,id:t.tabId,onClick:function(t){return e.onClickTab(t)}},t.tabName)}))),l.a.createElement("div",{className:"tab-content"},this.Tabs[this.state.activeTab].tabContent))}}]),a}(n.Component),k=function(){return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){},7:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.cc9acea4.chunk.js.map