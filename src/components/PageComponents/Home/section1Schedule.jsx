import React from "react";
import "./sectionSchedule.scss";
import { graphql, StaticQuery } from 'gatsby';

import TimeTable from "./timeTable";
import TimeTableDesktop from "./timeTableDesktop";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap"
import Fade from "react-reveal/Fade";

const SectionSchedule = ({data}) => (
    <>
      <Helmet>
        <script
          src="https://www.fbgcdn.com/embedder/js/ewm2.js"
          defer
          async
        ></script>
      </Helmet>
      <div id="hours" />
      <section id="one" className="wrapper spotlight">
        <div className="inner">
          
          <div className="content" >
        
            <Fade>
              <TimeTable data={data} />
              <TimeTableDesktop data={data} />
            </Fade>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <Container>
              <Row>
                <Col>
            <Fade>
              <span
                className="orderButtonBlock"
                style={{
                  margin: "2rem auto 4rem",
                  display: "block",
                  textAlign: "center",
                }}
                data-glf-cuid="24a4ac68-5254-4dce-99e1-b6ceeb75b4b5"
                data-glf-ruid="8f336410-bd0a-4292-8e0a-fc8f6e24b461"
              >
                {" "}
                See Menu &amp; Order
              </span>
              </Fade>
              </Col>
              </Row>
              </Container>
            
          </div>
        </div>
      </section>

    </>
  );


let indexQuery = graphql`
  query {
    siteYaml {
      logo_image
      business_address
      facebook_link
      instagram_link
      twitter_link
      yelp_link
      sunday_hours
      monday_hours
      tuesday_hours
      wednesday_hours
      thursday_hours
      friday_hours
      saturday_hours
    }
  }
`;


export default (props)=> (<StaticQuery query={indexQuery} render={data => (
  <SectionSchedule  data={data}  />
)}></StaticQuery>);


