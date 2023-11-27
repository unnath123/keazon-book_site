import React, { useContext } from 'react'
import Navbar from './Navbar'
import bookContext from '../context/bookContext';
import card from '../navimages/card.png'

const SecondPage = () => {
const {Books,bookid,setBookid} = useContext(bookContext);

  return (
    <div>
        <Navbar/>
        {
                Books.map((book)=>(
                    (book.id === bookid) && 
                    <div className='card-one'>
            <div className='card1-left'>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail" />
            </div>
            <div className='card1-right'>
                <div className='divi'>
                    <div className='card-inside '>
                        <div >
                            <h1>{book.volumeInfo.title}</h1>
                            <h3>{book.volumeInfo.authors[0]}</h3>
                        </div>
                        <div>
                            <p>{book.volumeInfo.publishedDate}</p>
                        </div>
                    </div> 
                    <div>
                        <p>{book.volumeInfo.description}</p>
                    </div> 
                    <div>
                        <span>AVG rating</span>
                        <span>Rating count:</span>
                        <span>Publisher: {book.volumeInfo.publisher}</span>
                        <span>Language</span>
                    </div>
                    <div className='btns'>
                        <button>Now Read!</button>
                        <button>More Info</button>
                    </div>
                </div>
            </div>
        </div>
                ))
            }
        {/* <div className='card-one'>
            <div className='card1-left'>
                <img src={card} alt="thumbnail" />
            </div>
            <div className='card1-right'>
                <div className='divi'>
                    <div className='card-inside '>
                        <div >
                            <h1>Title</h1>
                            <h3>Authors</h3>
                        </div>
                        <div>
                            <p>20-12-2023</p>
                        </div>
                    </div> 
                    <div>
                        <p>React Hook useEffect has a missing dependency:  React Hook useEffect has a missing dependency: 'searchValue'. Either include it or remove the dependency array'searchValue'. Either include it or remove the dependency array</p>
                    </div> 
                    <div>
                        <span>AVG rating</span>
                        <span>Rating count:</span>
                        <span>Publisher</span>
                        <span>Language</span>
                    </div>
                    <div className='btns'>
                        <button>Now Read!</button>
                        <button>More Info</button>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default SecondPage