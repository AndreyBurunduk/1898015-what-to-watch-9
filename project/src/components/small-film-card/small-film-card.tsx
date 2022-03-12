import SmallFilm from '../small-film/small-film';
import { FilmType } from '../../types/types';

type SmallFilmCardProps = {
  catalogFilms: FilmType[];
};


function SmallFilmCard({catalogFilms}: SmallFilmCardProps): JSX.Element {

  return (
    <>{catalogFilms.map((item) => <SmallFilm key={item.id} catalogFilm={item}/>)}</>
  );
}

export default SmallFilmCard;
