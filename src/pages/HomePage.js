import React from 'react';
import Bar from "../components/Bar";
import FootBar from "../components/FootBar";
import '../css/home.css';
import topWave from "../img/wave-top.png";
import midWave from "../img/wave-mid.png";
import botWave from "../img/wave-bot.png";

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
                    <div>
                        <div>Hello <span>World</span></div>
                        <div className="bhemu anim-typewriter">Thank you for visting my site</div>
                    </div>
                </div>
            </div>
            <FootBar />
        </>
    )
}

export default HomePage;