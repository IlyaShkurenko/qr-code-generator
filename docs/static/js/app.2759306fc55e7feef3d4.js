webpackJsonp([1],{"4Y+9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADmCAIAAABOCG7sAAAABmJLR0QA/wD/AP+gvaeTAAADx0lEQVR4nO3dwY6bQBQAwTjK//+yc1n5shHxYhhe21X3dQhqzYHHMLf7/f4LOn5ffQHwM5IlRrLESJYYyRIjWWIkS4xkiZEsMZIlRrLESJYYyRIjWWIkS4xkiZEsMZIlRrLE/Hnlj2+321HXsd6+TW8b/+WNH9x3ow7/wSFe3G5olSVGssRIlhjJEiNZYiRLjGSJkSwxL40SNgz5Ot3KR+6Hzwv2efs7b5UlRrLESJYYyRIjWWIkS4xkiZEsMWeNEjYc/pD58IfnKzcR7NvmsM/8O/8MqywxkiVGssRIlhjJEiNZYiRLjGSJuWCUMN/KLwsN2UQQYpUlRrLESJYYyRIjWWIkS4xkiZEsMUYJP7NvynD4X30yqywxkiVGssRIlhjJEiNZYiRLjGSJuWCU8K5PyOf/v+Zf4TOsssRIlhjJEiNZYiRLjGSJkSwxkiXmrFHCyvOOD5feX5C+88+wyhIjWWIkS4xkiZEsMZIlRrLESJaY23u8qX6slccu7/vBT2aVJUayxEiWGMkSI1liJEuMZImRLDEvjRJWnkH8ri/bzx9ADNlt8WCVJUayxEiWGMkSI1liJEuMZImRLDGZY5eHvKK/8vH+kMHKtGGHVZYYyRIjWWIkS4xkiZEsMZIlRrLEXPCBo5UnEQx5sX/Dynf+h+zsMErgs0iWGMkSI1liJEuMZImRLDGSJeasDxzNf6N+w/xjl4d8dOiSy7DKEiNZYiRLjGSJkSwxkiVGssRIlpizPnC08hiFfZdx+A/ukx5AOCsB/k+yxEiWGMkSI1liJEuMZImRLDEXfOBovpUDiJXfdFo5PbErAb5IlhjJEiNZYiRLjGSJkSwxkiXmpV0JQ769v8+QbQ77zL/z590oqywxkiVGssRIlhjJEiNZYiRLjGSJueCshJXmn+awT/qk6RdZZYmRLDGSJUayxEiWGMkSI1liJEvMWWclbBhyjMLKf+vwicaQecEll2GVJUayxEiWGMkSI1liJEuMZImRLDEXjBLmG/LO/5B9E0PGFg9WWWIkS4xkiZEsMZIlRrLESJYYyRJjlPAPQx7UbzyNH3LQw8rTnx+sssRIlhjJEiNZYiRLjGSJkSwxkiXmglFC6LP83x1+8UOGAhsumRdssMoSI1liJEuMZImRLDGSJUayxEiWmLNGCfNPLh7i8KfxQ87CtisBvkiWGMkSI1liJEuMZImRLDGSJeaW3iPAB7LKEiNZYiRLjGSJkSwxkiVGssRIlhjJEiNZYiRLjGSJkSwxkiVGssRIlhjJEiNZYiRLjGSJ+Qu3FhLCtGp3cwAAAABJRU5ErkJggg=="},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("pFYg"),o=a.n(r),l=a("mvHQ"),i=a.n(l),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 col-sm-offset-1"},[a("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[a("fieldset",[a("legend",[t._v("SMS QR Code")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Number")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.sms.phone,expression:"qrcode.sms.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Your number"},domProps:{value:t.qrcode.sms.phone},on:{input:function(e){e.target.composing||t.$set(t.qrcode.sms,"phone",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Message")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.sms.text,expression:"qrcode.sms.text"}],staticClass:"form-control",attrs:{rows:"5",id:"comment"},domProps:{value:t.qrcode.sms.text},on:{input:function(e){e.target.composing||t.$set(t.qrcode.sms,"text",e.target.value)}}})])])])])])])])},staticRenderFns:[]},n=a("VU/8")({props:["qrcode"]},c,!1,null,null,null).exports,d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 col-sm-offset-1"},[a("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[a("fieldset",[a("legend",[t._v("Email QR Code")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Email")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.email.email,expression:"qrcode.email.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.qrcode.email.email},on:{input:function(e){e.target.composing||t.$set(t.qrcode.email,"email",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Subject")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.email.subject,expression:"qrcode.email.subject"}],staticClass:"form-control",attrs:{type:"text",placeholder:"subject"},domProps:{value:t.qrcode.email.subject},on:{input:function(e){e.target.composing||t.$set(t.qrcode.email,"subject",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Message")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.email.text,expression:"qrcode.email.text"}],staticClass:"form-control",attrs:{rows:"5",id:"comment"},domProps:{value:t.qrcode.email.text},on:{input:function(e){e.target.composing||t.$set(t.qrcode.email,"text",e.target.value)}}})])])])])])])])},staticRenderFns:[]},m=a("VU/8")({props:["qrcode"]},d,!1,null,null,null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("legend",[t._v("Text QR Code")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("Text:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.text.text,expression:"qrcode.text.text"}],staticClass:"form-control",attrs:{rows:"5",id:"comment"},domProps:{value:t.qrcode.text.text},on:{input:function(e){e.target.composing||t.$set(t.qrcode.text,"text",e.target.value)}}})])])},staticRenderFns:[]},u=a("VU/8")({props:["qrcode"]},v,!1,null,null,null).exports,p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("legend",[t._v("WebSite(URL)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.link.url,expression:"qrcode.link.url"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"https://www.example.com"},domProps:{value:t.qrcode.link.url},on:{input:function(e){e.target.composing||t.$set(t.qrcode.link,"url",e.target.value)}}})])},staticRenderFns:[]},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 col-sm-offset-1"},[a("form",{staticClass:"form-horizontal",attrs:{role:"form"}},[a("fieldset",[a("legend",[t._v("VCard QR Code")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Name")]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.firstname,expression:"qrcode.vcard.firstname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Firstname"},domProps:{value:t.qrcode.vcard.firstname},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"firstname",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.lastname,expression:"qrcode.vcard.lastname"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Lastname"},domProps:{value:t.qrcode.vcard.lastname},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"lastname",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Numbers")]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.phone,expression:"qrcode.vcard.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:t.qrcode.vcard.phone},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"phone",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.fax,expression:"qrcode.vcard.fax"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Fax"},domProps:{value:t.qrcode.vcard.fax},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"fax",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Email")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.email,expression:"qrcode.vcard.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"your#email.com"},domProps:{value:t.qrcode.vcard.email},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"email",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Company")]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.company,expression:"qrcode.vcard.company"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Company"},domProps:{value:t.qrcode.vcard.company},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"company",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.job,expression:"qrcode.vcard.job"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Job"},domProps:{value:t.qrcode.vcard.job},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"job",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("City")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.city,expression:"qrcode.vcard.city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.qrcode.vcard.city},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"city",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Street")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.street,expression:"qrcode.vcard.street"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Street"},domProps:{value:t.qrcode.vcard.street},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"street",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("State")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.state,expression:"qrcode.vcard.state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"State"},domProps:{value:t.qrcode.vcard.state},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"state",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-md-2 control-label",attrs:{for:"textinput"}},[t._v("Country")]),t._v(" "),a("div",{staticClass:"col-md-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.qrcode.vcard.country,expression:"qrcode.vcard.country"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Country"},domProps:{value:t.qrcode.vcard.country},on:{input:function(e){e.target.composing||t.$set(t.qrcode.vcard,"country",e.target.value)}}})])])])])])])])},staticRenderFns:[]},g={data:function(){return{qrcode:{sms:{},email:{text:"",email:"",subject:""},text:{text:""},link:{url:""},vcard:{firstname:"",lastname:"",phone:"",fax:"",email:"",company:"",job:"",city:"",street:"",state:"",country:""}},tabs:{name:["Url","VCard","Message","Email","SMS"],fa:["fas fa-external-link-alt","fas fa-address-card","fa fa-align-left","fas fa-at","fas fa-envelope"]},tab:"url",code:null,embeded:""}},components:{url:a("VU/8")({props:["qrcode"]},p,!1,null,null,null).exports,vcard:a("VU/8")({props:["qrcode"]},f,!1,null,null,null).exports,message:u,email:m,sms:n},updated:function(){localStorage.setItem("qr-barcode-generators",i()(this.qrcode)),localStorage.setItem("qr-barcode-generator-tabs",this.tab)},computed:{getUrl:function(){return this.getUnProcessedUrl},getUnProcessedUrl:function(){var t=function t(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var a=[],s=0;s<e.length;s++)a[s]=t(e[s]);return console.log(a),a}if("object"==(void 0===e?"undefined":o()(e))){var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t(e[r]));return a}return e}(this.qrcode);t=function(t){var e=t;for(var a in e)for(var s in e[a])e[a].hasOwnProperty(s)&&0!==e[a][s].length&&(e[a][s]=encodeURIComponent(e[a][s]));return e}(t);var e=this.tab;return"https://chart.googleapis.com/chart?cht=qr&chl="+("url"===e?t.link.url+"&chs=230x230&choe=UTF-8&chld=L|2":"email"===e?"MATMSG%3ATO%3A"+t.email.email+"%3BSUB%3A"+t.email.subject+"%3BBODY%3A"+t.email.text+"%3B%3B":"sms"===e?"SMSTO%3A"+t.sms.phone+"%3A"+t.sms.text:"message"===e?""+t.text.text:"vcard"===e?"BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3A"+t.vcard.lastname+"%3B"+t.vcard.firstname+"%0AFN%3A"+t.vcard.firstname+"%20"+t.vcard.lastname+"%0AORG%3A"+t.vcard.company+"%0ATITLE%3A"+t.vcard.job+"%0AADR%3A%3B%3B"+t.vcard.street+"%3B"+t.vcard.city+"%3B"+t.vcard.state+"%3B%3B"+t.vcard.country+"%0ATEL%3BWORK%3BVOICE%3A"+t.vcard.phone+"%0ATEL%3BFAX%3A"+t.vcard.fax+"%0AEMAIL%3BWORK%3BINTERNET%3A"+t.vcard.email+"%0AEND%3AVCARD%0A":"")+"&chs=230x230&choe=UTF-8&chld=L|2"},isEmptyObject:function(){var t=this.qrcode;for(var e in t)for(var a in t[e])if(t[e].hasOwnProperty(a)&&0!==t[e][a].length)return!1;return!0}},mounted:function(){var t=JSON.parse(localStorage.getItem("qr-barcode-generators")),e=localStorage.getItem("qr-barcode-generators-tab");t&&e&&(this.qrcode=t,this.tab=e)},methods:{printImg:function(){var t=window.open("");t.document.write('<img src="'+this.getUrl+'" onload="window.print();window.close()" />'),t.focus()},emb:function(){this.embeded=this.$refs.embeded.outerHTML.replace(/src=".*"\s/,'src="'+this.getUrl+'" ')}}};var x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center",attrs:{id:"app"}},[s("div",{attrs:{id:"wrapper"}},[s("div",{attrs:{id:"page-wrapper"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row center-block"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"panel with-nav-tabs panel-primaryes"},[s("div",{staticClass:"panel-heading"},[s("ul",{staticClass:"nav nav-tabs"},t._l(t.tabs.name.length,function(e){return s("li",{class:[t.tab==t.tabs.name[e-1].toLowerCase()?"active":"dropdown"],on:{click:function(a){t.tab=t.tabs.name[e-1].toLowerCase()}}},[s("a",{attrs:{"data-toggle":"tab"}},[s("span",{class:t.tabs.fa[e-1]}),t._v(" "+t._s(t.tabs.name[e-1]))])])}))]),t._v(" "),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade in active"},[s(t.tab,{tag:"component",attrs:{qrcode:t.qrcode}})],1)])])])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("a",{ref:"embeded",staticStyle:{cursor:"default",border:"0"},attrs:{rel:"nofollow"}},[t.isEmptyObject?s("img",{staticStyle:{opacity:"0.2"},attrs:{src:a("4Y+9")}}):s("img",{ref:"imgref",attrs:{src:t.getUrl}})])]),t._v(" "),s("div",{staticClass:"row"},[s("button",{staticClass:"btn btn-info",on:{click:t.printImg}},[t._v("Print")])]),t._v(" "),s("div",{staticClass:"row"},[s("a",{staticClass:"btn btn-info",attrs:{href:t.getUrl,target:"_blank",download:""}},[t._v("Download")])]),t._v(" "),s("div",{staticClass:"row"},[s("a",{attrs:{"data-toggle":"modal","data-target":"#exampleModal",role:"button"},on:{click:t.emb}},[t._v("Embeded qr code")])])])])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("p",[t._v("To embed the QR code on your website, use the following HTML code. Commercial usage is allowed.")]),t._v(" "),s("div",{staticClass:"modal-body"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.embeded,expression:"embeded"}],staticClass:"form-control",attrs:{rows:"5",id:"comment"},domProps:{value:t.embeded},on:{input:function(e){e.target.composing||(t.embeded=e.target.value)}}})]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Embed QR code on your website")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}]};var C=a("VU/8")(g,x,!1,function(t){a("r9V5")},null,null).exports,b=a("/ocq");s.a.use(b.a);var h=new b.a({routes:[{path:"/",name:"HelloWorld"}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:h,components:{App:C},template:"<App/>"})},r9V5:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2759306fc55e7feef3d4.js.map