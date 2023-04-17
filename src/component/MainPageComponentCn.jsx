import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import { useNavigate } from "react-router-dom";

export default function MainPageComponentCn() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1999)
    },[])

    const myRef = useRef(null)
    const scrollTo = () => {
        window.scrollTo(0, (myRef.current.offsetTop + window.screenY))
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
        <>
            <div className="mt-5">
                <img src="/gifgit.gif" alt="" />
            </div>
            <h1>
                <div className="headline mt-2 fs-1"> 你好，我是 </div>
                <div><span className="headline2 fs-1">一个全栈</span> <span className="headline4">程序猿🦍。</span></div>
            </h1>
            
            <div className="pt-5 mt-5 mb-5 pb-5">
                <a className="btn btn-sm bg-dark text-light" onClick={scrollTo}>更多</a>
            </div>
            {/* <div style={{height:'5rem', left:0, position:'absolute', backgroundColor:'transparent', width:'100%'}}>
                <div></div>
            </div> */}
            <div ref={myRef} className="row align-items-center">
                <div className="col-sm-6 mt-5">
                    <div className="fs-4 w-100 fst-italic fw-bold">我致力于构建开发快速响应式网站。</div>
                    <div className="fs-6 mt-1 fw-lighter">我应用到的技术栈有 JAVA，Spring Boot，MySQL，React，JavaScript，BootStrap，HTML5，CSS，Python，TensorFlow 等等。</div>
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
                    <div className="fs-4 fst-italic fw-bold text-center mb-3">关于我</div>
                    <div className="fs-6 fw-lighter text-start mt-5">
                        你好，
                        <br></br>
                        在成为软件工程师之前，我曾经是<i>摩根大通银行</i>的资深客户经理。在我多年的客户经理生涯中，我有幸成为全美最杰出的客户经理之一，并多次获得各种奖项与荣誉。而现在，我作为一名软件开发者加入了全球外汇期权交易开发者团队！
                    </div>
                </div>
            </div>
            <div className="row align-items-center mt-5 pt-lg-5">
                <div className="text-center fs-4 fw-bolder border-1 border-bottom border-dark mb-2 fst-italic">Projects</div>
            </div>
            <div className="d-flex flex-wrap">
                <div className="row m-5">
                    <div className="col-sm-4 text-center flex-column d-flex align-items-center mb-5">
                        <img src="/pic01.jpg" alt="placeholder" className="w-75"/>
                        <p className="fs-5 mt-3">Github </p>
                        <span className="fs-6">搜索Github用户并显示其资料。技术栈：React</span>
                        <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/gitcard/index.html"}>展示</button>
                    </div>
                    <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                        <img src="/restaurant.gif" alt="placeholder" className="w-75 h-100"/>
                        <p className="fs-5 mt-3">餐馆</p>
                        <span className="fs-6">简易餐馆网站. 技术栈：HTML，CSS.</span>
                        <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/restaurant/index.html"}>展示</button>
                    </div>
                    <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                        <img src="/astronomy.gif" alt="placeholder" className="w-75 h-100"/>
                        <p className="fs-5 mt-3">今日的太空</p>
                        <span className="fs-6">通过NASA API抓取太空每日一图。技术栈：Javascript</span>
                        <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/astronomy/space.html"}>展示</button>
                    </div>
                    <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                        <img src="/pt.gif" alt="placeholder" className="w-75"/>
                        <p className="fs-5 mt-3">健身培训师</p>
                        <span className="fs-6">全栈健身培训师网站，培训师与客户可以注册登录并建立培训计划等等。技术栈：Spring Boot 3，React 18，JWT authentication，BootStrap，H2 in memeory database，AWS S3 and Elastic Beanstalk。</span>
                        <div>
                        <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "http://pt-front.s3-website-us-east-1.amazonaws.com/"}>展示</button>
                        <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "http://pt-front.s3-website-us-east-1.amazonaws.com/"}>Repo</button>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                        <img src="/pic01.jpg" alt="placeholder" className="w-75"/>
                        <p className="fs-5 mt-3">福尔摩斯</p>
                        <span className="fs-6">福尔摩斯资料。</span>
                        <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.location.href = "/blog/index.html"}>展示</button>
                    </div>
                </div>
            </div>
            </>
          }
    </div>
  )
}