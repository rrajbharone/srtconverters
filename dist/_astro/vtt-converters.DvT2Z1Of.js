import{n as e,r as t}from"./text-to-srt.CE2V29rX.js";function n(e){let t=e.replace(/\r\n/g,`
`).trim();if(!t)return`WEBVTT

`;let n=t.split(/\n\s*\n/),r=[`WEBVTT
`];for(let e of n){let t=e.split(`
`).map(e=>e.trim()).filter(Boolean);if(t.length===0)continue;let n=-1;for(let e=0;e<t.length;e++)if(t[e].includes(`-->`)){n=e;break}if(n===-1)continue;let i=t[n].split(`-->`);if(i.length!==2)continue;let a=i[0].trim().replace(`,`,`.`),o=i[1].trim().replace(`,`,`.`),s=t.slice(n+1).join(`
`);r.push(`${a} --> ${o}\n${s}\n`)}return r.join(`
`)}function r(n){let r=n.replace(/\r\n/g,`
`).trim();if(!r)return``;let i=r.replace(/^WEBVTT[^\n]*\n*/i,``).split(/\n\s*\n/),a=[],o=1;for(let n of i){let r=n.split(`
`).map(e=>e.trim()).filter(Boolean);if(r.length===0||r[0].startsWith(`NOTE`)||r[0].startsWith(`STYLE`)||r[0].startsWith(`REGION`))continue;let i=-1;for(let e=0;e<r.length;e++)if(r[e].includes(`-->`)){i=e;break}if(i===-1)continue;let s=r[i].split(`-->`),c=s[0].trim(),l=s[1].trim().split(/\s+/)[0],u=t(c),d=t(l),f=e(u,`,`),p=e(d,`,`),m=r.slice(i+1).map(e=>e.replace(/<[^>]*>/g,``).trim()).filter(Boolean).join(`
`);m&&(a.push(`${o}\n${f} --> ${p}\n${m}\n`),o++)}return a.join(`
`)}export{r as n,n as t};