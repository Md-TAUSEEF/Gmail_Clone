import "./App.css";
import Compose from "./Component/Compose";
import Emaillist from "./Component/Emaillist";
import { useSelector } from "react-redux";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import { selectSendMessageIsOpen } from "./Component/fature/mailSlice";
import Emailbodyaction from "./Component/Emailbodyaction";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Component/Login";
import { selectuser } from './Component/fature/useSlice';
import Speech from "./Component/Speech";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen); // Corrected function name
  const user=useSelector(selectuser)

  return (

    <Router>
    {
      user ? (<div>
      <Header />
      <div className="app__body">
      
        <Sidebar />
        <Routes>
        
        <Route exact path="/Emailbodyaction" element={<Emailbodyaction/>}/>
        <Route exact path="/inbox" element={<Emaillist/>}></Route>
        <Route exact path="/Speech" element={<Speech/>}></Route>
       
        </Routes>
      </div>

      {isMessageOpen && <Compose/>}
    </div>) :
      
     (<Login/>)
    }
    
    </Router>
  );
  
}

export default App;
