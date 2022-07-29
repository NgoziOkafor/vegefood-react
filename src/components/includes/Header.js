import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-success  logo" to="/">
            VEGEFOODS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-success"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOP
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Whishlist
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Single Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Checkout
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span>[0]</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
