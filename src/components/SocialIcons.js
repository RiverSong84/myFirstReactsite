import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const SocialIcons = () => {
  return (
    <Fragment>
      <span className="d-inline">
        <Link to="/" className="icon d-inline">
          <TiSocialFacebook size="40px" color="#fff" />
        </Link>
      </span>

      <span className="d-inline">
        <Link to="/" className="icon">
          <TiSocialLinkedin size="40px" color="#fff" />
        </Link>
      </span>
    </Fragment>
  );
};

export default SocialIcons;
