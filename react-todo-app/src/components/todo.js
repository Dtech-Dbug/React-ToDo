import React , {useState , useEffect} from 'react';
import list from '../Images/list.jpg'
import ListImage from '../Images/ListImage.png'
import ls from 'local-storage'

export const Todo = ()=> {
    


    const [input , setInput] = useState('')

    const [items , setItems] = useState([])

        useEffect(()=>{
            const localData = ls.get('itemsList')
            return localData ? setItems(localData) : []
        }, [])
       

        useEffect(()=>{
            ls.set('itemsList' , items)
        } ,[items])

      

            
           
        
           
           
        
   

    

    const addItem = (e)=>{

         if(!input){

        }
          else{
                setItems ([...items ,input])
               setInput('')
               ls.set('itemsList' ,[...items , input])
               
           
             }
    }

    const deleteItem = (id) => {
        console.log(id)
        const updatedItem = items.filter((item , index)=> {
       return id !== index;
        })

        setItems(updatedItem)
        ls.set('itemsList' , items)
    }

    const doneTask =() => {
        const taskName = document.querySelector('h3')
        taskName.style.textDecoration='line-through'
    }

    const removeAll = ()=> {
        setItems([])
        ls.clear();
    }



    return (
        <div className='parentDiv'>

            
            <div className='child-div' >
                <figure>
                  <img src={ListImage}>
                  </img>
                </figure>

                   <figcaption>
                     <h3 style={{color:'white'}}>
                     Start owning your todo's! 💯
                     </h3>
                  </figcaption>

                  

            </div>
            
            <div className='todoInput'>
                <input type='text' placeholder='✍' value={input}
                onChange={(e) => setInput(e.target.value)} 
                />
                <i class="fa fa-plus" title='add' onClick={addItem}></i>

            </div>
       
            <div className='showItems'>
                {
                    items.map((item , index)=>{
                           return (
                               <div className='itemList' key={index} >
                                   <h3>
                                   {index+1}. {item}
                                   
                                   </h3>

                                  

                                   <i class="fa fa-trash"
                                   onClick={()=> deleteItem(index)}
                                   ></i>

                               </div>
                           )
                    })
                }

            </div>
       
            <div className='removeAll-btn'>
            <i class="fa fa-trash" title='Delete All' onClick={removeAll}></i>
            </div>


        </div>
    )
}