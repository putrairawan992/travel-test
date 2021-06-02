import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'lib/containers/Grid';
import content from '../content.json';
import Card from 'lib/containers/Card';
import { get } from 'services/api';
import { dateFormat, timeFormat } from 'utils/date';

const Destination = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState(null);
  const [cuaca, setCuaca] = useState(null);

  useEffect(() => {
    const getDest = content.destination.filter(find => find.id === id)[0];
    setDetail(getDest);

    const fetchApi = async () => {
      const res = await get(`BMKG-importer/cuaca/${id}.json`);
      setCuaca(res);
    };

    id && fetchApi();
  }, [id]);

  return (
    <>
      <Container fluid className="h-96 relative flex-center-center">
        <Container>
          <div className="relative z-10 text-center">
            <h1 className="md:text-8xl text-4xl font-bold text-primary">{detail?.name}</h1>
          </div>

          <div className="absolute inset-0 h-auto z-0">
            <img src={`/img/${detail?.image}`} alt="about" className="h-full w-full object-cover" />
          </div>
        </Container>
      </Container>

      <Container className="py-12">
        <Row>
          <Col md={6}>
            <h2 className="text-3xl font-semibold mb-4">Detail</h2>
            <article className="mb-4">{detail?.desc}</article>
          </Col>

          <Col md={6}>
            <Card className="p-4">
              <div className="flex-y-center">
                <img src="/img/weather.svg" className="w-24" alt="weather" />

                <h2 className="ml-4 text-2xl font-semibold text-primary">
                  Konsidi cuaca terkini
                </h2>
              </div>

              <div className="mt-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Waktu</th>
                      <th className="text-left">Cuaca</th>
                      <th>Humidity</th>
                      <th>Temperatur</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cuaca?.map((v, i) => (
                      <tr key={i}>
                        <td>{dateFormat(v.jamCuaca)}, {timeFormat(v.jamCuaca)}</td>
                        <td>{v.cuaca}</td>
                        <td className="text-center">{v.humidity}</td>
                        <td className="text-center">{v.tempC}c / {v.tempF}f</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Destination;
