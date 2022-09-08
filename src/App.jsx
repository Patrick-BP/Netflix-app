import { useState } from 'react'
import LastMovie from './components/LastMovie';
import './App.css'
import Header from './components/Header';
import Category from './components/category';
function App() {


  return (
    <div className="App">
      <Header />
      <LastMovie />
      <div className='category-wpr'>
        <Category />
        <Category />
        <Category />
      </div>


    </div>
  )
}

export default App
