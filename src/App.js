import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageURLs from "./data.json";
import SelectedBeast from "./SelectedBeast"
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      userName: "User",
      hornFilterList: [],
      hornOptions: [],
      filterURLs: [],
    };
  }

  componentDidMount() {
    this.setState({filterURLs: imageURLs});
    const setAvailableOptions = imageURLs.map(value => value.horns).filter((value, index, self) => self.indexOf(value) === index);
    this.setState({hornOptions: setAvailableOptions.sort(function(a,b){return a - b;})});
    this.setState({ hornFilterList: setAvailableOptions.map((value) => (<option key={value} value={value}>{value}</option>)).concat(<option key={-1} value={'default'}>{'Unfiltered'}</option>)});
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
    if(e.target.value === 'default'){
      this.setState({filterURLs: imageURLs});
    } else {
    const passList = imageURLs.filter(value => value.horns === parseInt(e.target.value));
    this.setState({filterURLs: passList});
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
        </Container>
        <div className="App">
          <Header title={"Pinterest but for Horned Beasts"} />
          <h2>Welcome {this.state.userName}</h2>
          <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast} />
          <Main imageURLs={this.state.filterURLs} handleShowModal={this.handleShowModal} />
          <Footer text={"☺"} />
        </div>
      </>
    );
  }
}

export default App;
