import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { catalogFilms } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App catalogFilms={catalogFilms} />
  </React.StrictMode>,
  document.getElementById('root'));
