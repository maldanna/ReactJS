import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import HomeNavigationBar from './components/HomeNavigationBar';

function App() {
  return (
    <BrowserRouter>
      <HomeNavigationBar />
    </BrowserRouter>
  );
}
export default App;
