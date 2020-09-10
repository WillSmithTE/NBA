import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// eslint-disable-next-line no-restricted-globals
var link = parent.document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2017/08/rehost_2f2016_2f9_2f13_2f1b5cb41f-6c9f-4862-ae3a-107fd32008ab_1_.jpg?itok=3V2At_67';
// eslint-disable-next-line no-restricted-globals
parent.document.getElementsByTagName('head')[0].appendChild(link);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
