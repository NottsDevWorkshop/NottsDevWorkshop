import React from 'react';
import Markdown from 'react-markdown';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Spacer, Button } from 'react-mdl';

import { events, locations } from '../data';
import SpeakerPanel from './speaker-panel';
import LocationPanel from './location-panel';

class EventPage extends React.Component {
  render() {
    const { date } = this.props.params;
    const event = events.filter(e => e.date == date)[0];
    const location = locations[event.location];
    return (
      <Grid>
        <Cell col={6} offsetDesktop={3} offsetTablet={1}>
          <Card className='width--full' shadow={2}>
            <CardTitle>
              <h4 className='mdl-color-text--primary'>{event.title}</h4>
            </CardTitle>
            <CardText>
              <div className='event__details'>

                <div className='event__details-element'>
                  <div className='fa fa-map-marker mdl-color-text--primary'></div>
                  <div className='mdl-color-text--accent'>
                    {location.name}
                  </div>
                </div>

                <div className='event__details-element'>
                  <div className='fa fa-microphone mdl-color-text--accent'></div>
                  <div className='mdl-color-text--primary'>
                    {event.speakers.map(s => s.name).join(' and ')}
                  </div>
                </div>

                <div className='event__details-element'>
                  <div className='fa fa-calendar mdl-color-text--primary'></div>
                  <div className='mdl-color-text--accent'>
                    {event.date}
                  </div>
                </div>

                <div className='event__details-element'>
                  <div className='fa fa-clock-o mdl-color-text--accent'></div>
                  <div className='mdl-color-text--primary'>
                    {event.time}
                  </div>
                </div>

              </div>

              <h4 className='mdl-color-text--primary'>Description</h4>

              <div className='event__summary justify'>
                <Markdown source={event.summary} />
              </div>

              <div className='event__description justify'>
                <Markdown source={event.description} />
              </div>

              <h4 className='mdl-color-text--primary'>What you will need</h4>

              <div className='event__what-you-will-need justify'>
                <Markdown source={event.what_you_will_need} />
              </div>

            </CardText>

            {!event.attachment ? null : (
              <CardActions border>
                <Spacer />
                <Button name='attachment' href={event.attachment} raised accent>Download Files</Button>
              </CardActions>
            )}
          </Card>
        </Cell>

        {event.speakers.map((s,ix) => (
          <Cell key={ix} col={6} offsetDesktop={3} offsetTablet={1}>
            <SpeakerPanel key={ix} speaker={s} />
          </Cell>
        ))}

        <Cell col={6} offsetDesktop={3} offsetTablet={1}>
          <Card className='width--full'>
            <CardTitle className='mdl-color-text--primary'>
              <h4>Registration</h4>
            </CardTitle>
            <CardText>
              <a href={event.links.meetup}><h4>{event.links.title}</h4></a>
            </CardText>
          </Card>
        </Cell>

        {/*<Cell col={6} offsetDesktop={3} offsetTablet={1}>
          <Card className='width--full'>
            <CardTitle className='mdl-color-text--primary'>
              <h4>Registration</h4>
            </CardTitle>
            <CardText>
              <iframe src={`https://eventbrite.co.uk/tickets-external?eid=${event.links.eventbrite_id}&ref=etckt`}
                      frameborder='0'
                      height='300'
                      width='100%'
                      vspace='0'
                      hspace='0'
                      marginheight='5'
                      marginwidth='5'
                      scrolling='auto'
                      allowtransparency='true'></iframe>
            </CardText>
          </Card>
        </Cell>*/}

        <Cell col={6} offsetDesktop={3} offsetTablet={1}>
          <div className='event__location'>
            <LocationPanel location={location} />
          </div>
        </Cell>

        <br/>
      </Grid>
    );
  }
}

export default EventPage;
