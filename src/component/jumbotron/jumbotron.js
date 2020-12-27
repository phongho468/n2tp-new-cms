import React from "react"
import { Badge, Button, Jumbotron } from "react-bootstrap"
import "./jumbotron.scss"
import SmartDoseBrand from "../smartdose/smartdose-brand"

class StyledJumbotron extends React.Component {
  render () {
    return (
      <Jumbotron fluid className="styled-jumbotron p-5">
        <h1>Get <SmartDoseBrand /> </h1>
        <p>Get <SmartDoseBrand /> right now to get discount offer upto 25%</p>
        <Button>Get <SmartDoseBrand /></Button>
      </Jumbotron>
    )
  }
}

export default StyledJumbotron