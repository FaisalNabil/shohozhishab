import{h}from"./bootstrap-BLn7iW8g.js";import{_ as r}from"./currency-B1QCtbGi.js";import{s as p}from"./select-api-entities-B0AZ6ZsR.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as m,o as c,c as _,a as s,f as y,t,F as x,b as f,e as v}from"./runtime-core.esm-bundler-Bzup5G8m.js";import"./chart-XFVd3zf7.js";import"./ns-prompt-popup-DdPqD7fR.js";import"./join-array-H-ZxDgvP.js";const g={props:["storeLogo","storeName"],data(){return{__:r,ns,moment:h,categoriesNames:"",unitsNames:"",categories:[],products:[],units:[],selectedCategories:[],selectedUnits:[],categoryField:{value:[],label:r("Filter by Category")},unitField:{value:[],label:r("Filter by Units")},datePicker:{type:"datetimepicker",name:"date",value:"",validation:"required"}}},methods:{loadReport(){nsHttpClient.post("/api/reports/product-history-combined",{date:this.datePicker.value,categories:this.categoryField.value,units:this.unitField.value}).subscribe({next:i=>{this.products=i},error:i=>{nsSnackBar.error(i.message).subscribe()}})},printSaleReport(){this.$htmlToPaper("combined-report")},async generateReport(){try{const i=await new Promise((o,d)=>{nsHttpClient.post("/api/reports/compute-combined-report",{date:this.datePicker.value}).subscribe({next:a=>{o(a)},error:a=>{d(a)}})});nsSnackBar.success(i.message).subscribe()}catch(i){nsSnackBar.error(i.message).subscribe()}},async selectCategories(){try{const i=await p("/api/categories",this.categoryField.label,this.categoryField.value);this.categoryField.value=i.values,this.categoriesNames=i.labels,this.loadReport()}catch(i){if(i!==!1)return nsSnackBar.error(r("An error has occured while loading the categories")).subscribe()}},async selectUnits(){try{const i=await p("/api/units",this.unitField.label,this.unitField.value);this.unitField.value=i.values,this.unitsNames=i.labels,this.loadReport()}catch(i){if(i!==!1)return nsSnackBar.error(r("An error has occured while loading the units")).subscribe()}}}},k={id:"report-section",class:"px-4"},w={class:"flex -mx-2"},C={class:"px-2 flex -mx-2"},F={class:"px-2"},N={class:"px-2"},S={class:"ns-button"},Q={class:"pl-2"},R={class:"px-2"},B={class:"ns-button"},P={class:"pl-2"},A={class:"px-2 flex -mx-2"},j={class:"px-2"},q={class:"ns-button"},L={class:"pl-2"},U={class:"px-2"},D={class:"ns-button"},H={class:"pl-2"},T={class:"px-2"},V={class:"ns-button"},E={class:"pl-2"},I={id:"combined-report"},M={class:"flex w-full mb-4"},G={class:"flex justify-between w-full"},z={class:"text-secondary"},J=["innerHTML"],K={class:"pb-1 border-b border-dashed"},O={class:"pb-1 border-b border-dashed"},W=["src","alt"],X={class:"box bg-box-background"},Y={class:"box-body text-primary"},Z={class:"min-w-fit w-full table-auto"},$={class:"text-sm"},ss={class:"font-bold"},es={class:"border p-2 w-1/3"},ts={class:"border p-2"},os={class:"hidden md:inline-block"},is={class:"inline-block md:hidden"},ls={class:"border p-2"},rs={class:"hidden md:inline-block"},ds={class:"inline-block md:hidden"},as={class:"border p-2"},cs={class:"hidden md:inline-block"},_s={class:"inline-block md:hidden"},ps={class:"border p-2"},us={class:"hidden md:inline-block"},hs={class:"inline-block md:hidden"},bs={class:"border p-2"},ms={class:"hidden md:inline-block"},ys={class:"inline-block md:hidden"},xs={class:"text-xs"},fs={class:"border p-2"},vs={class:"border p-2"},gs={class:"border p-2"},ks={class:"border p-2"},ws={class:"border p-2"},Cs={class:"border p-2"},Fs={key:0},Ns={colspan:"6",class:"border p-2 text-center"};function Ss(i,o,d,a,e,l){const u=m("ns-field");return c(),_("div",k,[s("div",w,[s("div",C,[s("div",F,[y(u,{field:e.datePicker},null,8,["field"])]),s("div",N,[s("div",S,[s("button",{onClick:o[0]||(o[0]=n=>l.loadReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[o[5]||(o[5]=s("i",{class:"las la-sync-alt text-xl"},null,-1)),s("span",Q,t(e.__("Load")),1)])])]),s("div",R,[s("div",B,[s("button",{onClick:o[1]||(o[1]=n=>l.printSaleReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[o[6]||(o[6]=s("i",{class:"las la-print text-xl"},null,-1)),s("span",P,t(e.__("Print")),1)])])])]),s("div",A,[s("div",j,[s("div",q,[s("button",{onClick:o[2]||(o[2]=n=>l.selectCategories()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[o[7]||(o[7]=s("i",{class:"las la-filter text-xl"},null,-1)),s("span",L,t(e.__("Categories"))+": "+t(e.categoriesNames||e.__("All Categories")),1)])])]),s("div",U,[s("div",D,[s("button",{onClick:o[3]||(o[3]=n=>l.selectUnits()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[o[8]||(o[8]=s("i",{class:"las la-filter text-xl"},null,-1)),s("span",H,t(e.__("Units"))+": "+t(e.unitsNames||e.__("All Units")),1)])])]),s("div",T,[s("div",V,[s("button",{onClick:o[4]||(o[4]=n=>l.generateReport()),class:"rounded flex justify-between shadow py-1 items-center text-primary px-2"},[o[9]||(o[9]=s("i",{class:"las la-sync-alt"},null,-1)),s("span",E,t(e.__("Generate Report")),1)])])])])]),s("div",I,[s("div",M,[s("div",G,[s("div",z,[s("ul",null,[s("li",{class:"pb-1 border-b border-dashed",innerHTML:e.__("Date : {date}").replace("{date}",e.moment(e.datePicker.value).format(e.ns.date.format))},null,8,J),s("li",K,t(e.__("Document : Combined Products History")),1),s("li",O,t(e.__("By : {user}").replace("{user}",e.ns.user.username)),1)])]),s("div",null,[s("img",{class:"w-24",src:d.storeLogo,alt:d.storeName},null,8,W)])])]),s("div",X,[s("div",Y,[s("table",Z,[s("thead",$,[s("tr",ss,[s("td",es,t(e.__("Name")),1),s("td",ts,[s("span",os,t(e.__("Initial Quantity")),1),s("span",is,t(e.__("Ini. Qty")),1)]),s("td",ls,[s("span",rs,t(e.__("Added Quantity")),1),s("span",ds,t(e.__("Add. Qty")),1)]),s("td",as,[s("span",cs,t(e.__("Sold Quantity")),1),s("span",_s,t(e.__("Sold Qty")),1)]),s("td",ps,[s("span",us,t(e.__("Defective Quantity")),1),s("span",hs,t(e.__("Defec. Qty")),1)]),s("td",bs,[s("span",ms,t(e.__("Final Quantity")),1),s("span",ys,t(e.__("Final Qty")),1)])])]),s("tbody",xs,[(c(!0),_(x,null,f(e.products,n=>(c(),_("tr",{key:n.id},[s("td",fs,t(n.history_name)+" ("+t(n.unit_name)+")",1),s("td",vs,t(n.history_initial_quantity),1),s("td",gs,t(n.history_procured_quantity),1),s("td",ks,t(n.history_sold_quantity),1),s("td",ws,t(n.history_defective_quantity),1),s("td",Cs,t(n.history_final_quantity),1)]))),128)),e.products.length===0?(c(),_("tr",Fs,[s("td",Ns,t(e.__("No data available")),1)])):v("",!0)])])])])])])}const Us=b(g,[["render",Ss]]);export{Us as default};
