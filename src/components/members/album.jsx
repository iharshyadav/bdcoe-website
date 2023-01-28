import React, { useState, useEffect } from 'react'
import Card from './card'
import axios from 'axios'
import './album.css'
const baseURL = "https://bdcoe.onrender.com/api/v1/member"
const Album = ({ batch }) => {

    const [value, setValue] = useState()
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setValue(response.data);
        });
    }, []);

    if (!value) return null;
    if (value.imageUrl) return 11;
    return <>

        <div className='container-album'>
            {value.data
                .filter(prop =>
                    String(prop.graduation < 2023 ? String(1) : String(prop.graduation)) === String(batch))
                .map((i) =>
                    <Card
                        key={i._id}
                        name={i.fullname}
                        domain={i.domain}
                        img={i.imageUrl}
                        LI={i.linkedin}
                        GH={i.github}
                        IG={i.instagram}
                    />)}
        </div>
    </>
}

export default Album;