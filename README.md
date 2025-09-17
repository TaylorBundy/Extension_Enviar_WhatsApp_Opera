📥 WhatsApp Quick Send - Extensión para Opera

![Icon](icon32x32.png)

📍 **Descripción:**  
WhatsApp Quick Send es una extensión para Opera que permite enviar mensajes a números de teléfono que no están guardados en tu agenda de contactos. La extensión abre automáticamente una pestaña de WhatsApp Web para el número especificado y realiza los clics necesarios para iniciar la conversación, agilizando el proceso de envío de mensajes.

---

✨ Características principales
- Enviar mensajes a números no guardados en la agenda.  
- Automatización de clics para abrir el chat y la API de WhatsApp.  
- Interfaz simple y ligera mediante un popup.  
- Compatible con Opera.  
- Abrir la extensión usando el atajo de teclado **Alt + E**.  

---

👨‍🔧 **Instalación:**

1. ![Icon](github.webp) Clona este repositorio o 📥 descarga el ZIP.
   ```bash
   git clone https://github.com/TaylorBundy/Extension_Enviar_WhatsApp_Opera.git
   ```
3. Abre Opera y ve a `Extensiones > Administrar extensiones`.
4. Activa el **Modo de desarrollador**.
5. Haz clic en **Cargar extensión desempaquetada** y selecciona la carpeta del repositorio.
6. Una vez cargada, la extensión aparecerá en la barra de herramientas.

---

📂 **Estructura de archivos:**

```bash
whatsApp_send/
  ├── background.js      # Script principal de background que maneja la extensión
  ├── popup.js           # Lógica del popup de la extensión
  ├── popup.html         # Interfaz de usuario del popup
  ├── autoclick.js       # Script que realiza clics automáticos en WhatsApp Web
  ├── manifest.json      # Configuración de la extensión
  └── icon.png           # Ícono de la extensión
```

---

🚀 **Uso:**
Instala la extensión en Opera desde el modo desarrollador (cargando la carpeta como extensión).

Haz clic en el icono de la extensión en la barra de herramientas de Opera.

Ingresa el número de teléfono al que deseas enviar un mensaje.

La extensión abrirá automáticamente una pestaña de WhatsApp Web y hará clics para iniciar la conversación.

Escribe tu mensaje y envíalo.

---

📋💡 **Notas importantes:**

Solo funciona con números que tengan cuenta activa en WhatsApp.

La automatización de clics se hace mediante autoclick.js, lo que permite iniciar rápidamente la conversación.

Opera puede pedir permisos adicionales al instalar la extensión.

---

🔹 **Contribuir:**

Si quieres mejorar la extensión o agregar nuevas funcionalidades, siéntete libre de:  
1. Hacer un fork del repositorio.  
2. Crear una rama con tus cambios (`git checkout -b feature/nueva-funcionalidad`).  
3. Hacer commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).  
4. Hacer push a la rama (`git push origin feature/nueva-funcionalidad`).  
5. Enviar un Pull Request.
