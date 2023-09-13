// webrtc-scripts.js

// Accès à la webcam et affichage local
const localVideo = document.getElementById('localVideo');

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    localVideo.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing webcam:', error);
  });

// Configuration de la connexion peer-to-peer
const configuration = { iceServers: [{ urls: 'stun:stun.example.com' }] };
const peerConnection = new RTCPeerConnection(configuration);

// Gestion de l'échange de flux vidéo
const remoteVideo = document.getElementById('remoteVideo');

peerConnection.ontrack = event => {
  if (event.streams && event.streams[0]) {
    remoteVideo.srcObject = event.streams[0];
  }
};

// Gestion de l'échange de données
const dataChannel = peerConnection.createDataChannel('chat');

dataChannel.onmessage = event => {
  addReceivedMessage(event.data);
};

// Événement de clic sur le bouton "Suivant"
document.getElementById('nextButton').addEventListener('click', () => {
  // Code pour passer au prochain utilisateur
});

// Événement de clic sur le bouton "Arrêter"
document.getElementById('stopButton').addEventListener('click', () => {
  // Code pour arrêter la communication
});

// ... Autres fonctions de gestion de la communication WebRTC
