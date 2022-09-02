import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import styled from "styled-components";
import palette from "../../lib/styles/palette";
import "bootstrap/dist/css/bootstrap.min.css";

function PostList() {
  return (
    <CardGroup>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/XtykcM.webp" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="/post">
            투표하러가기
          </Button>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/HCkQZk.webp" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">투표하러가기</Button>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/ytjPnD.webp" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">투표하러가기</Button>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/6yzL7z.webp/" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">투표하러가기</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default PostList;
