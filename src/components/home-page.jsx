import React from 'react';

import { events, sponsors } from '../data';
import EventPanel from './event-panel';
import SponsorPanel from './sponsor-panel';
import { Grid, Cell } from 'react-mdl';

class Homepage extends React.Component {
  render() {
    const next = events[0];
    const prior = events.slice(1);
    return (
      <Grid>

        <Cell col={6} offsetDesktop={3} offsetTablet={1} className='events__next'>
          <EventPanel event={next} />
        </Cell>

        { !prior.length ? null : (
          <Cell col={6} offsetDesktop={3} offsetTablet={1} className='events__prior'>
            <h3 className='events__prior-title'>Previous Events</h3>
          </Cell>
        )}

        {prior.map((e,ix) => (
          <Cell key={ix} col={6} offsetDesktop={3} offsetTablet={1}>
            <EventPanel event={e} />
          </Cell>
        ))}

        {sponsors.map((s,ix) => (
          <Cell key={ix} offsetTablet={ix%2==0?1:0} offsetDesktop={ix%2==0?3:0} col={3} phone={4}>
            <SponsorPanel sponsor={s} />
          </Cell>
        ))}

        <Cell col={6} offsetDesktop={3} offsetTablet={1} className='info'>
          <h5><a href="http://paulwallas.com/">Paul Wallas</a> is the lead UX Designer at Buying Butler. He has a great eye for detail and has lovingly designed our beautiful logo!</h5>
        </Cell>

        <Cell col={6} offsetDesktop={3} offsetTablet={1} className='info'>
          <h5><a href="https://twitter.com/nomad3k/">Chris Kemp</a> has a wide range of experience in software, from development to management, community speaking, organiser of NottsJS and champion of the customer.</h5>
        </Cell>
      </Grid>
    );
  }
}

export default Homepage;
