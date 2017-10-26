import React from 'react';

export default function Loader() {
    return (
      <div style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          zIndex: 2,
          opacity: 0.7,
          backgroundColor: 'white'
      }}></div>
    )
}
