import React from "react";
import './hoursLocations.scss'

const HoursLocations = (props) => {
  return (
    <>
      <div className="store-page-container">
        <section className="store-header">
          <h1 className="store-header-title">Store Locations and Events</h1>
          <div className="store-search">
            <div className="store-search-container">
              <div className="view-by-list">
                <span className="store-search-label">View by List </span>
                <select className="store-dropdown">
                  <option className="store-dropdown-option" value={0}>
                    Select a Store List
                  </option>
                  <option className="store-dropdown-option" value={1}>
                    U.S. and Canada Stores
                  </option>
                  <option className="store-dropdown-option" value={2}>
                    Outlet Stores
                  </option>
                  <option className="store-dropdown-option" value={3}>
                    Distribution Facilities
                  </option>
                  <option className="store-dropdown-option" value={4}>
                    Independent Franchisees
                  </option>
                </select>
              </div>
              <div className="find-a-store">
                <span className="store-search-label">Find a Store</span>
                <span className="store-search-intro">
                  Enter City and State or ZIP
                </span>
                <input
                  type="text"
                  className="find-store-textbox"
                  defaultValue="Enter U.S. City and State or ZIP"
                />
                <button type="button" className="find-store-btn">
                  Find
                </button>
              </div>
            </div>
            <picture className="hidden-xs">
              <img
                src="http://res.cloudinary.com/dodas9fzc/image/upload/v1504039524/map_f1o2lw.png"
                className="lazyload"
              />
            </picture>
          </div>
        </section>
        <section className="slide-panels">
          <h2 className="slide-panels-title">Store Locations Nearest 60062</h2>
          <div className="slide-open">
            <div className="row">
              <div className="col-xs-12">
                <a className="slide-btn" href="javascript:;">
                  <i className="icon-plus" />
                  <h2 className="slide-title">Northbrook Court</h2>
                  <span className="location-distance hidden-sm hidden-md hidden-lg">
                    2 miles
                  </span>
                  <span className="store-address">
                    1775 Lake Cook Rd
                    <br />
                    Northbrook,IL 60062
                    <br />
                    <span className="store-other-info hidden-xs">
                      <span>(847) 674-6850</span>
                      <br />
                      <span className="store-distance">2.4 mi</span>{" "}
                      <span className="store-map">Map and Directions</span>
                    </span>
                  </span>
                </a>
                <div className="slide-panel">
                  <span className="store-contact-number text-highlight-xs hidden-sm hidden-md hidden-lg">
                    (847) 272-8920
                  </span>
                  <a
                    href="https://www.google.com/maps/place/1775+Lake+Cook+Rd,+Northbrook,+IL+60062/@42.1519296,-87.8217802,17z/data=!3m1!4b1!4m5!3m4!1s0x880fc0deb719b647:0xf8d9416225375ef5!8m2!3d42.1519256!4d-87.8195915"
                    className="text-highlight-xs text-highlight-md map hidden-sm hidden-md hidden-lg"
                  >
                    Map and Directions
                  </a>
                  <ul className="store-hours">
                    <li className="store-hour">
                      <span className="day">Monday </span>
                      <span className="hours-range">
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Tuesday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Wednesday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Thursday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Friday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Saturday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Sunday </span>
                      <span className="hours-range">
                        {" "}
                        11 am&nbsp;‐&nbsp;6 pm
                      </span>
                    </li>
                  </ul>
                  <button className="store-btn" href="store-page-link">
                    View Store Info and Events
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-open">
            <div className="row">
              <div className="col-xs-12">
                <a className="slide-btn" href="javascript:;">
                  <i className="icon-plus" />
                  <h2 className="slide-title">Old Orchard Center</h2>
                  <span className="location-distance hidden-sm hidden-md hidden-lg">
                    6 miles
                  </span>
                  <span className="store-address">
                    4999 Old Orchard Center
                    <br />
                    Skokie,IL 60077
                    <br />
                    <span className="store-other-info hidden-xs">
                      <span>(847) 272-8920</span>
                      <br />
                      <span className="store-distance">6 mi</span>{" "}
                      <span className="store-map">Map and Directions</span>
                    </span>
                  </span>
                </a>
                <div className="slide-panel">
                  <span className="store-contact-number text-highlight-xs hidden-sm hidden-md hidden-lg">
                    (847) 272-8920
                  </span>
                  <a
                    href="https://www.google.com/maps/place/1775+Lake+Cook+Rd,+Northbrook,+IL+60062/@42.1519296,-87.8217802,17z/data=!3m1!4b1!4m5!3m4!1s0x880fc0deb719b647:0xf8d9416225375ef5!8m2!3d42.1519256!4d-87.8195915"
                    className="text-highlight-xs text-highlight-xs text-highlight-md map hidden-sm hidden-md hidden-lg"
                  >
                    Map and Directions
                  </a>
                  <ul className="store-hours">
                    <li className="store-hour">
                      <span className="day">Monday </span>
                      <span className="hours-range">
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Tuesday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Wednesday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Thursday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Friday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Saturday </span>
                      <span className="hours-range">
                        {" "}
                        10 am&nbsp;‐&nbsp;9 pm
                      </span>
                    </li>
                    <li className="store-hour">
                      <span className="day">Sunday </span>
                      <span className="hours-range">
                        {" "}
                        11 am&nbsp;‐&nbsp;6 pm
                      </span>
                    </li>
                  </ul>
                  <button className="store-btn" href="store-page-link">
                    View Store Info and Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HoursLocations;
