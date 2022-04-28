import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  clickHandler = () => {
    this.setState({votes: this.state.votes + 1});
  }
  render() {
    return (
      <Container>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <Image src={this.props.src} alt={this.props.description} onClick={this.clickHandler} roundedCircle={true} title={this.props.title}/>
        <p>🖤{this.state.votes}🖤</p>
      </Container>
    )
  }
}

export default HornedBeast;