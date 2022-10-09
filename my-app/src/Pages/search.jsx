import React, {useState} from 'react'

const Search = () =>{
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
      };
    return ( 
    <div className='bg-gradient-to-r from-green-400 '>   
        <div className='flex justify-center items-center'>
            <h1 className= "md:text-5xl sm:text-4xl text-3xl font-bold m:py-6">
                find your super
            </h1>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='super'
              placeholder='find your super now'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Find now
            </button>
          </div>
    </div>
    
    )
}

export default Search