import React from 'react';

export default function SongRow({title, backingTrackUrl, practiceLog}) {
    return (
      <tr>
          <td>{title}</td>
          <td><a target="_blank" href={backingTrackUrl}>Link</a></td>
          <td>{JSON.stringify(practiceLog)}</td>
      </tr>
    );
}
