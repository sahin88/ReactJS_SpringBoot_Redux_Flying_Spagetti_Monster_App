import React, { useEffect, useState, useRef, Fragment } from 'react'
import '../css/card.css'

import {IoBeerSharp} from 'react-icons/io5'
import LocalLaundryServiceOutlinedIcon from '@material-ui/icons/LocalLaundryServiceOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';

function SlidingCard(props) {

    const [current, setCurrent]= useState(1)
    const max_length=3
    const card_ref=useRef()
    const  array=[0,0,0]

    const [cardWidth,setCardWidth]=useState(300)

    const handlePrevious =()=>{
        let new_card;
        if(current==0){
            new_card= max_length-1;
            card_ref.current.style.transitionDuration='.0s';

        }
        else{
            new_card=current-1;
            card_ref.current.style.transitionDuration='.5s';
        }
        
        card_ref.current.style.transform = `translate(${new_card*-cardWidth}px)`;
        setCurrent(current==0?max_length-1:current-1);
    }
    const handleNext =()=>{

        let new_card;
        if(current==2){
            new_card=0;
            card_ref.current.style.transitionDuration='0.0s';

        }
        else{
            new_card=current+1;
            card_ref.current.style.transitionDuration='.5s';
        }
        

        setCurrent(new_card);
       
        card_ref.current.style.transform = `translate(${new_card*-cardWidth}px)`;
        
    }
    useEffect(() => {
        let current_Node=card_ref.current;
        let first_item=card_ref.current.children[0].cloneNode(true);
        let last_item=card_ref.current.children[2].cloneNode(true);
        current_Node.append(first_item);
        current_Node.insertBefore(last_item,card_ref.current.children[0]);
     
        return () => {
        
        }
    }, [])


    useEffect(() => {
        let current_Node=card_ref.current
        let first_item=card_ref.current.children[0].cloneNode(true)
        let last_item=card_ref.current.children[2].cloneNode(true)
        current_Node.append(first_item);
        current_Node.insertBefore(last_item,card_ref.current.children[0])
        window.addEventListener('resize', () => {
            try{let with_container_element=card_ref.current.children[0].getBoundingClientRect().width;
    
            setCardWidth(with_container_element);}
            catch(error){
                console.log("error", error)
            }

            
        })
        return () => {
        
        }
    }, [])
   
  
    return (

            <div className="sliding_card_main_div">

            <div className='sliding_card_left_right_button_div'>
                <div className='home_right' onClick={handlePrevious}> < KeyboardArrowLeftOutlinedIcon  className='sliding_card_left_right_button' /> </div>
                <div className='home_right' onClick={handleNext }>< KeyboardArrowRightOutlinedIcon className='sliding_card_left_right_button'/>    </div>
                
            </div>
                <div className='sliding_cards_frame'>
                        <div className='sliding_cards_container' ref={card_ref}>
                        
                    
                        {array.map((item, index)=>{return(
                    
                            <div className="sliding_card"  >
                        
                            < IoBeerSharp className="icon"/>
                                <div className='header'> Header{index+1}</div>
                                
                                <div className='explanation'>Explanation</div>
                            </div >
                                )
                        })} 
                        </div>
                </div>
      
            </div>
       

    )
}

export default SlidingCard;