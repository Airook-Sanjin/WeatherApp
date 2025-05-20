import React from "react";

const App = () => {
  return (
    <div className="Container">
      {/* Search Section */}
      <div className="Search-Section">
        <form action="#" className="Search-Form">
          <span className="material-symbols-outlined">search</span>
          <input
            type="search"
            className="search-input"
            placeholder="Enter a city"
          />
          <button type="submit">
            <span classname="material-symbols-outlined">
my_location
</span>
          </button>
        </form>

      </div>
      {/* CurrentWeatherSection */}
      <div className="Weather-Section">
        <section className="CurrentWeather-Container">
        <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
        <h3 className="Temp">14<span>°F</span></h3>
        <p classname="Description">Clear</p>
        </section>
      </div>
      <div className="Forcast-Section">
        <ul className="Weather-list">
          <li className="Weather-item">
            <p className="time">00:00</p>
            <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
            <h3 className="Temp">14<span>°F</span></h3>
          
          </li>
           <li className="Weather-item">
            <p className="time">00:00</p>
            <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
            <h3 className="Temp">14<span>°F</span></h3>
          
          </li>
           <li className="Weather-item">
            <p className="time">00:00</p>
            <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
            <h3 className="Temp">14<span>°F</span></h3>
          
          </li>
           <li className="Weather-item">
            <p className="time">00:00</p>
            <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
            <h3 className="Temp">14<span>°F</span></h3>
          
          </li>
           <li className="Weather-item">
            <p className="time">00:00</p>
            <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
            <h3 className="Temp">14<span>°F</span></h3>
          
          </li>
           <li className="Weather-item">
            <p className="time">00:00</p>
            <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
            <h3 className="Temp">14<span>°F</span></h3>
          
          </li>
           <li className="Weather-item">
            <p className="time">00:00</p>
            <img className="Current-Weather_img" src="/icons/clear.svg" alt="Clear" />
            <h3 className="Temp">14<span>°F</span></h3>
          
          </li>
        </ul>
        

      </div>
    </div>
  );
};

export default App;
