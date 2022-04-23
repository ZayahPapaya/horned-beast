import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'Felidar Sovereign'} description={'It surveys the withering landscape, waiting for a victory only it can see.'} src={'https://media.magic.wizards.com/image_legacy_migration/mtg/images/daily/arcana/434_felidarsovereign.jpg'} />
        <HornedBeast title={'Prowling Serpopard'} description={'The viziers serving Rhonas, the god of strength, maintain the menagerie of animals employed during his trial.'} src={'Prowling-Serpopard-Amonkhet-MtG-Art.jpg'} />
        <HornedBeast title={'Darksteel Juggernaut'}  description={'One part unstoppable force, one part immovable object.'} src={'Darksteel_Juggernaut.jpg'} />
        <HornedBeast title={'Darksteel Juggernaut'}  description={'One part unstoppable force, one part immovable object.'} src={'Into_the_Core.jpg'} />
      </>
    )
  }
}

export default Main;