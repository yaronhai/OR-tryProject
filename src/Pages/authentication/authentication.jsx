import { Fragment, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { AuthContainer } from './authentication.styles.jsx';

import { 
    auth,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase';

import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

const Authentication = () => {
    useEffect(() => {
        async function fetchdata() {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
        }
        fetchdata();
        
    }, [])



    return(
        <Fragment>

            <h1>Authentication page</h1>
            <AuthContainer>
                <SignInForm />
                <SignUpForm />
            </AuthContainer>
        </Fragment>
    )
}
export default Authentication;