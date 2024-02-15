// this React component fetches movie recommendations from the backend based on the URL parameter.
import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";           // used to access parameters from a url.
const Card = () => {
  const { value } = useParams();      // used to get the value of the parameter from the url
  console.log(value)
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // make a GET request to the backend endpoint with the movie input value
        const response = await fetch(`http://localhost:8000/recommend/movies?input=${value}`);    // fetch to make http requst.
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parses the JSON response and sets it to the result variable.
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [value]); 

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data)
  return (
    <div className='items-center justify-center ml-10'>
      <h2 className='text-xl my-5'>Recommended movies similar to <span className='font-bold'>{value}</span></h2>
      <div className=''>
        {data?.map((value,index)=>(             // ? used for optional chaining when the map is null
          <li key={index}>{value}</li>
        ))}
      </div>
    </div>
  );
};

export default Card;
