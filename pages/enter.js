import { auth } from '../lib/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage() {
    const { user, username } = useContext(UserContext)

    return (
        <main>
            {user ? 
                !username ? <UsernameForm /> : <SignOutButton /> 
                : 
                <SignInButton />
            }
        </main>
    )
}

function SignInButton() {
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });;
    };

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} /> Sign in with Google
        </button>
    );
}

  // Sign out button
function SignOutButton() {
    return <button onClick={() => signOut(auth)}>Sign Out</button>;
}

function UsernameForm() {
    return null;
}

