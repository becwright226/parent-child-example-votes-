import React from 'react';
import Votes from './Votes';

const DisplayVote = (props) => { console.log(props.vote)
  return (
    <div>
      <p>{props.vote.map((vote) => (
        <li>{vote.name}had a total vote count of{vote.count}</li>
      ))}
      </p>
    </div>
  );
};

export default DisplayVote;
