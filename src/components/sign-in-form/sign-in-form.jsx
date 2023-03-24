import {useState} from 'react';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword
} from '../../utils/firebase/firebase';

import FormInput from '../form-input/form-input';
import './sign-in-form.scss';
import Button from '../button/button';

const defaultFormField =  {
    email: '', 
    password: '', 
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields ({ ...formFields, [name]:value });
    }

    //console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormField);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        /*const userDocRef = */ await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
  
        try {
            const response = await signInAuthWithEmailAndPassword(email, password);
            console.log('hit',response);
            resetFormFields();
        }   catch(error) {
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('incorrect password for email', error.message);
                        break;
                    case 'auth/user-not-found':
                        alert ('no email associated with this email', error.message)
                        break;
                    default:
                        console.log(error);
            }
        }
    }

    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={'google'} onClick={signInWithGoogle} >Google Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;