
import './App.css';
import Header from './components/5_components/Header';
import Paragraph from './components/5_components/Paragraph';
// import Link from './components/5_components/Link';
import Footer from './components/5_components/Footer';
import Input from './components/5_components/Input';
import ItemList from './components/select/ItemList';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Path from './components/steps/path'

function App() {

  // const fun = () => {
  //   return "functhion return"
  // } 

  const [name, setName] = useState('Sari')

  useEffect(() => {
  }, [name]);


  const [length, setLength] = useState(3)
  const [step, setStep] = useState(1)

  const updateSteps = (num) => {
    const updateValue = step + num
    if (updateValue <= length && updateValue > 0) {
      console.log(updateValue)
      setStep(updateValue)
    }
    //  כאן להוסיף תנאי לעשות שלא יהיה אפשר ללחוץ על הכפתור
  }

  return (
    <div className="App">
      {/* <Header fun={fun}></Header>
      <Paragraph></Paragraph>
      <Link></Link>
      <Input></Input>
      <Footer></Footer> */}

      <ItemList></ItemList>
      <br />
      <hr />

      <BrowserRouter>
        <Link to='/Header'>Header</Link>
        <br />
        <Link to='/Input'>Input</Link>
        <br />
        <Link to='/Footer'>Footer</Link>
        <br />
        <br />


        <Routes>
          <Route path="Header" element={<Header name={name}></Header>} />
          <Route path="Input" element={<Input setName={setName}></Input>} />
          <Route path="Footer" element={<Footer></Footer>} />
        </Routes>
      </BrowserRouter>

      <hr />
      <br />
      <Path step={step} totalSteps={length}></Path>
      <br />
      <button onClick={() => { updateSteps(-1) }}>prev</button>
      <button onClick={() => { updateSteps(1) }}>next</button>
      <br />
      <input type='number' min={3} max={20} onChange={(e) => { setLength(e.target.value) }} value={length}></input>

    </div>
  );
}

export default App;

