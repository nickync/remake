import React, { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import Typewriter from "typewriter-effect";

export default function MainPageComponentCn() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1999)
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
    <div className="">
      {
        loading
        ?
        <div className="d-flex justify-content-center align-items-center expand">
            <h1 style={{fontSize:'5rem'}} className="d-flex landing">ZEN</h1>
        </div>
        :
        <>
        <div className="vh-100 d-flex flex-column justify-content-center">
            <div>
                <div className="mt-5">
                    <img id="logo" src="/java.png" alt="" style={{width:"5rem"}}/>
                </div>
                <h1>
                    <div className="headline mt-2 fs-1"> 
                    <Typewriter onInit={(typewriter) => {typewriter.typeString("你好，我是一个").pauseFor(5000).start()}} options={{loop:true, delay:205}} /> </div>
                    <div><span className="headline2 fs-1">全栈</span> <span className="headline4">程序猿🦍。</span></div>
                </h1>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-end p-5" onClick={() => scrollTo(section1)}>
                <div>
                    <div className="mouse">
                        <button className="btn btn-sm bg-transparent" ><div className="wheel"></div></button>
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
                    <div className="fs-4 w-100 fst-italic fw-bold">我。。。。。</div>
                    <div className="fs-6 mt-1 fw-light text-start mt-5 text-white">等等。。。。</div>
                </div>
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

            <div ref={section2} className="row align-items-center section2 vh-100">
                <div className="col-sm-7 mt-5">
                    <CarouselComponent />
                </div>
                <div className="col-sm-5 mt-5">
                    <div className="fs-4 fst-italic fw-bold text-center mb-3">关于我</div>
                    <div className="fs-6 text-start mt-5 fw-light text-start mt-5 text-white">
                        你好，
                        <br></br>
                        在成为软件工程师之前，我曾经是<i>摩根大通银行</i>的资深客户经理。在我多年的客户经理生涯中，我有幸成为全美最杰出的客户经理之一，并多次获得各种奖项与荣誉。而现在，我作为一名软件开发者加入了全球外汇期权交易开发者团队！
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
                    <div className="text-center fs-4 fw-bolder text-decoration-underline mb-1 fst-italic">项目</div>
                </div>
                <div className="d-flex flex-wrap">
                    <div className="row m-5">
                    <div className="col-sm-4 text-center flex-column d-flex align-items-center mb-5">
                            <img src="/fx.gif" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">外汇平台</p>
                            <span className="fs-6">本项目提供200多种外汇汇率，并包含任意外汇转换功能以及汇率历史图表。 技术栈：网页版 - React, Bootstrap, axios; Java App：JavaFX</span>
                            <div>
                                <button className="btn btn-sm btn-dark rounded-4 me-1" onClick={() => window.open("https://fx-currency.onrender.com", '_blank')}>展示</button>
                                <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("https://github.com/nickync/fx-currency-rate", '_blank')}>Repo</button>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center flex-column d-flex align-items-center mb-5">
                            <img src="/gitcard.gif" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">Github </p>
                            <span className="fs-6">搜索Github用户并显示其资料。技术栈：React</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/gitcard/index.html", '_blank')}>展示</button>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/pt.gif" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">健身培训师</p>
                            <span className="fs-6">全栈健身培训师网站，培训师与客户可以注册登录并建立培训计划等等。技术栈：Spring Boot 3，React 18，JWT authentication，BootStrap，H2 in memeory database，AWS S3 and Elastic Beanstalk。</span>
                            <div>
                            <button className="btn btn-sm btn-dark rounded-4 me-1" onClick={() => window.open("http://pt-front.s3-website-us-east-1.amazonaws.com/", '_blank')}>展示</button>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("http://pt-front.s3-website-us-east-1.amazonaws.com/", '_blank')}>Repo</button>
                            </div>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/restaurant.gif" alt="placeholder" className="w-75 h-100"/>
                            <p className="fs-5 mt-3">餐馆</p>
                            <span className="fs-6">简易餐馆网站. 技术栈：HTML，CSS.</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/restaurant/index.html", '_blank')}>展示</button>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/astro.gif" alt="placeholder" className="w-75 h-100"/>
                            <p className="fs-5 mt-3">星空</p>
                            <span className="fs-6">通过NASA API抓取太空每日一图。技术栈：Javascript</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/astronomy/index.html", '_blank')}>展示</button>
                        </div>
                        <div className="col-sm-4 text-center d-flex flex-column align-items-center mb-5">
                            <img src="/pic01.jpg" alt="placeholder" className="w-75"/>
                            <p className="fs-5 mt-3">福尔摩斯</p>
                            <span className="fs-6">福尔摩斯资料。</span>
                            <button className="btn btn-sm btn-dark rounded-4" onClick={() => window.open("/blog/index.html", '_blank')}>展示</button>
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
          }
    </div>
  )
}