import React,{useEffect} from "react";
import "./main.css";
import agra from '../../assets/agra.jpeg'
import goa from '../../assets/goa.jpg'
import hp from '../../assets/hp.jpeg'
import jaipur from '../../assets/jaipur.jpeg'
import varanasi from '../../assets/varanasi.jpeg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css';

const data=[
    {
        id:1,
        imgSrc:agra,
        destTitle:"Agra",
        location:"India",
        grade:"7 wonders of World",
        fees:"₹10000",
        description:"Home to the Taj Mahal, Agra Fort, and Fatehpur Sikri, all of which are UNESCO World Heritage Sites",
    },
    {
        id:2,
        imgSrc:goa,
        destTitle:"Goa",
        location:"India",
        grade:"One with all the beaches",
        fees:"₹8000",
        description:"Known for its beaches, nightlife, markets, and churches",
    },
    {
        id:3,
        imgSrc:hp,
        destTitle:"Himachal Pradesh",
        location:"India",
        grade:"Snow Covered Mountains",
        fees:"₹25000",
        description:"Located in the lower ranges of the Himalayas, Himachal Pradesh is a destination for nature and adventure",
    },
    {
        id:4,
        imgSrc:jaipur,
        destTitle:"Jaipur",
        location:"India",
        grade:"Rich Cultural",
        fees:"₹20000",
        description:"Part of the Golden Triangle of Indian tourism, Jaipur has a rich heritage and culture",
    },
    {
        id:5,
        imgSrc:varanasi,
        destTitle:"Varanasi",
        location:"India",
        grade:"Holy Places to visit",
        fees:"₹22000",
        description:"One of Hinduism's seven holy cities, Varanasi is the spiritual capital of India",
    },

]

const Main=() =>{

    useEffect(() =>{
        Aos.init({duration: 1000})
    },[])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visted destinations
                </h3>
            </div>

            <div className="seeContent grid">


        {
            data.map(({id, imgSrc, destTitle,location,grade,fees,
                description}) =>{
                return (
                    <div key={id} data-aos="fade-up" className="singleDestination">
                    <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                    </div>    
                    <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex"></span>
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}
                        </span>

                        <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                                <h5>{fees}</h5>
                            </div>
                        </div>

                        <div className="desc">
                            <p>
                                {description}
                            </p>
                        </div>

                        <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className="icon" />
                        </button>
                    </div>
                    </div>
                )
            })
        }
            </div>
        </section>
    )
}

export default Main;