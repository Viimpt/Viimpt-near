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
            <td>아이브</td>
            <td>383838</td>
            <td>2002390</td>
          </tr>
          <tr>
            <td>2</td>
            <td>르세라핌</td>
            <td>113933</td>
            <td>2002300</td>
          </tr>
          <tr>
            <td>3</td>
            <td>뉴진스</td>
            <td>39400</td>
            <td>199999</td>
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
            <td>아이브</td>
            <td>383838</td>
            <td>2002390</td>
          </tr>
          <tr>
            <td>2</td>
            <td>르세라핌</td>
            <td>113933</td>
            <td>2002300</td>
          </tr>
          <tr>
            <td>3</td>
            <td>뉴진스</td>
            <td>39400</td>
            <td>199999</td>
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
            <td>아이브</td>
            <td>383838</td>
            <td>2002390</td>
          </tr>
          <tr>
            <td>2</td>
            <td>르세라핌</td>
            <td>113933</td>
            <td>2002300</td>
          </tr>
          <tr>
            <td>3</td>
            <td>뉴진스</td>
            <td>39400</td>
            <td>199999</td>
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
            <td>아이브</td>
            <td>383838</td>
            <td>2002390</td>
          </tr>
          <tr>
            <td>2</td>
            <td>르세라핌</td>
            <td>113933</td>
            <td>2002300</td>
          </tr>
          <tr>
            <td>3</td>
            <td>뉴진스</td>
            <td>39400</td>
            <td>199999</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ResultList;
