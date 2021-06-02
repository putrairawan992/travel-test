import React from 'react';
import { Container, Row, Col } from 'lib/containers/Grid';

const Dashboard = () => {
  return (
    <Container className="mt-8 mb-12">
      <Row className="mb-8">
        <Col>
          <table>
            <thead>
              <tr>
                <th className="w-3/12 text-left">Nama</th>
                <th className="w-3/12 text-left">Email</th>
                <th className="w-6/12 text-left">Pesan</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Yogi</td>
                <td>yogiprsetya@gmail.com</td>
                <td>Lorem ipsum dosectetur adipisicing elit, sed doLorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempo Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis.</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
