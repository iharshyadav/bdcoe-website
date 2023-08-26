import React, { useState, useEffect } from 'react'
import Card from './card'
import axios from 'axios'
import './album.css'
const baseURL = "https://bdcoe.onrender.com/api/v1/member"
const Album = ({ batch }) => {
    const [value, setValue] = useState()
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(baseURL)
                setValue(response.data)
            }
            catch (err) {
                console.log(`Error: ${err.message}`)
            }
            finally {
                setisLoading(false)
            }
        })()
    }, []);
    return <>
        <div className='container-album'>
            {
                isLoading
                    ?
                    [...Array(12)].map((x, i) =>
                        <div class="loader_card" key={i}>
                            <div class="loader__image"></div>
                            <div class="loader_content">
                                <h2> </h2>
                                <h2> </h2>
                            </div>
                        </div>
                    )
                    :
                    value.data
                        .filter(prop =>
                            String(prop.graduation < 2024 ? String(1) : String(prop.graduation)) === String(batch))
                        .map((i) =>
                            <Card
                                key={i._id}
                                name={i.fullname}
                                domain={i.domain}
                                img={i.imageUrl}
                                LI={i.linkedin}
                                GH={i.github}
                                IG={i.instagram}
                            />)
            }
        </div>
    </>
}

export default Album;