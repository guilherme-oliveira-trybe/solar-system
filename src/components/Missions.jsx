import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }, index) => (
          <section key={ index }>
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          </section>
        ))}
      </div>
    );
  }
}

export default Missions;
