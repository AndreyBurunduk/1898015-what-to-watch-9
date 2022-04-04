export type FilmType = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColo: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
  videoLink: string,
  previewVideoLink: string,
};

export type NewReviewData = {
  comment: string
  rating: number
  filmId: number
  setIsSavingCb:  React.Dispatch<React.SetStateAction<boolean>>
}
