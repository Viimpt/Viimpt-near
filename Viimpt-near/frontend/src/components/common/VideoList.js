import ReactPlayer from "react-player";
import "../../App.css";

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
