// Poner foco en el input al abrir el popup
window.addEventListener("DOMContentLoaded", () => {
    // Poner foco en el input al abrir el popup
    document.getElementById("numero").focus();
  });

// Función que abre WhatsApp
function abrirWhatsApp() {
    let numero = document.getElementById("numero").value.trim();
    // Validar que el campo no esté vacío
    if (!numero) {
      alert("Por favor ingresa un número.");
      return;
    }
    // Agregar prefijo internacional si no está presente
    if (!numero.startsWith('549')) {
        numero = "549" + numero;
    }
    // Definimos la URL de WhatsApp con el número
    const url = `https://wa.me/${encodeURIComponent(numero)}`;
    // Abrir la URL en una nueva pestaña
    chrome.tabs.create({ url });
    // Enviar mensaje al background para cerrar la ventana popup
    chrome.runtime.sendMessage({ action: "cerrarVentana" });
  }
  
  // Click en el botón
  document.getElementById("enviar").addEventListener("click", abrirWhatsApp);
  
  // Presionar Enter en cualquier parte del documento
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        // Si presionamos Enter, llamamos a la función
        abrirWhatsApp();
    }
    if (e.key === "Escape") {
      // Si presionamos Enter, llamamos a la función
      //abrirWhatsApp();
      chrome.runtime.sendMessage({ action: "cerrarVentana" });
    }
  });