import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'lib/containers/Grid';

const links = [
  {
    title: 'Quick Links',
    menu: ['Home', 'Term', 'Privacy & Policy', 'Blog', 'Contact Us']
  }, {
    title: 'About Us',
    menu: ['Our Story', 'Travel Blog & Tips', 'gallerying With Us', 'Tour Guid', 'Be Our Partner']
  }, {
    title: 'Support',
    menu: ['Customer Support', 'Privacy & Policy', 'Terms & Condition', 'Forum', 'Tour Guid']
  }
]

const Footer = () => (
  <footer className="bg-main-02 text-white pt-20 pb-5">
    <Container>
      <Row>
        <Col>
          <Row className="pb-10">
            <Col xs={12} md={3}>
              <div className="mb-4">
                <Link to="/">
                  <img src="/logo/logo-text.png" alt="logo-text" className="w-32" />
                </Link>
              </div>

              <p className="copyright_text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum .</p>
            </Col>

            {links.map(({ title, menu }, i) => (
              <Col xs={12} md={3} key={i}>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>

                <ul>
                  {menu.map((v, i) => <li key={i}><a href="#">{v}</a></li>)}
                </ul>
              </Col>
            ))}
          </Row>
        </Col>

        <Col>
          <p className="text-center border-t border-gray pt-5 pb-7">
            Copyright @ 2021 <a href="#">TEST</a> all right reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
