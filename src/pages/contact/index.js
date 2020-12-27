import React from "react"
import Layout from "../../layout/layout"
import StyledContainer from "../../component/styled-container/styled-container"
import "./contact.scss"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns"
import { FaTenge } from "@react-icons/all-files/fa/FaTenge"
import { Col, Container, Row } from "react-bootstrap"
import pageContent from "./content"
import LeafletMap from "../../component/map/leaflet-map"

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <StyledContainer>
          <StyledContainer.Title>
            {pageContent.pageTitle}
          </StyledContainer.Title>
        </StyledContainer>

        {/* <Container fluid /> for width: 100% across all viewport and device sizes */}
        <Container fluid>
          <Row>
              <Col xs={12} md={6} xl={4} className="contact p-5">
                <p>{pageContent.companyName}</p>
                <hr />
                <p>
                  <FaMapSigns /> {pageContent.address}
                </p>
                <p>
                  <FaPhoneAlt /> {pageContent.phone}
                </p>
                <p>
                  <FaTenge /> {pageContent.email}
                </p>
                <hr />
                <p>
                  Find us online @
                </p>
                <a
                  className="sns-logo mr-4"
                  href={pageContent.fb}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  className="sns-logo"
                  href={pageContent.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </Col>

              <Col xs={12} md={6} xl={8} className="map py-3">
                <LeafletMap
                  popUpText={pageContent.companyName}
                  coordinate={pageContent.position}
                />
              </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}