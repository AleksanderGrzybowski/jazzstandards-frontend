import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Grid, Row } from 'react-bootstrap';
import SongsTable from './SongsTable';
import LoaderOverlay from './LoaderOverlay';
import ErrorPage from './ErrorPage';

export default function App({view, addSong, songs, togglePractice}) {
    if (view.requestError) {
        return <ErrorPage/>;
    }

    return (
      <div>
          {view.requestInProgess && <LoaderOverlay/>}
          <Grid>
              <Row>
                  <Col md={12}>
                      <SongsTable
                        songs={songs.songs}
                        togglePractice={togglePractice}
                      />
                  </Col>
              </Row>
          </Grid>
      </div>
    );
}
