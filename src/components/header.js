import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { withTranslation } from 'react-i18next';
import "./header.css"

const headerLogo = require("../images/logo.png");

const MenuItems = (language)=>{
  if (language==="th"){
    return{
      button: "English"
    }
  }else{
    return{
      button: "ภาษาไทย"
    }
  }
}

const Header = (props) => {
  const { t, i18n } = props;
  return (
    <header className="header">
      <div className="headerMenu">
        <Link
          to="/"
          className="headerMenuItem"
        >
          {t("header.home")}
        </Link>
        <Link
          to="/about"
          className="headerMenuItem"
        >
          {t("header.about")}
        </Link>
        <Link
          to="/resources"
          className="headerMenuItem"
        >
          {t("header.resources")}
        </Link>
      </div>
      <img className="headerLogo" src={headerLogo}/>
      <div className="headerMenu">
        <Link
          to="/get-involved"
          className="headerMenuItem"
        >
          {t("header.involved")}
        </Link>
        <Link
          to="/blog"
          className="headerMenuItem"
        >
          {t("header.blog")}
        </Link>
        <Link
          to="/contact"
          className="headerMenuItem"
        >
          {t("header.contact")}
        </Link>
      </div>
      <button className="headerLanguageButton" onClick={()=>{
        if (props.language === "en"){
          props.setLanguage("th");
        }else{
          props.setLanguage("en");
        }
      }}>
        {MenuItems(props.language).button}
      </button>
    </header>
  )
}

export default withTranslation()(Header);
