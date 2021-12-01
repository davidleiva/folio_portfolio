import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/jpg/yo-perfil.jpeg";

const ImgRight = styled.img`
  width: 100%;
  max-width: 100%;
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" md="6" sm="8" xs="12" className="mb-5 mb-lg-0">
              <Box>
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                  mb="40px"
                >
                  I'm a product designer · UX/UI Engineer · Frontend dev.
                </Text>
                <Title variant="hero">
                  I design digital products.
                </Title>

                <Box mt="52px">
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button arrowRight>Explore works </Button>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col lg="3" md="4" sm="4" xs="6">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main" style={{
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}>
                  <ImgRight src={imgL} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
