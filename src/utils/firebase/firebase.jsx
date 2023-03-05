import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword 
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwguDaZ1UOdALoZDxAjXSYD2Dz9jzGABQ",
    authDomain: "or-tryproject.firebaseapp.com",
    projectId: "or-tryproject",
    storageBucket: "or-tryproject.appspot.com",
    messagingSenderId: "979661558309",
    appId: "1:979661558309:web:aaaafaa12617240c0265cc"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);  // Initialize Firebase
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();
 
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            await setDoc (userDocRef, {displayName, email, createdAt, ...additionalInformation})
        } catch (error) {
            console.log ('error creating the user', error.message)
        }
    }
    
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)
  }