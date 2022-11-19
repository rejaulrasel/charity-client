import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner (1).jpg'
import banner2 from '../../../images/banner (2).jpg'
import banner3 from '../../../images/banner (3).jpg'


const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item >
                    <img
                        style={{height:'75vh'}} 
                        className=" w-100"
                        src={banner1}
                        alt="Royal Enfield Classic 350"
                    />
                    <Carousel.Caption style={{color:"black"}}>
                        <h1>DONATE TO THE SOUL OF THE WORLD</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height:'80vh'}}
                        className="d-block w-100"
                        src={banner2}
                        alt="KTM RC 125"
                    />

                    <Carousel.Caption style={{color:"black"}}>
                        <h1>BE A PART OF CHARITY WORKS</h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height:'80vh'}}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />


                    <Carousel.Caption style={{color:"black"}}>
                        <h1>MAKE THE PART OF SMILE OF THE POOR PEOPLE </h1>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;