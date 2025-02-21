import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AboutComponentCn() {
  return (
    <div className="container-fluid vh-100">
        <div className="fs-3">
            有任何建议？
        </div>
        <div className="fs-4">
            不接受建议。
        </div>
        <div>
            <a className="text-light" href="mailto:nicknyc9024@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="text-light ms-3" href="https://twitter.com/24Shaneli"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="text-light ms-3" href="https://github.com/nickync"><FontAwesomeIcon icon={faGithub} href="https://github.com/nickync"/></a>
        </div>
    </div>
  )
}