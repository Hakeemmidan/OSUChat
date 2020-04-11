import React from 'react';
import { Link } from 'react-router-dom';

export function Header({ currentUser, logout, openUserOptionsModal }) {
  const sessionLinks = () => (
    <nav>
      <Link to="/signup" className="header__btn--register">Register</Link>
      <Link to="/login" className="header__btn--login">Login</Link>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="header__right-container">
      <div className="header__right-container--username link" onClick={openUserOptionsModal}>
        {currentUser.username}
      </div>
      <button className="header__right-container--logout-btn" onClick={logout}>
        Log Out
      </button>
    </nav>
  );

  return (
    <header>
      <Link to="/" className="logo"> OSUChat </Link>
      { currentUser ? personalGreeting() : sessionLinks() }
    </header>
  )
};