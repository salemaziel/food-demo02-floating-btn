import PropTypes from "prop-types";
import React from "react";
import NavbarCustom2 from './NavbarCustom/NavbarCustom2'

const Header = ({ siteTitle }) => (
<>
<div style={{
    position: 'fixed',
    width: '100%',
    height: 'auto',
    zIndex: '99'
  }}>
<NavbarCustom2 />
</div>


</>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
