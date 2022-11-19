import React from 'react';
import './About.css'
import img from '../../images/team.jpg'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className= "container-fluid">
            
            <h1 className="text-center title">About Us</h1>
            <div className="general-info text-center">
                <div className="row g-4">
                    
                    <div className="col6">
                    <div className="container-fluid"><img src={img}  width="80%" alt="" /></div>
                    <div className="col-12 ">
                        <h1 className='text-center'>Hello. Our agency has been present for over 15 years in the market. We make the most of all our customers.</h1>
                    </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                    <h3>WE-CARE team of guides</h3>
                    
                    <p>
                        Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences.
                    </p>
                </div>
           
            </div>

        </div>
        <Footer></Footer>
        </div>
    );
};

export default About;