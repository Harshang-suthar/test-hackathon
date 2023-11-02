import React, { useMemo, useRef, useState } from 'react'


function District() {

    const [value, setValue] = useState('');

    function changeSelect(e) {
        setValue(e.target.value);
    }

    useMemo(() => {

        console.log("district : ", value);
    }, [value])


    return (
        <> 


            <label htmlFor="District" className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"> District </label>

            <select value={value} onChange={changeSelect} 
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             required >
                {

                    
                    feedData.map((item, index) => (
                        
                        <option key={index}>{item.district}</option>
                        ))
                        
                    }


            </select>

        </>
    )
}

export default District
