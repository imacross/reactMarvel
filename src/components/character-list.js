import React from 'react';

import _ from 'lodash';
import CharacterListItem from './character-list-item';

const CharacterList = props => {
  console.log('cls' + props.characters);
  return (
    <div className="col-md-4">
      {_.map(props.characters, character => (
        <CharacterListItem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
