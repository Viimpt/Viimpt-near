import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";

import styled from "styled-components";
import palette from "../lib/styles/palette";

import "../App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

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
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-100%",
    transform: "translate(-50%, -50%)",
  },
};

function PostPage() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
    window.alert("투표를 완료하였습니다!");
    window.location.replace("/");
  }
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <AuthTemplateBlock>
        <Button href="/postList" variant="info" size="lg">
          뒤로 가기
        </Button>
        {""}
        <Carousel variant="white">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ifh.cc/g/8fVzD8.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <Button variant="outline-primary" size="lg" onClick={openModal}>
                투표
              </Button>{" "}
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ifh.cc/g/7ZgNjK.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <Button variant="outline-primary" size="lg" onClick={openModal}>
                투표
              </Button>{" "}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ifh.cc/g/ySWZzw.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <Button variant="outline-primary" size="lg" onClick={openModal}>
                투표
              </Button>{" "}
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>투표하시겠습니까?</h2>
          <Button style={{ marginTop: "10px" }} onClick={handleClick}>
            네
          </Button>
          <Button
            style={{ marginTop: "10px" }}
            variant="secondary"
            onClick={closeModal}
          >
            close
          </Button>
        </Modal>
      </AuthTemplateBlock>
    </>
  );
}

export default PostPage;
