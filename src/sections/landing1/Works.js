import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
// import { designWorks1 } from "../../data";
import { myWorks } from "../../data/myWorks";

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(myWorks);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(myWorks);
    } else {
      const filteredItems = myWorks.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative" id="works">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem">
            <h6 className="text-center">MY LATEST EXPERIENCES</h6>
            <ListNav className="nav justify-content-center">
             <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "*" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("*");
                  }}
                >
                  All works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "product" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("product");
                  }}
                >
                  Product Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "ux" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("ux");
                  }}
                >
                  UX Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "ui" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("ui");
                  }}
                >
                  UI Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "fe" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("fe");
                  }}
                >
                  Front-End
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "branding" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("branding");
                  }}
                >
                  Branding
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="30px" link={item.link}/>
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;
