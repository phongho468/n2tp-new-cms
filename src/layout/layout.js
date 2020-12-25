import React from "react"
import Header from "./header/header"
import StyledFooter from "./footer/footer"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="page-wrapper">
        <Header />
        <div className="content-wrapper">
          { children }
        </div>
        <StyledFooter />
      </div>
    )
  }
}

export default Layout
