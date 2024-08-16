import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import client from '../utils/openai';

const GptSearchBar = () => {
  const language = useSelector(store => store.config.language);
  console.log('Selected language:', language);

  // Fallback to English if the language is not found
  const selectedLang = lang[language] || lang.en;

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: "nani movies" }],
      model: 'gpt-4o-mini',
    });
    console.log(chatCompletion.choices);
  };

  return (
    <div className='pt-[10%] flex justify-center' onSubmit={(e) => e.preventDefault()}>
      <form className='bg-black grid grid-cols-12 w-1/2'>
        <input
          ref={searchText}
          className='p-4 m-4 col-span-9'
          type='text'
          placeholder={selectedLang.gptSearchPlaceHolder}
        />
        <button
          className='bg-red-700 m-4 py-2 px-4 text-white rounded-lg col-span-3'
          onClick={handleGptSearchClick}
        >
          {selectedLang.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
