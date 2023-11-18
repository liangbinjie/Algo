import './App.css'

export default function Header() {
    return (
    <>
        <div className="container-fluid bg">
        <div className="container py-5 text-center">
            <h2 className="fw-bold fs-2">Organize your Life | Work</h2>
            <h1 className="fw-bold fs-1">With TodoJS</h1>
            <h6 className="fs-5 p-4">Keep all the things you need to do in one place with TodoJS</h6>
            <button type="button" className="btn btn-bnw fw-bold">Try for free</button>
        </div>
        <div>
            <div class="mountain">
                <div class="mountain-top">
                <div class="mountain-cap-1"></div>
                <div class="mountain-cap-2"></div>
                <div class="mountain-cap-3"></div>
                </div>
            </div>
            <div class="mountain-two">
                <div class="mountain-top">
                <div class="mountain-cap-1"></div>
                <div class="mountain-cap-2"></div>
                <div class="mountain-cap-3"></div>
                </div>
            </div>
            <div class="mountain-three">
                <div class="mountain-top">
                <div class="mountain-cap-1"></div>
                <div class="mountain-cap-2"></div>
                <div class="mountain-cap-3"></div>
                </div>
            </div>
            <div class="cloud"></div>
        </div>
        </div>
    </>
    )
}