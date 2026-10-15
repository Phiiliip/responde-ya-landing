/* Selector de tema claro/oscuro. Sin elección guardada, la página sigue el modo del sistema. */
(function(){
  "use strict";
  var KEY = "respondeya-tema", root = document.documentElement;
  var SOL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var LUNA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
  function leer(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function guardar(v){ try{ localStorage.setItem(KEY, v); }catch(e){} }
  var g = leer(); if(g === "dark" || g === "light"){ root.setAttribute("data-theme", g); }  // antes de pintar: evita el parpadeo
  function efectivo(){
    var t = root.getAttribute("data-theme"); if(t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function pintar(b){
    var oscuro = efectivo() === "dark";
    b.innerHTML = oscuro ? SOL : LUNA;
    b.setAttribute("aria-label", oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    b.title = oscuro ? "Modo claro" : "Modo oscuro";
  }
  function iniciar(){
    var nav = document.querySelector(".navlinks"); if(!nav) return;
    var b = document.createElement("button"); b.type = "button"; b.className = "theme-btn"; pintar(b);
    b.addEventListener("click", function(){
      var n = efectivo() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", n); guardar(n); pintar(b);
    });
    nav.insertBefore(b, nav.querySelector(".navcta"));
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
})();
