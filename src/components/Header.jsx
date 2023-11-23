import '../App.css'
import { IonLogoGithub } from '../assets/icons';
import { githubLogin } from "../context/AuthProvider";

export default function Header() {

    return (
    <>
        <div className="container-fluid bg">
        <div className="container py-5 text-center">
            <h2 className="fw-bold fs-2">Organize your Life | Work</h2>
            <h1 className="fw-bold fs-1">With TodoJS</h1>
            <h6 className="fs-5 p-4">Keep all the things you need to do in one place with TodoJS</h6>
            <button type="button" className="btn btn-bnw fw-bold" onClick={githubLogin}>SignUp with Github <IonLogoGithub/></button>
        </div>
        <div>
            <div className="mountain">
                <div className="mountain-top">
                <div className="mountain-cap-1"></div>
                <div className="mountain-cap-2"></div>
                <div className="mountain-cap-3"></div>
                </div>
            </div>
            <div className="mountain-two">
                <div className="mountain-top">
                <div className="mountain-cap-1"></div>
                <div className="mountain-cap-2"></div>
                <div className="mountain-cap-3"></div>
                </div>
            </div>
            <div className="mountain-three">
                <div className="mountain-top">
                <div className="mountain-cap-1"></div>
                <div className="mountain-cap-2"></div>
                <div className="mountain-cap-3"></div>
                </div>
            </div>
            <div className="cloud"></div>
        </div>
        </div>
    </>
    )
}