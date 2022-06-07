/* import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {About,Error,FAQ,Home,Person,Results} from './pages';
import {Footer,Navbar,Sidebar} from './components';



function App() {
  return (
   
     <Router>
       <Navbar/>
       <Sidebar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/person" element={<Person/>}/>
         <Route path="/faq" element={<FAQ/>}/>
         <Route path="/Results" element={<Results/>}/>
         <Route path="*" element={<Error/>}/>
       </Routes>
       <Footer/>
     </Router>

  );
}


export default App;
 */

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>

        <Route path="/" element={<Watchlist />}/>
        <Route path="//add" element={<Add />}/>
        <Route path="//watched" element={<Watched />}/>

        

        </Routes>

        
      </Router>
    </GlobalProvider>
  );
}

export default App;
