import Button from './common/Button';

export default function Quiz({ question, onComplete }) {
  function handleClick(e) {
    onComplete(e.target.value);
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <div className='flex flex-col'>
        {question.options.map((option, index) => (
          <Button key={index} value={option.correct} text={option.text} onClick={handleClick}/>
        ))}
      </div>
    </div>
  );
}