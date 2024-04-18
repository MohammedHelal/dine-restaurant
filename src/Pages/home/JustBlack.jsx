import "./JustBlack.css";
import FeatureDescription from "../../components/FeatureDescription";
import Highlights from "../../components/Highlights";

import salmon from "../../assets/images/homepage/salmon-desktop-tablet.jpg";
import salmonMobile from "../../assets/images/homepage/salmon-mobile.jpg";

import beef from "../../assets/images/homepage/beef-desktop-tablet.jpg";
import beefMobile from "../../assets/images/homepage/beef-mobile.jpg";

import chocolate from "../../assets/images/homepage/chocolate-desktop-tablet.jpg";
import chocolateMobile from "../../assets/images/homepage/chocolate-mobile.jpg";

function JustBlack() {
  return (
    <section className="flex just-black">
      <FeatureDescription
        classes={"highlights-intro"}
        heading={"A few highlights from our menu"}
        para={`We cater for all dietary requirements, 
          but here’s a glimpse at some of our diner’s favourites. 
          Our menu is revamped every season.`}
      />
      <article className="highlights-wrapper">
        <Highlights
          img={salmon}
          imgMobile={salmonMobile}
          heading={"Seared Salmon Fillet"}
          para={
            "Our locally sourced salmon served with a refreshing buckwheat summer salad."
          }
        />
        <Highlights
          img={beef}
          imgMobile={beefMobile}
          heading={"Rosemary Filet Mignon"}
          para={
            "Our prime beef served to your taste with a delicious choice of seasonal sides."
          }
        />
        <Highlights
          img={chocolate}
          imgMobile={chocolateMobile}
          heading={"Summer Fruit Chocolate Mousse"}
          para={
            "Creamy mousse combined with summer fruits and dark chocolate shavings."
          }
        />
      </article>
    </section>
  );
}

export default JustBlack;
