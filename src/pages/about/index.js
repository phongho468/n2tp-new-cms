import React from "react"
import Layout from "../../layout/layout"
import StyledContainer from "../../component/styled-container/styled-container"
import pageContent from "./content"

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <StyledContainer>
          <StyledContainer.Title>
            { pageContent.title }
          </StyledContainer.Title>

          <StyledContainer.Body>
            { pageContent.body }
          </StyledContainer.Body>
        </StyledContainer>
      </Layout>
    )
  }
}