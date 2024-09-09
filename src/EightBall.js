import React, { useState } from "react";
import Answers from "./Answers";
import { choice } from "./random";
import "./EightBall.css"

/** EightBall: shows random answer and, on click, changes answer,
 *
 * Props:
 * - answers: array of {msg, color} objects
 *
 * State:
 * - answer: {msg, color} of current answer
 */
const EightBall = ({ answers = Answers }) => {
    const newQuestion = {
        msg: "Think of a question",
        color: "black"
    };

    const [answer, setAnswer] = useState(newQuestion);

    const reset = () => {
        setAnswer(newQuestion);
    };

    function handleClick(evt) {
        setAnswer(choice(answers))
    }

    return (
        <div className="EightBall-group">
            <div className="EightBall" onClick={handleClick} style={{ backgroundColor: answer.color }}>
                <b>{answer.msg}</b>
            </div>
            <button className="EightBall-reset" onClick={() => reset()}><b>Reset</b></button>
        </div>
    );
}

export default EightBall