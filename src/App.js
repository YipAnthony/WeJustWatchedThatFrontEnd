import React, { useState } from 'react'



import Navbar from './components/Navbar'
import SwipeArea from './components/SwipeArea'
import FooterButtons from './components/FooterButtons'
import FacebookLogin from 'react-facebook-login';

require('dotenv').config()

function App() {

  const [login, setLogin] = useState(false);
  const [picture, setPicture] = useState('');

  
  const handleResponse = (data) => {
    setPicture(data.picture.data.url);
    if (data.accessToken) {
      setLogin(true)
      fetch('http://localhost:3003/login/', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
        }
      )
    } else {
      setLogin(false);
    }
  }


  return (
    <div className="flex flex-col justify-start h-screen relative bg-black">
      <Navbar login={login} picture={picture}/>

      {login ? 
            <>
              <SwipeArea />
              <FooterButtons />
            </>
          : 
            <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={handleResponse} />  
        }


    </div>
  );
}

export default App;
