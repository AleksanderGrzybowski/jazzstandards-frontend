import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
          <Grid>
              <Row>
                  <h1 className="text-center">It works</h1>
              </Row>
          </Grid>
        );
    }
}

export default App;
