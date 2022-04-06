import { SCORE_FILM, THREE, FIVE, EIGHT, TEN} from '../const';

const getScoreFilm = (rating: number) => {
  if (rating < THREE) {
    return SCORE_FILM.Bad;
  }
  if (rating < FIVE) {
    return SCORE_FILM.Normal;
  }
  if (rating < EIGHT) {
    return SCORE_FILM.Good;
  }
  if (rating < TEN) {
    return SCORE_FILM.VeryGood;
  }
  return SCORE_FILM.Awesome;
};

export default getScoreFilm;
