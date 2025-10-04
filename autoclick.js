const urlObj = new URL (window.location.toString());
const domain = urlObj.hostname;
const fullUrl = urlObj.href;
let primeraAccion = null;
let segundaAccion = null;

// Solo ejecutar si es una URL de WhatsApp
if (fullUrl.includes('https://wa.me/') || fullUrl.includes('https://api.whatsapp.com/send')) {
    setTimeout(() => {
        // Intentar hacer click en el botón "Ir al chat"
        const intentarClick = () => {
            const boton = document.querySelectorAll("#action-button")[3];
            if (boton) {
                // Si el botón existe, hacer click
                boton.click();
                // Marcar que la primera acción se realizó
                primeraAccion = 'si';
            } else {
                // Si aún no aparece, vuelve a intentar en 300 ms
                setTimeout(intentarClick, 300);
            }
        };
        // Si el primer click fue exitoso, intentar hacer click en "use WhatsApp Web"
        //const intentarClick2 = () => {
            // Seleccionamos el segundo botón dentro del contenedor
            //const appWp1 = document.querySelectorAll("#fallback_block > div > div > h4");
            // El botón es el enlace dentro del segundo h4
            //const boton1 = appWp1[1].querySelector('a');
            //if (boton1) {
                // Si el botón existe, hacer click
                //boton1.click();
                // Marcar que la segunda acción se realizó
                //segundaAccion = 'si';
            //} else {
                // Si aún no aparece, vuelve a intentar en 300 ms
                //setTimeout(intentarClick2, 300);
            //}
        //};
        intentarClick();
        if (primeraAccion === 'si') {
            //intentarClick2();
              window.close();
        }
    }, 3000); // espera 3 segundos
}