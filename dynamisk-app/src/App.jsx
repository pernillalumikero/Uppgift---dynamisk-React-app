import { useState} from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieAPI from './components/MovieAPI'


function App() {

  return (
    <div className="App">
      <Header />
      <MovieAPI />
      <Footer />
    </div>
  )
}

export default App
