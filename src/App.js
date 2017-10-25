import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row } from 'react-bootstrap';
import { SongsTable } from './SongsTable';

class App extends Component {
    render() {
        console.log(this.props);
        return (
          <Grid>
              <Row>
                  <SongsTable songs={this.props.songs.songs}/>
              </Row>
          </Grid>
        );
    }
}

export default App;
