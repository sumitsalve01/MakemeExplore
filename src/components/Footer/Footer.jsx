import React,{useEffect} from "react";
import "./footer.css";
import video1 from '../../assets/video1.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css';

const Footer=() =>{

    useEffect(() =>{
        Aos.init({duration: 1000})
    },[])


    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video1} loop autoPlay muted type="video/mp4"></video>    
            </div> 

            <div className="seeContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                        <button data-aos="fade-up" className="btn flex " type="submit">
                            SEND<FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon"/>
                                MakemeExplore.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Take a dive into the site and explore the places you were never been too.
                            Budget Friendly packages,along with a tour guide and may more.Please explore.
                        </div>

                        <div  data-aos="fade-up" className="footerSocials">
                            <CiInstagram className="icon" />
                            <FaSquareXTwitter className="icon" />

                        </div>
                    </div>

                     <div className="footerLinks grid">

                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        {/* Group Two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Booking
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HotelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>

                        {/* Group Three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE 
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Delhi
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Mumbai
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Kerala
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Manali
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Shimla
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPY RIGHTS RESERVED-SUMIT SALVE-2023</small>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer;