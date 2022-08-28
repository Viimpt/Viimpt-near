import React from "react";
import CloseButton from "../../node_modules/react-bootstrap/esm/CloseButton";
import Carousel from "react-bootstrap/Carousel";

import styled from "styled-components";
import palette from "../lib/styles/palette";

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

function PostPage() {
  return (
    <>
      <AuthTemplateBlock>
        <CloseButton />
        <Carousel variant="white">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ifh.cc/g/8fVzD8.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
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
              <h5>Second slide label</h5>
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
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </AuthTemplateBlock>
    </>
  );
}

export default PostPage;
