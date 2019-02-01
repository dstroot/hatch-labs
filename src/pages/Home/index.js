import React, { useEffect } from "react";

// components
import HeroTyped from "../../components/HeroTyped";
import image from "../../media/hatch.jpg";
import TextHero from "../../components/TextHero";
import EventList from "../../components/EventList";

const Home = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Hatch Labs • Welcome`;
  });

  return (
    <div className="">
      <HeroTyped
        image={image}
        tagline="Hatch Labs"
        typed="Hatch your "
        strings={["ideas", "innovations", "products", "solutions"]}
      />
      <TextHero
        heading="MAKE, SHARE, LEARN"
        text="Making is fundamental to what it means to be human. We must make, create, and express ourselves to feel whole. There is something unique about making physical things. Things we make are like little pieces of us and seem to embody portions of our soul."
        link="https://www.boerneneshovedstad.dk/media/1332/maker-movement-manifesto-sample-chapter.pdf"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-4 mb-4 mt-4">Upcoming Events</h1>
            <EventList url={process.env.REACT_APP_AIRTABLE_API_URL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
