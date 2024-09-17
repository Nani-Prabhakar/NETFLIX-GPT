import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINIAI_KEY } from '../utils/constants';
const GptSearchBar = () => {
  const language = useSelector(store => store.config.language);
  
  const selectedLang = lang[language] || lang.en;

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Act as a movie recommendation system and suggest some movies for the query"
                  +searchText.current.value+
                  "only give me names of five movies, comma separated like the example result given ahead.Example result:Goat,Bahubali,Devara,Eega,Nani";
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
   
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
