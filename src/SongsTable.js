import React from 'react';
import { Table } from 'react-bootstrap';

export class SongsTable extends React.Component {

    render() {
        const rows = this.props.songs.map(song => (
          <tr key={song.id}>
              <td>{song.title}</td>
              <td><a target="_blank" href={song.backingTrackUrl}>Link</a></td>
          </tr>
        ));

        return (
          <Table>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Link</th>
              </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
          </Table>
        )
    }

}
