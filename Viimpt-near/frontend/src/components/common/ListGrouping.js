import Form from "react-bootstrap/Form";
import "../../App.css";
function ListGrouping() {
  return (
    <>
      <Form.Select aria-label="Default select example">
        <option value="1">999회</option>
        <option value="2">998회</option>
        <option value="3">997회</option>
        <option value="4">996회</option>
      </Form.Select>
    </>
  );
}

export default ListGrouping;
