import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Myprojects from './components/myprojects/myprojects'
import Contacts from './components/contacts/contacts'
import Footer from './components/footer/footer'

const App = () => {
  return (
    
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App