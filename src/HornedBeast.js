import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      showModal: false
    }
  }
  clickHandlerModal = () => {
    this.props.handleShowModal(this.props.title);
  }
  clickHandlerButton = () => {
    this.setState({votes: this.state.votes + 1});
  }
  render() {
    return (
      <>
      <Container>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <Image src={this.props.src} alt={this.props.description} onClick={this.clickHandlerModal} roundedCircle={true} title={this.props.title}/>
        <Button onClick={this.clickHandlerButton} >🖤{this.state.votes}🖤</Button>
      </Container>
      </>
    )
  }
}

export default HornedBeast;