import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import styled from "styled-components";
import palette from "../../lib/styles/palette";
import "bootstrap/dist/css/bootstrap.min.css";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const cardStyleBlock = styled.div``;

function PostList() {
  return (
    <AuthTemplateBlock>
      <Stack direction="horizontal" gap={2}>
        <Card style={{ width: "18rem" }}>
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

        <Card style={{ width: "18rem" }}>
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

        <Card style={{ width: "18rem" }}>
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

        <Card style={{ width: "18rem" }}>
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
      </Stack>
    </AuthTemplateBlock>
  );
}

export default PostList;
