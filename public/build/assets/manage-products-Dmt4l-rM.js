import{P as N,d as v,b as U,v as S,i as K,F as D,n as J}from"./bootstrap-BLn7iW8g.js";import{n as O,N as R}from"./ns-prompt-popup-DdPqD7fR.js";import{_ as m,n as M}from"./currency-B1QCtbGi.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as o,a as r,B as V,t as d,F as b,b as y,e as p,p as G,r as w,f as k,w as T,i as A,n as F,A as I,g as P}from"./runtime-core.esm-bundler-Bzup5G8m.js";import{N as Y}from"./components-7AHTQJYC.js";import"./chart-XFVd3zf7.js";import"./ns-avatar-image--GgTfTV1.js";const H={name:"ns-product-group",props:["fields"],watch:{searchValue(){clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchProducts(this.searchValue)},1e3)},products:{deep:!0,handler(){this.$forceUpdate()}}},computed:{totalProducts(){return this.products.length>0?(this.$emit("update",this.products),this.products.map(e=>parseFloat(e.sale_price)*parseFloat(e.quantity)).reduce((e,t)=>e+t)):0}},mounted(){const e=this.fields.filter(t=>t.name==="product_subitems");e.length>0&&e[0].value!==void 0&&e[0].value.length>0&&(this.products=e[0].value)},data(){return{searchValue:"",searchTimeout:null,results:[],products:[]}},methods:{__:m,nsCurrency:M,setSalePrice(){this.$emit("updateSalePrice",this.totalProducts)},removeProduct(e){N.show(O,{title:m("Delete Sub item"),message:m("Would you like to delete this sub item?"),onAction:t=>{t&&this.products.splice(e,1)}})},toggleUnitField(e){e._unit_toggled||(e._unit_toggled=!e._unit_toggled),setTimeout(()=>{e._unit_toggled&&this.$refs.unitField[0].addEventListener("blur",()=>{e._unit_toggled=!1,this.$forceUpdate()})},200)},toggleQuantityField(e){e._quantity_toggled=!e._quantity_toggled,setTimeout(()=>{e._quantity_toggled&&(this.$refs.quantityField[0].select(),this.$refs.quantityField[0].addEventListener("blur",()=>{this.toggleQuantityField(e),this.$forceUpdate()}))},200)},togglePriceField(e){e._price_toggled=!e._price_toggled,setTimeout(()=>{e._price_toggled&&(this.$refs.priceField[0].select(),this.$refs.priceField[0].addEventListener("blur",()=>{this.togglePriceField(e),this.$forceUpdate()}))},200)},redefineUnit(e){const t=e.unit_quantities.filter(n=>n.id===e.unit_quantity_id);t.length>0&&(e.unit_quantity=t[0],e.unit_id=t[0].unit.id,e.unit=t[0].unit,e.sale_price=t[0].sale_price)},async addResult(e){if(this.searchValue="",e.type==="grouped")return v.error(m("Unable to add a grouped product.")).subscribe();try{const t=await new Promise((l,s)=>{N.show(R,{label:m("Choose The Unit"),options:e.unit_quantities.map(i=>({label:i.unit.name,value:i.id})),resolve:l,reject:s})}),n=e.unit_quantities.filter(l=>parseInt(l.id)===parseInt(t));this.products.push({name:e.name,unit_quantity_id:t,unit_quantity:n[0],unit_id:n[0].unit.id,unit:n[0].unit,product_id:n[0].product_id,quantity:1,_price_toggled:!1,_quantity_toggled:!1,_unit_toggled:!1,unit_quantities:e.unit_quantities,sale_price:n[0].sale_price}),this.$emit("update",this.products)}catch(t){console.log(t)}},searchProducts(e){if(e.length===0)return null;U.post("/api/products/search",{search:e,arguments:{type:{comparison:"<>",value:"grouped"},searchable:{comparison:"in",value:[0,1]}}}).subscribe({next:t=>{this.results=t},error:t=>{v.error(t.message||m("An unexpected error occurred"),m("Ok"),{duration:3e3}).subscribe()}})}}},z={class:"flex flex-col px-4 w-full"},X={class:"md:-mx-4 flex flex-col md:flex-row"},Z={class:"md:px-4 w-full"},ee={class:"input-group border-2 rounded info flex w-full"},te=["placeholder"],se={key:0,class:"h-0 relative"},ie={class:"ns-vertical-menu absolute w-full"},re=["onClick"],ne={class:"my-2"},ae={class:"ns-table"},le={colspan:"2",class:"border"},oe={colspan:"2",class:"border p-2"},ue={class:"flex justify-between"},de={class:"font-bold"},ce=["onClick"],fe=["onClick"],he={class:"input-group"},me=["onChange","onUpdate:modelValue"],pe=["value"],be=["onClick"],_e={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},ge=["onUpdate:modelValue"],ve=["onClick"],ye={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},xe=["onUpdate:modelValue"],we={key:0},ke={colspan:"2",class:"border p-2 text-center"},Ue={key:0},Ce={class:"w-1/2 border p-2 text-left"},Fe={class:"w-1/2 border p-2 text-right"};function Ve(e,t,n,l,s,i){return a(),o("div",z,[r("div",X,[r("div",Z,[r("div",ee,[V(r("input",{placeholder:i.__("Search products..."),"onUpdate:modelValue":t[0]||(t[0]=u=>s.searchValue=u),type:"text",class:"flex-auto p-2 outline-none"},null,8,te),[[S,s.searchValue]]),r("button",{onClick:t[1]||(t[1]=u=>i.setSalePrice()),class:"px-2"},d(i.__("Set Sale Price")),1)]),s.results.length>0&&s.searchValue.length>0?(a(),o("div",se,[r("ul",ie,[(a(!0),o(b,null,y(s.results,u=>(a(),o("li",{key:u.id,onClick:_=>i.addResult(u),class:"p-2 border-b cursor-pointer"},d(u.name),9,re))),128))])])):p("",!0),r("div",ne,[r("table",ae,[r("thead",null,[r("tr",null,[r("th",le,d(i.__("Products")),1)])]),r("tbody",null,[(a(!0),o(b,null,y(s.products,(u,_)=>(a(),o("tr",{key:_},[r("td",oe,[r("div",ue,[r("h3",de,d(u.name),1),r("span",{onClick:h=>i.removeProduct(_),class:"hover:underline text-error-secondary cursor-pointer"},d(i.__("Remove")),9,ce)]),r("ul",null,[r("li",{onClick:h=>i.toggleUnitField(u),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[r("span",null,d(i.__("Unit"))+":",1),r("div",he,[V(r("select",{onChange:h=>i.redefineUnit(u),ref_for:!0,ref:"unitField",type:"text","onUpdate:modelValue":h=>u.unit_quantity_id=h},[(a(!0),o(b,null,y(u.unit_quantities,h=>(a(),o("option",{key:h.id,value:h.id},d(h.unit.name)+" ("+d(h.quantity)+")",9,pe))),128))],40,me),[[K,u.unit_quantity_id]])])],8,fe),r("li",{onClick:h=>i.toggleQuantityField(u),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[r("span",null,d(i.__("Quantity"))+":",1),u._quantity_toggled?p("",!0):(a(),o("span",_e,d(u.quantity),1)),u._quantity_toggled?V((a(),o("input",{key:1,ref_for:!0,ref:"quantityField",type:"text","onUpdate:modelValue":h=>u.quantity=h},null,8,ge)),[[S,u.quantity]]):p("",!0)],8,be),r("li",{onClick:h=>i.togglePriceField(u),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[r("span",null,d(i.__("Price"))+":",1),u._price_toggled?p("",!0):(a(),o("span",ye,d(i.nsCurrency(u.sale_price)),1)),u._price_toggled?V((a(),o("input",{key:1,ref_for:!0,ref:"priceField",type:"text","onUpdate:modelValue":h=>u.sale_price=h},null,8,xe)),[[S,u.sale_price]]):p("",!0)],8,ve)])])]))),128)),s.products.length===0?(a(),o("tr",we,[r("td",ke,d(i.__("No product are added to this group.")),1)])):p("",!0)]),s.products.length>0?(a(),o("tfoot",Ue,[r("tr",null,[r("td",Ce,d(i.__("Total")),1),r("td",Fe,d(i.nsCurrency(i.totalProducts)),1)])])):p("",!0)])])])])])}const Te=Q(H,[["render",Ve]]),Ae={components:{nsProductGroup:Te},data:()=>({formValidation:new D,nsSnackBar:v,nsHttpClient:U,_sampleVariation:null,unitLoaded:!1,unitLoadError:!1,form:G({}),hasLoaded:!1,hasError:!1,isWatching:!1}),watch:{form:{deep:!0,handler(e){this.isWatching||(this.isWatching=!0,this.form.variations.forEach(t=>{if(this.formValidation.extractFields(t.tabs.identification.fields).type==="grouped"){for(let s in t.tabs)["identification","groups","taxes","units"].includes(s)||(t.tabs[s].visible=!1);t.tabs.groups&&(t.tabs.groups.visible=!0)}else{for(let s in t.tabs)["identification","groups","taxes","units"].includes(s)||(t.tabs[s].visible=!0);t.tabs.groups&&(t.tabs.groups.visible=!1)}let l=!1;t.tabs.units.fields.forEach(s=>{s.name==="selling_group"&&s.groups.forEach(i=>{l=i.fields.filter(u=>u.name==="id").length>0})}),t.tabs.units.fields.forEach(s=>{s.name==="unit_group"&&l?(s.disabled=!0,s.about=m("You can't change the unit group as there are already unit quantities attached to the product. You might need to delete the Selling Unit.")):(s.disabled=!1,s.about=!1)})}),J.doAction("ns-products-form-updated",e),setTimeout(()=>{this.isWatching=!1},100))}}},computed:{defaultVariation(){const e=new Object;for(let t in this._sampleVariation.tabs)e[t]=new Object,e[t].label=this._sampleVariation.tabs[t].label,e[t].active=this._sampleVariation.tabs[t].active,e[t].fields=this._sampleVariation.tabs[t].fields.filter(n=>!["category_id","product_type","stock_management","expires"].includes(n.name)).map(n=>((typeof n.value=="string"&&n.value.length===0||n.value===null)&&(n.value=""),n));return{id:"",tabs:e}}},props:["submitMethod","submitUrl","returnUrl","src","units-url"],methods:{__:m,nsCurrency:M,handleUnitGroupFieldChanged(e,t){e.name==="unit_id"&&(t.label=this.getFirstSelectedUnit(t.fields))},async handleSaved(e,t,n,l){e.data.entry&&(l.options.push({label:e.data.entry[l.props.optionAttributes.label],value:e.data.entry[l.props.optionAttributes.value]}),l.value=e.data.entry[l.props.optionAttributes.value])},getGroupProducts(e){if(e.groups){const t=e.groups.fields.filter(n=>n.name==="products_subitems");if(t.length>0)return t[0].value}return[]},setProducts(e,t){t.groups.fields.forEach(n=>{n.name==="product_subitems"&&(n.value=e)})},getUnitQuantity(e){const t=e.filter(n=>n.name==="quantity").map(n=>n.value);return t.length>0?t[0]:0},handleClosingTab(e,t){const n=e.identifier.substr(4),l=t[n];if(l===void 0)return v.error(m("Unable to proceed, the group you're trying to delete doesn't exist. This might be a serious issue, please contact the support.")).subscribe();this.removeUnitPriceGroup(l,t)},removeUnitPriceGroup(e,t){const n=e.fields.filter(l=>l.name==="id"&&!["",void 0,null].includes(l.value));Popup.show(O,{title:m("Confirm Your Action"),message:m("Would you like to delete this group ?"),onAction:l=>{if(l)if(n.length>0)this.confirmUnitQuantityDeletion({group:e,groups:t});else{const s=t.indexOf(e);t.splice(s,1)}}})},confirmUnitQuantityDeletion({group:e,groups:t}){Popup.show(O,{title:m("Your Attention Is Required"),size:"w-3/4-screen h-2/5-screen",message:m("The current unit you're about to delete has a reference on the database and it might have already procured stock. Deleting that reference will remove procured stock. Would you proceed ?"),onAction:n=>{if(n){const l=e.fields.filter(s=>s.name==="id").map(s=>s.value)[0];U.delete(`/api/products/units/quantity/${l}`).subscribe({next:s=>{const i=t.indexOf(e);t.splice(i,1),v.success(s.message).subscribe()},error:s=>{nsSnackbar.error(s.message).subscribe()}})}}})},addUnitGroup(e,t){if(e.options.length===0)return v.error(m("Please select at least one unit group before you proceed.")).subscribe();if(e.options.length>e.groups.length){const n=e.groups;e.groups=[],setTimeout(()=>{e.groups=[...n,{label:this.getFirstSelectedUnit(e.fields),closable:!0,fields:JSON.parse(JSON.stringify(e.fields))}]},1)}else v.error(m("There shoulnd't be more option than there are units.")).subscribe()},handleSaveEvent(e,t,n){const{variation_index:l}=n;t.options.push({label:e.data.entry[t.props.optionAttributes.label],value:e.data.entry[t.props.optionAttributes.value]}),t.value=e.data.entry[t.props.optionAttributes.value],t.name==="unit_group"&&(this.getActiveTab(this.form.variations[l].tabs).unit_group_id=t.value);try{this.loadUnits(this.getActiveTab(this.form.variations[l].tabs),t.value)}catch(s){console.log({exception:s})}},loadUnits(e,t){return new Promise((n,l)=>{U.get(this.unitsUrl.replace("{id}",t)).subscribe({next:s=>{if(s.length===0)return this.unitLoadError=!0,l(!1);e.fields.forEach(i=>{i.type==="group"&&(i.options=s,i.fields.forEach(u=>{["unit_id","convert_unit_id"].includes(u.name)&&(u.options=s.map(_=>({label:_.name,value:_.id})))}))}),this.unitLoaded=!0,n(!0)},error:s=>{l(!1),this.unitLoadError=!0}})})},async loadAvailableUnits(e,t){if(t.name!=="unit_group")return;this.unitLoaded=!1,this.unitLoadError=!1;const n=e.fields.filter(l=>l.name==="unit_group")[0].value;e.unit_group_id=n;try{n!==void 0&&await this.loadUnits(e,n)}catch(l){console.log({exception:l})}},submit(){if(this.formValidation.validateFields([this.form.main]),this.form.variations.map(s=>this.formValidation.validateForm(s)).filter(s=>s.length>0).length>0||Object.values(this.form.main.errors).length>0)return v.error(m("Unable to proceed the form is not valid.")).subscribe();const t=this.form.variations.map((s,i)=>s.tabs.images.groups.filter(u=>u.filter(_=>_.name==="featured"&&_.value===1).length>0));if(t[0]&&t[0].length>1)return v.error(m("Unable to proceed, more than one product is set as featured")).subscribe();const n=[];if(this.form.variations.map((s,i)=>s.tabs.units.fields.filter(u=>u.type==="group").forEach(u=>{u.groups.forEach(_=>{n.push(this.formValidation.validateFields(_.fields))})})),n.length===0)return v.error(m("Either Selling or Purchase unit isn't defined. Unable to proceed.")).subscribe();if(n.filter(s=>s===!1).length>0)return this.$forceUpdate(),v.error(m("Unable to proceed as one of the unit group field is invalid")).subscribe();const l={...this.formValidation.extractForm(this.form),variations:this.form.variations.map((s,i)=>{const u=this.formValidation.extractForm(s);i===0&&(u.$primary=!0),u.images=s.tabs.images.groups.map(h=>this.formValidation.extractFields(h));const _=new Object;return s.tabs.units.fields.filter(h=>h.type==="group").forEach(h=>{_[h.name]=h.groups.map(q=>this.formValidation.extractFields(q.fields))}),u.units={...u.units,..._},u})};this.formValidation.disableForm(this.form),U[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,l).subscribe(s=>{if(s.status==="success"){if(this.submitMethod==="POST"&&this.returnUrl!==!1)return document.location=s.data.editUrl||this.returnUrl;v.info(s.message,m("Okay"),{duration:3e3}).subscribe(),this.$emit("saved")}this.formValidation.enableForm(this.form)},s=>{v.error(s.message,void 0,{duration:5e3}).subscribe(),this.formValidation.enableForm(this.form),s.response&&this.formValidation.triggerError(this.form,s.response.data)})},deleteVariation(e){confirm(m("Would you like to delete this variation ?"))&&this.form.variations.splice(e,1)},setTabActive(e,t){for(let n in t)n!==e&&(t[n].active=!1);if(t[e].active=!0,e==="units"){const n=t[e].fields.filter(l=>l.name==="unit_group");n.length>0&&this.loadAvailableUnits(t[e],n[0])}},duplicate(e){this.form.variations.push(Object.assign({},e))},newVariation(){this.form.variations.push(this.defaultVariation)},getActiveTab(e){for(let t in e)if(e[t].active)return e[t];return!1},getActiveTabKey(e){for(let t in e)if(e[t].active)return t;return!1},parseForm(e){return e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0],e.variations.forEach((t,n)=>{let l=0;for(let s in t.tabs)l===0&&t.tabs[s].active===void 0?(t.tabs[s].active=!0,this._sampleVariation=JSON.parse(JSON.stringify(t)),t.tabs[s].fields&&(t.tabs[s].fields=this.formValidation.createFields(t.tabs[s].fields.filter(i=>i.name!=="name")))):t.tabs[s].fields&&(t.tabs[s].fields=this.formValidation.createFields(t.tabs[s].fields)),t.tabs[s].active=t.tabs[s].active===void 0?!1:t.tabs[s].active,t.tabs[s].visible=t.tabs[s].visible===void 0?!0:t.tabs[s].visible,l++}),e},loadForm(){return new Promise((e,t)=>{const n=U.get(`${this.src}`);this.hasLoaded=!1,this.hasError=!1,n.subscribe({next:l=>{e(l),this.hasLoaded=!0,this.form=G(this.parseForm(l.form))},error:l=>{t(l),this.hasError=!0}})})},addImage(e){e.tabs.images.groups.push(this.formValidation.createFields(JSON.parse(JSON.stringify(e.tabs.images.fields))))},removeImage(e,t){const n=e.tabs.images.groups.indexOf(t);e.tabs.images.groups.splice(n,1)},handleSavedUnitGroupFields(e,t){e.data&&(t.options.push({label:e.data.entry.name,value:e.data.entry.id}),t.value=e.data.entry.id)},getGroupId(e){const t=e.filter(n=>n.name==="id");return t.length>0?t[0].value:!1},getFirstSelectedUnit(e){const t=e.filter(n=>n.name==="unit_id");if(t.length>0){const n=t[0].options.filter(l=>l.value===t[0].value);if(n.length>0)return n[0].label}return m("No Unit Selected")},async createUnit(e){try{const t=await new Promise((n,l)=>{Popup.show(Y,{title:m("Create Unit"),src:"/api/crud/ns.units/form-config",submitUrl:"/api/crud/ns.units",submitMethod:"POST",returnUrl:!1,resolve:n,reject:l})});v.success(t.message).subscribe(),this.loadAvailableUnits(e,{name:"unit_group",value:this.getActiveTab(this.form.variations[0].tabs).unit_group_id})}catch{}}},async mounted(){await this.loadForm()},name:"ns-manage-products"},Pe={class:"form flex-auto",id:"crud-form"},Se={key:0,class:"flex items-center h-full justify-center flex-auto"},qe={key:1},Ee={class:"flex flex-col"},je={class:"flex justify-between items-center"},Oe={for:"title",class:"font-bold my-2 text-primary"},Le={for:"title",class:"text-sm my-2 text-primary"},Ne=["href"],Ge=["disabled"],Ie=["disabled"],Me={key:0,class:"text-xs text-primary py-1"},Qe={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},We={class:"px-4 w-full"},$e={id:"card-header",class:"flex flex-wrap justify-between ns-tab ml-4"},Be={class:"flex flex-wrap"},Ke=["onClick"],De={key:0,class:"rounded-full bg-error-secondary text-white h-6 w-6 flex font-semibold items-center justify-center"},Je={class:"card-body ns-tab-item"},Re={class:"rounded shadow p-2"},Ye={key:0,class:"-mx-4 flex flex-wrap"},He={key:1,class:"-mx-4 flex flex-wrap text-primary"},ze={class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},Xe={class:"rounded border border-box-elevation-edge bg-box-elevation-background flex justify-between p-2 items-center"},Ze=["onClick"],et={class:"rounded border border-box-elevation-edge flex flex-col overflow-hidden"},tt={class:"p-2"},st=["onClick"],it={key:2,class:"-mx-4 flex flex-wrap text-primary"},rt={key:3,class:"-mx-4 flex flex-wrap"},nt={class:"px-4 w-full md:w-1/2 lg:w-1/3"},at={class:"mb-2"},lt={class:"font-medium text-primary"},ot={class:"py-1 text-sm text-primary"},ut={class:"mb-2"},dt=["onClick"],ct={class:"shadow rounded overflow-hidden bg-box-elevation-background text-primary"},ft={class:"border-b text-sm p-2 flex justify-between text-primary border-box-elevation-edge"},ht={class:"p-2 mb-2"},mt={class:"md:-mx-2 flex flex-wrap"},pt={key:0,class:"px-4 w-full lg:w-2/3 flex justify-center items-center"},bt={key:1,class:"px-4 w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center items-center"},_t={class:"w-full md:w-1/3 py-3 text-center text-sm text-primary"},gt=["onClick"],vt={key:2,class:"px-4 w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center items-center"},yt={class:"w-full md:w-1/3 py-3 text-center text-sm text-primary"};function xt(e,t,n,l,s,i){const u=w("ns-spinner"),_=w("ns-notice"),h=w("ns-field"),q=w("ns-product-group"),W=w("ns-tabs-item"),$=w("ns-tabs");return a(),o("div",Pe,[Object.values(e.form).length===0&&e.hasLoaded?(a(),o("div",Se,[k(u)])):p("",!0),Object.values(e.form).length===0&&e.hasError?(a(),o("div",qe,[k(_,{color:"error"},{title:T(()=>[A(d(i.__("An Error Has Occured")),1)]),description:T(()=>[A(d(i.__("An unexpected error has occured while loading the form. Please check the log or contact the support.")),1)]),_:1})])):p("",!0),Object.values(e.form).length>0?(a(),o(b,{key:2},[r("div",Ee,[r("div",je,[r("label",Oe,d(e.form.main.label),1),r("div",Le,[n.returnUrl?(a(),o("a",{key:0,href:n.returnUrl,class:"rounded-full border ns-inset-button error hover:bg-error-tertiary px-2 py-1"},d(i.__("Return")),9,Ne)):p("",!0)])]),r("div",{class:F([e.form.main.disabled?"":e.form.main.errors.length>0?"border-error-tertiary":"","input-group info flex border-2 rounded overflow-hidden"])},[V(r("input",{"onUpdate:modelValue":t[0]||(t[0]=f=>e.form.main.value=f),onBlur:t[1]||(t[1]=f=>e.formValidation.checkField(e.form.main)),onChange:t[2]||(t[2]=f=>e.formValidation.checkField(e.form.main)),disabled:e.form.main.disabled,type:"text",class:F([(e.form.main.disabled,""),"flex-auto text-primary outline-none h-10 px-2"])},null,42,Ge),[[S,e.form.main.value]]),r("button",{disabled:e.form.main.disabled,class:F([e.form.main.disabled?"":e.form.main.errors.length>0?"bg-error-tertiary":"","outline-none px-4 h-10 rounded-none"]),onClick:t[3]||(t[3]=f=>i.submit())},[I(e.$slots,"save",{},()=>[A(d(i.__("Save")),1)])],10,Ie)],2),e.form.main.description&&e.form.main.errors.length===0?(a(),o("p",Me,d(e.form.main.description),1)):p("",!0),(a(!0),o(b,null,y(e.form.main.errors,(f,C)=>(a(),o("p",{class:"text-xs py-1 text-error-tertiary",key:C},[r("span",null,[I(e.$slots,"error-required",{},()=>[A(d(f.identifier),1)])])]))),128))]),r("div",Qe,[r("div",We,[(a(!0),o(b,null,y(e.form.variations,(f,C)=>(a(),o("div",{id:"tabbed-card",class:"mb-8",key:C},[r("div",$e,[r("div",Be,[(a(!0),o(b,null,y(f.tabs,(c,x)=>(a(),o(b,null,[c.visible?(a(),o("div",{onClick:g=>i.setTabActive(x,f.tabs),class:F([c.active?"active":"inactive","tab cursor-pointer text-primary px-4 py-2 rounded-tl-lg rounded-tr-lg flex justify-between"]),key:x},[r("span",{class:F(["block",c.errors&&c.errors.length>0?"mr-2":""])},d(c.label),3),c.errors&&c.errors.length>0?(a(),o("span",De,d(c.errors.length),1)):p("",!0)],10,Ke)):p("",!0)],64))),256))]),t[4]||(t[4]=r("div",{class:"flex items-center justify-center -mx-1"},null,-1))]),r("div",Je,[r("div",Re,[["images","units","groups"].includes(i.getActiveTabKey(f.tabs))?p("",!0):(a(),o("div",Ye,[(a(!0),o(b,null,y(i.getActiveTab(f.tabs).fields,(c,x)=>(a(),o("div",{key:x,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[k(h,{onSaved:g=>i.handleSaved(g,i.getActiveTabKey(f.tabs),C,c),field:c},null,8,["onSaved","field"])]))),128))])),i.getActiveTabKey(f.tabs)==="images"?(a(),o("div",He,[r("div",ze,[r("div",Xe,[r("span",null,d(i.__("Add Images")),1),r("button",{onClick:c=>i.addImage(f),class:"outline-none rounded-full border flex items-center justify-center w-8 h-8 ns-inset-button info"},t[5]||(t[5]=[r("i",{class:"las la-plus-circle"},null,-1)]),8,Ze)])]),(a(!0),o(b,null,y(i.getActiveTab(f.tabs).groups,(c,x)=>(a(),o("div",{key:x,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3 mb-4"},[r("div",et,[r("div",tt,[(a(!0),o(b,null,y(c,(g,E)=>(a(),P(h,{key:E,field:g},null,8,["field"]))),128))]),r("div",{onClick:g=>i.removeImage(f,c),class:"text-center py-2 border-t border-box-elevation-edge text-sm cursor-pointer"},d(i.__("Remove Image")),9,st)])]))),128))])):p("",!0),i.getActiveTabKey(f.tabs)==="groups"?(a(),o("div",it,[k(q,{onUpdate:c=>i.setProducts(c,f.tabs),fields:i.getActiveTab(f.tabs).fields},null,8,["onUpdate","fields"])])):p("",!0),i.getActiveTabKey(f.tabs)==="units"?(a(),o("div",rt,[r("div",nt,[(a(!0),o(b,null,y(i.getActiveTab(f.tabs).fields.filter(c=>c.name!=="selling_group"),c=>(a(),P(h,{onSaved:x=>i.handleSaveEvent(x,c,{variation_index:C}),onChange:x=>i.loadAvailableUnits(i.getActiveTab(f.tabs),c),field:c},null,8,["onSaved","onChange","field"]))),256))]),e.unitLoaded?(a(!0),o(b,{key:0},y(i.getActiveTab(f.tabs).fields,(c,x)=>(a(),o(b,null,[c.type==="group"?(a(),o("div",{class:"px-4 w-full lg:w-2/3",key:x},[r("div",at,[r("label",lt,d(c.label),1),r("p",ot,d(c.description),1)]),r("div",ut,[r("div",{onClick:g=>i.addUnitGroup(c,f.tabs),class:"border-dashed border-2 p-1 bg-box-elevation-background border-box-elevation-edge flex justify-between items-center text-primary cursor-pointer rounded-lg"},[t[6]||(t[6]=r("span",{class:"rounded-full border-2 ns-inset-button info h-8 w-8 flex items-center justify-center"},[r("i",{class:"las la-plus-circle"})],-1)),r("span",null,d(i.__("New Group")),1)],8,dt)]),c.groups.length>0?(a(),P($,{key:0,onClose:g=>i.handleClosingTab(g,c.groups),onChangeTab:g=>f.activeUnitTab=g,active:f.activeUnitTab||"tab-0"},{default:T(()=>[(a(!0),o(b,null,y(c.groups,(g,E)=>(a(),P(W,{closable:g.closable,padding:"p-2",identifier:"tab-"+E,label:g.label},{default:T(()=>[r("div",ct,[r("div",ft,[r("span",null,d(i.__("Available Quantity")),1),r("span",null,d(i.getUnitQuantity(g.fields)),1)]),r("div",ht,[r("div",mt,[(a(!0),o(b,null,y(g.fields,(L,B)=>(a(),o("div",{class:"w-full md:w-1/2 p-2",key:B},[k(h,{onChange:j=>i.handleUnitGroupFieldChanged(j,g),onSaved:j=>i.handleSavedUnitGroupFields(j,L),field:L},null,8,["onChange","onSaved","field"])]))),128))])])])]),_:2},1032,["closable","identifier","label"]))),256))]),_:2},1032,["onClose","onChangeTab","active"])):p("",!0)])):p("",!0)],64))),256)):p("",!0),i.getActiveTab(f.tabs).unit_group_id?(a(),o(b,{key:1},[!e.unitLoaded&&!e.unitLoadError?(a(),o("div",pt,[k(u)])):p("",!0),e.unitLoadError&&!e.unitLoaded?(a(),o("div",bt,[t[7]||(t[7]=r("i",{class:"las la-frown text-7xl"},null,-1)),r("p",_t,d(i.__("We were not able to load the units. Make sure there are units attached on the unit group selected.")),1),r("p",null,[r("span",{onClick:c=>i.createUnit(i.getActiveTab(f.tabs)),class:"cursor-pointer text-info-tertiary border-b border-dashed p-1"},d(i.__("Create Unit")),9,gt)])])):p("",!0)],64)):(a(),o("div",vt,[t[8]||(t[8]=r("i",{class:"las la-frown text-7xl"},null,-1)),r("p",yt,d(i.__("Make sure to select a unit group before you proceed.")),1)]))])):p("",!0)])])]))),128))])])],64)):p("",!0)])}const Pt=Q(Ae,[["render",xt]]);export{Pt as default};
