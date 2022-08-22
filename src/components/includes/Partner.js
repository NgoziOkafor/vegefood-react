import { Link } from 'react-router-dom';

export default function Partner() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm partner">
          <div>
            <Link to="/">
              <img
                src="./images/partner-1.png"
                alt="partner"
                style={{ height: '50px' }}
              />
            </Link>
          </div>
        </div>
        <div className="col-sm partner">
          <div>
            <Link to="/">
              <img
                src="./images/partner-2.png"
                alt="partner"
                style={{ height: '50px' }}
              />
            </Link>
          </div>
        </div>
        <div className="col-sm partner">
          <div>
            <Link to="/">
              <img
                src="./images/partner-3.png"
                alt="partner"
                style={{ height: '50px' }}
              />
            </Link>
          </div>
        </div>
        <div className="col-sm partner">
          <div>
            <Link to="/">
              <img
                src="./images/partner-4.png"
                alt="partner"
                style={{ height: '50px' }}
              />
            </Link>
          </div>
        </div>
        <div className="col-sm partner">
          <div>
            <Link to="/">
              <img
                src="./images/partner-5.png"
                alt="partner"
                style={{ height: '50px' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
