import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import CatalogGenresItem from '../../components/catalog-genres-item/catalog-genres-item';
import Footer from '../../components/footer/footer';
import { FilmType } from '../../types/types';
import { AppRoute } from '../../const';

type MainPageProps = {
  catalogFilms: FilmType[];
};

function MainPage({ catalogFilms }: MainPageProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img
            src='img/bg-the-grand-budapest-hotel.jpg'
            alt='The Grand Budapest Hotel'
          />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header />

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img
                src='img/the-grand-budapest-hotel-poster.jpg'
                alt='The Grand Budapest Hotel poster'
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{catalogFilms[0].name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{catalogFilms[0].genre}</span>
                <span className='film-card__year'>{catalogFilms[0].released}</span>
              </p>

              <div className='film-card__buttons'>
                <button onClick={() => navigate(`/player/${catalogFilms[0].id}`)} className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>

                <button onClick={() => navigate(AppRoute.MyList)} className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <CatalogGenresItem />
          </ul>

          <div className='catalog__films-list'>

            <SmallFilmCard catalogFilms={catalogFilms} />

          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>
              Show more
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
