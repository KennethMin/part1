////////////////////////////////////////////////////////////////////////////
//First there are exercises 1.6-1.12 and starting from line 151 exercises 1.1-1.5
////////////////////////////////////////////////////////////////////////////

/*
//////////////////////////
///EXERCISES 1.6-1.12/////
//////////////////////////

import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, number }) => (
  <div>
    <p>
      {text}: {number}
    </p>
  </div>
);

const Statistics = ({
  good,
  goodText,
  neutral,
  neutralText,
  bad,
  badText,
  average,
  averageText,
  percentage,
  percentageText,
}) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <p>No feedback yet</p>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <StatisticLine text={goodText} number={good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={neutralText} number={neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={badText} number={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={averageText} number={average} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={percentageText} number={percentage} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const percentage = (good / all) * 100;

  ////!!!!I am not sure if the average calculation is right, i tried many different ways of doing it!!!!////

  const goodReview = (props) => {
    setGood(good + 1);
    setAll(all + 1);
    setAverage((good - bad) / all);
  };

  const neutralReview = (props) => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    setAverage(average + 0);
  };

  const badReview = (props) => {
    setBad(bad + 1);
    setAll(all + 1);
    setAverage((good - bad) / all);
  };

  const anecdote = (props) => {
    let x = Math.floor(Math.random() * 8);
    console.log(x);
    setSelected(x);
  };

  return (
    <div>
      {anecdotes[selected]}
      <Button text="next anecdote" onClick={anecdote} />
      <h1>give feedback</h1>
      <Button text="good" onClick={goodReview} />
      <Button text="neutral" onClick={neutralReview} />
      <Button text="bad" onClick={badReview} />
      <h1>statistics</h1>
      <Statistics
        good={good}
        goodText="good"
        neutral={neutral}
        neutralText="neutral"
        bad={bad}
        badText="bad"
        average={average}
        averageText="average"
        percentage={percentage}
        percentageText="percentage"
      />
    </div>
  );
};

export default App;

////////////////////////////

////////////////////////////////
///// EXERCISES 1.1-1.5 /////////
////////////////////////////////

/*

const Header = (props) => {
  return (
    <div>
      <h1>{props.parts}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      {props.part.name} {props.part.exercises}
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  const exercises1 = props.parts[0].exercises;
  const exercises2 = props.parts[1].exercises;
  const exercises3 = props.parts[2].exercises;

  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header parts={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

////////////////////////////
*/

/*
///////////////////////////////////////
//Just following along (no exercises)//
///////////////////////////////////////

import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      {left}
      <Button text="left" onClick={handleLeftClick} />
      <Button text="right" onClick={handleRightClick} />
      {right}
      <p>{allClicks.join("' '")}</p>
      <p>Total {total}</p>
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;




import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};



/*
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};
*/

///////////////////////////
