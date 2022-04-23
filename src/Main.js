import React from 'react';
import Snack from './Beast';

class Main extends React.Component {
  render() {
    return (
      <>
        <Beast title={'Beast1'} description={'A beast'} src={'IMGURL'} />
        <Beast title={'Beast2'} description={'A beast'} src={'IMGURL'} />
        <Beast title={'Beast3'}  description={'A beast'} src={'IMGURL'} />
        <Beast title={'Beast4'}  description={'A beast'} src={'IMGURL'} />
      </>
    )
  }
}

export default Main;