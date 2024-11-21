import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Remplace props.history

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(() => {
            setError(null);
            setSuccess(`Consulter votre adresse email ${email} pour changer de mot de passe`)
            setEmail('');
            setTimeout(() => {
                navigate('/login')
            }, 5000);
        })
        .catch((error) => {
            setError(error);
            setEmail('');
        })

    }

    const disabled = email === "" ? true : false

  return (
    <div className='signUpLoginBox'>
        <div className='slContainer'>
        <div className='formBoxLeftForget'> 
        </div>
            <div className='formBoxRight'>
                <div className='formContent'>     

                { 
                    success && <span style={{
                        border: "1pw solid green",
                        background: "green",
                        color: "#ffffff"
                    }}>
                        {success}
                    </span>
                }  

                { error && <span>{error.message}</span> }       

                  <h2>Mot de passe oublié</h2>

                    <form onSubmit={handleSubmit}>

                        <div className='inputBox'>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' autoComplete='off' required />
                            <label htmlFor='email'>Email</label>
                        </div>

                        <button disabled={disabled}>Recuperer</button>
                    </form>
                    <div className='linkContainer'>
                        <Link className='simpleLink' to="/login">Deja inscrit ? Connectez-vous.</Link>
                    </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default ForgetPassword