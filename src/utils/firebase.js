import firebase from 'firebase'
//acesso ao banco no Firestore
 var firebaseConfig = {
    apiKey: "AIzaSyDD9pbhyhyddezAezgFNgLlTPJObQ15r4E",
    authDomain: "desafio-alest-5c26f.firebaseapp.com",
    projectId: "desafio-alest-5c26f",
    storageBucket: "desafio-alest-5c26f.appspot.com",
    messagingSenderId: "237267285636",
    appId: "1:237267285636:web:395a6148ae6c8822a8f4d1",
    measurementId: "G-88G63CZRNK"
  };
  // iniciar o banco de dados
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;