(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};o.openModalBtn.forEach(function(r){r.addEventListener("click",l)}),o.closeModalBtn.addEventListener("click",l),o.openMenuBtn.addEventListener("click",n),o.closeMenuBtn.addEventListener("click",n);function n(){o.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function l(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();