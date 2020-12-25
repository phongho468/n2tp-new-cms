import React from "react"
import { Badge, Button, Jumbotron } from "react-bootstrap"
import "./jumbotron.scss"
import SmartDoseBrand from "../smartdose/smartdose-brand"

class StyledJumbotron extends React.Component {
  render () {
    return (
      <Jumbotron fluid className="styled-jumbotron p-5">
        <SmartDoseBrand />
        <h1>Get SmartDose <Badge variant="secondary">AI</Badge></h1>
        <p>Get SmartDose AI right now to get discount offer upto 25%</p>
        <Button>Get SmartDose AI</Button>
      </Jumbotron>
    )
  }
}

export default StyledJumbotron