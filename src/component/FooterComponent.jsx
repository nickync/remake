import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function FooterComponent() {
  return (
    <div className="mt-auto">
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top border-dark">
            <div className="col-md-4 d-flex align-items-center fs-6">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">ZEN</a>
                <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-light" href="mailto:nicknyc9024@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                <li className="ms-3"><a className="text-light" href="https://twitter.com/24Shaneli"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="ms-3"><a className="text-light" href="https://github.com/nickync"><FontAwesomeIcon icon={faGithub} href="https://github.com/nickync"/></a></li>
            </ul>
        </footer>
    </div>
  )
}