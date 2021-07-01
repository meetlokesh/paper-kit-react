import React from "react";
import { useHistory } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import SocialNetworkHeader from "components/Navbars/Navbar";
import DashboardHeader from "components/Headers/DashboardHeader";
import DemoFooter from "components/Footers/DemoFooter.js";
import Gallery from "components/Gallery";

const VideoPlayer = ()=>{
    let history = useHistory();
    const handleClick = () => {
     history.push("/dashboard");
    }
    return (
        <>
        <SocialNetworkHeader color="light" light></SocialNetworkHeader>
      <div className="main">
          
        <div className="filter" />
        <div className="flex-row-center">
        <Container>
        <Card style={{ width: '20rem' }}>
                  <CardBody>
                    <CardTitle>Drawings</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button href="/#" color="primary">watch recordings</Button>
                  </CardBody>
                </Card>
                <Card style={{ width: '20rem' }}>
                  <CardBody>
                    <CardTitle>English</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button href="/#" color="primary">watch recordings</Button>
                  </CardBody>
                </Card><Card style={{ width: '20rem' }}>
                  <CardBody>
                    <CardTitle>Music</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button href="/#" color="primary">watch recordings</Button>
                  </CardBody>
                </Card><Card style={{ width: '20rem' }}>
                  <CardBody>
                    <CardTitle>Reading</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button href="/#" color="primary">watch recordings</Button>
                  </CardBody>
                </Card>
        </Container>
        
        <Container>
            <div>
            <iframe src='https://www.youtube.com/watch?v=WxYUWKIxIzc'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
            </div>
        </Container>
        
        </div>

      </div>
      <button type="button" onClick={handleClick}>
      Go home
     </button>
    </>

    );

}
export default VideoPlayer;
