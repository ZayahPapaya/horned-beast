import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from "./data.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"Pinterest but for Horned Beasts"}/>
        <Main imageURLs={imageURLs} message={"Click on it lol"}/>
        <Footer text={"☺"}/>
      </div>
    );
  }
}

export default App;