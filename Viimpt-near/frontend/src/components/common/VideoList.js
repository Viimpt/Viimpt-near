import ReactPlayer from "react-player";
import "../../App.css";
import Alert from "react-bootstrap/Alert";

function VideoList() {
  return (
    <div className="App">
      <ReactPlayer
        className="player"
        url={"https://youtu.be/gQlMMD8auMs"}
        width="700px"
        heigth="700px"
        playing={false}
        muted={true}
      />
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
      <ReactPlayer
        className="player"
        url={"https://youtu.be/F0B7HDiY-10"}
        width="700px"
        heigth="700px"
        playing={false}
        muted={true}
      />
      <ReactPlayer
        className="player"
        url={"https://youtu.be/s49n1aHXXh4"}
        width="700px"
        heigth="700px"
        playing={false}
        muted={true}
      />
      <ReactPlayer
        className="player"
        url={"https://youtu.be/k6jqx9kZgPM"}
        width="700px"
        heigth="700px"
        playing={false}
        muted={true}
      />
    </div>
  );
}

export default VideoList;
