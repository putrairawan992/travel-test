import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'lib/containers/Grid';
import Card from 'lib/containers/Card';
import Icon from 'icon';
import content from '../content.json';

const features = [
  {
    icon: 'map',
    title: 'Delux Room',
    desc: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy '
  }, {
    icon: 'cake',
    title: 'Delicoius Food',
    desc: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy '
  }, {
    icon: 'support',
    title: 'Airport Taxi',
    desc: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy '
  }, {
    icon: 'play',
    title: 'Game Room',
    desc: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy '
  },
]

const Home = () => {
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

      <Container fluid className="bg-blue">
        <Container className="py-20">
          <Row className="text-center">
            {features.map((v, i) => (
              <Col xs={12} md={3} key={i} className="md:mb-0 mb-4">
                <Card className="py-20 px-4">
                  <div className="flex-center-center flex-col">
                    <div className="w-16 h-16 mb-5 bg-primary rounded-full flex-center-center shadow-card">
                      <Icon name={v.icon} size={26} color="#fff" />
                    </div>

                    <h4 className="text-xl mb-2 font-bold text-gray-01">{v.title}</h4>
                    <p className="text-15 leading-7">{v.desc}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Container>
        <Row className="py-12">
          <Col md={4} className="flex-x-center flex-col">
            <h2 className="text-primary text-4xl font-bold mb-2">
              Best Destinations
            </h2>

            <p>Lorem ipsum dosectetur adipisicing elit, sed ipsum dolor sit amet.</p>
          </Col>

          {content.destination.map((v, i) => (
            <Col md={4} key={i} className="mb-7">
              <Link to={`/destination/${v.id}`} className="relative h-72 block">
                <img src={`img/${v.image}`} className="h-full w-full" alt={v.name} />

                <div className="absolute bottom-0 p-2">
                  <h4 className="text-2xl mb-2 font-bold text-primary">
                    {v.name}
                  </h4>

                  <p className="text-white">
                    {v.desc.substring(0, 80)}
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
