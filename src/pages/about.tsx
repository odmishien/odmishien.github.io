import { Link } from "gatsby"
import React from "react"
import { Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Header from "../components/Header"

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Row>
        <h2>💼 Careers</h2>
      </Row>
      <Row>
        <table className="table table-borderless text-white">
          <tr>
            <td>2019~2021</td>{" "}
            <td>
              Software Engineer @{" "}
              <a href="https://hatena.co.jp/" target="_blank">
                Hatena Co., Ltd.
              </a>
            </td>
          </tr>
          <tr>
            <td>2021~</td>
            <td>
              Infra Engineer / SRE @{" "}
              <a href="https://dena.com/" target="_blank">
                DeNA Co., Ltd.
              </a>
            </td>
          </tr>
          <tr>
            <td>2023~</td>
            <td>
              Server Side Engineer / @{" "}
              <a href="https://www.live.iriam.com/company" target="_blank">
                IRIAM Inc.
              </a>
            </td>
          </tr>
        </table>
      </Row>
    </Container>
  )
}
export default AboutPage
