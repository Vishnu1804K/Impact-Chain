import React,{createContext, useState} from 'react';
import {  Routes,Route} from "react-router-dom";
import './App.css';
import About from './Component/About/About';
import NavBar from './Component/NavBar/NavBar';
import StartPage from './Component/StartPage/StartPage';
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings.jsx'
import Members from './Component/Members/Members.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import EmptyPage from './Component/EmptyPage/EmptyPage.jsx';
import Discover from './Component/Discover/Discover.jsx';
import Donate from './Component/Donate/Donate.jsx';
import Contribution from './Component/Contribution/Contribution.jsx';
const DarkTheme = createContext();
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
const config = getDefaultConfig({
  appName: 'ImpactChain',
  projectId: 'd3e35f23d411437a509bcb2a47175bd3',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

function App() {
  const [darkMode,setDarkMode] = useState(false);
  
  const handleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <DarkTheme.Provider value={{darkMode,handleDarkMode}}>
        {/* Donot Distrub */}
       
          <Routes>
            <Route path="/About" element={<Home><About/></Home>}/>
            <Route path="/StartPage" element={<Home><StartPage/></Home>} exact/>
            <Route path="/Discover" element={<Home><Discover/></Home>} />
            <Route path="/Donate" element={<Home><Donate/></Home>}/>
            <Route path="/Contribution" element={<Home><Contribution/></Home>} />
          </Routes>

       {/* Donot Distrub */}
      </DarkTheme.Provider>
    </div>
  );
}

export default App;
export {DarkTheme};