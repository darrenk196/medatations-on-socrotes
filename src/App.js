import "./App.css";
import React, { Component } from "react";
import Navagation from "./components/Navagation/Navagation";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import DisplayQuotes from "./components/DisplayQuotes/DisplayQuotes";
import PlatosCave from "./components/PlatoCave/PlatosCave";

const philosophers = {
  socrates: {
    name: "Socrates",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/220px-Socrate_du_Louvre.jpg",
    bio: "Socrates was a classical Greek philosopher credited as one of the founders of Western philosophy, and as being the first moral philosopher, of the Western ethical tradition of thought. An enigmatic figure, he made no writings, and is known chiefly through the accounts of classical writers, especially the writings of his students Plato and Xenophon, and the plays of his contemporary Aristophanes.",
    quotes: [
      "The unexamined life is not worth living.",
      "The only true wisdom is in knowing you know nothing.",
      "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
      "The only good is knowledge and the only evil is ignorance.",
    ],
  },
  plato: {
    name: "Plato",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/220px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    bio: "Plato was an Athenian philosopher during the Classical period in Ancient Greece, founder of the Platonist school of thought, and the Academy, the first institution of higher learning in the Western world. Along with his teacher, Socrates, and his most famous student, Aristotle, Plato laid the foundations of Western philosophy and science. Alfred North Whitehead once noted: 'the safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato.'",
    quotes: ["The beginning is the most important part of the work."],
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      philosophers: philosophers,
    };
  }
  render() {
    return (
      <div className="App ws-normal">
        <Navagation />
        <article className="cf">
          <div className="fl w-100  bg-near-white tc">
            <ProfileCard philosophers={this.state.philosophers.plato} />
            <DisplayQuotes
              quotes={this.state.philosophers.plato.quotes}
              name={this.state.philosophers.plato.name}
            />
          </div>
          <div className="fl w-100  bg-near-white tc">
            <ProfileCard philosophers={this.state.philosophers.socrates} />
            <DisplayQuotes
              quotes={this.state.philosophers.socrates.quotes}
              name={this.state.philosophers.socrates.name}
            />
          </div>
        </article>
        <PlatosCave />
      </div>
    );
  }
}

export default App;
