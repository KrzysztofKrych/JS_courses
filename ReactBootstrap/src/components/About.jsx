import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';


class About extends Component {
  render() {
    return (
     <div>
       <Image src="assets/dog-people.jpg" className="header-image"/>
       <Grid>
           <Col xs={12} sm={8} smOffset={2}>
               <Image src="assets/person1.jpeg" className="about-profile-pic" rounded />
               <h3>Monica The Women</h3>
           </Col>
       </Grid>
     </div>
    );
  }
}

export default About;
