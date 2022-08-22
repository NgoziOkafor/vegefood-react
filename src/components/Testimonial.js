import { Link } from 'react-router-dom';

export default function Testimonial() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div
          className="col-12"
          style={{
            backgroundImage: 'url(./images/bg_3.jpeg)',
            width: '100%',
            height: '650px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no repeat',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="col-6 ms-auto mt-5 hero-two-text text-warning">
            Fresh Fruits, Vegetables & Juices
          </h1>
          <p
            className="col-6 ms-auto "
            style={{ marginTop: '30px', fontSize: '25px' }}
          >
            Always come to us for your fresh fruits, vegetables and juice
          </p>
          <p
            className="col-6 ms-auto"
            style={{ fontFamily: 'Arial Narrow Bold', fontSize: '20px' }}
          >
            We are here to give you nothing but the best
            <span className="text-success">!!!</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          <h4 className="text-center text-success testimonial ">Testimony</h4>
          <h1 className="text-center">Our satisfied customer says</h1>
        </div>
      </div>
      <div className="row  mt-4">
        <div
          className="col-lg-4 col-md-12 col-sm-12 persons"
          style={{ height: '300px' }}
        >
          <div className="bg-warning">
            <div>
              <img
                src="./images/person_1.jpeg"
                className="rounded-circle person1 mt-3 offset-5"
                alt="person"
              />
            </div>
            <p className="person1-testimonial px-2">
              Just got our first order, opened the box to a view of absolute
              abundance of fresh fruits and vegetables. Tried an apple- the
              freshest and the tastiest I have ever tasted. The quality of the
              rest of the box is outstanding, thanks guys we will be ordering
              again.
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-12 col-sm-12 persons"
          style={{ height: '300px' }}
        >
          <div className="bg-warning">
            <div>
              <div>
                <img
                  src="./images/person_2.jpeg"
                  className="rounded-circle person2 mt-3 offset-5"
                  alt="person"
                />
              </div>
              <p className="person2-testimonial px-2">
                First, I have to say thank you very much for your attention to
                detail and for the hand written messages that you always send
                with the boxes. I really appreciate it, it is very nice. Thanks
                for sending us very nice fruits and veggies, we are really happy
                with the service and the goods.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-12 col-sm-12 persons"
          style={{ height: '300px' }}
        >
          <div className="bg-warning">
            <div>
              <img
                src="./images/person_3.jpeg"
                className="rounded-circle person2 mt-3 offset-5"
                alt="person"
              />
            </div>
            <p className="person3-testimonial px-2">
              Thanks for organizing the fruit and vegetable gift box for us, we
              had a message from the recipient saying that they were 'the most
              delicious looking fruit and vegetable she had ever seen' and the
              card was lovely.
              <br />
              Regards
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <hr />
        </div>
      </div>
    </div>
  );
}
