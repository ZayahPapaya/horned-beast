import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from "./data.json";
import SelectedBeast from "./SelectedBeast"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
    }
  }
  handleCloseModal = () => {
    this.setState({showModal:false});
  }
  handleShowModal = (name) => {
    const selectedBeast = imageURLs.find(value => value.title === name)
    this.setState({selectedBeast: selectedBeast});
    this.setState({showModal:true});
  }
  render() {
    return (
      <div className="App">
        <Header title={"Pinterest but for Horned Beasts"}/>
        <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast}/>
        <Main imageURLs={imageURLs} handleShowModal={this.handleShowModal}/>
        <Footer text={"☺"}/>
      </div>
    );
  }
}

export default App;