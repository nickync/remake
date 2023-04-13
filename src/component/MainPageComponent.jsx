import React from "react";
import Row from "react-bootstrap";

export default function MainPageComponent() {
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
            <button className="btn btn-sm bg-dark text-light">Discover</button>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <div className="col-sm-6 fs-5 w-100">I build fast responsive modern web applications.</div>
                <div className="row">The tools used on the projects are JAVA, Spring Boot, MySQL, React, JavaScript, BootStrap, HTML5, CSS, Python, TensorFlow, etc.</div>
            </div>
            <div className="col-sm-6">
                <img src="/1.png" alt="2" className="w-100" style={{size:'50px'}}/>
            </div>
        </div>
    </div>
  )
}