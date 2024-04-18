import "./JustBlack.css";
import FeatureDescription from "../../components/FeatureDescription";
import Highlights from "../../components/Highlights";

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
          imgSrcBit={"salmon"}
          heading={"Seared Salmon Fillet"}
          para={
            "Our locally sourced salmon served with a refreshing buckwheat summer salad."
          }
        />
        <Highlights
          imgSrcBit={"beef"}
          heading={"Rosemary Filet Mignon"}
          para={
            "Our prime beef served to your taste with a delicious choice of seasonal sides."
          }
        />
        <Highlights
          imgSrcBit={"chocolate"}
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
