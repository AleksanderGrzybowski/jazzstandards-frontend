import React from 'react';
import { generateRecentDates } from './../recentDatesGenerator';
import { Glyphicon } from 'react-bootstrap';

export default function SongRow({title, backingTrackUrl, practiceLog, addPractice}) {
    const dates = generateRecentDates().map(date => date.format('YYYY-MM-DD'));
    const pastDates = dates.slice(0, dates.length - 1);
    const today = dates[dates.length - 1];

    const pastCells = pastDates.map((date, index) => {
        const content = practiceLog.includes(date) ? (
          <Glyphicon style={{color: 'green'}} glyph="ok"/>
        ) : undefined;

        return <td key={index} className="text-center">{content}</td>;
    });

    const todayCell = practiceLog.includes(today) ? (
      <td>
          <Glyphicon style={{color: 'green'}} glyph="ok"/>
      </td>
    ) : (
      <td>
          <Glyphicon
            style={{color: 'lightgray', cursor: 'pointer'}}
            glyph="ok"
            onClick={addPractice}
          />
      </td>
    );

    return (
      <tr>
          <td><a target="_blank" href={backingTrackUrl}>{title}</a></td>
          {pastCells}
          {todayCell}
      </tr>
    );
}
