import React from "react";

function JobSearch() {
  return (
    <div>
      <label htmlFor="position">Enter position</label>
      <input id='position' type="text" />
      
      <label htmlFor="location">Enter location</label>
      <input id='location' type="text" />
      
      
    </div>
  );
}

export default JobSearch;