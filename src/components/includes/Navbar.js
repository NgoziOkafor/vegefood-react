import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-none d-sm-block bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <i class="fa-solid fa-phone"></i>
            <span className="navbar-span">+435603423191</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i class="fa-solid fa-paper-plane text-white"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  vegefood@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
