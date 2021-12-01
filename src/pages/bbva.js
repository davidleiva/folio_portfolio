import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box, List } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import imgWorkCover from "../assets/image/png/bbva.png";
import imgS1 from "../assets/image/jpg/details/details-12.jpg";
import imgS2 from "../assets/image/jpg/details/details-11.jpg";
import imgS3 from "../assets/image/jpg/details/details-10.jpg";
import imgS4 from "../assets/image/jpg/details/details-9.jpg";
import imgS5 from "../assets/image/jpg/details/details-14.jpg";
import imgS6 from "../assets/image/jpg/details/details-13.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center mb-5">
              <Col lg="8">
                <Box>
                  <Text variant="tag">PRODUCT DESIGN · UX/UI · FRONT-END</Text>
                  <Title
                    className="my-4"
                    style={{ fontSize: '2.5rem', lineHeight: '3rem', }}
                  >BBVA's corporate site works like a charm. <br />And I learned a lot.</Title>
                  <Text
                    variant="p"
                    css={` 
                      max-width: 750px;
                    `}
                  >One of the biggest banks in Spain demanded maximum quality in all areas. And that was one of my best professional experiences.</Text>
                </Box>
              </Col>
            </Row>

            <Box className="mb-4"> {/* pt={["4rem", null, null, "6.25rem"]} */}
              <img src={imgWorkCover} alt="elegir is a personal project" className="img-fluid w-100" />
            </Box>

            <Row>
                <Col>
                    <Box>
                        <Title variant="cardBig" className="mb-3">Project Summary</Title>
                        <Text variant="p" className="mb-4">
                          Netcentric is a company know for proving marketing consultancy to really big players. The use Adobe Marketing tools for doing their websites. when your team is devoted to attend your client's need, there's no time for your own stuff.
                        </Text>
                        <Text variant="p" className="mb-4">
                          Luckily, Netcentric choose some of its members to work on then new corporative site, as a way of practicing and developing new techniques and bes practices so we could implement all those on ohter projects easily.
                        </Text>
                    </Box>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Box>
                        <Title variant="cardBig" className="mt-4 mb-5">What I did & tools I used</Title>
                    </Box>
                </Col>
            </Row>
            <Row>
              <Col lg="4">
                    <h6 className="mb-2">UX/UI/Other</h6>
                    <List>
                        <li className="mb-2">Web design & prototype in Figma</li>
                        <li className="mb-2">Previous site's usability heuristics</li>
                        <li className="mb-2">Web design & prototype in Figma</li>
                        <li className="mb-2">Styles guide</li>
                        <li className="mb-2">Adobe's Marketing tools implementation</li>
                    </List>
                </Col>
                <Col lg="4">
                    <h6 className="mb-2">Research:</h6>
                    <List>
                      <li className="mb-2">User tests</li>
                      <li className="mb-2">Qualitative: Customer Interviews</li>
                    </List>
                </Col>

                <Col lg="4">
                    <h6 className="mb-2">Tools used</h6>
                    <List>
                        <li className="mb-2">Sketch</li>
                        <li className="mb-2">Confluence</li>
                        <li className="mb-2">Vanilla JS</li>
                    </List>
                </Col>
            </Row>
          </Container>
        </Section>

        {/* <Section>
            <Container>
                <Row>
                    <Col>
                        <Box>
                            <Title variant="cardBig" className="mb-2">Project Summary</Title>
                            <Text variant="p" className="mb-4">
                                While I was attending a bootcamp to acquire more skills in the field of product design, I was already collaborating with a neighborhood association to improve the management of the town hall and the institutions in my town.
                            </Text>
                            <Text variant="p" className="mb-4">
                                Therefore, I took advantage of these circumstances to create the final deliverable project: I created a brand for the association, and currently I'm designing the communication strategy and creating tools to work internally and externally.
                            </Text>
                            <Text variant="p" className="mb-4">
                                The association is trying to expose the bad procesure of our town gobernment, trying to force them to work for the neighbours and not on their own interest. We are also trying to collect neighbours feedback and complaints, and we are exposing them to our major and his team.
                            </Text>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Section> */}

        {/* <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  DataTryper
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Oct 15, 2019
                </Title>
              </Col>
              <Col lg="4" className="d-flex justify-content-lg-end">
                <Button arrowRight>Live work</Button>
              </Col>
            </Row>
          </Container>
        </div> */}

        {/* <Section className="mt-lg-5 pb-0">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS2} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
          </Container>
        </Section> */}

        {/* <Section bg="dark" className="pt-0">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="portfolio-details">
                <Button
                  arrowRight
                  className="border-0 bg-transparent shadow-none text-capitalize py-3"
                  css={`
                    font-weight: 700
                    font-size: 1.5rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 2rem;
                    }
                `}
                >
                  Replace
                </Button>
              </Link>
            </div>
          </Container>
        </Section> */}
        <Box py={4}>
          <CTA />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
