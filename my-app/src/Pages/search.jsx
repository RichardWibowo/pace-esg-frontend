import React, {useState} from 'react'

const Search = () =>{
    const [searchInput, setSearchInput] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
    return ( 
    <div className='bg-gradient-to-r from-green-400 flex justify-center items-center'>   
        <h1 className= "md:text-5xl sm:text-4xl text-3xl font-bold m:py-6">
            find your super
        </h1>
        <div>
        <input
            type="text"
            placeholder="Search here"
            onChange={inputHandler}
            value={searchInput} />
        </div>
    </div>
    )
}

export default Search