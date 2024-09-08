import React from 'react'
import { GoogleOutlined } from '@ant-design/icons';
import { signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';


const Login = () => {
  const handleSignin = () => {
    const provider = new GoogleAuthProvider();
    console.log("Google auth provider: ", provider);

    // signInWithRedirect(auth, provider)
    signInWithPopup(auth, provider);
  }

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to unichat</h2>
        <div className='login-button-google'
          onClick={handleSignin}
        >
          {/* <div className='login-button-google'
          onClick={() => signInWithRedirect(new GoogleAuthProvider())}
        > */}

          <GoogleOutlined /> Sign in with Google
        </div>
        {/* <br /> <br /> */}
        {/* <div className='login-button-facebook'
        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <FacebookOutlined /> Sign in with Facebook
        </div> */}


      </div>
    </div>
  );
}

export default Login