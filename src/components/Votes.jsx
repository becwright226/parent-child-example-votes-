import React from 'react';
import DisplayVote from "./DisplayVote"
const Votes = () => {
  const votes = [
    { name: 'Abe Lincoln', count: 139033 },
    { name: 'Stephen Douglas', count: 115509 },
  ];
  return (
    <div>
      <h2>Hello from Votes</h2>
      <DisplayVote vote ={votes}/>

      

    </div>
  );
};
export default Votes;
