import "./App.css";
import Header from "./components/Header";
import SearchLocation from "./components/SearchLocation.js";

function App() {
  return (
    <div>
      <Header />
      <SearchLocation />
      <div className="container">
        <div className="travel-for-work">
          <input type="checkbox" id="travel-checkbox" name="travel" />
          <label for="travel">I'm traveling for work</label>
        </div>
        <section id="covidInfo">
          <h1>
            Get the advice you need. Check latest COVID-19 restrictions before
            you travel.
            <a href="wg"> Learn more</a>
          </h1>
        </section>
        <div className="deals">
          <section>
            <img
              className="deals-image"
              alt=""
              src="https://cf.bstatic.com/static/img/deals/index_banner_getaway2020/312c784f761fc4f1e315742e93b9fa10d96ea67d.jpg"
            />
            <container>
              <h1>Save 15% or more</h1>
              <p>Plan your dream trip with a Gateway Deal</p>
              <button className="deals-button" id="exploreDeals">
                Explore deals
              </button>
            </container>
          </section>
          <section>
            <img
              className="deals-image"
              alt=""
              src="https://cf.bstatic.com/static/img/deals/index_banner_early20/d9154686dc1d8ce971487c5cd2f67073d1230167.jpg"
            />
            <container>
              <h1>Discover Early 2022 Deals</h1>
              <p>Kick off your new-year travels with 15% off stays</p>
              <button className="deals-button" id="findDeals">
                Find deals
              </button>
            </container>
          </section>
        </div>
        <section className="explore-USA">
          <h1>Explore United States of America</h1>
          <p>These popular destinations gave a lot to offer</p>
          <div className="explore-USA-card-container">
            <div className="explore-card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/349720.webp?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o="
                alt="Las Vegas"
              />
              <h2>Las Vegas</h2>
              <p>565 properties</p>
            </div>
            <div className="explore-card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/620103.webp?k=c07eb50383bfb4bedd11308fb59876bff7ef522dc379f4d96a48812cecaf45eb&o="
                alt="Orlando"
              />
              <h2>Orlando</h2>
              <p>3,684 properties</p>
            </div>
            <div className="explore-card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o="
                alt="Myrtle Beach"
              />
              <h2>Myrtle Beach</h2>
              <p>2,642 properties</p>
            </div>
            <div className="explore-card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/689603.webp?k=59e9972a1882387f6a8f35f6f2193c7f4e5203723651307392170ce756247bb7&o="
                alt="Miami Beach"
              />
              <h2>Miami Beach</h2>
              <p>718 properties</p>
            </div>
            <div className="explore-card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/689617.webp?k=edf88994b0c6b4c060300b942efdc1242289d1a695fcea13493e20596edc7daa&o="
                alt="Panama City Beach"
              />
              <h2>Panama City Beach</h2>
              <p>2,077 properties</p>
            </div>
            <div className="explore-card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/856691.webp?k=9cf21942b6aa8706b8721525de6a06b55e8980139ee21f53593982a8e988a55a&o="
                alt="New York"
              />
              <h2>New York</h2>
              <p>1,381 properties</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
