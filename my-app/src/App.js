
import './App.css';
import Header from './components/5_components/Header';
import Paragraph from './components/5_components/Paragraph';
// import Link from './components/5_components/Link';
import Footer from './components/5_components/Footer';
import Input from './components/5_components/Input';
import ItemList from './components/select/ItemList';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  const [name, setName] = useState('Sari')
  useEffect(() => {
    console.log("Updated name in App:", name);
  }, [name]);

  // const fun = ()=>{
  //   return "functhion return"
  // }

  return (
    <div className="App">
      {/* <Header fun={fun}></Header>
      <Paragraph></Paragraph>
      <Link></Link>
      <Input></Input>
      <Footer></Footer> */}

      {/* <ItemList></ItemList> */}

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

    </div>
  );
}

export default App;

