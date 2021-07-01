
import React from "react";
import { useHistory } from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  let history = useHistory();

  const handleRoute = (routeTo) => {
   history.push(routeTo);
  }

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Hobby On</h1>
            <h3>Start Learning With Us.</h3>
            <br />
            <Button
              href="https://youtu.be/kqW58V7BDKc"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button className="btn-round" color="neutral" type="button" onClick={e=> handleRoute('classes')} outline>
              Join Live Class
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
