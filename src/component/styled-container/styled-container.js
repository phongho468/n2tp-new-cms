import React from "react"
import { Container } from "react-bootstrap"
import "./styled-container.scss"

class StyledContainerTitle extends React.Component {
  render() {
    const { children } = this.props
    return (
      <h1 className="title">
        { children }
      </h1>
    )
  }
}

class StyledContainerBody extends React.Component {
  render() {
    const { children } = this.props
    return (
      <p className="body px-lg-5 pt-5">
        { children }
      </p>
    )
  }
}

class StyledContainer extends React.Component {
  render () {
    const { children } = this.props
    return (
      <Container className="my-5 pt-lg-5 text-center">
        { children }
      </Container>
    )
  }
}

StyledContainer.Title = StyledContainerTitle
StyledContainer.Body = StyledContainerBody

export default StyledContainer