import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/madrid.jpg";
import Trip2 from "../assets/borabora.jpg";
import Trip3 from "../assets/pariz.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h2>Recent Trips</h2>
      <p>You can discover unique destinations using Google maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Madrid"
          text="
A trip to Madrid, the vibrant capital of Spain, promises a delightful blend of history, culture, and excitement. From exploring the majestic Royal Palace and iconic Prado Museum to indulging in delectable tapas and experiencing the energetic nightlife, Madrid offers a captivating journey that will leave visitors with unforgettable memories."
        />
        <TripData
          image={Trip2}
          heading="Trip in Bora Bora"
          text="
          Embarking on a trip to Bora Bora, a tropical paradise in French Polynesia, guarantees an idyllic escape. With its crystal-clear turquoise waters, overwater bungalows, and pristine white sand beaches, Bora Bora captivates with its natural beauty. Snorkeling, diving, and unwinding amidst breathtaking scenery make it a dream destination for relaxation and romance.
"
        />
        <TripData
          image={Trip3}
          heading="Trip in Paris"
          text="A trip to Paris, the City of Lights, is a mesmerizing experience. From the iconic Eiffel Tower and charming streets of Montmartre to the magnificent Louvre Museum and picturesque Seine River, Paris offers a rich tapestry of history, culture, and culinary delights. Indulge in world-class cuisine, explore art and architecture, and immerse yourself in the city's romantic ambiance."
        />
      </div>
    </div>
  );
};

export default Trip;
