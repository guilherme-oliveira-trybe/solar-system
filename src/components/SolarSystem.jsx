import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet, index) => (
          <section key={ index }>
            <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
          </section>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
