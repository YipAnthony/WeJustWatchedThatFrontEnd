import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import Navbar from './components/Navbar'
import VotingPage from './components/VotingPage'
import HomePage from './components/Homepage'
import CreateSession from './components/CreateSession';
import JoinSession from './components/JoinSession';
import History from './components/History';

require('dotenv').config()

function App() {

  const [login, setLogin] = useState(false);
  const [picture, setPicture] = useState('');
  const [ contentPage, setContentPage ] = useState('home')

  
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

  const pageDisplay = {
    home: <HomePage setContentPage={ setContentPage } />,
    createSession: <CreateSession />,
    joinSession: <JoinSession />,
    history: <History />,
    voting: <VotingPage />,

  }


  return (
    <div className="flex flex-col justify-start h-screen relative bg-black">
      <Navbar login={login} picture={picture}/>

      {login ? 
          pageDisplay[contentPage]
          : 
          <div className="flex justify-center">
            <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={handleResponse} />  
          </div>
        }


    </div>
  );
}

export default App;
