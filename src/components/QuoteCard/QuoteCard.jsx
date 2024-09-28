import React from 'react';

function QuoteCard({ quote }) {
  return (
    <div className="w-full max-w-screen bg-slate-600 rounded-lg shadow-lg p-6 mb-4 my-7">
      <p className="text-white font-bold text-base mb- text-center">"{quote.quote}"</p>
      <div className="font-bold text-gray-900 text-xl text-center">- {quote.author}</div>
    </div>
  );
}

export default QuoteCard;
