import React, {useState} from 'react';

function Props({title, name}) {

  return (
    <div className='props'>
      <div>
        <h2>{title}</h2>
        <p>{name}</p>
      </div>
      <a href='/'><button> Back</button></a>
    </div>
  );
}

export default Props;