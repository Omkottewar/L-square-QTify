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

export const fetchNewAlbums =async()=>{
    try{
        const res = await axios.get(`${backend_URL}/albums/new`)
        return res.data;
    }
    catch(e){
        console.log(e)
    }

}

export const fetchSongs=async ()=>{
    try{
        const res = await axios.get(`${backend_URL}/songs`);
            return res.data;
    }
    catch(e){
        console.log(e);
    }
}