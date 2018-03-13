import React, { Component }  from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
    render(){
        return(
            <div>
              <Navbar />
               <Jumbotron title='About' subtitle="About page" />
               <div className="container">
                <h2>Welcome</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, turpis non dignissim ullamcorper, turpis orci consectetur risus, a blandit risus urna ut quam. In vel mauris et orci aliquam iaculis. Morbi luctus suscipit mi, ut finibus urna luctus eget. Morbi ac cursus neque, quis interdum ex. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
                </div>
               
                <Footer />
            </div>
        );
    }
}

export default About