import React from "react";
import "./heroBannerHoriz.scss";
import { graphql, StaticQuery } from "gatsby";

import { Helmet } from "react-helmet";

const HeroBannerHoriz = ({ data }) => (
  <>
    <Helmet>
      <script
        src="https://www.fbgcdn.com/embedder/js/ewm2.js"
        defer
        async
      ></script>
    </Helmet>
    <section 
    id="banner" 
    className="hero"
    style={{
      backgroundImage: `linear-gradient(to top, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8)), url('${data.siteYaml.background_photo}')`
    }}
    >








      <div className="inner">
        <h2>{data.siteYaml.site_title}</h2>
        <p>{data.siteYaml.site_subtitle}</p>
        {/*<div className="logo"><span className="icon" /></div>*/}
        <div className="menubtnBox">
          <span
            className="orderButton"
            data-glf-cuid="24a4ac68-5254-4dce-99e1-b6ceeb75b4b5"
            data-glf-ruid="8f336410-bd0a-4292-8e0a-fc8f6e24b461"
          >
            {" "}
            See Menu &amp; Order
          </span>
        </div>
      </div>
    </section>
  </>
);
let indexQuery = graphql`
  query {
    siteYaml {
      site_title
      site_subtitle
      background_photo

    }
  }
`;


export default (props)=> (<StaticQuery query={indexQuery} render={data => (
  <HeroBannerHoriz  data={data}  />
)}></StaticQuery>);

