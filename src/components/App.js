import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';
import SongsTable from './SongsTable';
import NewSongForm from './NewSongForm';
import LoaderOverlay from './LoaderOverlay';
import ErrorPage from './ErrorPage';

export default function App({view, addSong, setSongFormVisible, songs, togglePractice}) {
    if (view.requestError) {
        return <ErrorPage/>;
    }

    const newSongForm = view.newSongFormVisible ? (
      <Col md={4}>
          <NewSongForm
            addSong={addSong}
            hideForm={() => setSongFormVisible(false)}
          />
      </Col>
    ) : (
      <Button onClick={() => setSongFormVisible(true)}>
          <Glyphicon glyph="plus"/>
      </Button>
    );

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
              <Row>
                  {newSongForm}
              </Row>
          </Grid>
      </div>
    );
}
