import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
        Object.values(this.props.imageURLs).map(value => {
          return(
            <><HornedBeast title={value.title} description={value.description} src={value.image_url}/></>
          )
        })
    )
  }
}

export default Main;