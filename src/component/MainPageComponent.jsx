import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import MainPageComponentCn from "./MainPageComponentCn";
import Typewriter from "typewriter-effect";

export default function MainPageComponent() {
    const [loading, setLoading] = useState(true)
    const authContext = useAuth()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1700)
    },[])

    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)
    const scrollTo = (section) => {
        if (section === section1){
            window.scrollTo(0, (section1.current.offsetTop))
        } else if (section === section2) {
            window.scrollTo(0, (section2.current.offsetTop))
        } else if (section === section3) {
            window.scrollTo(0, (section3.current.offsetTop))
        }
    }

  return (
    <div className="container-fluid">
      {
        loading
        ?
        <div className="d-flex justify-content-center align-items-center expand">
            <h1 style={{fontSize:'5rem'}} className="d-flex landing">ZEN</h1>
        </div>
        :
        authContext.lang === 'en' ?
        <>
            <div className="vh-100 d-flex flex-column justify-content-center">
                <div>
                    <div className="mt-5">
                        <img id="logo" src="/java.png" alt="" style={{width:"5rem"}}/>
                    </div>
                    <h1>
                        <div className="headline mt-2 fs-1">
                            <Typewriter onInit={(typewriter) => {typewriter.typeString("Hi, I'm Zheng").pauseFor(3000).start()}} options={{loop:true, delay:75}} />
                        </div>
                        <div>
                            <span className="headline2 fs-1">A</span> <span className="headline3">full stack</span> <span className="headline4">software engineer.</span>
                        </div>
                    </h1>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-lg-start p-5" onClick={() => scrollTo(section1)}>
                    <div>
                        <div className="mouse">
                            <button className="btn btn-sm bg-transparent"><div className="wheel"></div></button>
                        </div>
                        <div>
                            <span className="m_scroll_arrows unu"></span>
                            <span className="m_scroll_arrows doi"></span>
                            <span className="m_scroll_arrows trei"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={section1} className="row section1 vh-100">
                <div className="col-sm-7"></div>
                <div className="col-sm-5 align-self-end">
                    <div className="fs-4 w-100 fst-italic fw-bold">I build fast responsive modern web applications.</div>
                    <div className="fs-6 mt-1 fw-light text-start mt-5 text-white">The tools used on the projects are JAVA, Spring Boot, MySQL, React, JavaScript, BootStrap, HTML5, CSS, Python, TensorFlow, etc.</div>
                </div>
                {/* <div className="col-sm-6 mt-5 mb-5">
                    <img src="/1.png" alt="2" className="w-75 opacity-75"/>
                </div> */}
                <div className="d-flex flex-column justify-content-end" onClick={() => scrollTo(section2)}>
                    <div className="mouse mx-auto">
                        <button className="btn btn-sm bg-transparent"><div className="wheel"></div></button>
                    </div>
                    <div>
                        <span className="m_scroll_arrows unu mx-auto"></span>
                        <span className="m_scroll_arrows doi mx-auto"></span>
                        <span className="m_scroll_arrows trei mx-auto"></span>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="about">s</div>
                <div>About me</div>
            </div> */}
            
            <div ref={section2} className="row align-items-center section2 vh-100">
                <div className="col-sm-7 mt-5">
                    <CarouselComponent />
                </div>
                <div className="col-sm-5 mt-5">
                    <div className="fs-4 fst-italic fw-bolder text-center mb-3">About me</div>
                    <div className="fs-6 fw-light text-start mt-5 text-white">
                        Hi, there.
                        <br></br>
                        I was a senior banker in <i>JPMorgan Chase</i> prior to becoming a software engineer. During my years of banker life, I managed to be one of the top-performing bankers nationwide and received numerous recognitions and awards. Now I work on the trading floor constantly trying to figure out why some codes don't work AND why they WORK.
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-end" onClick={() => scrollTo(section3)}>
                    <div className="mouse mx-auto">
                        <button className="btn btn-sm bg-transparent"><div className="wheel"></div></button>
                    </div>
                    <div>
                        <span className="m_scroll_arrows unu mx-auto"></span>
                        <span className="m_scroll_arrows doi mx-auto"></span>
                        <span className="m_scroll_arrows trei mx-auto"></span>
                    </div>
                </div>
            </div>
            <div ref={section3} className="section3 row">
                <div className="row align-items-center">
                    <div className="text-center fs-4 fw-bolder text-decoration-underline mb-1 fst-italic">Projects</div>
                </div>
                <div className="row align-items-center">
                    <div className="text-center fs-5 fst-italic">Some personal projects</div> 
                </div>
                <div className="d-flex flex-wrap">
                    <div className="row m-5">
                        <div className="col-sm-4 text-center flex-column d-flex align-items-center mb-5">
                            <img src="/fx.gif" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">FX Currency</p>
                            <span className="fs-6">This is project provides foreign exchange currency rate for over 200 currencies, and inclues conversion component and historical chart component. Build with React, JavaFX.</span>
                            <div>
                                <button className="btn btn-sm btn-dark rounded-4 me-1" onClick={() => window.open("https://fx-currency.onrender.com", '_blank')}>View</button>
                                <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("https://github.com/nickync/fx-currency-rate", '_blank')}>Repo</button>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center flex-column d-flex align-items-center mb-5">
                            <img src="/gitcard.gif" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">Github User Card</p>
                            <span className="fs-6">Search github username and generate user infomation. Build with React.</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/gitcard/index.html", '_blank')}>View</button>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/pt.gif" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">Personal Trainer</p>
                            <span className="fs-6">A fullstack web application build with Spring Boot 3, React 18, JWT authentication, BootStrap 5, and H2 in memeory database. Deployed through AWS S3 and Elastic Beanstalk.</span>
                            <div>
                                <button className="btn btn-sm btn-dark rounded-4 me-1" onClick={() => window.open("http://pt-front.s3-website-us-east-1.amazonaws.com/", '_blank')}>View</button>
                                <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("https://github.com/nickync/personal-trainer", '_blank')}>Repo</button>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/restaurant.gif" alt="placeholder" className="w-75 h-100"/>
                            <p className="fs-5 mt-3">Restaurant</p>
                            <span className="fs-6">Zen's restaurant. Build with HTML and CSS.</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/restaurant/index.html", '_blank')}>View</button>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/astro.gif" alt="placeholder" className="w-75 h-100"/>
                            <p className="fs-5 mt-3">Astronomy of the Day</p>
                            <span className="fs-6">Astronomy of the day, powered by NASA API. The website generates the Astronomy Picture of the Day. Build with Javascript</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/astronomy/index.html", '_blank')}>View</button>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/pic01.jpg" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">Sherlock's blog</p>
                            <span className="fs-6">A simple blog site using flexbox.</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/blog/index.html", '_blank')}>View</button>
                        </div>
                    </div>
                </div>
                <button id="bottom" onClick={() => window.scrollTo({top:0})} className="btn">
                    <span className="m_scroll_arrows unu mx-auto"></span>
                    <span className="m_scroll_arrows doi mx-auto"></span>
                    <span className="m_scroll_arrows trei mx-auto"></span>
                </button>
            </div>
            </>
            :
            <MainPageComponentCn />
          }
    </div>
  )
}