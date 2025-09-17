📥 WhatsApp Quick Send - Extensión para Opera

![Icon](icon.png)

**Descripción:**  
WhatsApp Quick Send es una extensión para Opera que permite enviar mensajes a números de teléfono que no están guardados en tu agenda de contactos. La extensión abre automáticamente una pestaña de WhatsApp Web para el número especificado y realiza los clics necesarios para iniciar la conversación, agilizando el proceso de envío de mensajes.

---

✨ Características principales
- Enviar mensajes a números no guardados en la agenda.  
- Automatización de clics para abrir el chat y la API de WhatsApp.  
- Interfaz simple y ligera mediante un popup.  
- Compatible con Opera.  
- Abrir la extensión usando el atajo de teclado **Alt + E**.  

---

📂 Estructura de archivos
```bash 
background.js      # Script principal de background que maneja la extensión
popup.js           # Lógica del popup de la extensión
popup.html         # Interfaz de usuario del popup
autoclick.js       # Script que realiza clics automáticos en WhatsApp Web
manifest.json      # Configuración de la extensión
icon.png           # Ícono de la extensión
```

🚀 Uso
Instala la extensión en Opera desde el modo desarrollador (cargando la carpeta como extensión).

Haz clic en el icono de la extensión en la barra de herramientas de Opera.

Ingresa el número de teléfono al que deseas enviar un mensaje.

La extensión abrirá automáticamente una pestaña de WhatsApp Web y hará clics para iniciar la conversación.

Escribe tu mensaje y envíalo.

Notas importantes:

Solo funciona con números que tengan cuenta activa en WhatsApp.

La automatización de clics se hace mediante autoclick.js, lo que permite iniciar rápidamente la conversación.

Opera puede pedir permisos adicionales al instalar la extensión.
