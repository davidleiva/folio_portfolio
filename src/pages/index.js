import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Button, Title, Text, Box } from "../components/Core";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              Tools I use
            </Title>
            <Row>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png"
                  alt="Figma"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://h2m8x3y5.rocketcdn.me/wp-content/uploads/2020/03/icono-sketch.png"
                  alt="Sketch"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://www.emprehacks.com/wp-content/uploads/2019/03/zeplin-logo-emprehacks.png"
                  alt="Sketch"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://static-website.miro.com/static/images/share/miro.png?version=develop.448.production&00002"
                  alt="Miro"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://www.datocms-assets.com/18019/1582113383-storybook.png?auto=format"
                  alt="Storybook"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg"
                  alt="Adobe XD"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm-ubYaeRbkUDPq-QVirfuqyvJ0MAAkGupvVu7opn9OlRRtTPC-LmdyRFt4jttgzbAYY&usqp=CAU"
                  alt="Google Analytics"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://www.gartner.com/imagesrv/peer-insights/vendors/logos/amplitude.png"
                  alt="Amplitude"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="data:image/png;base64,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"
                  alt="Illustrator"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="https://www.arsys.es/blog/file/uploads/2017/04/React.jpg"
                  alt="React"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="data:image/png;base64,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"
                  alt="Material Design"
                />
              </Col>
              <Col xs="6" md="2" className="mb-2 text-center d-flex align-items-center">
                <img
                  className="mw-100 rounded"
                  src="data:image/png;base64,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"
                  alt="Bootstrap"
                />
              </Col>

            </Row>
          </Container>
        </Section>

        <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-3">
              Skills I have
            </Title>
            <Row>
              <ul className="d-flex justify-content-center flex-wrap" style={{ listStyle: 'initial', listStylePosition: 'inside'}}>
                <li className="m-3">Design Thinking</li>
                <li className="m-3">CRO</li>
                <li className="m-3">Design systems</li>
                <li className="m-3">Research</li>
                <li className="m-3">User tests</li>
                <li className="m-3">UI Design</li>
                <li className="m-3">SCRUM</li>
                <li className="m-3">Service design</li>
                <li className="m-3">Design Sprints</li>
                <li className="m-3">Lean Startup</li>
                <li className="m-3">Javascript / React</li>
                <li className="m-3">CSS 3</li>
                <li className="m-3">SASS / LESS</li>
                <li className="m-3">HTML5</li>
                <li className="m-3">Style guides</li>
              </ul>
            </Row>
          </Container>
        </Section>
        
        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
