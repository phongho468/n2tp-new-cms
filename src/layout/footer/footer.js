import React from "react"
import n2tpBWLogo from "../../assets/logos/n2tp-bw.png"
import "./footer.scss"
import { Link } from "gatsby"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { Image } from "react-bootstrap"
import pageContent from "../../pages/contact/content"

export default class StyledFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright">
          <span>&#169; 2020</span>
          <Link to="/">
            <Image src={n2tpBWLogo} alt="N2TP Logo" />
          </Link>
        </div>
        <div className="social">
          <a
            className="linkedin-wrapper"
            href={pageContent.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn
              className="logo"
              alt="Linkedin Logo"
            />
          </a>

          <a
            className="facebook-wrapper"
            href={pageContent.fb}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF
              className="logo"
              alt="Facebook Logo"
            />
          </a>
        </div>
      </div>
    )
  }
}