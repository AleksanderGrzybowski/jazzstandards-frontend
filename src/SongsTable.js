import React from 'react';
import { Table } from 'react-bootstrap';
import SongRow from './SongRow';

export class SongsTable extends React.Component {
    render() {
        const rows = this.props.songs.map(song =>
          <SongRow
            key={song.id}
            title={song.title}
            backingTrackUrl={song.backingTrackUrl}
            practiceLog={song.practiceLog}
          />
        );

        return (
          <Table>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Link</th>
                  <th>Practice log</th>
              </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
          </Table>
        )
    }

}
