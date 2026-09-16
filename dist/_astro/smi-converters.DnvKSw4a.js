function e(e){return e?e.replace(/&nbsp;/gi,` `).replace(/&amp;/gi,`&`).replace(/&quot;/gi,`"`).replace(/&#39;|&apos;/gi,`'`).replace(/&lt;/gi,`<`).replace(/&gt;/gi,`>`).replace(/&#(\d+);/g,(e,t)=>{try{return String.fromCharCode(parseInt(t,10))}catch{return e}}).replace(/&#x([0-9a-fA-F]+);/g,(e,t)=>{try{return String.fromCharCode(parseInt(t,16))}catch{return e}}):``}function t(e){(isNaN(e)||e<0)&&(e=0);let t=Math.floor(e/36e5),n=e%36e5,r=Math.floor(n/6e4),i=n%6e4,a=Math.floor(i/1e3),o=Math.floor(i%1e3),s=e=>e.toString().padStart(2,`0`);return`${s(t)}:${s(r)}:${s(a)},${(e=>e.toString().padStart(3,`0`))(o)}`}function n(t){if(!t)return``;let n=t.replace(/<br\s*\/?>/gi,`
`).replace(/<\/?p[^>]*>/gi,``).replace(/<\/?font[^>]*>/gi,``).replace(/<\/?span[^>]*>/gi,``).replace(/<\/?[a-z0-9]+[^>]*>/gi,``);return n=e(n),n.split(`
`).map(e=>e.trim()).filter(e=>e.length>0).join(`
`)}function r(e,r={}){let i=[],a=new Set;if(!e||!e.trim())return{srt:``,cueCount:0,detectedClasses:[],warnings:[`Input SMI content is empty.`]};let o=e,s=e.match(/<BODY[^>]*>([\s\S]*?)<\/BODY>/i);s&&s[1]&&(o=s[1]);let c=/<SYNC\s+[^>]*?Start\s*=\s*['"]?(\d+)['"]?[^>]*>/gi,l=[],u,d=[];for(;(u=c.exec(o))!==null;){let e=parseInt(u[1],10),t=u.index,n=c.lastIndex;d.push({startMs:e,tagEndIndex:n,fullMatchIndex:t})}if(d.length===0){let e=/<SYNC[^>]+?(\d+)[^>]*>/gi;for(;(u=e.exec(o))!==null;){let t=parseInt(u[1],10);d.push({startMs:t,tagEndIndex:e.lastIndex,fullMatchIndex:u.index})}}if(d.length===0)return{srt:``,cueCount:0,detectedClasses:[],warnings:[`No valid <SYNC Start="..."> tags found in the provided SMI file.`]};for(let e=0;e<d.length;e++){let t=d[e],r=d[e+1],i=r?o.substring(t.tagEndIndex,r.fullMatchIndex):o.substring(t.tagEndIndex),s=``,c=i.match(/<P\s+[^>]*?Class\s*=\s*['"]?([a-zA-Z0-9_-]+)['"]?[^>]*>/i);c&&c[1]&&(s=c[1].toUpperCase(),a.add(s));let u=n(i),f=!u||u===`&nbsp;`||u.trim()===``;l.push({startMs:t.startMs,rawContent:i,langClass:s||void 0,hasText:!f})}let f=r.selectedLanguageClass||`all`,p=r.maxCueDurationMs??7e3,m=[],h=1;for(let e=0;e<l.length;e++){let r=l[e];if(!r.hasText||f!==`all`&&r.langClass&&r.langClass!==f)continue;let i=n(r.rawContent);if(!i)continue;let a=0;for(let t=e+1;t<l.length;t++){let e=l[t];if((f===`all`||!e.langClass||e.langClass===f||!e.hasText)&&e.startMs>r.startMs){a=e.startMs;break}}if(!a||a<=r.startMs){let e=Math.min(Math.max(i.length*55,1800),p);a=r.startMs+e}else a-r.startMs>p&&(a=r.startMs+p);m.push({index:h++,startMs:r.startMs,endMs:a,startTimeFormatted:t(r.startMs),endTimeFormatted:t(a),text:i,langClass:r.langClass})}return m.sort((e,t)=>e.startMs-t.startMs),{srt:m.map((e,t)=>`${t+1}\n${e.startTimeFormatted} --> ${e.endTimeFormatted}\n${e.text}`).join(`

`),cueCount:m.length,detectedClasses:Array.from(a),warnings:i}}var i=`<SAMI>
<HEAD>
<TITLE>Sample Movie Subtitle</TITLE>
<STYLE TYPE="text/css">
<!--
P { margin-left:8pt; margin-right:8pt; margin-bottom:2pt;
    margin-top:2pt; font-size:14pt; text-align:center;
    font-family:gulim, sans-serif; font-weight:normal; color:white;
}
.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }
.ENCC { Name:English; lang:en-US; SAMIType:CC; }
-->
</STYLE>
</HEAD>
<BODY>
<SYNC Start=1200><P Class=KRCC>
안녕하세요! SMI to SRT 자막 변환 도구입니다.
<SYNC Start=4500><P Class=KRCC>&nbsp;
<SYNC Start=5200><P Class=KRCC>
SAMI 자막을 깨끗한 SubRip (.srt) 형식으로 즉시 변환합니다.
<SYNC Start=9100><P Class=KRCC>&nbsp;
<SYNC Start=10500><P Class=KRCC>
한국어 인코딩(EUC-KR / CP949) 및 다국어 자막을 지원합니다.
<SYNC Start=15200><P Class=KRCC>&nbsp;
<SYNC Start=16000><P Class=KRCC>
프리미어 프로, 다빈치 리졸브, VLC 및 모바일에서 바로 사용하세요!
<SYNC Start=21000><P Class=KRCC>&nbsp;
</BODY>
</SAMI>`,a=`1
00:00:01,000 --> 00:00:04,500
Welcome to the SRT to SMI Subtitle Converter!

2
00:00:04,800 --> 00:00:08,200
Convert SubRip (.srt) captions to Microsoft SAMI (.smi) format
with precise millisecond <SYNC> timestamps.

3
00:00:08,600 --> 00:00:12,500
Fully compatible with Windows Media Player,
GOM Player, PotPlayer, and Korean media workflows.

4
00:00:13,000 --> 00:00:16,800
Multi-line subtitles and HTML formatting
are cleanly translated to <BR> and standard SAMI markup!`;function o(e){if(!e)return 0;let t=e.trim().replace(`,`,`.`),n=t.lastIndexOf(`.`),r=0,i=t;if(n!==-1){i=t.substring(0,n);let e=t.substring(n+1).padEnd(3,`0`).substring(0,3);r=parseInt(e,10)||0}let a=i.split(`:`).map(e=>parseInt(e,10)||0),o=0,s=0,c=0;return a.length===3?(o=a[0],s=a[1],c=a[2]):a.length===2?(s=a[0],c=a[1]):a.length===1&&(c=a[0]),(o*3600+s*60+c)*1e3+r}function s(e,t={}){let n=[],r=(e||``).replace(/\r\n/g,`
`).replace(/\r/g,`
`).trim();if(!r)return{smi:``,cueCount:0,warnings:[`Input content is empty.`]};let i=t.languageClass||`KRCC`,a=t.title||`Converted Subtitles`,s=t.includeBlankSyncPoints!==!1,c=t.cleanHtmlTags===!0,l=r.split(/\n\s*\n+/),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t)continue;let r=t.split(`
`).map(e=>e.trim()).filter(Boolean);if(r.length===0)continue;let i=-1;for(let e=0;e<r.length;e++)if(r[e].includes(`-->`)){i=e;break}if(i===-1){n.push(`Skipped block #${e+1}: Missing timestamp separator '-->'.`);continue}let a=r[i].split(`-->`);if(a.length!==2){n.push(`Skipped block #${e+1}: Invalid timestamp line.`);continue}let s=o(a[0]),d=o(a[1]);d<=s&&(d=s+3e3,n.push(`Cue starting at ${a[0].trim()} had end time <= start time. Adjusted to 3.0s duration.`));let f=r.slice(i+1);if(f.length===0)continue;let p=f.join(`<BR>`);c&&(p=p.replace(/<(?!\/?BR\b)[^>]*>/gi,``)),u.push({startMs:s,endMs:d,text:p})}if(u.length===0)return{smi:``,cueCount:0,warnings:[`No valid subtitle cues could be parsed from the provided SRT.`]};u.sort((e,t)=>e.startMs-t.startMs);let d=[`<SAMI>`,`<HEAD>`,`<TITLE>${a}</TITLE>`,`<STYLE TYPE="text/css">`,`<!--`,`P { margin-left:8pt; margin-right:8pt; margin-bottom:2pt;`,`    margin-top:2pt; font-size:14pt; text-align:center;`,`    font-family:gulim, sans-serif; font-weight:normal; color:white;`,`}`,`.KRCC { Name:Korean; lang:ko-KR; SAMIType:CC; }`,`.ENCC { Name:English; lang:en-US; SAMIType:CC; }`,`.FRCC { Name:French; lang:fr-FR; SAMIType:CC; }`,`.ESCC { Name:Spanish; lang:es-ES; SAMIType:CC; }`,`.DECC { Name:German; lang:de-DE; SAMIType:CC; }`,`.ITCC { Name:Italian; lang:it-IT; SAMIType:CC; }`,`-->`,`</STYLE>`,`</HEAD>`,`<BODY>`];for(let e=0;e<u.length;e++){let t=u[e];if(d.push(`<SYNC Start=${t.startMs}><P Class=${i}>${t.text}`),s){let n=u[e+1];(!n||n.startMs>t.endMs)&&d.push(`<SYNC Start=${t.endMs}><P Class=${i}>&nbsp;`)}}return d.push(`</BODY>`),d.push(`</SAMI>`),{smi:d.join(`
`),cueCount:u.length,warnings:n}}export{s as i,a as n,r,i as t};