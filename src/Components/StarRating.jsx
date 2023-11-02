import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    
    
    useEffect(()=>{
        console.log("rating : " , rating);
    }, [rating])


    return (
        <>
        <div className='  '>
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  ">Rating </div>
        <div className="star-rating  text-gray-900 rounded-md text-center dark:bg-gray-700  p-2 " >
        {[...Array(5)].map((star, index) => {
            index += 1; 
            return (
                <button
                type="button"  key={index} className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                
                >
              <span  key={index} className="star m-2">
  <FontAwesomeIcon icon={faStar} />


              </span>
            </button>
          );
        })}
      </div>
</div>
        </>
    );
}

export default StarRating
