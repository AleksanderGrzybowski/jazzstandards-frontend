import React from 'react';
import { Alert, Col, Glyphicon, Grid, Row } from 'react-bootstrap';

export default function ErrorPage() {
    return (
      <Grid>
          <Row>
              <Col md={12}>
                  <Alert bsStyle="danger" style={{marginTop: '50px'}}>
                      <h4>Something went wrong.</h4>
                      <p style={{cursor: 'pointer'}} onClick={() => window.location.reload()}>
                          <Glyphicon glyph="refresh"/> Please refresh the page
                      </p>
                  </Alert>
              </Col>
          </Row>
      </Grid>
    )
};

