import PropTypes from "prop-types";
import React from "react";
import NavbarCustom from './NavbarCustom/NavbarCustom'

const Header = ({ siteTitle }) => (
<>
<div style={{
    position: 'fixed',
    width: '100%',
    height: 'auto',
    zIndex: '99'
  }}>
<NavbarCustom />
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
