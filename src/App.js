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
            <h1>Save 15% or more</h1>
            <p>Plan your dream trip with a Gateway Deal</p>
            <button className="deals-button" id="exploreDeals">
              Explore deals
            </button>
          </section>
          <section>
            <h1>Discover Early 2022 Deals</h1>
            <p>Kick off your new-year travels with 15% off stays</p>
            <button className="deals-button" id="findDeals">
              Find deals
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
