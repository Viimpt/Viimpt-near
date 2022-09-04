import Form from "react-bootstrap/Form";

function ListGrouping() {
  return (
    <>
      <Form.Select aria-label="Default select example">
        <option value="1">뮤직뱅크</option>
        <option value="2">음악중심</option>
        <option value="3">인기가요</option>
        <option value="4">엠카운트다운</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option value="1">뮤직뱅크</option>
        <option value="2">음악중심</option>
        <option value="3">인기가요</option>
        <option value="4">엠카운트다운</option>
      </Form.Select>
    </>
  );
}

export default ListGrouping;
