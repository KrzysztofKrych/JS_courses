import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
     <div>
         <Grid>
             <Jumbotron>
                 <h2>Welcome to CodeLife.io</h2>
                 <p>This is how to build a website with React, React-Router and React-Bootstrap</p>
                 <Link to="/about">
                 <Button bsStyle="primary">About</Button>
             </Link>
             </Jumbotron>
             <Row className="show-grid text-center">
                 <Col xs={12} sm={4} className="person-wrapper">
                 <Image src="./assets/person1.jpeg" circle className="profile-pic" />
                 <h3>Monica</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus tincidunt turpis, vitae facilisis metus sodales vitae. Nam posuere purus ac feugiat pulvinar. Sed fermentum, orci sit amet pellentesque fermentum, erat nisl dapibus risus, interdum condimentum orci lectus a magna. </p>
                 </Col>
                  <Col xs={12} sm={4} className="person-wrapper">
                 <Image src="./assets/person2.jpeg" circle className="profile-pic" />
                 <h3>Frank</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus tincidunt turpis, vitae facilisis metus sodales vitae. Nam posuere purus ac feugiat pulvinar. Sed fermentum, orci sit amet pellentesque fermentum, erat nisl dapibus risus, interdum condimentum orci lectus a magna. </p>
                 </Col>
                  <Col xs={12} sm={4} className="person-wrapper">
                 <Image src="./assets/person3.jpeg" circle className="profile-pic" />
                 <h3>Ben</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus tincidunt turpis, vitae facilisis metus sodales vitae. Nam posuere purus ac feugiat pulvinar. Sed fermentum, orci sit amet pellentesque fermentum, erat nisl dapibus risus, interdum condimentum orci lectus a magna. </p>
                 </Col>
             </Row>
         </Grid>
     </div>
    );
  }
}

export default Home;
