import React from 'react'; // Import react module
import Frame from './Frame.jsx'
import ScreenRow from './ScreenRow.jsx'

// Create our screen component as a functional component.
// It would display two screen rows, 1 for questions and the other for the answer
// The value would be passed down from it's parent component as a prop
const Screen = (props) => {
  return (
    <div className="screen">
        <ScreenRow value={props.question}/>
        <ScreenRow value={props.prevAnswer}/>
        <ScreenRow value={props.answer}/>
    </div>
  );
} 

// export our component
export default Screen;