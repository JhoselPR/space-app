import { useState, useEffect } from 'react';
import './Astros.css';
import CircularProgress from '@mui/material/CircularProgress';

function AstroCard({ name, craft }){
    return (
        <div className='astro-card'>
            <p className="astro-name">{name}</p>
            <p className="astro-craft">{craft}</p>
        </div>
    )
}

function Astros(){
    const API_URL = 'http://api.open-notify.org/astros.json';
    const [astros, setAstros] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(API_URL);
            const res = await data.json();
            setAstros(res.people);
        }

        fetchData().catch((err) => console.error(err));
    }, [])

    return (
        <>
        <h1 className="title-astros">Astronauts</h1>
        <div className="astros-container">
            {!astros ? (
                <CircularProgress sx={{ color: "grey.500" }}/>
            ) : (
                astros.map((astro, idx) => (
                    <AstroCard key={idx} {...astro}/>)
                ))
            }
        </div>
        </>
    )
}

export default Astros;