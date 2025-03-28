(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function l(){const t=new Date,n=t.getHours(),r=t.getMinutes(),s=t.getSeconds(),e=n%12*30+r*.5,o=r*6,c=s*6,a=document.querySelector(".hours-hand"),i=document.querySelector(".minutes-hand"),d=document.querySelector(".seconds-hand");a&&i&&d&&(a.style.transform=`translateX(-50%) rotate(${e}deg)`,i.style.transform=`translateX(-50%) rotate(${o}deg)`,d.style.transform=`translateX(-50%) rotate(${c}deg)`)}function u(){const t=document.getElementById("mobile-menu-toggle"),n=document.getElementById("main-nav");if(!t||!n)return;t.addEventListener("click",()=>{t.classList.toggle("active"),n.classList.toggle("active"),document.body.classList.toggle("menu-open")}),n.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{t.classList.remove("active"),n.classList.remove("active"),document.body.classList.remove("menu-open")})}),document.addEventListener("click",s=>{const e=s.target;n.classList.contains("active")&&!n.contains(e)&&!t.contains(e)&&(t.classList.remove("active"),n.classList.remove("active"),document.body.classList.remove("menu-open"))})}function m(){const t=document.getElementById("stars");if(!t)return;for(let r=0;r<100;r++){const s=document.createElement("div");s.className="extra-star";const e=Math.random()*100,o=Math.random()*100,c=Math.random()*2,a=Math.random()*5;s.style.cssText=`
      position: absolute;
      top: ${o}%;
      left: ${e}%;
      width: ${c}px;
      height: ${c}px;
      background-color: #ffffff;
      border-radius: 50%;
      opacity: 0.8;
      animation: twinkle-extra 3s infinite ${a}s;
    `,t.appendChild(s)}const n=document.createElement("style");n.type="text/css",n.innerText=`
    @keyframes twinkle-extra {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 1; transform: scale(1.2); }
    }

    body.menu-open {
      overflow: hidden;
    }
  `,document.head.appendChild(n)}function f(){const t=document.getElementById("current-year");t&&(t.textContent=new Date().getFullYear().toString())}function g(){f(),m(),u(),l(),setInterval(l,1e3)}document.addEventListener("DOMContentLoaded",g);
