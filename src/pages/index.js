import React from "react"
import Layout from "../layout/layout"
import StyledContainer from "../component/styled-container/styled-container"
import smartDoseLogo from "../assets/logos/smartdose.png"
import "./landing-page.scss"
import { Button, Col, Image, Row } from "react-bootstrap"
import Image1 from "../assets/illustrations/feature-1.png"
import Image2 from "../assets/illustrations/feature-2.png"
import Image3 from "../assets/illustrations/feature-3.png"
import SmartDoseBrand from "../component/smartdose/smartdose-brand"
import banner3 from "../assets/illustrations/banner-3.png"

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        {/* The stripes are absolute positioned and are full-screen width
         so I put them in the most parent element */}

        <div id="top-stripe" />
        <div id="bottom-stripe" />
        <div id="bottom-stripe-2" />
        <div id="bottom-stripe-3" />

        {/* The body is from here */}

        <div className="jumbotron-wrapper mt-5 pt-lg-5">
          <div className="left-side text-center my-auto">
            <div className="smart-dose-text">
              <SmartDoseBrand />
            </div>
            <p>Pioneering Precision Medicine</p>
            <a
              href="https://smartdose.ai"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="rounded-pill button-text px-3"
              >
                Learn More
              </Button>
            </a>
          </div>

          <div className="right-side text-center my-5 mt-xl-0">
            <Image className="promo-illustration" src={banner3} alt="banner" />
          </div>
        </div>

        <StyledContainer>
          <StyledContainer.Title>
            Our Solutions
          </StyledContainer.Title>

          <StyledContainer.Body>

            <Row className="text-center">
              <Col>
                <div className="text-center">
                  <Image
                    src={smartDoseLogo}
                    alt="SmartDose AI Logo"
                    className="smart-dose-logo"
                  />
                  <br/>
                  <a
                    href="https://smartdose.ai"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline-primary"
                      className="rounded-pill button-text mt-3 px-3"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </StyledContainer.Body>
        </StyledContainer>

        <StyledContainer>
          <StyledContainer.Title>
            We Value
          </StyledContainer.Title>

          <StyledContainer.Body>
            <Row>
              <Col>
                <Image src={Image1} alt="Image 1" />
                <p className="font-weight-bold my-3">
                  Up-to-date Technologies
                </p>
              </Col>

              <Col>
                <Image src={Image2} alt="Image 2" />
                <p className="font-weight-bold my-3">
                  Optimal Operations
                </p>
              </Col>

              <Col>
                <Image src={Image3} alt="Image 3" />
                <p className="font-weight-bold my-3">
                  Customer Experiences
                </p>
              </Col>
            </Row>
          </StyledContainer.Body>
        </StyledContainer>
      </Layout>
    )
  }
}
