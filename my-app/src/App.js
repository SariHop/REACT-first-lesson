
import './App.css';
import Header from './components/5_components/Header';
import Paragraph from './components/5_components/Paragraph';
import Link from './components/5_components/Link';
import Footer from './components/5_components/Footer';
import Input from './components/5_components/Input';
import ItemList from './components/select/ItemList';

function App() {

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

      <ItemList></ItemList>
      
    </div>
  );
}

export default App;

