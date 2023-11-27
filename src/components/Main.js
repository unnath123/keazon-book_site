import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import card from '../navimages/card.png'
import bookContext from '../context/bookContext'
import { useNavigate } from 'react-router-dom'

const Main = () =>{
    // const [Books, setBook] = useState([]);
    // const [searchValue, setSearchValue] = useState("")

    let {searchValue, Books, bookid, setBookid} = useContext(bookContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         let response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
    //         setBook((Books) => [...Books, ...(response1.data.items)]);
      
    //         let response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
    //         setBook((Books) => [...Books, ...(response2.data.items)]);

         
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
      
    //     fetchData();
    //   }, []);

    function viewMore(e){
        navigate("/SpecificBook")
        // setBookid(e.target.value)
        
    }
    

    console.log("input value",searchValue)

    return (
        <div className='Main'>
            <div className='content'>
                <div className='content-up'>
                    {
                      (Books.slice(0, 3)).map((book)=>(
                        <div className='card' key={book.id} onClick={()=>{ 
                            setBookid(book.id);
                            viewMore();
                        }}>
                        <div className='card-left'>
                            <img className='card-img' src={book.volumeInfo.imageLinks.thumbnail} alt='thumbnail'/>
                        </div>
                        <div className='card-right'>
                            <h2>Title</h2>
                            <p>{book.volumeInfo.title || "I have this book, and this book is very good to read and very informative"}</p>
                            <a href={book.volumeInfo.previewLink} target='_blank'><button>Now Read!</button></a>
                        </div>
                    </div>
                        ))
                    }
                    
                </div>
                <div className='content-down'>
                    <h2>More Books</h2>
                    <div className='Books-gallery'>
                        {
                            (Books.slice(3)).map((book)=>(
                                <img src={book.volumeInfo.imageLinks.thumbnail}/>
                            ))
                        }
                        
                        {/* <img src={card}/>
                        <img src={card}/> */}
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main