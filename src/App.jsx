import React,{ useEffect,useState } from 'react';
import logo from './logo.svg';
import Logo from './components/Header/images/logo.png'
import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Career from './components/Career';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
// import Loading from './components/Loading';

import { IntlProvider } from 'react-intl';
import zh_CN from './locales/zh-CN';
import en_US from './locales/en-US';

const signature = 'The day will become simple and beautiful as long as we grow towards the sun. '

function App() {

  let [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      },3000)
    }
  })

  const [locale, setLocale] = useState('zh')

  useEffect(() => {
    localStorage.setItem('lang', locale);
  });

  const messages = {
    zh: zh_CN,
    en: en_US
  }

  const propety = {
    locale,
    setLocale,
  }


  return (

    <IntlProvider locale="en" messages={messages[locale]}>
      <div className="App">
        {
          isLoading ?
            <div className="loading-layer">
              <div className="loading-logo">
                <a className="logo" href="/">
                  <img src={Logo} className="app-logo" alt="logo" />
                </a>

                <p className="signature">{signature}</p>
              </div>

              <div className="spinner-line"><p></p></div>
            </div> : <div>
              <Header className="Header-app" {...propety}>
                <img src={logo} className="App-logo" alt="logo" />
              </Header>
              <Main />
              <Career />
              <Skills />
              <Education />
              <Footer />
            </div>
        }
      </div>
    </IntlProvider>
  );
}

export default App;


