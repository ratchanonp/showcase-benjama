import{r as N,A as L,j as e,b as A,a as D,d as P,e as T,s as U,u as B,f as E,h as G,t as w}from"./index-Cv7PuvJE.js";import{N as V}from"./navbar-CKgiNdTi.js";import{a as z}from"./index-BIx2ormR.js";import{u as M,t as O,F as $,a as l,b as t,c as n,d as o,e as m,f as d,z as c}from"./index-Bpc60013.js";import{I as x}from"./input-Di0z1uxm.js";import{R as k,a as q}from"./radio-group-O5Jy25jt.js";import"./index-BICUkeyL.js";const f=[{value:"academic",label:"วิชาการ"},{value:"athletic",label:"กีฬา"}],H=c.object({awardType:c.string().nonempty().refine(h=>f.some(j=>j.value===h),{message:"ประเภทรางวัลไม่ถูกต้อง"}),competitionName:c.string().nonempty(),eventName:c.string().nonempty(),awardName:c.string().nonempty(),studentFullName:c.string().nonempty(),year:c.coerce.number().int(),certificateImage:c.instanceof(File)});function _(){const[h,j]=N.useState(null),{user:p}=N.useContext(L),a=M({resolver:O(H),defaultValues:{awardType:f[0].value,competitionName:"",eventName:"",awardName:"",year:0,studentFullName:"",certificateImage:new File([],"")}}),y=async s=>{const{competitionName:r,eventName:i,awardName:F,year:v,certificateImage:I,awardType:R,studentFullName:C}=s;try{const u=await A(D(P,"awards"),{type:R,userId:p==null?void 0:p.uid,competitionName:r,eventName:i,awardName:F,year:v,studentFullName:C}),g=T(U,`certificates/${u.id}`);await B(g,I);const S=await E(g);await G(u,{certificateImage:S}),w.success("เพิ่มข้อมูลเรียบร้อยแล้ว"),a.reset(),j(null)}catch(u){w.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล",{description:u.message})}},b=s=>{var i;const r=(i=s.target.files)==null?void 0:i[0];j(r?URL.createObjectURL(r):null)};return e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsxs("main",{className:"max-w-screen-xl mx-auto p-5",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"เพิ่มผลงาน"}),e.jsx("section",{children:e.jsx($,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(y),className:"space-y-5",children:[e.jsx(l,{control:a.control,name:"awardType",render:({field:s})=>e.jsxs(t,{children:[e.jsx(n,{children:"ประเภทรางวัล"}),e.jsx(o,{children:e.jsx(k,{onValueChange:s.onChange,value:s.value,className:"flex space-x-2",children:f.map(r=>e.jsxs(t,{className:"flex items-end space-x-2",children:[e.jsx(o,{children:e.jsx(q,{value:r.value})}),e.jsx(n,{children:r.label})]}))})}),e.jsx(m,{})]})}),e.jsx(l,{control:a.control,name:"awardName",render:({field:s})=>e.jsxs(t,{children:[e.jsx(n,{children:"ชื่อรางวัล"}),e.jsx(o,{children:e.jsx(x,{...s})}),e.jsx(d,{children:"ชื่อรางวัลที่ได้รับ เช่น รางวัลชนะเลิศ รางวัลชมเชย รางวัลอันดับ 1"}),e.jsx(m,{})]})}),e.jsx(l,{control:a.control,name:"competitionName",render:({field:s})=>e.jsxs(t,{children:[e.jsx(n,{children:"ชื่อรายการการแข่งขัน"}),e.jsx(o,{children:e.jsx(x,{...s})}),e.jsx(d,{children:"ชื่อรายการการแข่งขันที่เข้าร่วม เช่น การแข่งขันโครงงานคอมพิวเตอร์ การแข่งขันอัจฉริยภาพวิทยาศาสตร์"}),e.jsx(m,{})]})}),e.jsx(l,{control:a.control,name:"eventName",render:({field:s})=>e.jsxs(t,{children:[e.jsx(n,{children:"ชื่องาน"}),e.jsx(o,{children:e.jsx(x,{...s})}),e.jsx(d,{children:"ชื่องานที่เข้าร่วม เช่น งานสัปดาห์วิทยาศาสตร์ งานมหกรรมวิชาการมัธยมศึกษา"}),e.jsx(m,{})]})}),e.jsx(l,{control:a.control,name:"year",render:({field:s})=>e.jsxs(t,{children:[e.jsx(n,{children:"ปีที่เข้าร่วม"}),e.jsx(o,{children:e.jsx(x,{type:"number",...s})}),e.jsx(d,{children:"ปีที่เข้าร่วมการแข่งขัน เช่น 2564 2565"}),e.jsx(m,{})]})}),e.jsx(l,{control:a.control,name:"studentFullName",render:({field:s})=>e.jsxs(t,{children:[e.jsx(n,{children:"ชื่อนักเรียน"}),e.jsx(o,{children:e.jsx(x,{...s})}),e.jsx(d,{children:"ชื่อนักเรียนที่ได้รับรางวัล"}),e.jsx(m,{})]})}),e.jsx(l,{control:a.control,name:"certificateImage",render:({field:s})=>e.jsxs(t,{children:[e.jsx(n,{children:"File รูปภาพเกียรติบัตร"}),e.jsx(o,{children:e.jsx(x,{type:"file",accept:"image/*",onChange:r=>{var i;s.onChange((i=r.target.files)==null?void 0:i[0]),b(r)}})}),e.jsx(d,{children:"รูปภาพเกียรติบัตรที่ได้รับ"}),e.jsx(m,{}),h&&e.jsx("img",{src:h,alt:"Certificate Preview",className:"mt-4 max-h-60"})]})}),e.jsx(z,{type:"submit",disabled:a.formState.isSubmitting,children:"เพิ่มผลงาน"})]})})})]})]})}export{_ as default};
