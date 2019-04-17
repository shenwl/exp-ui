import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import IconExample from '../lib/icon/icon.example';
import DialogExample from '../lib/dialog/dialog.example';

ReactDOM.render((
  <Router>
    <div>
      <header>Exp UI</header>
      <div>
          <aside>
            <h2>组件</h2>
            <ul>
              <li>
                <Link to="/icon">Icon</Link>
              </li>
              <li>
                <Link to="/dialog">Dialog</Link>
              </li>
            </ul>
          </aside>

          <main>
            <Route path="/icon" component={IconExample}></Route>
            <Route path="/dialog" component={DialogExample}></Route>
          </main>
      </div>
    </div>
  </Router>
), document.getElementById('root'));
