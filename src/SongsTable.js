import React from 'react';
import { Table } from 'react-bootstrap';
import SongRow from './SongRow';
import { generateRecentDates } from './recentDatesGenerator';

export class SongsTable extends React.Component {
    render() {
        const rows = this.props.songs.map(song =>
          <SongRow
            key={song.id}
            title={song.title}
            backingTrackUrl={song.backingTrackUrl}
            practiceLog={song.practiceLog}
            addPractice={() => this.props.addPractice(song.id)}
          />
        );

        const dateColumns = generateRecentDates().map((date, index) =>
          <th key={index}>{date.format('MMM DD')}</th>
        );

        return (
          <Table>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Link</th>
                  {dateColumns}
              </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
          </Table>
        )
    }
}
