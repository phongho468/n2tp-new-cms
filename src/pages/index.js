import React from "react"
import Layout from "../layout/layout"
import StyledJumbotron from "../component/jumbotron/jumbotron"
import StyledContainer from "../component/styled-container/styled-container"

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <StyledJumbotron />
        <StyledContainer>
          <StyledContainer.Title>
            Our Solutions
          </StyledContainer.Title>

          <StyledContainer.Body>
            SmartDose AI
          </StyledContainer.Body>
        </StyledContainer>

        <StyledContainer>
          <StyledContainer.Title>
            Our Motto
          </StyledContainer.Title>

          <StyledContainer.Body>
            lasjdlsadjaslds
          </StyledContainer.Body>
        </StyledContainer>
      </Layout>
    )
  }
}
