import React from 'react';
import { generateDates } from './dateSpanGenerator';

export default function SongRow({title, backingTrackUrl, practiceLog}) {
    const cells = generateDates().map((date, index) => {
        const content = practiceLog.includes(date.format('YYYY-MM-DD')) ? (
          <i className="glyphicon glyphicon-ok"></i>
        ) : undefined;
        
        return <td key={index} className="text-center">{content}</td>;
    });

    return (
      <tr>
          <td>{title}</td>
          <td><a target="_blank" href={backingTrackUrl}>Link</a></td>
          {cells}
      </tr>
    );
}
