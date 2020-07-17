import React from 'react';
import AnimalCard from './animal_card';
import cheeta from '../animals/cheeta.jpg';
import giraffe from '../animals/giraffe.png';
import meerkat from '../animals/meerkat.jpg';
import panda from '../animals/panda.jpg';
import zebra from '../animals/zebra.jpg';
import squirrel from '../animals/veverita.jpg';
import CustomButton from './button';
import '../styling/galery.css';

class Galery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [
        { name: 'Cheeta', src: cheeta },
        { name: 'Giraffe', src: giraffe },
        { name: 'Meerkat', src: meerkat },
        { name: 'Panda', src: panda },
        { name: 'Zebra', src: zebra },
        { name: 'Squirrel', src: squirrel }
      ],
      galery: [
        { name: 'Meerkat', src: meerkat },
        { name: 'Panda', src: panda }
      ]
    };
  }

  addRandomAnimal = () => {
    const magicNumber = Math.floor(Math.random() * 6);
    const newAnimal = this.state.animals[magicNumber];
    this.setState({
      galery: this.state.galery.concat([
        { name: newAnimal.name, src: newAnimal.src }
      ])
    });
  };
  removeRandomAnimal = () => {
    const magicNumber = Math.floor(Math.random() * this.state.galery.length);
    /*remove element*/
    const array = this.state.galery.slice(0);
    array.splice(magicNumber, 1);

    this.setState({
      galery: array
    });
  };
  render() {
    const { galery } = this.state;
    return (
      <div className='container'>
        <div className='buttons'>
          <CustomButton
            name={'Add new Animal to Gallery'}
            action={this.addRandomAnimal}
          />
          <CustomButton
            name={'Remove Animal from Gallery'}
            action={this.removeRandomAnimal}
          />
        </div>
        <div className='galery'>
          {galery.length > 0 &&
            galery.map((animal, index) => (
              <AnimalCard key={index} name={animal.name} image={animal.src} />
            ))}
        </div>
      </div>
    );
  }
}
export default Galery;
