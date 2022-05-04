import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from "./data.json";
import SelectedBeast from "./SelectedBeast"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      userName: "User",
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
  handleUserNameInput = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value});
  }
  render() {
    return (
      <>
      <div className="App">
        <Header title={"Pinterest but for Horned Beasts"}/>
        <h2>Welcome {this.state.userName}</h2>
        <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast}/>
        <Main imageURLs={imageURLs} handleShowModal={this.handleShowModal}/>
        <Footer text={"☺"}/>
      </div>
      <Container>
        <Form>
          <Form.Group controlId='bootstrapName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onInput={this.handleUserNameInput}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form>
      </Container>
      </>
    );
  }
}

export default App;