import React from "react";
import ReactPlayer from "react-player";

const PlatosCave = () => {
  return (
    <div>
      <section className="center bg-light-gray pa3 ph5-ns">
        <h1 className="mt0">Plato Cave</h1>
        <p className="lh-copy measure">
          The Allegory of the Cave is a famous philosophical concept presented
          by the ancient Greek philosopher Plato in his book "The Republic." In
          the allegory, Plato describes a group of people who have been chained
          in a cave since birth, with their backs to a wall, unable to turn
          their heads. Behind them, there is a fire, and between the fire and
          the prisoners, there is a raised walkway. People walk along the
          walkway, and their shadows are cast on the wall in front of the
          prisoners. The prisoners believe that these shadows are the only
          reality, and they give names to the shadows and consider them to be
          real objects. One of the prisoners is eventually freed and forced to
          leave the cave, where he is able to see the world outside for the
          first time. At first, he is blinded by the sunlight, but eventually,
          he is able to see the world as it truly is, with objects and colors
          that he had never imagined before. He realizes that his previous
          understanding of reality was limited and incomplete. The allegory of
          the cave is often used to illustrate the importance of education and
          the pursuit of knowledge, and how our understanding of reality can be
          limited by our experiences and perceptions. It also highlights the
          power of perspective and the need to question our assumptions and
          beliefs to gain a deeper understanding of the world around us!
        </p>
        <ReactPlayer url="https://www.youtube.com/watch?v=1RWOpQXTltA" />
      </section>
    </div>
  );
};

export default PlatosCave;
