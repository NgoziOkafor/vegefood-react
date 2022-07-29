export default function SubHero() {
  return (
    <>
      <div className="container ">
        <div className="row px-5">
          <div className="col-lg-3 col-md-6 mt-5">
            <i
              class="fa-solid fa-2x fa-truck-fast rounded-circle offset-3 text-white"
              style={{
                height: '100px',
                width: '100px',
                backgroundColor: 'pink',
              }}
            ></i>
            <div className="subHero-text">
              <h6 className="text-center">FREE SHIPPING</h6>
              <p className="text-center">ON ORDER OVER &euro;100</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5">
            <i
              class="fa-solid fa-2x fa-apple-whole rounded-circle offset-3 text-white"
              style={{
                height: '100px',
                width: '100px',
              }}
            ></i>
            <div className="subHero-text">
              <h6 className="text-center">ALWAYS FRESH</h6>
              <p className="text-center">PRODUCT WELL PACKAGED</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5">
            <i
              className="fa-solid fa-2x fa-award rounded-circle offset-3 text-white"
              style={{
                height: '100px',
                width: '100px',
              }}
            ></i>
            <div className="subHero-text">
              <h6 className="text-center">SUPERIOR PRODUCTS</h6>
              <p className="text-center">QUALITY PRODUCTS</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5">
            <i
              className="fa-solid fa-2x fa-headset rounded-circle offset-3 text-white"
              style={{
                height: '100px',
                width: '100px',
              }}
            ></i>
            <div className="subHero-text">
              <h6 className="text-center me-3 support-text">SUPPORTING YOU</h6>
              <p className="text-center ">24/7 SUPPORT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
