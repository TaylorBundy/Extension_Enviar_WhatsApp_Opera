let ventanaWhatsAppId = null;

chrome.commands.onCommand.addListener((command) => {
    // Abrir ventana popup centrada al usar el atajo de teclado
    if (command === "abrirWhatsApp") {
        // Dimensiones de la ventana
        const width = 250;
        const height = 200;

        // Obtener información de las pantallas
        chrome.system.display.getInfo((displays) => {
            // Tomamos la primera pantalla (principal)
            const primaryDisplay = displays.find(d => d.isPrimary) || displays[0];
            const screenWidth = primaryDisplay.workArea.width;
            const screenHeight = primaryDisplay.workArea.height;

            // Calcular posición centrada
            const left = Math.round((screenWidth - width) / 2 + primaryDisplay.workArea.left);
            const top = Math.round((screenHeight - height) / 2 + primaryDisplay.workArea.top);

            chrome.windows.create(
                {
                    url: chrome.runtime.getURL("popup.html"),
                    type: "popup",
                    width: width,
                    height: height,
                    left: left,
                    top: top,
                    state: "normal"
                },
                (ventana) => {
                    ventanaWhatsAppId = ventana.id;
                }
            );
        });
    }
});

// Permite cerrar la ventana desde popup.js mediante mensaje
chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.action === "cerrarVentana" && ventanaWhatsAppId) {
        chrome.windows.remove(ventanaWhatsAppId);
        ventanaWhatsAppId = null;
    }
});