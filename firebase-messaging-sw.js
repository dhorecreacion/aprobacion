    // firebase-messaging-sw.js
    
    importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

    firebase.initializeApp({
    apiKey: "AIzaSyA0Vm3f1NY6OkBwYE3R_8kb_Zd-TuaLkpQ",
    authDomain: "reservas-da528.firebaseapp.com",
    projectId: "reservas-da528",
    storageBucket: "reservas-da528.appspot.com",
    messagingSenderId: "693494074553",
    appId: "1:693494074553:web:42b174110c05cfbd4e9f68",
    });

    const messaging = firebase.messaging();
    
    messaging.onBackgroundMessage(function(payload) {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: '/icono-notificacion.png' // Opcional: pon un icono aquí
      };
    
      self.registration.showNotification(notificationTitle,
        notificationOptions);
    });
