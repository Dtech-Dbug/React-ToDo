import React , {useState} from 'react';
import list from '../Images/list.jpg'

export const Todo = ()=> {
    const [input , setInput] = useState('')

    const [items , setItems] = useState([])

    const addItem = (e)=>{

        if(!input){

        }
       

     else{
        setItems ([...items ,input])
        setInput('')
        
     }
    }



    return (
        <div className='parentDiv'>
            
            <div className='child-div' >
                <figure>
                  <img src={list}>
                  </img>
                </figure>

                   <figcaption>
                     Start making your todo
                  </figcaption>

            </div>
            
            <div className='todoInput'>
                <input type='text' placeholder='✍' value={input}
                onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={addItem}>Add</button>

            </div>
       
            <div className='showItems'>
                {
                    items.map((item , index)=>{
                           return (
                               <div className='itemList' key={index}>
                                   <h3>
                                   {item}
                                   </h3>

                               </div>
                           )
                    })
                }

            </div>
       
       
        </div>
    )
}