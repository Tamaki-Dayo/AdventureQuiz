import { useState } from 'react';
import adventureData from '../data/adventure.json';
import Quiz from './Quiz';

export default function Adventure() {
  const [currentScene, setCurrentScene] = useState('scene1');

  const handleContinue = (nextScene) => {
    setCurrentScene(nextScene);
  };

  const handleQuizComplete = (isCorrect, options) => {
    if (isCorrect) {
      handleContinue(options.find((option) => option.correct)?.next);
    } else {
      handleContinue(options.find((option) => !option.correct)?.next);
    }
  };

  if (!currentScene) {
    return (
      <div>
        <h1>Congratulations!</h1>
        <p>You have completed the adventure.</p>
      </div>
    );
  }

  const currentSceneData = adventureData.find((scene) => scene.id === currentScene);

  return (
    <div>
      <h1>Adventure Game</h1>
      <p>{currentSceneData.description}</p>

      {currentSceneData.question && (
        <Quiz
          question={currentSceneData.question}
          onComplete={(isCorrect) => handleQuizComplete(isCorrect, currentSceneData.question.options)}
        />
      )}

      {!currentSceneData.question && (
        <button onClick={() => handleContinue(currentSceneData.next)}>Continue</button>
      )}
    </div>
  );
}