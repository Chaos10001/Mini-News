import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import SideSlider from "../../Navbars/Side-Slider/Side-Slider";
import Card from "react-bootstrap/Card";
import "./LatestNews.css";

const LatestNews = () => {
  const [container, setContainer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchme()
  }, []);
  const fetchme = () => {
    fetch(
     'https://newsi-api.p.rapidapi.com/api/local?language=en&country=us&sort=top&page=1&limit=20',
      {
        method: "GET",
        headers: {
		'X-RapidAPI-Key': '4a77e17591mshf3813ad7a2f92c7p1e6105jsn81dd22a83a67',
		'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
	},
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data);
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(true)
        console.error(err)
      });
  };
  return (
    <Container className="p-3">
      <Row>
        <Col lg={1}>
          <SideSlider />
        </Col>
        <Col className="text-center">
          <h2 className="fw-bolder main-color">World Latest News </h2>
          <p className=" lead">The news going on around the World....</p>
        </Col>
          <Row className='align-items-center jusify-content-center'>
              {container?.map((item)=>{
                return(
                  <>
                    {isLoading ? (
                      <p>Loading....</p>
                    ):(
                      <Col className='nd gap-3' key={item.id}>
                        <Card style={{ width: "18rem" }} >
                          <Card.Img src={item.image} style={{ width: "18rem", height:'10rem' }} />
                          <Card.Body>
                            <Card.Title className='h5'>{item.title}</Card.Title>
                            <a className="btn btn-outline-primary" href={item.link} target="_blank" rel="noopener noreferrer">Read More</a>
                          </Card.Body>
                        </Card>
                      </Col>        

                    )}
                  </>
                )
              })}
          </Row>
      </Row>
    </Container>
  );
};

export default LatestNews;
// https://rapidapi.com/makingdatameaningful/api/reuters-business-and-financial-news/
// https://rapidapi.com/opteka-opteka-default/api/newsi-api/