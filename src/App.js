import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from "./data.json";
import SelectedBeast from "./SelectedBeast"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      userName: "User",
      hornFilterList: [],
    };
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad)
  }

  handleLoad() {
    const setAvailableOptions = imageURLs.map(value => value.horns).filter((value, index, self) => self.indexOf(value) === index); // This needs to return horn counts
    console.log('Mapped options',setAvailableOptions);
    this.setState({ hornFilterList: setAvailableOptions.map((value) => (<option id={value.key} value={value.horns}>{value.name}</option>))}); // This needs to set value and textcontent to unique horn counts
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  handleShowModal = (name) => {
    const selectedBeast = imageURLs.find(value => value.title === name)
    this.setState({ selectedBeast: selectedBeast });
    this.setState({ showModal: true });
  }

  handleUserNameInput = (e) => {
    e.preventDefault();
    this.setState({ userName: e.target.value });
  }

  handleChange = (e) => {
    e.preventDefault();
    if (this.state.hornFilterList.includes(e.target.value)) {
      this.state.hornFilterList.find(num => num === e.target.value);
    }
  }
  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group controlId='bootstrapName'>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onInput={this.handleUserNameInput} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Control onChange={this.handleChange} as="select">
              {this.state.hornFilterList}
            </Form.Control>
          </Form>
          <ListGroup>
            {this.state.hornFilterList.map(value => (
              <ListGroup.Item key={value._id} >
                {value.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
        <div className="App">
          <Header title={"Pinterest but for Horned Beasts"} />
          <h2>Welcome {this.state.userName}</h2>
          <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} />
          <Main imageURLs={imageURLs} handleShowModal={this.handleShowModal} />
          <Footer text={"☺"} />
        </div>
      </>
    );
  }
}

export default App;
// imageURLs={imageURLs} Need to pass a filtered list using the value.horns above