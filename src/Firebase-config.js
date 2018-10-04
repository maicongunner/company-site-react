// re-base faz a conexao em realtime com o firebase e o App
const Rebase = require('re-base');
const Firebase = require('firebase');

// script de conexao com o Firebase
const FirebaseConfig = {
    apiKey: "AIzaSyCQrTNFVeG8yRpSibdc67mHpDUHxk2_TkM",
    authDomain: "company-portfolio-ef3d0.firebaseapp.com",
    databaseURL: "https://company-portfolio-ef3d0.firebaseio.com",
    projectId: "company-portfolio-ef3d0",
    storageBucket: "company-portfolio-ef3d0.appspot.com",
    messagingSenderId: "4339740860"
  }

  
  const app = firebase.initializeApp(config)
  const config = Rebase.createClass(app.database())

  export default config