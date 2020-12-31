import React from "react"
import { Image } from "react-bootstrap"
import "./founder-profile.scss"
import PropTypes from "prop-types"

class FounderProfile extends React.Component {
  render() {
    return (
      <div className="founder-profile text-center">
        <Image src={ this.props.image } alt={ this.props.alt } roundedCircle />
        <br />
        <br />
        <span className="font-weight-bold text">{ this.props.name }</span>
        <br />
        <span className="text">{ this.props.title }</span>
      </div>
    )
  }
}

FounderProfile.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string
}

export default FounderProfile