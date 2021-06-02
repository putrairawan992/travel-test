import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'lib/containers/Grid';
import Icon from 'icon';

const nav = [
  {
    label: "Home",
    link: "/"
  }, {
    label: "Dashboard",
    link: "/dashboard"
  }, {
    label: "Contact",
    link: "/contact"
  },
];

const navStyle = {
  mobile: 'flex-col flex-grow text-right items-center top-10 z-20 w-4/12',
  desktop: 'md:static md:flex md:mt-0 md:w-6/12 md:flex-row md:justify-end'
};

const Navbar = () => {
  const [mobile, setMenu] = useState(false);

  return (
    <Container fluid className="py-4 bg-main text-white">
      <Container>
        <Row className="md:text-sm text-md relative items-center justify-between">
          <Link to="/" className="md:w-2/12 w-4/12">
            <img src="/logo/logo-text.png" className="w-32" alt="logo" />
          </Link>

          {/* <button className="md:hidden" onClick={ () => setMenu(!mobile) }>
            <Icon name="menu" size={32} />
          </button> */}

          <nav className={`${navStyle.desktop} ${navStyle.mobile}`}>
            {nav.map((v, i) => (
              <Link
                onClick={() => setMenu(!mobile)}
                className="pr-4 whitespace-nowrap my-1 w-full hover:text-primary md:my-0 md:w-auto md:mx-4 md:pr-0"
                to={v.link}
                key={i}
              >
                <span className="uppercase text-sm font-bold">
                  {v.label}
                </span>
              </Link>
            ))}
          </nav>
        </Row>
      </Container>
    </Container>
  );
};

export default Navbar;
