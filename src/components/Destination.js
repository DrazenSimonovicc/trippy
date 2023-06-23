import React from "react";
import Picture1 from "../assets/1.jpg";
import Picture2 from "../assets/2.jpg";
import Picture3 from "../assets/3.jpg";
import Picture4 from "../assets/4.jpg";
import Picture5 from "../assets/5.jpg";
import Picture6 from "../assets/6.jpg";
import "../components/DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h2>Popular Destinations</h2>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Como Lake, Italy"
        text=" Como Lake, located in the Lombardy region of northern Italy, is a picturesque and captivating destination. Surrounded by lush green hills and charming villages, it is renowned for its natural beauty and serene atmosphere. The lake itself is the third-largest in Italy and is shaped like an upside-down. Its crystal-clear waters reflect the stunning landscape, creating a breathtaking sight. Visitors can enjoy boat rides across the lake, explore the charming towns of Bellagio, Como, and Varenna, and indulge in the region's delectable cuisine. Whether it's strolling along the waterfront promenades or admiring the majestic villas that dot the shoreline, Como Lake offers a truly idyllic experience for travelers seeking tranquility and natural splendor."
        img1={Picture1}
        img2={Picture2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Venezia, Italy"
        text="Venezia, commonly known as Venice, is an enchanting city situated in northeastern Italy. 
        Renowned for its intricate canal network, romantic gondolas, and stunning architecture, Venice 
        is a true masterpiece of human ingenuity. 
        The city is built on a group of 118 small islands separated by canals and connected by charming bridges.
         Its famous landmarks include St. Mark's Square, 
        the magnificent St. Mark's Basilica, and the iconic Rialto Bridge. 
        Visitors can explore the narrow streets, enjoy boat rides along the canals, 
        and immerse themselves in the rich Venetian culture. With its timeless beauty and captivating atmosphere, 
        Venezia remains a dream destination for travelers from around the world."
        img1={Picture3}
        img2={Picture4}
      />
      <DestinationData
        className="first-des"
        heading="Rome, Italy"
        text="Rome, the eternal city and capital of Italy, is a living testament to millennia of history and culture. With its iconic landmarks, such as the Colosseum, Roman Forum, and Vatican City, Rome stands as a global symbol of grandeur and civilization. Its cobblestone streets, lined with charming trattorias and gelato shops, beckon visitors to immerse themselves in the Italian way of life. From the awe-inspiring art of the Vatican Museums to the serene beauty of the Trevi Fountain, Rome offers a tapestry of experiences. The city's vibrant atmosphere, rich culinary traditions, and timeless architecture make it an unforgettable destination for travelers seeking to delve into the past while embracing the present."
        img1={Picture5}
        img2={Picture6}
      />
    </div>
  );
};

export default Destination;
