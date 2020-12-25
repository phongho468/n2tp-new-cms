import React from "react"
import Layout from "../../layout/layout"
import StyledContainer from "../../component/styled-container/styled-container"
import FounderProfile from "../../component/founder-profile/founder-profile"
import team from "./content"
import { Col, Row } from "react-bootstrap"

export default class Team extends React.Component {
  render() {
    return (
      <Layout>
        <StyledContainer>
          <StyledContainer.Title>
            {team.pageTitle}
          </StyledContainer.Title>

            <Row className="my-5">
              <Col>
                <FounderProfile
                  image={team.tuanDo.image}
                  alt={team.tuanDo.title}
                  name={team.tuanDo.name}
                  title={team.tuanDo.title} />
              </Col>


              <Col className="mt-5 mt-md-0">
                <FounderProfile
                  image={team.phongHo.image}
                  alt={team.phongHo.title}
                  name={team.phongHo.name}
                  title={team.phongHo.title} />
              </Col>


              <Col className="mt-5 mt-lg-0">
                <FounderProfile
                  image={team.nguyetDang.image}
                  alt={team.nguyetDang.title}
                  name={team.nguyetDang.name}
                  title={team.nguyetDang.title} />
              </Col>
            </Row>

          <Row>
            <Col>
              <FounderProfile
                image={team.nhungDuong.image}
                alt={team.nhungDuong.title}
                name={team.nhungDuong.name}
                title={team.nhungDuong.title} />
            </Col>


            <Col className="mt-5 mt-md-0">
              <FounderProfile
                image={team.luanDuong.image}
                alt={team.luanDuong.title}
                name={team.luanDuong.name}
                title={team.luanDuong.title} />
            </Col>
          </Row>
        </StyledContainer>
      </Layout>
    )
  }
}