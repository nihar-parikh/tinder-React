import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";
import { collection, getDocs } from "firebase/firestore/lite";

function TinderCards() {
  const [people, setPeople] = useState([]);
  //Pushing item in array in react.
  //setPeople([...people, "krishna", "radha"]);

  // useEffect(() => {
  //   const unsubscribe = database
  //     .collection("people")
  //     .onSnapshot((snapshot) =>
  //       setPeople(snapshot.docs.map((doc) => doc.data()))
  //     );
  // }, []);

  console.log("people", people);

  useEffect(() => {
    const peopleCol = collection(database, "people");
    console.log("peopleCol", peopleCol);
    const peopleSnapshot = getDocs(peopleCol);
    console.log("peopleSnapshot", peopleSnapshot);
    setPeople(peopleSnapshot.docs.map((doc) => doc.data()));
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (person) => {
    console.log(person + " left the screen");
  };
  return (
    <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name} //always give keys in react, allows to effficiently re-render a list for large number of people
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen(people.name)}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
