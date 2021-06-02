import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'lib/containers/Grid';
import Card from 'lib/containers/Card';
import Icon from 'icon';
import InputLabel from 'lib/components/InputLabel';

const Contact = () => {
  return (
    <>
      <Container fluid className="h-96 relative flex-center-center">
        <Container>
          <div className="relative text-white z-10 text-center">
            <h2 className="text-6xl font-bold mb-4">Explore<br/>Your Travel</h2>
            <p className="md:mx-60">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.
            </p>
          </div>

          <div className="absolute inset-0 h-auto z-0">
            <img src="/img/hero.jpg" alt="about" className="h-full w-full object-cover" />
          </div>
        </Container>
      </Container>

      <Container>
        <Row className="my-10">
          <Col md={6}>
            <form>
              <InputLabel title="Nama">
                <input
                  className="border border-main rounded-md py-1 px-2"
                />
              </InputLabel>

              <InputLabel title="Email">
                <input
                  type="email"
                  className="border border-main rounded-md py-1 px-2"
                />
              </InputLabel>

              <InputLabel title="Pesan">
                <textarea
                  maxLength="15"
                  maxLength="500"
                  className="border border-main rounded-md py-1 px-2"
                />
              </InputLabel>

              <button className="btn">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
