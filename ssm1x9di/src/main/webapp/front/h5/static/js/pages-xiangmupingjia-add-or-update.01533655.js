(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xiangmupingjia-add-or-update"],{"0bf6":function(i,r,e){"use strict";var n={"w-picker":e("e2b1").default},t=function(){var i=this,r=i.$createElement,e=i._self._c||r;return e("v-uni-view",{staticClass:"content"},[e("v-uni-form",{staticClass:"app-update-pv"},[e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("订单编号")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:i.ro.dingdanbianhao,placeholder:"订单编号"},model:{value:i.ruleForm.dingdanbianhao,callback:function(r){i.$set(i.ruleForm,"dingdanbianhao",r)},expression:"ruleForm.dingdanbianhao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("项目名称")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:i.ro.xiangmumingcheng,placeholder:"项目名称"},model:{value:i.ruleForm.xiangmumingcheng,callback:function(r){i.$set(i.ruleForm,"xiangmumingcheng",r)},expression:"ruleForm.xiangmumingcheng"}})],1),e("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=i.$handleEvent(r),i.fengmianTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("封面")]),e("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[i.ruleForm.fengmian?e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:i.ruleForm.fengmian,mode:"aspectFill"}}):e("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("项目评价")]),e("v-uni-picker",{attrs:{value:i.xiangmupingjiaIndex,range:i.xiangmupingjiaOptions},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.xiangmupingjiaChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[i._v(i._s(i.ruleForm.xiangmupingjia?i.ruleForm.xiangmupingjia:"请选择项目评价"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("咨询师评价")]),e("v-uni-picker",{attrs:{value:i.zixunshipingjiaIndex,range:i.zixunshipingjiaOptions},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.zixunshipingjiaChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[i._v(i._s(i.ruleForm.zixunshipingjia?i.ruleForm.zixunshipingjia:"请选择咨询师评价"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("满意度")]),e("v-uni-picker",{attrs:{value:i.manyiduIndex,range:i.manyiduOptions},on:{change:function(r){arguments[0]=r=i.$handleEvent(r),i.manyiduChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[i._v(i._s(i.ruleForm.manyidu?i.ruleForm.manyidu:"请选择满意度"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("评价时间")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{placeholder:"评价时间"},on:{click:function(r){arguments[0]=r=i.$handleEvent(r),i.toggleTab("pingjiashijian")}},model:{value:i.ruleForm.pingjiashijian,callback:function(r){i.$set(i.ruleForm,"pingjiashijian",r)},expression:"ruleForm.pingjiashijian"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("商家账号")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:i.ro.shangjiazhanghao,placeholder:"商家账号"},model:{value:i.ruleForm.shangjiazhanghao,callback:function(r){i.$set(i.ruleForm,"shangjiazhanghao",r)},expression:"ruleForm.shangjiazhanghao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("商家姓名")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:i.ro.shangjiaxingming,placeholder:"商家姓名"},model:{value:i.ruleForm.shangjiaxingming,callback:function(r){i.$set(i.ruleForm,"shangjiaxingming",r)},expression:"ruleForm.shangjiaxingming"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("账号")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:i.ro.zhanghao,placeholder:"账号"},model:{value:i.ruleForm.zhanghao,callback:function(r){i.$set(i.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("姓名")]),e("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:i.ro.xingming,placeholder:"姓名"},model:{value:i.ruleForm.xingming,callback:function(r){i.$set(i.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),e("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[e("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[i._v("评语")]),e("v-uni-textarea",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"评语"},model:{value:i.ruleForm.pingyu,callback:function(r){i.$set(i.ruleForm,"pingyu",r)},expression:"ruleForm.pingyu"}})],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=i.$handleEvent(r),i.onSubmitTap.apply(void 0,arguments)}}},[i._v("提交")])],1)],1),e("w-picker",{ref:"pingjiashijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=i.$handleEvent(r),i.pingjiashijianConfirm.apply(void 0,arguments)}}})],1)},a=[];e.d(r,"b",(function(){return t})),e.d(r,"c",(function(){return a})),e.d(r,"a",(function(){return n}))},"0e30":function(i,r,e){"use strict";e.r(r);var n=e("a2ac"),t=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(r,i,(function(){return n[i]}))}(a);r["default"]=t.a},"1aa6":function(i,r,e){"use strict";var n=e("322a"),t=e.n(n);t.a},"322a":function(i,r,e){var n=e("e8d0");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var t=e("4f06").default;t("48115bd6",n,!0,{sourceMap:!1,shadowMode:!1})},a2ac:function(i,r,e){"use strict";var n=e("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,e("ac6a"),e("28a5"),e("96cf");var t=n(e("3b8d")),a=n(e("e2b1")),o={data:function(){return{ruleForm:{dingdanbianhao:"",xiangmumingcheng:"",fengmian:"",xiangmupingjia:"",zixunshipingjia:"",manyidu:"",pingyu:"",pingjiashijian:"",shangjiazhanghao:"",shangjiaxingming:"",zhanghao:"",xingming:"",userid:""},xiangmupingjiaOptions:[],xiangmupingjiaIndex:0,zixunshipingjiaOptions:[],zixunshipingjiaIndex:0,manyiduOptions:[],manyiduIndex:0,user:{},ro:{dingdanbianhao:!1,xiangmumingcheng:!1,fengmian:!1,xiangmupingjia:!1,zixunshipingjia:!1,manyidu:!1,pingyu:!1,pingjiashijian:!1,shangjiazhanghao:!1,shangjiaxingming:!1,zhanghao:!1,xingming:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var i=(0,t.default)(regeneratorRuntime.mark((function i(r){var e,n,t,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.pingjiashijian=this.$utils.getCurDateTime(),e=uni.getStorageSync("nowTable"),i.next=4,this.$api.session(e);case 4:if(n=i.sent,this.user=n.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.xiangmupingjiaOptions="★,★★,★★★,★★★★,★★★★★".split(","),this.zixunshipingjiaOptions="★,★★,★★★,★★★★,★★★★★".split(","),this.manyiduOptions="满意,一般,不满意".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){i.next=19;break}return this.ruleForm.id=r.id,i.next=17,this.$api.info("xiangmupingjia",this.ruleForm.id);case 17:n=i.sent,this.ruleForm=n.data;case 19:if(!r.cross){i.next=78;break}t=uni.getStorageSync("crossObj"),i.t0=regeneratorRuntime.keys(t);case 22:if((i.t1=i.t0()).done){i.next=78;break}if(a=i.t1.value,"dingdanbianhao"!=a){i.next=28;break}return this.ruleForm.dingdanbianhao=t[a],this.ro.dingdanbianhao=!0,i.abrupt("continue",22);case 28:if("xiangmumingcheng"!=a){i.next=32;break}return this.ruleForm.xiangmumingcheng=t[a],this.ro.xiangmumingcheng=!0,i.abrupt("continue",22);case 32:if("fengmian"!=a){i.next=36;break}return this.ruleForm.fengmian=t[a],this.ro.fengmian=!0,i.abrupt("continue",22);case 36:if("xiangmupingjia"!=a){i.next=40;break}return this.ruleForm.xiangmupingjia=t[a],this.ro.xiangmupingjia=!0,i.abrupt("continue",22);case 40:if("zixunshipingjia"!=a){i.next=44;break}return this.ruleForm.zixunshipingjia=t[a],this.ro.zixunshipingjia=!0,i.abrupt("continue",22);case 44:if("manyidu"!=a){i.next=48;break}return this.ruleForm.manyidu=t[a],this.ro.manyidu=!0,i.abrupt("continue",22);case 48:if("pingyu"!=a){i.next=52;break}return this.ruleForm.pingyu=t[a],this.ro.pingyu=!0,i.abrupt("continue",22);case 52:if("pingjiashijian"!=a){i.next=56;break}return this.ruleForm.pingjiashijian=t[a],this.ro.pingjiashijian=!0,i.abrupt("continue",22);case 56:if("shangjiazhanghao"!=a){i.next=60;break}return this.ruleForm.shangjiazhanghao=t[a],this.ro.shangjiazhanghao=!0,i.abrupt("continue",22);case 60:if("shangjiaxingming"!=a){i.next=64;break}return this.ruleForm.shangjiaxingming=t[a],this.ro.shangjiaxingming=!0,i.abrupt("continue",22);case 64:if("zhanghao"!=a){i.next=68;break}return this.ruleForm.zhanghao=t[a],this.ro.zhanghao=!0,i.abrupt("continue",22);case 68:if("xingming"!=a){i.next=72;break}return this.ruleForm.xingming=t[a],this.ro.xingming=!0,i.abrupt("continue",22);case 72:if("userid"!=a){i.next=76;break}return this.ruleForm.userid=t[a],this.ro.userid=!0,i.abrupt("continue",22);case 76:i.next=22;break;case 78:this.styleChange();case 79:case"end":return i.stop()}}),i,this)})));function r(r){return i.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},pingjiashijianConfirm:function(i){console.log(i),this.ruleForm.pingjiashijian=i.result,this.$forceUpdate()},xiangmupingjiaChange:function(i){this.xiangmupingjiaIndex=i.target.value,this.ruleForm.xiangmupingjia=this.xiangmupingjiaOptions[this.xiangmupingjiaIndex]},zixunshipingjiaChange:function(i){this.zixunshipingjiaIndex=i.target.value,this.ruleForm.zixunshipingjia=this.zixunshipingjiaOptions[this.zixunshipingjiaIndex]},manyiduChange:function(i){this.manyiduIndex=i.target.value,this.ruleForm.manyidu=this.manyiduOptions[this.manyiduIndex]},fengmianTap:function(){var i=this;this.$api.upload((function(r){i.ruleForm.fengmian=i.$base.url+"upload/"+r.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=(0,t.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.ruleForm.id){i.next=5;break}return i.next=3,this.$api.update("xiangmupingjia",this.ruleForm);case 3:i.next=7;break;case 5:return i.next=7,this.$api.add("xiangmupingjia",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return i.stop()}}),i,this)})));function r(){return i.apply(this,arguments)}return r}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var r=new Date,e=r.getFullYear(),n=r.getMonth()+1,t=r.getDate();return"start"===i?e-=60:"end"===i&&(e+=2),n=n>9?n:"0"+n,t=t>9?t:"0"+t,"".concat(e,"-").concat(n,"-").concat(t)},toggleTab:function(i){this.$refs[i].show()}}};r.default=o},c291:function(i,r,e){"use strict";e.r(r);var n=e("0bf6"),t=e("0e30");for(var a in t)"default"!==a&&function(i){e.d(r,i,(function(){return t[i]}))}(a);e("1aa6");var o,s=e("f0c5"),u=Object(s["a"])(t["default"],n["b"],n["c"],!1,null,"416efc3e",null,!1,n["a"],o);r["default"]=u.exports},e8d0:function(i,r,e){var n=e("24fb");r=n(!1),r.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-416efc3e]{padding:%?20?%}.content[data-v-416efc3e]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-416efc3e]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-416efc3e]{width:%?180?%}.avator[data-v-416efc3e]{width:%?150?%;height:%?60?%}.right-input[data-v-416efc3e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-416efc3e]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-416efc3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-416efc3e]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-416efc3e]{border:0}.cu-form-group uni-input[data-v-416efc3e]{padding:0 %?30?%}.uni-input[data-v-416efc3e]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-416efc3e]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-416efc3e]::after{line-height:%?88?%}.select .uni-input[data-v-416efc3e]{line-height:%?88?%}.input .right-input[data-v-416efc3e]{line-height:%?110?%}',""]),i.exports=r}}]);