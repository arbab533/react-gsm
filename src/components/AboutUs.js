import React from "react";
import abou_img from '../assets/about/GSMBid-Profile-Digital-1024x724.jpg'
import visionBGImg from '../assets/about/GSMBid-Profile-Digital-about.jpg'


const AboutUs = () => {

    // missionVissonBG = () => {
    //     return {
    //         backgroundImage: `url(../assets/about/GSMBid-Profile-Digital-about.jpg)`,
    //     };
    // }

    return (
        <>
            <div className="container py-5 about_con">
                <div className="row align-items-center">
                    <div className="col-md-6 pe-5">
                        <h2 className="head">About Us</h2>
                        <p>GSMBid is an innovative concept that started with like-minded founders, Mr. Abdul Majid and Mr. Hamid Shah. The idea was to introduce a pioneer business model that combines the regulations of auctions and tech-driven approaches with the mobile industry. The company is located in Dubai, UAE, with networks around the globe.</p>

                        <p>GSMBid is the first company in the world to introduce LIVE AUCTION in the mobile industry and first company in the UAE mainland to bring TIMED AUCTION for mobiles & accessories for all renowned brands.</p>

                        <p>The concept is strictly tech-driven and allows audiences to get the best products at competitive prices with exceptional physical & online auction experience. The platform caters to both businesses and individuals while creating fast-paced and quick access to get ahold of some of the quality tech products from multiple brands.</p>
                    </div>
                    <div className="col-md-6 ps-5">
                        <img className="w-100 rounded-4" src={abou_img}/>
                    </div>
                </div>

            </div>
            <div className="container-fluid mission_vision_con py-5 mb-5" style={{ backgroundImage: `url(${visionBGImg})` }}>
                <div className="container">
                    <div className="row align-items-center col-md-4">
                        <h2 className="head text-white">Vision</h2>
                        <p className="text-white mb-5">To be the game changer in the auction & mobile industry through innovation & techdriven approaches.</p>

                        <h2 className="head text-white">Mission</h2>
                        <p className="text-white">Elaborating on the scope of our services by expanding across GCC and catering to significant quality in one go.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Business Values</h2>
                <div className="row">
                    <div className="col-md-3">
                        
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 703.24 644.19">
                        <defs>
                        <clipPath id="clip-path" transform="translate(0 0)"><rect class="cls-1" width="703.24" height="644.18">
                        </rect>
                        </clipPath>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_3" data-name="Layer 3">
                        <g class="cls-2">
                        <path class="cls-3" d="M121.89,430.54h-96c0-1.49,0-2.55,0-3.62.52-22.83.93-45.67,1.63-68.5.26-8.94.51-18,1.9-26.78C36.61,286,60.05,251,98.9,226.12c2.17-1.38,3.84-1.38,6.18-.23a159,159,0,0,0,85.61,15.71c5.66-.51,11.29-1.57,17-2.39-2.82-7.73-5.46-15-8.13-22.25a8.08,8.08,0,0,0-1.39,0c-33.28,5.29-64.38-.79-93.43-17.83A5.86,5.86,0,0,0,100,199a162.87,162.87,0,0,0-45.54,32.61C25.08,261.42,8,297.14,5.06,339c-2,27.54-2.46,55.18-3.68,82.77C1,429.7.46,437.66,0,445.61v8.63c1.32,0,2.64-.06,3.94-.06,32.65,0,65.3,0,97.94.06a5.48,5.48,0,0,0,5.18-2.79c4.09-6,8.46-11.85,12.73-17.77.59-.83,1.13-1.69,2.1-3.14" transform="translate(0 0)">
                        </path><path class="cls-3" d="M702.67,441.79c-1.06-25.19-2-50.41-3.14-75.6-.73-16.1-.57-32.28-4.13-48.16-12.15-54.06-43-93.66-92.13-119.07a5.45,5.45,0,0,0-4.49.1,137.41,137.41,0,0,1-85.22,19.07c-2.23-.22-4.46-.48-6.44-.7l-8.35,22.69c8,.71,15.82,1.78,23.67,2a159.87,159.87,0,0,0,76.29-16.38c1.27-.6,3.42-.84,4.46-.18,43.8,27.52,68.3,67.07,71.82,118.66,1.89,27.52,1.6,55.2,2.29,82.81,0,1.13,0,2.26,0,3.67H581.39c.87,1.29,1.44,2.14,2,3,4.2,5.79,8.57,11.5,12.55,17.45a6,6,0,0,0,5.74,3.06c33.85-.08,67.67,0,101.52,0v-8.62a33.38,33.38,0,0,1-.57-3.83" transform="translate(0 0)"></path><path class="cls-3" d="M173.32,202.05c7.62.48,15.34-.7,22.92-1.11-.48-8.74-.9-16.44-1.32-24.15-44.13,9.5-80.67-17.63-91.64-51.76-11.55-36,4.5-75.4,38-92.75,16.8-8.71,34.57-11.14,52.91-6.86C220.88,31.65,239,48.35,249.69,73l20-12.28c-10.92-28.27-40.3-52.3-71.56-58.56C194,1.37,189.94.73,185.85,0H168.63c-2.56.46-5.12,1-7.69,1.35C94.29,11.72,56,85.57,86.62,145.79c17.87,35.17,47.34,53.79,86.7,56.26" transform="translate(0 0)"></path><path class="cls-3" d="M553.67,27.53c35.54,12.06,57.18,47.27,51.86,85.15A73.91,73.91,0,0,1,581,158.49c-19.84,17.76-43.14,23.45-69,18.52-.43,8-.83,15.58-1.24,23.36a90.88,90.88,0,0,0,35.62.29C598.51,191,634.15,145.3,629.23,92.5,625.28,50,602,21,562.13,5.85c-8-3.06-16.89-3.95-25.38-5.85h-16.5a16.89,16.89,0,0,1-2.37.62c-25.15,2.84-46.27,13.7-63.49,32.14a94.5,94.5,0,0,0-18,27.6l20,12.12c17.74-41.9,61.64-57.06,97.33-44.95" transform="translate(0 0)"></path><path class="cls-3" d="M580.24,525.81c-.7-12.51-1.22-25.17-3.62-37.41C562,413.27,520.12,358.33,452.2,323.15c-2-1-3.37-.77-5.22.29q-95.13,54.19-190.37.14a5.38,5.38,0,0,0-5.84-.23A226.53,226.53,0,0,0,171,388.57q-44,57-47.61,129-2.79,56.76-5.46,113.56c-.21,4.34,0,8.71,0,13H585.29c0-5.46.2-10.7,0-15.92-1.59-34.15-3.14-68.31-5-102.45" transform="translate(0 0)"></path><path class="cls-3" d="M216.81,193.24a135,135,0,0,0,134.61,134.7c74.32.14,134.87-60.25,135-134.66C486.57,119,426,58.39,351.63,58.37S216.72,119,216.81,193.24" transform="translate(0 0)"></path></g></g></g></svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs