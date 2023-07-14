import { useState } from 'react';

export default function Quiz({ question, onComplete }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option.text);
  };

  const handleAnswerSubmit = () => {
    const selectedOptionObject = question.options.find(
      (option) => option.text === selectedOption
    );

    if (selectedOptionObject) {
      onComplete(selectedOptionObject.correct);
    }
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="quizOption"
                value={option.text}
                checked={selectedOption === option.text}
                onChange={() => handleOptionSelect(option)}
              />
              {option.text}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleAnswerSubmit}>Submit Answer</button>
    </div>
  );
}