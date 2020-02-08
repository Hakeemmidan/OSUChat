import React from 'react';

export const UnknownRoute = () => (
  // Will get displayed if the user tries to go to a route that doesn't exist
    <div style={{ display: 'flex', paddingTop: '60px' }}>
      <span style={{ margin: 'auto' }}>
        You entered a route that doesn't exist
        <br/>
        Click on logo to navigate back
      </span>
    </div>
);