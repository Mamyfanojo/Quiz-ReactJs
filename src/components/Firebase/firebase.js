import { initializeApp } from "firebase/app";
import { getAuth,sendPasswordResetEmail,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Configuration Firebase
const config = {
  apiKey: "AIzaSyBCQv5P8PZO3Tbb0c6Bni3qEsRrlDk9aaE",
  authDomain: "marvel-quiz-21f0b.firebaseapp.com",
  projectId: "marvel-quiz-21f0b",
  storageBucket: "marvel-quiz-21f0b.appspot.com",
  messagingSenderId: "573487638159",
  appId: "1:573487638159:web:463c7f7dfd6fc1e428f2fa"
};

class Firebase {
  constructor() {
    // Initialiser Firebase
    this.app = initializeApp(config);
    this.auth = getAuth(this.app);
  }

  // Inscription
  signupUser = (email, password) => {
    return createUserWithEmailAndPassword(this.auth, email, password);
  };

  // Connexion
  loginUser = (email, password) => {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  // Déconnexion
  signoutUser = () => {
    return signOut(this.auth);
  };

  // recuperer le mot de passe 
  passwordReset = (email) => {
    return sendPasswordResetEmail(this.auth, email)
      .then(() => {
        console.log('Email de réinitialisation envoyé avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email de réinitialisation :', error);
      });
  };
}

export default Firebase;
