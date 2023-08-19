import { useState } from 'react';
import adventureData from '@/data/adventure.json';
import Textbox from '../common/Textbox';
import Ending from './Ending';
import Quiz from './Quiz';

export default function Adventure({ name }) {
  const [currentScene, setCurrentScene] = useState('scene1');
  const [playerName, setPlayerName] = useState(name);
  const [updatedSentence, setUpdatedSentence] = useState();
  const [showEnding, setShowEnding] = useState(false);

  const handleContinue = (nextScene) => {
    setCurrentScene(nextScene);
    
    let oldDescription = adventureData.find((scene) => scene.id === nextScene).description
    let newDescription = oldDescription.replace(/nameHere/g, playerName)
  
    setUpdatedSentence(newDescription)
  };

  const handleQuizComplete = (isCorrect, options) => {
    if (JSON.parse(isCorrect)) {
      handleContinue(options.find((option) => option.correct)?.next);
    } else {
      handleContinue(options.find((option) => !option.correct)?.next);
    }
  };

  const handleLastContinue = () => {
    setShowEnding(true);
  };

  if (currentScene == "scene23") {
    return (
      {showEnding} ? (
        <Ending />
      ) : (
        <Textbox description={updatedSentence ? updatedSentence : currentSceneData.description} handleContinue={() => handleLastContinue()}/>
      )
    )
  }

  const currentSceneData = adventureData.find((scene) => scene.id === currentScene);

  return (
    <>
      {!currentSceneData.question && (
        <Textbox description={updatedSentence ? updatedSentence : currentSceneData.description} handleContinue={() => handleContinue(currentSceneData.next)}/>
      )}

      {currentSceneData.question && (
        <Quiz
        question={currentSceneData.question}
        onComplete={(isCorrect) => handleQuizComplete(isCorrect, currentSceneData.question.options)}
        />
      )}
    </>
  );
}