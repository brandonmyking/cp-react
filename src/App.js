import React from 'react';
import './App.css';
import { NavBar } from './components/NavComponent';
import { Jumbotron } from './components/JumbotronComponent';
import { Location } from './components/LocationComponent';
import { Merchandise } from './components/MerchandiseComponent';
import { Follow } from './components/FollowComponent';
import { Content } from './components/ContentComponent';
import { Footer } from './components/FooterComponent';

function App() {
  return (
    <>
    <NavBar />
    <Jumbotron />
    <Location />
    <Merchandise />
    <Follow />
    <Content />
    <Footer />
    </>
  );
}

export default App;
