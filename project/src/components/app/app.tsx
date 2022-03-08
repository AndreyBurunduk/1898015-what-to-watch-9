import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import MyListPage from '../my-list-page/my-list-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PlayerPage from '../player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import ReviewPage from '../review-page/review-page';
import SignInPage from '../sing-in-page/sing-in-page';

type PropsTypes = {
  promoProps: {
    [props: string]: string;
  }
};

function App(props: PropsTypes): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage promoProps={props.promoProps} />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route path={AppRoute.AddReview} element={<ReviewPage />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
