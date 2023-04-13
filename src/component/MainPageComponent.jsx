import React, { useRef } from "react";
import Row from "react-bootstrap";

export default function MainPageComponent() {
    const myRef = useRef(null)

    const scrollTo = () => {
        window.scrollTo(0, (myRef.current.offsetTop + myRef.current.getBoundingClientRect().top + window.screenY))
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
                <div className="fs-6 mt-1">The tools used on the projects are JAVA, Spring Boot, MySQL, React, JavaScript, BootStrap, HTML5, CSS, Python, TensorFlow, etc.</div>
            </div>
            <div className="col-sm-6 mt-5">
                <img src="/1.png" alt="2" className="w-75"/>
            </div>
        </div>
        <div>
            <div>
                <div>About me</div>
            </div>
        </div>
    </div>
  )
}