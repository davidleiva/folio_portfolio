import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/jpg/beach.jpg";
// import imgSignLight from "../../assets/image/png/signature.png";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-start">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  About me
                </Title>
                <Text
                  color="light"
                  className="mt-2 mt-lg-2"
                  css={`
                    line-height: 1.5;
                    font-size: 16px;
                  `}
                >
                  15 years ago my goal was to design the best digital products
                  possible.
                </Text>
                <Text
                  color="light"
                  className="mt-2 mt-lg-2"
                  css={`
                    line-height: 1.5;
                    font-size: 16px;
                  `}
                >
                  Products that would improve the world we live in.
                </Text>
                <Text
                  color="light"
                  className="mt-2 mt-lg-2"
                  css={`
                    line-height: 1.5;
                    font-size: 16px;
                  `}
                >
                  So I decided to be trained as a multimedia designer, focused
                  on web and apps.
                </Text>
                <Text
                  color="light"
                  className="mt-2 mt-lg-2"
                  css={`
                    line-height: 1.5;
                    font-size: 16px;
                  `}
                >
                  For personal motivations and in a natural way I also became a
                  developer.
                </Text>
                <Text
                  color="light"
                  className="mt-4"
                  css={`
                    line-height: 1.5;
                    font-size: 16px;
                  `}
                >
                  Now I want to set my focus exclusively on providing my
                  experience and vision to create proper stategies and create
                  sollutions.
                </Text>
                <Text
                  color="light"
                  className="mt-4"
                  css={`
                    line-height: 1.5;
                    font-size: 16px;
                  `}
                >
                  Besides all that, I am a good guy. My dog would tell you so.
                </Text>
                <div className="mt-4">
                  <Text
                    color="light"
                    className="mt-2 mt-lg-2"
                    css={`
                      line-height: 1.5;
                      font-size: 16px;
                    `}
                  >
                    Email me at
                  </Text>

                  <Text variant="p">
                    <a
                      href="mailto:davidleivaherrero@gmail.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">davidleivaherrero@gmail.com</Span>
                    </a>
                  </Text>
                </div>
                {/* <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                  Bruce Ryan
                </Text>
                <Text color="light" variant="small">
                  Founder of Folio Digital
                </Text> */}
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.linkedin.com/in/davidleiva-fe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Linkedin
                  </LinkSocial>
                  {/* <LinkSocial
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Facebook
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Instagram
                  </LinkSocial> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
