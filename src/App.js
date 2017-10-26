import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import { SongsTable } from './SongsTable';
import NewSongForm from './NewSongForm';

class App extends Component {
    render() {
        const newSongForm = this.props.view.newSongFormVisible ? (
          <Col md={4}>
              <NewSongForm
                addSong={this.props.addSong}
                hideForm={() => this.props.setSongFormVisible(false)}
              />
          </Col>
        ) : (
          <Button onClick={() => this.props.setSongFormVisible(true)}>
              <i className="glyphicon glyphicon-plus"></i>
          </Button>
        );

        return (
          <Grid>
              <Row>
                  <SongsTable songs={this.props.songs.songs}/>
              </Row>
              <Row>
                  {newSongForm}
              </Row>
          </Grid>
        );
    }
}

export default App;
