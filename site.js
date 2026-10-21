/* Lógica compartida de las páginas internas. Lee la configuración de config.js */
(function(){
  "use strict";
  var C = window.RESPONDEYA || {};
  var SIN_NUMERO = !C.WHATSAPP_NUMBER || C.WHATSAPP_NUMBER.indexOf("PEGA_TU") === 0;

  // Botones de WhatsApp
  document.querySelectorAll(".js-wa").forEach(function(btn){
    if(SIN_NUMERO){
      btn.addEventListener("click", function(e){
        e.preventDefault();
        var prev = btn.textContent;
        btn.textContent = "Falta configurar el número en config.js";
        setTimeout(function(){ btn.textContent = prev; }, 3200);
      });
    } else {
      btn.href = "https://wa.me/" + C.WHATSAPP_NUMBER + "?text=" + encodeURIComponent(C.MENSAJE || "");
      btn.target = "_blank"; btn.rel = "noopener";
    }
  });

  // Mail de contacto
  document.querySelectorAll(".js-mail").forEach(function(el){
    if(C.CONTACT_EMAIL){
      var a = document.createElement("a");
      a.href = "mailto:" + C.CONTACT_EMAIL; a.textContent = C.CONTACT_EMAIL;
      el.replaceWith(a);
    }
  });

  // Formulario de alta
  var form = document.getElementById("leadForm");
  if(!form) return;
  var notice = document.getElementById("formNotice");
  var btn = form.querySelector("button[type=submit]");

  function aviso(tipo, texto){
    notice.className = "notice show " + tipo;
    notice.textContent = texto;
    notice.scrollIntoView({block:"nearest", behavior:"smooth"});
  }

  form.addEventListener("submit", function(e){
    e.preventDefault();
    if(form.querySelector(".hp input").value){ return; } // trampa para bots
    if(!form.checkValidity()){ form.reportValidity(); return; }

    if(!C.FORM_ENDPOINT){
      aviso("warn", "El formulario todavía no está conectado: falta cargar FORM_ENDPOINT en config.js. No se envió ningún dato.");
      return;
    }
    var fd = new FormData(form);
    var datos = {
      nombre: fd.get("nombre"), email: fd.get("email"),
      acepta_privacidad: true, pagina: location.href, fecha: new Date().toISOString()
    };
    btn.disabled = true; var prev = btn.textContent; btn.textContent = "Enviando...";
    fetch(C.FORM_ENDPOINT, {
      method: "POST",
      headers: {"Content-Type":"application/json","Accept":"application/json"},
      body: JSON.stringify(datos)
    }).then(function(r){
      if(!r.ok) throw new Error("http " + r.status);
      form.reset();
      aviso("ok", "Recibimos tus datos. Te escribimos por WhatsApp o por mail para coordinar una charla.");
    }).catch(function(){
      aviso("warn", "No pudimos enviar el formulario. Probá de nuevo o escribinos por WhatsApp.");
    }).then(function(){ btn.disabled = false; btn.textContent = prev; });
  });
})();
