import React, { useRef } from "react";
import Row from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import { useNavigate } from "react-router-dom";

export default function MainPageComponent() {
    const myRef = useRef(null)

    const scrollTo = () => {
        window.scrollTo(0, (myRef.current.offsetTop + window.screenY))
    }

  return (
    <div className="container-fluid">
        <div className="mt-5">
            <img src="/gifgit.gif" alt="" />
        </div>
        <h1>
            <div className="headline mt-2 fs-1">Hi, I'm Zheng </div>
            <div><span className="headline2 fs-1">A</span> <span className="headline3">full stack</span> <span className="headline4">software engineer.</span></div>
        </h1>
        <div className="pt-5 mt-5 mb-5 pb-5">
            <a className="btn btn-sm bg-dark text-light" onClick={scrollTo}>Discover</a>
        </div>
        <div ref={myRef} className="row align-items-center mt-5 pt-5">
            <div className="col-sm-6 mt-5">
                <div className="fs-4 w-100 fst-italic fw-bold">I build fast responsive modern web applications.</div>
                <div className="fs-6 mt-1 fw-lighter">The tools used on the projects are JAVA, Spring Boot, MySQL, React, JavaScript, BootStrap, HTML5, CSS, Python, TensorFlow, etc.</div>
            </div>
            <div className="col-sm-6 mt-5">
                <img src="/1.png" alt="2" className="w-75"/>
            </div>
        </div>

        <div className="row align-items-center mt-5 pt-lg-5">
            <div className="col-sm-7 mt-5">
                <CarouselComponent />
            </div>
            <div className="col-sm-5 mt-5">
                <div>
                    <div className="fs-4 fst-italic fw-bold text-start mb-3 me-5">About me</div>
                </div>
                <div className="fs-6 fw-lighter text-start me-5">
                Hi, there.
                <br></br>
                I was a senior banker in <i>JPMorgan Chase</i> prior to becoming a software engineer. During my years of banker life, I managed to be one of the top-performing bankers nationwide and received numerous recognitions and awards. Now I had become a software engineer and work with a global tech team on the trading floor!
                </div>
            </div>
        </div>
        <div className="row align-items-center mt-5 pt-lg-5">
            <div className="text-center fs-3 fw-bolder border-bottom border-2 mb-2">Projects</div>
        </div>
        <div className="d-flex flex-wrap">
            <div className="row m-5">
                <div className="col-sm-4 text-center flex-column d-flex align-items-center mb-5">
                    <img src="/pic01.jpg" alt="placeholder" className="w-75"/>
                    <p className="fs-5 mt-3">Github User Card</p>
                    <span className="fs-6">Search github username and generate user infomation. Build with React.</span>
                    <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/gitcard/index.html"}>View</button>
                </div>
                <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                    <img src="/restaurant.gif" alt="placeholder" className="w-75 h-100"/>
                    <p className="fs-5 mt-3">Restaurant</p>
                    <span className="fs-6">Zen's restaurant. Build with HTML and CSS.</span>
                    <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/restaurant/index.html"}>View</button>
                </div>
                <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                    <img src="/astronomy.gif" alt="placeholder" className="w-75 h-100"/>
                    <p className="fs-5 mt-3">Astronomy of the Day</p>
                    <span className="fs-6">Astronomy of the day, powered by NASA API. The website generates the Astronomy Picture of the Day. Build with Javascript</span>
                    <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/astronomy/space.html"}>View</button>
                </div>
                <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                    <img src="/pt.gif" alt="placeholder" className="w-75"/>
                    <p className="fs-5 mt-3">Personal Trainer</p>
                    <span className="fs-6">A fullstack web application build with Spring Boot 3, React 18, JWT authentication, BootStrap 5, and H2 in memeory database. Deployed through AWS S3 and Elastic Beanstalk.</span>
                    <div>
                    <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "http://pt-front.s3-website-us-east-1.amazonaws.com/"}>View</button>
                    <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "http://pt-front.s3-website-us-east-1.amazonaws.com/"}>Repo</button>
                    </div>
                </div>
                <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                    <img src="/pic01.jpg" alt="placeholder" className="w-75"/>
                    <p className="fs-5 mt-3">Sherlock's blog</p>
                    <span className="fs-6">A simple blog site using flexbox.</span>
                    <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/blog/Homepage.html"}>View</button>
                </div>
            </div>
        </div>
    </div>
  )
}