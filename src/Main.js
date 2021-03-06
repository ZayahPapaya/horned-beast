import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
      <>
        {this.props.imageURLs.map(value => (
          <HornedBeast key={value._id} title={value.title} description={value.description} src={value.image_url} handleShowModal={this.props.handleShowModal} />
        ))}
      </>
    )
  }
}

export default Main;
