'use client'
// pages/practice.js
import Layout from '../components/layout';
import { useState } from 'react';

const questions = [
  { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], answer: 'Paris' },
];

export default function Practice() {
  const [selected, setSelected] = useState({});
  const [result, setResult] = useState(null);

  const checkAnswers = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selected[index] === q.answer) score++;
    });
    setResult(`You got ${score} out of ${questions.length} correct!`);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Practice Questions</h1>
      {questions.map((q, index) => (
        <div key={index} className="mt-4">
          <p>{q.question}</p>
          <div className="flex space-x-2">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected({ ...selected, [index]: opt })}
                className={`px-4 py-2 border ${selected[index] === opt ? 'bg-blue-500 text-white' : 'bg-white'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={checkAnswers} className="mt-4 px-4 py-2 bg-green-500 text-white">Submit</button>
      {result && <p className="mt-4">{result}</p>}
    </Layout>
  );
}
