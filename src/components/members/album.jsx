import React,{useState} from 'react'
import Card from './card'
import axios from 'axios'
import './album.css'
const baseURL ="https://bdcoe.onrender.com/api/v1/member"
const Album = ({batch}) => {
    // const num = [1,2,3,4,5,6,7,8,9]
    const [value,setValue] = useState()
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setValue(response.data);
        });
      }, []);
    //console.log(value)
    if (!value) return null;
    if(value.imageUrl) return 11;
    return <>
    
    <div className='container-album'>
        {value.data
        .filter(prop=>
            String(prop.graduation<2023 ? String(1) : String(prop.graduation)) === String(batch))
        .map((i)=> 
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