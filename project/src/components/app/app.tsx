import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import AddReview from '../../pages/add-review/add-review';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sing-in/sing-in';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks';


function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded, films} = useAppSelector((state) => state);

  if(!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage catalogFilms={films}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList catalogFilms={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Films}
          element={<MoviePage catalogFilms={films}/>}
        />
        <Route
          path={AppRoute.Filmsreview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player film={films[0]}/>}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
