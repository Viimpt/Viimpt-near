import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "bootstrap/dist/css/bootstrap.min.css";

function PostList() {
  return (
    <CardGroup>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/XtykcM.webp" />
        <Card.Body>
          <Card.Title>뮤직뱅크</Card.Title>
          <Card.Text>
            뮤직뱅크(Music Bank)는 KBS 2TV에서 매주 금요일 오후 5시 10분에
            방송되는, 가요톱10의 뒤를 이어 계보를 잇는 대중음악 순위 프로그램
          </Card.Text>
          <Button variant="primary" href="/post">
            투표하러가기
          </Button>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/HCkQZk.webp" />
        <Card.Body>
          <Card.Title>인기가요</Card.Title>
          <Card.Text>
            SBS 가요 순위 프로그램으로 인기 가수들의 최신 음악을 들을 수 있는
            프로그램
          </Card.Text>
          <Button variant="primary">투표하러가기</Button>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/ytjPnD.webp" />
        <Card.Body>
          <Card.Title>음악중심</Card.Title>
          <Card.Text>
            《쇼! 음악중심》은 매주 토요일 오후 3시 15분에 방송되는 음악
            프로그램
          </Card.Text>
          <Button variant="primary">투표하러가기</Button>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://ifh.cc/g/6yzL7z.webp/" />
        <Card.Body>
          <Card.Title>엠카운트다운</Card.Title>
          <Card.Text>
            M COUNTDOWN WORLD NO.1 KPOP CHART SHOW 매주 목요일 6시 생방송!
          </Card.Text>
          <Button variant="primary">투표하러가기</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default PostList;
