import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import App from './containers/App';

const app = (
  <BrowserRouter>
    <>
      <Helmet>
        <title>Contact Keeper</title>
        <meta
          name="description"
          content="Contact Keeper app that stores all of your contacts"
        />
      </Helmet>
      <App />
    </>
  </BrowserRouter>
);
ReactDOM.render(app, document.querySelector('#root'));

// Reload the application in the browser, without the browser refreshing the page.
if (module.hot) {
  module.hot.accept();
}
