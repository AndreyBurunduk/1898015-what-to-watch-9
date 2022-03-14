import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { FilmType } from '../../types/types';
import PlayerCart from '../player-cart/player-cart';

type SmallFilmCardProps = {
  catalogFilms: FilmType[];
};


function SmallFilmCard({ catalogFilms }: SmallFilmCardProps): JSX.Element {
  const [filmCartInfo, setFilmCartInfo] = useState<FilmType | null>(null);
  const isActive = true;

  const filmChangeHandler = (filmInfo: FilmType) => {
    setFilmCartInfo(filmInfo);
  };

  const filmChangeHandlerOut = () => {
    setFilmCartInfo(null);
  };


  return (
    <>
      {catalogFilms.map((film) => (
        <FilmCard
          key={film.id}
          catalogFilm={film}
          onMouseEnterCallback={filmChangeHandler}
          onMouseEnterCallbackOut={filmChangeHandlerOut}
        >
          {filmCartInfo?.id === film.id ? <PlayerCart film={film} isActive={isActive} /> : null}
        </FilmCard>))}
    </>
  );
}

export default SmallFilmCard;
