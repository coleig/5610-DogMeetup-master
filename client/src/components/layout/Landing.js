import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>

        <header class="masthead text-center text-white">
          <div class="masthead-content">
            <div class="container">
              <h1 class="masthead-heading mb-0">Borq</h1>
              <h2 class="masthead-subheading mb-0">A Dog Meetup App</h2>
              <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">
                Learn More
              </a>
            </div>
          </div>
          <div class="bg-circle-1 bg-circle" />
          <div class="bg-circle-2 bg-circle" />
          <div class="bg-circle-3 bg-circle" />
          <div class="bg-circle-4 bg-circle" />
        </header>

        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2">
                <div class="p-5">
                  <img
                    class="img-fluid rounded-circle"
                    src="img/dog1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                <div class="p-5">
                  <h2 class="display-4">For those who love to bark...</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="p-5">
                  <img
                    class="img-fluid rounded-circle"
                    src="img/dog2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <h2 class="display-4">We salute you!</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2">
                <div class="p-5">
                  <img
                    class="img-fluid rounded-circle"
                    src="img/dog3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6 order-lg-1">
                <div class="p-5">
                  <h2 class="display-4">Let there be borq!</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="py-5 bg-black">
          <div class="container">
            <p class="m-0 text-center text-white small">
              Copyright &copy; Your Website 2019
            </p>
          </div>
        </footer>


      </div>
    );
  }
}

export default Landing;