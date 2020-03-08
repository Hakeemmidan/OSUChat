import React from 'react';

export const UnknownRoute = () => (
  // Will get displayed if the user tries to go to a route that doesn't exist
    <div className="unknown-route__container">
      <span className="unknown-route__inner">
        You entered a route that doesn't exist
        <br/>
        Click on logo to navigate back
      </span>
    </div>
);