import React from "react";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  console.log(props.philosophers.name);
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img
          src={props.philosophers.img}
          className="br-100 h3 w3 dib"
          title={props.philosophers.name}
          alt=""
        />
        <h1 className="f4">{props.philosophers.name}</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f6 black-70">
        {props.philosophers.bio}
      </p>
    </article>
  );
};

export default ProfileCard;
