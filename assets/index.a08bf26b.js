import{R as I,b as e,c as n,j as t}from"./index.e22dc3d4.js";import{C as _}from"./index.4588890e.js";import{C as b}from"./chevron-right.635281b3.js";const h="_boardPanelDark_1laun_1",w="_boardTitle_1laun_4",p="_boardItemLeft_1laun_5",u="_boardItemDesc_1laun_6",v="_trendColorUp_1laun_7",C="_trendColorDown_1laun_8",D="_boardItemBottom_1laun_9",k="_trendIconUp_1laun_12",f="_trendIconDown_1laun_13",N="_boardPanel_1laun_1",g="_boardItem_1laun_5",B="_boardItemIcon_1laun_40",L="_trendIcon_1laun_12";var o={boardPanelDark:h,boardTitle:w,boardItemLeft:p,boardItemDesc:u,trendColorUp:v,trendColorDown:C,boardItemBottom:D,trendIconUp:k,trendIconDown:f,boardPanel:N,boardItem:g,boardItemIcon:B,trendIcon:L},P=(r=>(r[r.up=0]="up",r[r.down=1]="down",r))(P||{});const U=({trend:r,trendNum:a})=>e("div",{className:n({[o.trendColorUp]:r===0,[o.trendColorDown]:r===1}),children:[t("div",{className:n(o.trendIcon,{[o.trendIconUp]:r===0,[o.trendIconDown]:r===1}),children:r===0?e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M4.5 8L8 4.5L11.5 8",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M8 5V12",stroke:"currentColor",strokeWidth:"1.5"})]}):e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M11.5 8L8 11.5L4.5 8",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M8 11L8 4",stroke:"currentColor",strokeWidth:"1.5"})]})}),a]}),x=({title:r,count:a,desc:d,trend:s,trendNum:l,Icon:c,dark:m,border:i=!1})=>t(_,{title:t("span",{className:o.boardTitle,children:r}),className:n({[o.boardPanelDark]:m,[o.boardPanel]:!0}),bordered:i,footer:e("div",{className:o.boardItemBottom,children:[e("div",{className:o.boardItemDesc,children:[d,t(U,{trend:s,trendNum:l})]}),t(b,{className:o.boardItemIcon})]}),children:e("div",{className:o.boardItem,children:[t("div",{className:o.boardItemLeft,children:a}),t("div",{className:o.boardItemRight,children:c})]})});var j=I.memo(x);export{j as B,P as E,U as T};
