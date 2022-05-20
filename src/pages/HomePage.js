import React from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import '../css/home.css';

AOS.init();

function HomePage() {

    return (
        <>
            <Bar />
            <div id="content">
                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop">
                        <div className="wave waveTop"></div>
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle"></div>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom"></div>
                    </div>
                </div>

                <div id="welcome">
                        <div data-aos="zoom-out" data-aos-duration="700" data-aos-delay="100">Hello <span>World</span></div>
                        <div className="bhemu bhemu-typewriter">Thank you for visting my site</div>
                </div>
            </div>
            <FootBar />
        </>
    )
}

export default HomePage;