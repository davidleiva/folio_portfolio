import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box, List } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import CTA from "../sections/common/CTA";
import imgWorkCover from "../assets/image/png/getlife.png";
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
                  <Text variant="tag">PRODUCT · CRO · UX · UI · FRONT-END</Text>
                  <Title
                    className="my-4"
                    style={{ fontSize: '2.5rem', lineHeight: '3rem', }}
                  >A Spanish start-up trying to change life's insurance market.
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >With nearly a year in the market, Getlife is trying to get its market quote on the insurtech market following the path of new companies like Oscar and Luko.</Text>
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
                        <Text variant="p" className="mb-4">I decided to join Getlife as my first product lead experience. It's a small company but it's growing super fast, and adaptabilty to this new scenario it's becoming a key skill for our success.</Text>
                        <Text variant="p" className="mb-4">When I entered the company I tried to provide methodology and good practices to the product, market and it departments, since we were lacking of work routines that could improve our performance.</Text>
                        <Text variant="p" className="mb-4">The insurtech market is an area that has a huge potential, but customers still need confidence in these new products, so this is the perfect opportunity to develop what I learned about CRO.
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
                        <li className="mb-2">Features Design & Proptotypes in Figma</li>
                        <li className="mb-2">"Personas" definition</li>
                        <li className="mb-2">Main metrics tracking (User Activity, Retention, Referral, Engagement)</li>
                        <li className="mb-2">Funnels tracking</li>
                    </List>
                </Col>
                <Col lg="4">
                    <h6 className="mb-2">Research:</h6>
                    <List>
                        <li className="mb-2">Quantitative: Different surveys</li>
                        <li className="mb-2">Qualitative: Client interviews</li>
                    </List>
                </Col>
                <Col lg="4">
                    <h6 className="mb-2">Tools used</h6>
                    <List>
                        <li className="mb-2">Figma</li>
                        <li className="mb-2">Google Analytics</li>
                        <li className="mb-2">Segment</li>
                        <li className="mb-2">Amplitude</li>
                        <li className="mb-2">Miro</li>
                        <li className="mb-2">Clickup</li>
                        <li className="mb-2">Storybook</li>
                        <li className="mb-2">Illustrator / Photoshop</li>
                        <li className="mb-2">React</li>
                        <li className="mb-2">Wordpress with elementor</li>
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
