import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Alfredo Andere</h2>
        <p><a href="mailto:alfredo@latch.ai">alfredo@latch.ai</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alfredo. I like starting things, the bigger the better.
        I am Mexican, a <a href="https://eecs.berkeley.edu/">Berkeley EECS</a> dropout, and
        the co-founder and CEO of <a href="https://latch.bio">Latch.Bio</a>. Before LatchBio I was
        shortly at <a href="https://matroid.com">ML@B</a>
        , <a href="https://planetaryresources.com">Google Brain</a>
        , and <a href="https://facebook.com">Facebook</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alfredo Andere <Link to="/">alfredoandere.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
