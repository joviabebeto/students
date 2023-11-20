import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../sass/main.scss';
 import { Carousel } from 'antd';
import Button from '../components/Button';




function Welcome() {
    return (
        <div className='welcome-container'>
            <Header />
            <Carousel autoplay={true} autoplaySpeed={3000}>
                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/7622520/pexels-photo-7622520.jpeg?' alt='image' />
                    <p>Phone on time in the teaching</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>

                </div>

                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/2393789/pexels-photo-2393789.jpeg?' alt='image' />
                    <p>Reading many books its good</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>

                <div className='bgImage' >
                    <img src='https://images.pexels.com/photos/7092524/pexels-photo-7092524.jpeg?' alt='image' />
                    <p>coding school</p>
                    <div className="position">
                        <Button name="Read-More" backgrounds="red" textColor="white" ></Button>
                    </div>
                </div>
            </Carousel>
            <Footer />
        </div>
    )
}
export default Welcome;