import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/favourites/favourites.actions';
import { selectFavourites } from '../store/favourites/favourites.selector'
const url = 'https://rickandmortyapi.com/api/character';

type Character = {
  id: number;
  name: string;
  image: string;
};

const Favourites: FC = () => {

  const [characters, setCharaters] = useState([] as Character[]);
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const loadData= async () => {
    const response = await fetch(url);
    const {results} = await response.json() as {results: Character[]};
    setCharaters(results);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <>
    <ul>
      {characters.map((character, index) => 
      <li key={index}>
        {character.name}
        
        {
          favourites.includes(character.id) ?
            <button onClick={() => dispatch(remove(character.id))}>Rimuovi</button> :
            <button onClick={() => dispatch(add(character.id))}>Aggiungi</button>
        }
      </li>)}
    </ul>
    </>
  )
}

export {Favourites}
