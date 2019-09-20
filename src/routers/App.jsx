import React from 'react';
import { BrowserRouter, Route, Link  } from 'react-router-dom';
import LazyLoad from './LazyLoad';
import commonStyle from '@commonStyle/index.scss';

const App = () => (
  <BrowserRouter>
    <Link className={commonStyle.mr20} to='/'>Css Module</Link>
    <Link to='/styledComp'>Style Compnents</Link>
    <div className={commonStyle.mt20}>
      <Route path='/' exact component={LazyLoad(() => import('../pages/CssModule'))} />
      <Route path='/styledComp' component={LazyLoad(() => import('../pages/StyledComp'))} />
    </div>
  </BrowserRouter>
);

export default App;
