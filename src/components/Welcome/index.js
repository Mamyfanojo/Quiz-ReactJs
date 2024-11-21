import React, {useState, Fragment, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Quiz from '../Quiz';
import Logout from '../Logout';

const Welcome = () => {

  const firebase = useContext(FirebaseContext);

  const [userSession, setUserSession] = useState(null);

  const navigate = useNavigate();
  
  const firebaseAuth = getAuth(); // Obtient l'auth Firebase

  useEffect(() => {
    const listener = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUserSession(user); // Si l'utilisateur est authentifié
      } else {
        navigate('/'); // Si l'utilisateur n'est pas authentifié
      }
    });

    // Nettoyage du listener lorsque le composant est démonté
    return () => {
      listener(); // Supprime le listener
    };
  }, [firebaseAuth, navigate]);
  

  return userSession === null ? (
    <Fragment>
      <div className="loader"></div>
      <div className="">Loading ...</div>
    </Fragment>
  ) : (
    <div className='quiz-bg'>
        <div className='container'> 
            <Logout />
            <Quiz />
        </div>
    </div>
  )
}

export default Welcome