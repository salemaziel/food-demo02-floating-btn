import React, { useState, useEffect, useRef } from "react";
import { Link, navigateTo } from "gatsby";
import { HiMenu, HiInbox, HiPhone, HiLocationMarker } from 'react-icons/hi'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import SideNav from "react-simple-sidenav";

import navStyles from "./navbar.module.css";

import { FaHome } from "react-icons/fa";
import { graphql, StaticQuery } from "gatsby";
import Draggable from 'react-draggable'
import { Planet } from 'react-planet';
import Tooltip from "react-power-tooltip";

function PaperButton2() {
  return (
    <button 
    className="btn" 
    tabIndex={0}
    style={{ 
      borderRadius: '50%', 
      boxShadow: '3px 3px 15px black', 
      height: '4rem', 
      width: '4rem', 
      zIndex: 9999,
      backgroundColor: 'red',
      position: 'relative',
      }}>
        {" "}
        <HiMenu size="2rem" color="#f6f6f6" />
    </button>
  );
}

function OrbitButton1() {
  return(
    <a href="https://www.google.com/maps/dir//1234+N+Broadway,+Escondido,+CA+92026/@33.1381026,-117.0909501,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dbf4a57a0958b7:0x753cc0983a98c9a0!2m2!1d-117.0887614!2d33.1381026" rel="nofollow noreferrer noopener" target="_blank" title="Link to Google Maps Directions"
    className="h-auto w-auto d-block relative"
    >
    <button 
    className="btn" 
    tabIndex={0}
    style={{ 
      borderRadius: '50%', 
      boxShadow: '3px 3px 15px black', 
      height: '4rem', 
      width: '4rem', 
      backgroundColor: 'black',
      position: 'relative',
      }}>
        {" "}
        <HiLocationMarker size="2rem" color="white" />
    </button>
    </a>
  );
};

function OrbitButton2() {
  return(
    <a href="tel:6193635361" rel="nofollow noreferrer noopener" target="_blank" className="h-auto w-auto d-block relative" >
    <button 
    className="btn" 
    tabIndex={0}
    style={{ 
      borderRadius: '50%', 
      boxShadow: '3px 3px 15px black', 
      height: '4rem', 
      width: '4rem', 
      backgroundColor: 'blue',
      position: 'relative',
      }}>
        {" "}
        <HiPhone size="2rem" color="white" />
    </button>
    </a>
  )
}

function OrbitButton3() {
  return(
    <a href="mailto:contact@viadelweb.com" rel="nofollow noreferrer noopener" target="_blank" className="h-auto w-auto d-block relative">
    <button 
    className="btn" 
    tabIndex={0}
    style={{ 
      borderRadius: '50%', 
      boxShadow: '3px 3px 15px black', 
      height: '4rem', 
      width: '4rem', 
      backgroundColor: 'gray',
      position: 'relative',
      }}>
        {" "}
        <HiInbox size="2rem" color="white" />
    </button>
    </a>
  )
}

const NavbarCustom2 = ({ data }) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);
  const [deltaPosition, setdeltaPosition] = useState({ x: 0, y: 0 });
  const [toggleMenu, settoggleMenu] = useState(false);
  const [visable, setvisable] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setvisable(false);
    }, 4500)
  }, [])

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setdeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "danger" : ""}
        variant="dark"
        expand="lg"
        className={navStyles.headerNavbar}
      >

        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="d-inline-block align-top"
              src={data.siteYaml.logo_image}
              alt="Logo"
              height="60"
            ></img>
          </Navbar.Brand>

          <Draggable onStop={() => {
            if (deltaPosition.x == 0 && deltaPosition.y == 0) {
              settoggleMenu(!toggleMenu);
            }
            setdeltaPosition({ x: 0, y: 0 })

          }} 
          onDrag={handleDrag} 
          onMouseDown={() => {
            setdeltaPosition({ x: 0, y: 0 })


          }} >

            <div 
              style={{
                width: '100%', 
                height: '100%', 
                position: 'relative',
                zIndex: 999,
            }}>

              <div
                className="nav-drop-inner"
              >
                <div 
                  className="scsj8w6"
                  style={{ position: 'relative',width:64,height:64 }}
                  //onMouseEnter={() => {
                    //setvisable(true)
                    //setTimeout(()=>{
                    //setvisable(false)
                  // },1500)
                //}}

                // onMouseOver={() => setvisable(true)} 
                // onMouseLeave={() => setvisable(false)}
            >
                  <Planet
                    centerContent={<PaperButton2 />}
                    hideOrbit
                    orbitRadius={100}
                    bounce
                    open={toggleMenu}
                    bounceOnClose
                    rotation={105}
                    onClick={(e) => {
                      if (deltaPosition.x > 0 || deltaPosition.y > 0) {
                        e.preventDefault();
                      }
                    }}
                  >
                    
                    <OrbitButton1 />
                    <OrbitButton2 />          
                    <OrbitButton3 />
                

                    
                  </Planet>




             
                <Tooltip position="top center"  textBoxWidth="200px" padding="20px" show={visable}>
                    <span >Drag Anywhere On Screen</span>
                  </Tooltip>
            </div>

            
              </div>

           
            </div>
          </Draggable>

          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              display: "flex",
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav
              className="ml-auto d-flex"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
            </Nav>
            <Nav
              className="mr-1"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              <Nav.Item to="/#hours" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#hours" active={false}>
                  Hours
                </Nav.Link>
              </Nav.Item>


              <Nav.Item to="/#specials" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#specials" active={false}>
                  Specials
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/#contact" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/#contact" active={false}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>

          {/*<SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
            }}
            items={[
              <Link rel="preload" className={navStyles.navItem} to="/">
                <FaHome />
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/#hours">
                Hours
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/#specials">
                Specials
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/#contact">
                Contact
              </Link>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
              listStyle: "none",
            }}
            navStyle={{
              width: "70%",
              background: "#dc3545",
              color: "white",
              maxHeight: "100vh",
              listStyle: "none",
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />*/}

        </Container>
      </Navbar>
      <div className={visable ? "overlay" : ""} />


    </>
  );
};

let navQuery = graphql`
  query {
    siteYaml {
      logo_image
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={navQuery}
    render={(data) => <NavbarCustom2 data={data} />}
  ></StaticQuery>
);




