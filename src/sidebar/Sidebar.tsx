import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as FavouritesActions from '../store/favourites/favourites.actions';
import { selectFavourites } from '../store/favourites/favourites.selector'

export default function Sidebar() {
    const favourites = useSelector(selectFavourites); // lettura store
    const dispatch = useDispatch(); // scrittura dello store
  return (
      <>
        <button onClick={() => dispatch(FavouritesActions.clear())}>Clear</button>
        <div>Sidebar; {JSON.stringify(favourites)}</div>
    </>
  )
}
