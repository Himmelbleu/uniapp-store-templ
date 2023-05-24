import{i as e,_ as a,h as t,r as s,o as l,c,w as r,a as i,n as o,b as n,d as u,t as h,e as d,f as p,I as g,g as C,j as I,k as A,l as m,m as E,u as b,p as B,F as f,q as k,S,s as R}from"./index-cb7efd3d.js";import{r as w,_ as y}from"./uni-app.es.e3e698f6.js";const Q={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:V}=e(Q);const j=a({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||V("uni-search-bar.cancel")},placeholderText(){return this.placeholder||V("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,a){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,t())},confirm(){t(),this.$emit("confirm",{value:this.searchVal})},blur(){t(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,a,t,I,A,m){const E=w(s("uni-icons"),y),b=p,B=g,f=C;return l(),c(b,{class:"uni-searchbar"},{default:r((()=>[i(b,{style:o({borderRadius:t.radius+"px",backgroundColor:t.bgColor}),class:"uni-searchbar__box",onClick:m.searchClick},{default:r((()=>[i(b,{class:"uni-searchbar__box-icon-search"},{default:r((()=>[n(e.$slots,"searchIcon",{},(()=>[i(E,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),A.show||A.searchVal?(l(),c(B,{key:0,focus:A.showSync,disabled:t.readonly,placeholder:m.placeholderText,maxlength:t.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:A.searchVal,"onUpdate:modelValue":a[0]||(a[0]=e=>A.searchVal=e),onConfirm:m.confirm,onBlur:m.blur,onFocus:m.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(l(),c(f,{key:1,class:"uni-searchbar__text-placeholder"},{default:r((()=>[u(h(t.placeholder),1)])),_:1})),A.show&&("always"===t.clearButton||"auto"===t.clearButton&&""!==A.searchVal)&&!t.readonly?(l(),c(b,{key:2,class:"uni-searchbar__box-icon-clear",onClick:m.clear},{default:r((()=>[n(e.$slots,"clearIcon",{},(()=>[i(E,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):d("v-if",!0)])),_:3},8,["style","onClick"]),"always"===t.cancelButton||A.show&&"auto"===t.cancelButton?(l(),c(f,{key:0,onClick:m.cancel,class:"uni-searchbar__cancel"},{default:r((()=>[u(h(m.cancelTextI18n),1)])),_:1},8,["onClick"])):d("v-if",!0)])),_:3})}],["__scopeId","data-v-7800a918"]]),x=I({__name:"index",setup(e){const a=A(),t=["https://oss-product-img.artfoxlive.com/profile-prod/201812/1545264371268_2122120_origin.jpg?x-oss-process=style/l_watermark","https://oss-product-img.artfoxlive.com/202101/1609919260213_5023872.JPG?x-oss-process=style/l_watermark","https://img0.baidu.com/it/u=2897304993,2842510785&fm=253&fmt=auto&app=138&f=JPEG?w=791&h=500","https://oss-product-img.artfoxlive.com/202101/1609919161805_5023879.JPG?x-oss-process=style/l_watermark"],o=A([{src:"/uniapp-store-templ/assets/微信图片_20230523111530-2529bbb0.png",title:"十世班禅",desc:"十世班禅：藏传佛教格鲁派的重要领袖，是班禅额尔德尼。"},{src:"/uniapp-store-templ/assets/微信图片_20230524105013-ff1a84e1.png",title:"千手千眼观世音",desc:"千手千眼观世音：拥有无边慈悲与智慧，能同时观察和救渡众生的观世音菩萨。"},{src:"/uniapp-store-templ/assets/微信图片_20230524105018-d40c5cef.png",title:"吞弥桑布扎",desc:"吞弥桑布扎：喜怒无常、具有破坏力与创造力的本性。"},{src:"/uniapp-store-templ/assets/微信图片_20230524105025-631a1631.jpg",title:"财宝天王",desc:"财宝天王：守护财富与福慧的护法神。"},{src:"/uniapp-store-templ/assets/微信图片_20230524105030-e0fdeeb9.jpg",title:"释迦牟尼",desc:"释迦牟尼：智慧的觉者与慈悲的导师。"},{src:"/uniapp-store-templ/assets/微信图片_20230524105033-e1ab1db9.png",title:"南海观音",desc:"南海观音：慈悲简洁。"}]);return(e,n)=>{const d=p,g=w(s("uni-search-bar"),j),C=R,I=S;return l(),m(f,null,[i(d,{"mb-2":"","f-c-b":"","p-2":"","rd-2":"","bg-white":""},{default:r((()=>[i(d,null,{default:r((()=>[E("img",{"w-8":"","h-8":"","rd-50":"","object-cover":"",src:"https://img0.baidu.com/it/u=4058537242,3046187269&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"})])),_:1}),i(d,{class:"w-70%"},{default:r((()=>[i(g,{placeholder:"请输入搜索关键词",modelValue:b(a),"onUpdate:modelValue":n[0]||(n[0]=e=>B(a)?a.value=e:null)},null,8,["modelValue"])])),_:1}),i(d,null,{default:r((()=>[E("img",{"w-6":"","h-6":"","object-cover":"",src:"data:image/png;base64,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"})])),_:1})])),_:1}),i(d,{"px-2":""},{default:r((()=>[i(I,{circular:"","indicator-dots":"",autoplay:""},{default:r((()=>[(l(),m(f,null,k(t,((e,a)=>i(C,{key:a},{default:r((()=>[E("img",{class:"w-100% h-100%","rd-2":"","object-cover":"",src:e},null,8,["src"])])),_:2},1024))),64))])),_:1})])),_:1}),i(d,{"f-c-c":"","flex-wrap":"","mt-2":""},{default:r((()=>[(l(!0),m(f,null,k(b(o),(a=>(l(),c(d,{class:"w-45%","m-2":"","rd-2":"","bg-white":"",onClick:n[1]||(n[1]=a=>e.$uni.navigateTo({url:"/pages/index/detail"})),key:a.title},{default:r((()=>[E("img",{class:"w-100%","h-35":"","rd-t-2":"","object-cover":"",src:a.src},null,8,["src"]),i(d,{"pt-1":"","pb-2":"","pl-2":"","pr-2":""},{default:r((()=>[i(d,{"size-0.9":"","colr-1":"","text-ellipsis":"","line-clamp-1":""},{default:r((()=>[u(h(a.title),1)])),_:2},1024),i(d,{"size-0.8":"","colr-2":""},{default:r((()=>[u(h(a.desc),1)])),_:2},1024)])),_:2},1024),i(d,{class:"f-c-c mt-2"},{default:r((()=>[i(d,{"size-0.8":"","colr-2":"","rd-2":"","b-solid":"",class:"b-#007AFF b-1 p-1"},{default:r((()=>[u("加入购物车")])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1})],64)}}});export{x as default};