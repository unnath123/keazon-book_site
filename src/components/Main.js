import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import card from '../navimages/card.png'

const Main = () =>{
    const [Books, setBook] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
            setBook((Books) => [...Books, ...(response1.data.items)]);
      
            let response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
            setBook((Books) => [...Books, ...(response2.data.items)]);

         
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

      console.log(Books)

    return (
        <div className='Main'>
            <div className='content'>
                <div className='content-up'>
                    {
                        Books.map((book)=>(
                        <div className='card'>
                        <div className='card-left'>
                            <img className='card-img' src={book.volumeInfo.imageLinks.thumbnail} alt='thumbnail'/>
                        </div>
                        <div className='card-right'>
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.</p>
                            <button>Now Read!</button>
                        </div>
                    </div>
                        ))
                    }
                    
                    {/* <div className='card'>
                        <div className='card-left'>
                            <img className='card-img' src={card} alt='thumbnail'/>
                        </div>
                        <div className='card-right'>
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.</p>
                            <button>Now Read!</button>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-left'>
                            <img className='card-img' src={card} alt='thumbnail'/>
                        </div>
                        <div className='card-right'>
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.</p>
                            <button>Now Read!</button>
                        </div>
                    </div> */}
                </div>
                <div className='content-down'></div>

            </div>
        </div>
    )
}

export default Main