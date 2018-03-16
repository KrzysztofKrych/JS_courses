import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';


class News extends Component {
  render() {
    return (
     <div>
       <Image src="assets/man.jpeg" className="header-image" />
       <Grid>
           <h2>News</h2>
           <Row>
               <Col xs={12} sm={8} className="main-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus tincidunt turpis, vitae facilisis metus sodales vitae. </p><p>Nam posuere purus ac feugiat pulvinar. Sed fermentum, orci sit amet pellentesque fermentum, erat nisl dapibus risus, interdum condimentum orci lectus a magna. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus tincidunt turpis, vitae facilisis metus sodales vitae. </p><p>Nam posuere purus ac feugiat pulvinar. Sed fermentum, orci sit amet pellentesque fermentum, erat nisl dapibus risus, interdum condimentum orci lectus a magna. </p>
               </Col>
                 <Col xs={12} sm={4} className="sidebar-section">
                 <Image src="assets/dog-people.jpg" />
                 <p>Nam posuere purus ac feugiat pulvinar. Sed fermentum, orci sit amet pellentesque fermentum, erat nisl dapibus risus, interdum condimentum orci lectus a magna. </p>
                  </Col>
           </Row>
       </Grid>
     </div>
    );
  }
}

export default News;