import{_ as l,n as d}from"./currency-B1QCtbGi.js";import{_ as a}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as _,c as f,a as e,t as s,f as m}from"./runtime-core.esm-bundler-Bzup5G8m.js";const x={name:"ns-sale-card-widget",methods:{__:l,nsCurrency:d},data(){return{report:{}}},mounted(){Dashboard.day.subscribe(o=>{this.report=o})}},u={class:"flex card-widget flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-info-secondary to-info-tertiary px-3 py-5"},h={class:"flex flex-row md:flex-col flex-auto"},b={class:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},p={class:"flex justify-between w-full items-center"},y={class:"font-bold hidden text-right md:inline-block"},g={class:"text-2xl font-black"},v={class:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},w={class:"font-bold inline-block text-right md:hidden"},k={class:"text-xs text-right"};function C(o,n,j,B,r,t){const c=i("ns-close-button");return _(),f("div",u,[e("div",h,[e("div",b,[e("div",p,[e("h6",y,s(t.__("Income")),1),e("div",null,[m(c,{class:"border-info-secondary",onClick:n[0]||(n[0]=D=>o.$emit("onRemove"))})])]),e("h3",g,s(t.nsCurrency(r.report.total_income||0,"abbreviate")),1)]),e("div",v,[e("h6",w,s(t.__("Income")),1),e("h4",k,"+"+s(t.nsCurrency(r.report.day_income||0))+" "+s(t.__("Today")),1)])])])}const V=a(x,[["render",C]]);export{V as default};
