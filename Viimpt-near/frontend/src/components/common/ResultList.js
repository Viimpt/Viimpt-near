import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import ListGrouping from "./ListGrouping";

function ResultList() {
  return (
    <>
      <h2>뮤직뱅크</h2>
      <ListGrouping />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>순위</th>
            <th>가수명</th>
            <th>득표 수</th>
            <th>총점</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <Badge />
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <h2>인기가요</h2>
      <ListGrouping />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>순위</th>
            <th>가수명</th>
            <th>득표 수</th>
            <th>총점</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <Badge />
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <h2>음악중심</h2>
      <ListGrouping />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>순위</th>
            <th>가수명</th>
            <th>득표 수</th>
            <th>총점</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <Badge />
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ResultList;
