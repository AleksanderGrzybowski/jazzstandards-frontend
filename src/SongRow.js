import React from 'react';
import { generateRecentDates } from './recentDatesGenerator';

export default function SongRow({title, backingTrackUrl, practiceLog, addPractice}) {
    const dates = generateRecentDates().map(date => date.format('YYYY-MM-DD'));
    const pastDates = dates.slice(0, dates.length - 1);
    const today = dates[dates.length - 1];

    const pastCells = pastDates.map((date, index) => {
        const content = practiceLog.includes(date) ? (
          <i style={{color: 'green'}} className="glyphicon glyphicon-ok"></i>
        ) : undefined;

        return <td key={index} className="text-center">{content}</td>;
    });

    const todayCell = practiceLog.includes(today) ? (
      <td>
          <i style={{color: 'green'}} className="glyphicon glyphicon-ok"></i>
      </td>
    ) : (
      <td>
          <i
            style={{color: 'lightgray', cursor: 'pointer'}}
            className="glyphicon glyphicon-ok"
            onClick={addPractice}
          ></i>
      </td>
    );

    return (
      <tr>
          <td>{title}</td>
          <td><a target="_blank" href={backingTrackUrl}>Link</a></td>
          {pastCells}
          {todayCell}
      </tr>
    );
}
