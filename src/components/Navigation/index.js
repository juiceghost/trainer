import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <Link to={ROUTES.EXERCISE1}>Exercise 1</Link>
      </li>
      <li>
        <Link to={ROUTES.EXERCISE2}>Exercise 2</Link>
      </li>
      <li>
        <Link to={ROUTES.EXERCISE3}>Exercise 3</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
