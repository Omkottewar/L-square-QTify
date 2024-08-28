import axios from 'axios'

const backend_URL = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async()=>{
    try{
        const res = await axios.get(`${backend_URL}/albums/top`);
        return res.data;
    }
    catch(e){
        console.log(e)
    }
}