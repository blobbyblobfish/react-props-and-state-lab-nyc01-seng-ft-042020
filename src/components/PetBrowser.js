import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  renderPets = () => {
    const pets = this.props.pets

    return pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>)
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
