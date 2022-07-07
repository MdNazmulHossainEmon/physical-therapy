import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail,updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // create a register with new password
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(email, password);
        // show the display password error 
        if (password.length < 6) {
            setError("Password Should be at least 6 characters");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password Must Contain Two Uppercase");
            return;
        }

        isLogin ? processLogIn(email, password) : createNewUser(email, password)

    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setError("");
                verifyEmail();
                setUserName();

            }).catch(error => {
                setError(error.message)
            })
    }
    // user login 
    const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                setError("");
                //   setUser(user);
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            });
    }
    // Reset email for password
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
            .catch((error) => {
                setError(error.message);
            });

    }

    // handle name change

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const setUserName = ()=>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
    }

    // handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    // user logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    // handle toggleLogin
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }


    // user catch login with logout onAuthStateChanged
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });

    }, [])

    return {
        signInUsingGoogle,
        user,
        logOut,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        error,
        toggleLogin,
        isLogin,
        createNewUser,
        processLogIn,
        verifyEmail,
        handleResetPassword,
        handleNameChange

    }

}

export default useFirebase;