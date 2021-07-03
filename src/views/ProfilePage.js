import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/nirbhay.jpg").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Prakhar Kalani <br />
              </h4>
              <h6 className="description">{"DESIGNER & CONSULTANT"}</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              The primary area of my interest is in solving business complexities through IT solutions. I am a Chartered Accountant and licensed practitioner along with Diploma in Information system Audit and certification in Forensic Accounting and Fraud detection. I am certified python developer and self-taught front-end developer. I have more than 7 years of experience in different industries which includes giants in Asset Management Company, FMCG, Equity & Commodity Broking and Telecom Sector. With the experience and knowledge of functional parameters of businesses and their processes and knowledge of various Front-End, Back-End languages enables me to provide to the point solutions.
              </p>
              <br />
              {/* <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button> */}
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/nirbhay.jpg")
                                .default
                            }
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Nirbhar Raj Tannu <br />
                            <small>Product Manager</small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/prakhar-kalani.jpg")
                                .default
                            }
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Abhay Raj <br />
                            <small>Product head</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find Teachers
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
