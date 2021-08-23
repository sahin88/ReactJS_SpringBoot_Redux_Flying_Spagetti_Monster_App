import React, { useEffect, useState, useRef } from 'react'
import '../css/home.css'


import CardClean from './CardClean';
import SliderImage from './SliderImage';
import SlidingCard from './SlidingCard'
import {useSelector} from 'react-redux';

function Home() {
   

    const  array=[0,0,0]
    const { loginData} = useSelector((state) => state.Login)
    console.log("loginData", loginData)
 

    
    return (<div className='home'>

        <div className='home_card_clean'>
            <SliderImage/>
          
        </div>

        <div className='home_sliding_card_division'>
            <SlidingCard/>
              
        </div>
        
        <div className='home_card_clean'>
          <CardClean/>
        </div>





    </div>

    )
}



const styles = {


    div_1: {

        backgroundColor: '#007aff',
     

    },
    div_2: {

        backgroundColor: '#ffe000',
       

    }
    ,
    div_3: {

        backgroundColor: 'hotpink',
      

    }



}



export default Home
