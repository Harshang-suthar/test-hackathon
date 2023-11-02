import React, { useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { feedData } from './feedData'
import axios from 'axios'



function FeedBackForm() {

    const [name, setName] = useState("");       //  Name 
    const [psName, setPSName] = useState('');   // police station Name  
    const [pinCode, setPinCode] = useState(0);   // pin code 
    const [suggestion, setSuggestion] = useState('');

    //    this is for star 

    const [rating, setRating] = useState(0);   // rating 
    const [hover, setHover] = useState(0);    // star hover Effect 
    //
    const [district, setDistrict] = useState('');  // for district 

    const currDate = new Date().toLocaleDateString(); // current Date 

    const postData = (e) => {

        e.preventDefault();

        console.log('name : ', name);
        console.log("district : ", district);
        console.log("rating : ", rating);
        console.log("PS Name : ", psName);
        console.log("Pin code:", pinCode);
        console.log("Suggestion ", suggestion);
        console.log("Date : ", currDate);

        // making API ... 

        axios.post("http://localhost:3001/FeedBackForm", {
            name,
            district,
            psName,
            pinCode,
            rating,
            suggestion,
            currDate

        }).then(result => {
            console.log(result)
        })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className='  w-full  bg-orange-100 lg:flex lg:justify-center md:flex  md:justify-center  sm:flex sm:justify-center '>

                <form action="" className='  shadow-2xl bg-blue-200 lg:w-1/3 md:w-2/3  sm:w-0  rounded-lg p-5  mt-1'>
                    <div className=' flex justify-center sm: gap-40 md:gap-52 lg:gap-60'>

                    <div className=''>
                        <img id='G20Imag' className=''src="https://imgs.search.brave.com/g113JF36JPz4OQaddJs5rrZOVSaBzWIizIwbrmhsnys/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXNyby5nb3YuaW4v/ZzIwc2VsbS9hc3Nl/dHMvaW1nL0cyMF90/aGVtZV9sb2dvLnBu/Zy53ZWJw" alt=""  />
                    </div>
                    <div className='flex '>
                        <img id='GujPolice' src="https://upload.wikimedia.org/wikipedia/en/0/0d/Gujarat_Police_Logo.png" alt="" />
                    </div>
                    </div>

                   

                    <div className=' mb-6 '>
                        <label htmlFor="name" className="block mb-2 text-md  font-bold  text-blue-950 " >Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text"
                            className="bg-gray-50 border border-blue-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-blue-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder='Name'
                            id='name' />
                    </div>


                    <div className=' mb-6'>

                        <label htmlFor="District" className="block mb-2 text-md font-bold text-blue-950 "> District </label>

                        <select  value={district} onChange={(e) => setDistrict(e.target.value)}
                            className="bg-gray-50 border border-black text-blue-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Select'
                        >
                             <option value="" disabled selected hidden>Select</option>
                            
                            {
                                feedData.map((item, index) => (

                                    <option key={index}>{item.district}</option>
                                ))

                            }


                        </select>
                    </div>


                    <div className=' mb-6'>
                        <label htmlFor="PSName" className="block mb-2 text-md  font-bold  dark:text-blue-950"> Police Station Name</label>  {/*PSName = police statin Name */}
                        <input type="text" onChange={(e) => setPSName(e.target.value)}
                            className="bg-gray-50 border border-black text-blue-950  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-blue-950 dark:placeholder-gray-400 dark:text-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder='Police Station Name'
                        />
                    </div>


                    <div className=' mb-6'>
                        <label htmlFor="" className="block mb-2 text-md font-bold   dark:text-blue-950" >PinCode</label>
                        <input type="number" onChange={(e) => setPinCode(e.target.value)}
                      
                            placeholder='Pin Code'
                            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-950 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>


                    <div className=' mb-6 '>
                        <label htmlFor="pinCode" className="block mb-2 text-md font-bold text-gray-900 dark:text-blue-950" > Suggestion </label>
                        <textarea placeholder='Write your suggestion ...' type="text" onChange={(e) => setSuggestion(e.target.value)} className="bg-gray-50 border border-blue-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-950 dark:focus:ring-blue-500 dark:focus:border-blue-500" id='pinCode' />
                    </div>



                    <div className=' mb-6'>

                        <div className='  '>
                            <div className="block mb-2 text-xl text-center font-bold  dark:text-blue-950  ">Rating </div>
                            <div className="star-rating  text-gray-900 rounded-md text-center  p-2 " >
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="button" key={index} className={index <= (hover || rating) ? "on" : "off"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}

                                        >
                                            <span key={index} className=" text-4xl star m-2">
                                                <FontAwesomeIcon icon={faStar} />


                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    <div className=' flex justify-center mb-6'>

                        <button onClick={postData} type="Submit" id='submit' className='border bo  bg-slate-700 hover:shadow-md  shadow-xl rounded-lg h-11 w-32 text-lg   p-1'  >Submit</button>

                    </div>
                </form>

            </div>
        </>
    )
}

export default FeedBackForm
