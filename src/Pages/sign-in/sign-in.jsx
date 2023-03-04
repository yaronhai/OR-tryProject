import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';


import { 
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

import './sign-in.scss';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {
    useEffect(() => {
        async function fetchdata() {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        fetchdata();
        
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={ logGoogleUser }> Sign in with Google Popup </button>
            <button onClick={ signInWithGoogleRedirect }> Sign in with Google Redirect </button>
            <SignUpForm />
        </div>
    )
}
export default SignIn;