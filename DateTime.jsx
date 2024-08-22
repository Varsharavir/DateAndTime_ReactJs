import React, { useState } from 'react';

function CurrentDateTime() {
  
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  
  const updateDateTime = () => {
    setCurrentDateTime(new Date());
  };

  return (
    <div>
      <h2>Show Date and Time</h2>
      <p>{currentDateTime.toLocaleString()}</p>
      <button onClick={updateDateTime}>Click</button>
    </div>
  )
}

export default CurrentDateTime;
