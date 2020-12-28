import React from "react"
import errorImage from "../assets/illustrations/404.png"
import { Button, Image } from "react-bootstrap"
import Layout from "../layout/layout"
import "./404.scss"
import { Link } from "gatsby"

export default class ErrorPage extends React.Component {
  render() {
    return (
        <Layout>
          <div className="text-center mt-3">
            <Image src={errorImage} alt="Error 404" className="error-image"/>
            <p className="error-title font-weight-bolder mt-3">Oops... Page Not Found</p>
            <p> You have gone too far and now you are lost</p>
            <Link to="/">
              <Button className="rounded-pill font-weight-bolder mb-5">
                Go to Home Page
              </Button>
            </Link>
          </div>
        </Layout>
    )
  }
}