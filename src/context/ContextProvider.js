import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bookContext from './bookContext'

const ContextProvider = (props) =>{
    const [istrue, setTrue] = useState(false);
    const [searchValue, setSearchVal] = useState("")
    const [Books, setBook] = useState([]);
    const [bookid, setBookid] = useState(null)

   
        useEffect(()=>{
            const fetchData = async ()=>{
                try{
                    let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
                    setBook(response.data.items)
                }
                catch(error){
                    console.error('Error fetching data:', error);
                }
            }
            fetchData();
        },[istrue])

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            let response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
            setBook((Books) => [...Books, ...(response1.data.items)]);
      
            let response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
            setBook((Books) => [...Books, ...(response2.data.items)])
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
    

    return (
        <bookContext.Provider value={{searchValue, istrue, Books, bookid, setSearchVal, setTrue, setBook, setBookid}}>
            {props.children}
        </bookContext.Provider>
    )
}

export default ContextProvider