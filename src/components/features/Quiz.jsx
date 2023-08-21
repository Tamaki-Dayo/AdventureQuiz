import Button from '../common/Button';

export default function Quiz({ question, onComplete }) {
  function handleClick(e) {
    onComplete(e.target.value);
  };

  return (
    <div className='my-auto relative'>
      <h2 className='text-center text-2xl font-extrabold text-white mb-8'>{question.text}</h2>
      <div className='flex flex-col'>
        {question.options.map((option, index) => (
          <Button key={index} value={option.correct} text={option.text} onClick={handleClick}/>
        ))}
      </div>
    </div>
  );
}