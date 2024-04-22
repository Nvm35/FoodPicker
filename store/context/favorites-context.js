import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { }
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsIds((curFav) => [...curFav, id])
  }

  function removeFav(id) {
    setFavoriteMealsIds((curFav) => curFav.filter)
  }

  const value = {
    ids: favoriteMealsIds,
    addFavorite: addFavorite,
    removeFav: removeFav
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;