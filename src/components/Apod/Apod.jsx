import './Apod.css';
import { useState, useEffect } from 'react';

const Apod = () => {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(API_URL);
            const res = await data.json();
            setData(res);
        }

        fetchData().catch((err) => console.error(err));
    }, [])

    return (
        <div className='apod-content'>
            <h1 className="title-apod">{data.title}</h1>
            <h2 className="date-apod">{data.date}</h2>
            <p className="text-apod">{data.explanation}</p>
            <img src={data.hdurl} alt={data.title} className='img-apod'/>
        </div>
    )
}

export default Apod
