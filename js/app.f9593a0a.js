(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/congratulation-cards/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"041f":function(e,t,n){e.exports=n.p+"img/0.386e678f.jpg"},"06d4":function(e,t,n){e.exports=n.p+"img/6.1b3db2d0.jpg"},"0cd4":function(e,t,n){"use strict";n("f98b")},"11d9":function(e,t,n){e.exports=n.p+"img/3.be5b41e2.jpg"},"405a":function(e,t,n){e.exports=n.p+"img/2.281aac52.jpg"},"45da":function(e,t,n){},"492f":function(e,t,n){},"4d0f":function(e,t,n){e.exports=n.p+"img/5.ba6fdf6d.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("6c02");function i(e,t,n,a,i,o){var c=Object(r["x"])("Form"),s=Object(r["x"])("Switcher");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(c,{imgSrc:"https://slovnet.ru/wp-content/uploads/2018/12/1-12.jpg",imgOffset:"-225%"}),Object(r["h"])(s)],64)}var o={class:"card dark-theme || light-theme"},c={class:"card__title"},s={class:"card__body"},u={key:0},l=Object(r["h"])("b",null,"Пожалуйста исправьте указанные ошибки:",-1),p=Object(r["h"])("label",{for:"firstName"}," Имя ",-1),f=Object(r["h"])("label",{for:"lastName"}," Фамилия ",-1),d=Object(r["h"])("label",{for:"position"}," Позиция ",-1),b=Object(r["h"])("label",{for:"text"}," Текст поздравления ",-1),m=Object(r["h"])("label",{for:"imgSrc"}," Ссылка на картинку ",-1),g=Object(r["h"])("label",{for:"imgOffset"}," Сдвиг изображения по горизонтали ",-1),v={class:"wrapper"},O={class:"card__footer"};function h(e,t,n,a,i,h){var j=Object(r["x"])("QRCode");return Object(r["q"])(),Object(r["e"])("div",o,[Object(r["h"])("div",c,Object(r["z"])(a.cardTitle),1),Object(r["h"])("div",s,[a.validationErrors.length?(Object(r["q"])(),Object(r["e"])("p",u,[l,Object(r["h"])("ul",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["w"])(a.validationErrors,(function(e){return Object(r["q"])(),Object(r["e"])("li",{key:e,class:"error"},Object(r["z"])(e),1)})),128))])])):Object(r["f"])("",!0),p,Object(r["E"])(Object(r["h"])("input",{type:"text",id:"firstName",placeholder:"Добрыня","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.person.firstName=e})},null,512),[[r["B"],a.person.firstName]]),f,Object(r["E"])(Object(r["h"])("input",{type:"text",id:"lastName",placeholder:"Никитыч","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.person.lastName=e})},null,512),[[r["B"],a.person.lastName]]),d,Object(r["E"])(Object(r["h"])("input",{type:"text",id:"position",placeholder:"Богатырь","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.person.position=e})},null,512),[[r["B"],a.person.position]]),b,Object(r["E"])(Object(r["h"])("textarea",{id:"text",placeholder:"Введи тесколько строк поздравлений... ","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.person.text=e})},null,512),[[r["B"],a.person.text]]),m,Object(r["E"])(Object(r["h"])("input",{type:"text",id:"imgSrc",placeholder:"Вставьте ссылку на картинку","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.person.imgSrc=e})},null,512),[[r["B"],a.person.imgSrc]]),g,Object(r["E"])(Object(r["h"])("input",{type:"text",id:"imgOffset",placeholder:"-15%","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.person.imgOffset=e})},null,512),[[r["B"],a.person.imgOffset]]),Object(r["h"])("div",v,[Object(r["h"])(r["b"],{mode:"out-in","enter-active-class":"animate__animated animate__zoomInDown","leave-active-class":"animate__animated animate__zoomOut"},{default:Object(r["D"])((function(){return[a.isSaved?(Object(r["q"])(),Object(r["e"])(j,{key:0,value:a.url,renderAs:"generatePNG",ref:"qr"},null,8,["value"])):Object(r["f"])("",!0)]})),_:1})])]),Object(r["h"])("div",O,[Object(r["h"])("button",{onClick:t[7]||(t[7]=function(){return a.save.apply(a,arguments)})},Object(r["z"])(a.isSaved?"Обновить данные":"Cохранить данные"),1),Object(r["h"])("button",{onClick:t[8]||(t[8]=function(){return a.clear.apply(a,arguments)})},"Очистить форму"),a.isSaved?(Object(r["q"])(),Object(r["e"])("button",{key:0,onClick:t[9]||(t[9]=function(){return a.download.apply(a,arguments)})}," Скачать QR-код ")):Object(r["f"])("",!0)])])}n("99af"),n("fb6a"),n("a9e3"),n("96cf");var j=n("1da1"),y=(n("7db0"),n("25eb"),n("d4ec")),x=n("bee2"),N=n("260b"),w=(n("e71f"),[{id:0,firstName:"Наталия",lastName:"Табрисова",text:"С Новым годом! Пусть за окном будет сказка, а в доме — атмосфера счастья. Желаю чудесного года только с хорошими событиями и добрыми людьми!",position:"Хакас, который всем радует глаз",imgSrc:"/assets/0.jpg"},{id:1,firstName:"Илья",lastName:"Табрисов",text:"Каждый из нас ожидает от Нового Года только лучшего, ведь он обязательно должен быть удачнее и радостней предыдущего. Желаю, чтобы так и случилось! Пусть вас ждут в новом году яркие впечатления, приятные встречи, искренние улыбки. Удачи вам, финансового благополучия и взаимопонимания! ",position:"Дядюшка Брат",imgSrc:"/assets/1.jpg",imgOffset:"-25%"},{id:2,firstName:"Игорь",lastName:"Табрисов",text:"Дорогие папа с мамой!\n\t\t\t\t\tС новым годом от души,\n\t\t\t\t\tС праздником хорошим самым\n\t\t\t\t\tМы поздравить вас спешим.\n\n\t\t\t\t\tИ желаем, чтоб здоровье\n\t\t\t\t\tБыло крепким сотню лет,\n\t\t\t\t\tСчастьем, миром и любовью\n\t\t\t\t\tЧтобы был ваш дом согрет.\n\n\t\t\t\t\tЧтоб исполнил все желанья\n\t\t\t\t\tДобрый дедушка Мороз,\n\t\t\t\t\tА проблемы утром ранним\n\t\t\t\t\tНа санях своих увез!",position:"Ящник-Бурящник",imgSrc:"/assets/2.jpg",imgOffset:"-172%"},{id:3,firstName:"Евгения",lastName:"Табрисова",text:"Пусть в Новом году дни проходят так же ярко и весело, как новогодние! Пусть каждая новая минута жизни в 2021 году будет яркой, радостной и веселой. Пусть все проблемы тают сами собой, как снег на ладошках! Пусть под торжественный бой курантов жизнь изменится к лучшему, а Дед Мороз весь следующий год трудолюбиво осуществляет все загаданные желания! С Новым Годом!",position:"Siberia Mom #1",imgSrc:"/assets/3.jpg",imgOffset:"-61%"},{id:4,firstName:"Алексей",lastName:"Табрисов",text:"Пусть все желания сбудутся, а праздничное настроение задержится на целый год! Пусть откроются новые, еще неизвестные горизонты в твоей жизни и произойдет множество удивительных и приятных сюрпризов! Сказочного тебе везения и отличного настроения!",position:"Большой Брат",imgSrc:"/assets/4.jpg",imgOffset:"-20%"},{id:5,firstName:"Варвара",lastName:"Поварницына",text:"Пусть Новый Год будет для тебя удачным с любой стороны: на личном фронте, на работе, в семье, с друзьями. Крепкого тебе здоровья и будь счастлив!",position:"Пищеварительных дел мастер",imgSrc:"/assets/5.jpg",imgOffset:"-213%"},{id:6,firstName:"Ася",lastName:"Алексеевна",text:"С праздником! Добивайся новых вершин и смело иди вперед - ты на верном пути! Оставь всё ненужное в уходящем году, ведь в новом тебя наверняка ждут потрясающие, прекрасные и замечательные события, которые обязательно принесут радость, энергию, оптимизм и веру в свою счастливую судьбу!",position:"Босс-молокосос",imgSrc:"/assets/6.jpg",imgOffset:"-20%"}]),S=w,k={apiKey:"AIzaSyDUvLi1J_4YgENDwtzA-PuKkEhV60O5Q5g",authDomain:"congratulation-cards.firebaseapp.com",databaseURL:"https://congratulation-cards.firebaseio.com",projectId:"congratulation-cards",storageBucket:"congratulation-cards.appspot.com",messagingSenderId:"437745161637",appId:"1:437745161637:web:5dd9dc7fe0dd7d3cf7444c"},_=N["a"].initializeApp(k),q=_.firestore(),z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(y["a"])(this,e),this.db=q,this.persons=t.persons||[]}return Object(x["a"])(e,[{key:"getById",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Number.parseInt(t),!(n<=6)){e.next=7;break}return r=S.find((function(e){return e.id===n})),console.log("personCard",r),e.abrupt("return",r);case 7:return a=this.db.doc("persons/".concat(n)),e.next=10,a.get();case 10:if(i=e.sent,!(null===i||void 0===i?void 0:i.exists)){e.next=15;break}return o=i.data(),console.log("personCard",o),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"set",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.collection("persons").doc("".concat(t.id)).set(t);case 2:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getLength",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.collection("persons").get();case 2:return t=e.sent,n=t.size,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllCollection",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.collection("persons").get();case 2:return this.persons=e.sent,e.abrupt("return",this.persons);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),R=new z,C=R;function P(e,t,n,a,i,o){return"generatePNG"===a.format?(Object(r["q"])(),Object(r["e"])("div",{key:0,onClick:t[1]||(t[1]=function(){return a.redirect.apply(a,arguments)}),style:{cursor:"pointer"}},[Object(r["h"])("img",{src:a.qr},null,8,["src"])])):(Object(r["q"])(),Object(r["e"])("div",{key:1,innerHTML:a.qr.outerHTML,onClick:t[2]||(t[2]=function(){return a.redirect.apply(a,arguments)}),style:{cursor:"pointer"}},null,8,["innerHTML"]))}n("c975");var E=n("e38b"),L=n.n(E),M={props:{value:{type:String,required:!0,default:""},ecclevel:{type:String,default:"L",validator:function(e){return["L","Q","M","H"].indexOf(e)>-1}},renderAs:{type:String,required:!1,default:"generateHTML",validator:function(e){return["generateSVG","generatePNG","generateHTML"].indexOf(e)>-1}}},setup:function(e){var t,n=Object(r["v"])(e.renderAs);switch(e.renderAs){case"generateSVG":t=L.a.generateSVG(e.value,{ecclevel:e.ecclevel,modulesize:5,margin:4});break;case"generatePNG":t=L.a.generatePNG(e.value,{ecclevel:e.ecclevel,modulesize:5,margin:4});break;case"generateHTML":default:t=L.a.generateHTML(e.value,{ecclevel:e.ecclevel,modulesize:5,margin:4});break}var a=function(){var t=window.open(e.value,"_blank");t.focus()};return{qr:t,format:n,redirect:a}}};M.render=P;var T=M,A=(n("77ed"),{props:{id:{type:Number,default:null,validator:function(e){return"number"===typeof e}},firstName:{type:String,default:"",validator:function(e){return"string"===typeof e&&e.length<=25}},lastName:{type:String,default:"",validator:function(e){return"string"===typeof e&&e.length<=50}},text:{type:String,default:"",validator:function(e){return"string"===typeof e&&e.length<=500}},position:{type:String,default:"",validator:function(e){return"string"===typeof e&&e.length<=100}},imgOffset:{type:String,default:"",validator:function(e){return"string"===typeof e&&e.length<=50}},imgSrc:{type:String,default:"",validator:function(e){return"string"===typeof e&&e.length}}},components:{QRCode:T},setup:function(e){var t=Object(r["u"])({id:e.id,firstName:e.firstName,lastName:e.lastName,text:e.text,position:e.position,imgOffset:e.imgOffset,imgSrc:e.imgSrc}),n=Object(r["v"])(!1),a=Object(r["v"])("Привет! Заполни форму, что бы собрать поздравительную карточку"),i=Object(r["v"])([]),o=Object(r["v"])(null),c=Object(r["c"])((function(){return document.location.href+""+t.id})),s=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!l()){e.next=8;break}if(null!==t.id){e.next=5;break}return e.next=4,C.getLength();case 4:t.id=e.sent;case 5:n.value=!0,console.info("Data to be saved:",t),C.set(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=confirm("Точно очищаем форму?");e&&(t.id=null,t.firstName="",t.lastName="",t.text="",t.position="",t.imgOffset="",t.imgSrc="",n.value=!1,i.value=[])},l=function(){return i.value=[],t.firstName.length<3&&i.value.push("Имя должно быть длиннее 3-х символов"),t.firstName.length>25&&i.value.push("Имя должно быть короче 25-ти символов"),t.lastName.length<2&&i.value.push("Фамилия должно быть длиннее 2-х символов"),t.lastName.length>50&&i.value.push("Фамилия должно быть короче 50-ти символов"),t.text.length<10&&i.value.push("Текст поздравления должен быть от минимум 10 символов"),t.text.length>500&&i.value.push("Текст поздравления должен короче 500 символов"),t.position.length<3&&i.value.push("Позиция должна быть длиннее 3-х символов"),t.position.length>100&&i.value.push("Позиция должна быть меньше 100-а символов"),t.imgSrc.length<=0&&i.value.push("Ссылка на фотографию человека обязательна"),t.imgOffset.length>0&&"%"!==t.imgOffset.slice(-1)&&i.value.push("Сдвиг картинки задаётся только в %! Если сдвиг не нужен - оставьте поле пустым"),!(i.value.length>0)},p=function(){console.log("img",o.value.qr);var e=document.createElement("a");e.href=o.value.qr,e.download="".concat(t.firstName,"__").concat(t.lastName,"_qr-code.png"),e.click()};return{person:t,save:s,clear:u,isSaved:n,url:c,cardTitle:a,validationErrors:i,qr:o,download:p}}});n("5d29");A.render=h;var H=A,V=Object(r["F"])("data-v-112f580b");Object(r["t"])("data-v-112f580b");var B={style:{display:"flex","flex-flow":"row nowrap","justify-content":"space-around","align-items":"center"}},I={class:"switch"},G=Object(r["h"])("span",{class:"slider"},null,-1);Object(r["r"])();var U=V((function(e,t,n,a,i,o){return Object(r["q"])(),Object(r["e"])("div",B,[Object(r["g"])(Object(r["z"])(a.text)+" ",1),Object(r["h"])("label",I,[Object(r["h"])("input",{type:"checkbox",onChange:t[1]||(t[1]=function(){return a.toggle.apply(a,arguments)})},null,32),G])])})),D={setup:function(){var e=Object(r["v"])(!0),t=Object(r["v"])("Переключить на тёмную тему =>"),n=function(){e.value=!e.value,e.value?(document.documentElement.setAttribute("data-theme","light"),t.value="Переключить на тёмную тему =>"):(document.documentElement.setAttribute("data-theme","dark"),t.value="Переключить на светлую тему =>")};return{lightTheme:e,toggle:n,text:t}}};n("cf98");D.render=U,D.__scopeId="data-v-112f580b";var Q=D,F={name:"HelloWorld",components:{Form:H,Switcher:Q}};n("0cd4");F.render=i;var J=F,K={class:"snip0057 blue hover "},W={class:"image"},Y={class:"position"};function X(e,t,n,a,i,o){return Object(r["q"])(),Object(r["e"])("figure",K,[Object(r["h"])("figcaption",null,[Object(r["h"])("h2",null,[Object(r["g"])(Object(r["z"])(a.person.firstName)+" ",1),Object(r["h"])("span",null,Object(r["z"])(a.person.lastName),1)]),Object(r["h"])("p",null,Object(r["z"])(a.person.text),1)]),Object(r["h"])("div",W,[Object(r["h"])("img",{src:a.person.path,alt:a.person.firstName,style:"left: ".concat(a.person.imgOffset)},null,12,["src","alt"])]),Object(r["h"])("div",Y,Object(r["z"])(a.person.position),1)])}n("ac1f"),n("466d");var Z=n("041f"),$=n.n(Z),ee=n("8554"),te=n.n(ee),ne=n("405a"),re=n.n(ne),ae=n("11d9"),ie=n.n(ae),oe=n("bafb"),ce=n.n(oe),se=n("4d0f"),ue=n.n(se),le=n("06d4"),pe=n.n(le),fe=/assets\/\d/,de=[$.a,te.a,re.a,ie.a,ce.a,ue.a,pe.a],be=function(e){if(fe.test(e)){var t=e.match(/\d/)[0];return de[t]}return e},me=be,ge={name:"PersonCard",props:{id:[Number,String]},setup:function(e){var t=Object(r["u"])({firstName:"",lastName:"",text:"",position:"",imgOffset:"",path:""}),n=function(){var n=Object(j["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o=arguments;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:e.id,n.next=3,C.getById(r);case 3:a=n.sent,i=me(a.imgSrc),t.path=i,t.firstName=a.firstName,t.lastName=a.lastName,t.text=a.text,t.position=a.position,t.imgOffset=a.imgOffset;case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),Object(r["C"])((function(){return e.id}),(function(e){n(e)})),{person:t}}};n("9dda");ge.render=X;var ve=ge,Oe=[{path:"/congratulation-cards/",name:"HelloWorld",component:J},{path:"/congratulation-cards/:id",name:"PersonCard",component:ve,props:!0}],he=Object(a["a"])({history:Object(a["b"])(),routes:Oe}),je=he;function ye(e,t,n,a,i,o){var c=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])(c)}var xe={name:"App"};xe.render=ye;var Ne=xe;Object(r["d"])(Ne).use(je).mount("#app")},"5d29":function(e,t,n){"use strict";n("45da")},8554:function(e,t,n){e.exports=n.p+"img/1.9172544f.jpg"},"9dda":function(e,t,n){"use strict";n("492f")},aa83:function(e,t,n){},bafb:function(e,t,n){e.exports=n.p+"img/4.bfde502d.jpg"},cf98:function(e,t,n){"use strict";n("aa83")},f98b:function(e,t,n){}});
//# sourceMappingURL=app.f9593a0a.js.map