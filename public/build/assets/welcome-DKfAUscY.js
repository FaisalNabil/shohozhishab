import{_ as o}from"./currency-B1QCtbGi.js";import{_ as c}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r,o as g,c as f,a as e,t as a,f as i,i as n,w as m}from"./runtime-core.esm-bundler-Bzup5G8m.js";const p={data(){return{field:{label:o("Language Selection"),description:o("Select what will be the default language of NexoPOS."),name:"language",value:nsLang||"en",options:Object.values(nsLanguages).map((l,t)=>({value:Object.keys(nsLanguages)[t],label:l}))}}},methods:{__:o,updateSelectedLanguage(){document.location=`?lang=${this.field.value}`}},mounted(){}},b={class:"w-full md:w-3/5 lg:w-3/5 self-center"},x={class:"bg-white rounded shadow my-2 overflow-hidden"},y={class:"welcome-box border-b border-gray-300 p-3 text-gray-700"},h={class:"text-gray-600 text-sm"},w={class:"text-gray-600 text-sm"},v={class:"py-2"},S={class:"text-xl font-body text-gray-700"},C={class:"text-gray-600 text-sm"},k={class:"bg-gray-200 p-3 flex justify-end"},L={type:"button",class:"rounded cursor-pointer py-2 px-3 font-semibold"};function N(l,t,O,j,d,s){const u=r("ns-select"),_=r("router-link");return g(),f("div",b,[e("div",x,[e("div",y,[e("p",h,a(s.__("Thank you for using NexoPOS to manage your store. This installation wizard will help you running NexoPOS in no time.")),1),t[3]||(t[3]=e("br",null,null,-1)),e("p",w,a(s.__("Choose your language to get started.")),1),i(u,{onChange:t[0]||(t[0]=B=>s.updateSelectedLanguage()),field:d.field},null,8,["field"]),e("div",v,[e("h2",S,a(s.__("Remaining Steps")),1),e("ul",C,[e("li",null,[t[1]||(t[1]=e("i",{class:"las la-arrow-right"},null,-1)),n(" "+a(s.__("Database Configuration")),1)]),e("li",null,[t[2]||(t[2]=e("i",{class:"las la-arrow-right"},null,-1)),n(" "+a(s.__("Application Configuration")),1)])])])]),e("div",k,[i(_,{to:"/database",class:"ns-button info"},{default:m(()=>[e("button",L,[t[4]||(t[4]=e("i",{class:"las la-database"},null,-1)),n(" "+a(s.__("Database Configuration")),1)])]),_:1})])])])}const V=c(p,[["render",N]]);export{V as default};
