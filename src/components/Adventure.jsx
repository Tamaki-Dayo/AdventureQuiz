import { useState } from 'react';
import adventureData from '../data/adventure.json';
import Textbox from './common/Textbox';
import Quiz from './Quiz';

export default function Adventure({ name }) {
  const [currentScene, setCurrentScene] = useState('scene1');
  const [playerName, setPlayerName] = useState(name)
  const [updatedSentence, setUpdatedSentence] = useState()

  const handleContinue = (nextScene) => {
    setCurrentScene(nextScene);

    // Change "scene6" to second last scene
    if(currentScene !== "scene6") {      
      let oldDescription = adventureData.find((scene) => scene.id === nextScene).description
      let newDescription = oldDescription.replace(/nameHere/g, playerName)
  
      setUpdatedSentence(newDescription)
    }
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
      <div className='flex items-center justify-center h-screen tracking-widest'>
        <div className='mb-24'>
          <h1 className="text-center text-8xl font-extrabold text-white mb-16">Credits</h1>
          <div className="grid grid-cols-2 gap-x-20 gap-y-8">
            <h2 className="text-end text-4xl text-gray-300">Chief Producer</h2>
            <p className="text-4xl text-gray-100">Vern</p>
            <h2 className="text-end text-4xl text-gray-300">Art Director</h2>
            <p className="text-4xl text-gray-100">Tempest</p>
            <h2 className="text-end text-4xl text-gray-300">Lead Developer</h2>
            <p className="text-4xl text-gray-100">Tamaki</p>
          </div>
        </div>
      </div>
    );
  }

  const currentSceneData = adventureData.find((scene) => scene.id === currentScene);

  return (
    <>
      {/* <h1>Adventure Game</h1>
      {updatedSentence ? <p>{updatedSentence}</p> : <p>{currentSceneData.description}</p>}

      {currentSceneData.question && (
        <Quiz
          question={currentSceneData.question}
          onComplete={(isCorrect) => handleQuizComplete(isCorrect, currentSceneData.question.options)}
        />
      )}

      {!currentSceneData.question && (
        <button onClick={() => handleContinue(currentSceneData.next)}>Continue</button>
      )} */}
      <Textbox />
    </>
  );
}