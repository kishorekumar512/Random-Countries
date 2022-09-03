import "./App.css";
// import myImage from '"https://flagpedia.net/data/flags/w380/de.png';

export default function App() {
  return (
    <div>
      <div className="App">
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="flex-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/de.png"
                alt=""
              ></img>
              <h4>Germany</h4>
              <p>population: 81,770,900</p>
              <p>region: Europe</p>
              <p>capital: Berlin</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/au.png"
                alt=""
              ></img>
              <h4>Australia</h4>
              <p>population: 91,637,312</p>
              <p>region: Aus</p>
              <p>capital: Canberra</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/in.png"
                alt=""
              ></img>
              <h4>India</h4>
              <p>population:1,3179,983,812</p>
              <p>region: Asia</p>
              <p>capital: New Delhi</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/dz.png"
                alt=""
              ></img>
              <h4>ALGERIA</h4>
              <p>population: 40,400,000</p>
              <p>region: AFRICA</p>
              <p>capital: ALGERS</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/us.png"
                alt=""
              ></img>
              <h4>UNITED STATES OF AMERICA</h4>
              <p>population: 325,947,000</p>
              <p>region: AMERICAS</p>
              <p>capital: WASHINGTON D.C</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/br.png"
                alt=""
              ></img>
              <h4>BRAZIL</h4>
              <p>population: 206,385,893</p>
              <p>region:AMERICAS</p>
              <p>capital: BRASILIA</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/af.png"
                alt=""
              ></img>
              <h4>AFGHANISTAN</h4>
              <p>population:27,658,145</p>
              <p>region:ASIA</p>
              <p>capital: KABUL</p>
            </div>
          </div>

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="box-center text-center">
              <img
                src="https://flagpedia.net/data/flags/w580/jp.png"
                alt=""
              ></img>
              <h4>JAPAN</h4>
              <p>population:25,654,000</p>
              <p>region: ASIA</p>
              <p>capital: TOKYO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
