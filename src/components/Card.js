import React, { useState } from 'react'

import { BrowserRouter as Router,Link, Routes, Route } from "react-router-dom";

export default function Card({name,no,qno}) {
 
  let  op = JSON.parse(localStorage.getItem('Checked'+`${no}`));
//  let ans=0;
let kk=0;  
if (op!=null)
  
  {
    op  = [...new Set(op)];
    
    for(let i=0;i<op.length;i++)
    {
      // let iop = parseInt(strs[i] + strs[i+1]);

      //  if (strs[i]==='+') { item2.push((strs[i] + strs[i+1] + strs[i+2])); i+=3;}
 if ((op[i]!=',' && op[i]!='/' &&  op[i]!='"' && op[i]!='['&& op[i]!=']' && (op[i]<'a'|| op[i]>'z')&& op[i]!="\\"&& op[i]!='+') || op.length==3 ) {kk++;}
    }

  }
  let ans = op!=null? kk :0;
    
    // console.log(op,' 1p ',ans);
    


  return (
    <Link to={name}>

    { <div className={Math.round((ans*100)/qno)!=100  ? " flex items-center m-2 justify-between border-purple-300 shadow-lg  font-open-sans border-spacing-1.5  border-2 w-auto rounded-lg box-border p-8" :  " flex items-center m-2 justify-between border-purple-300 shadow-lg  font-open-sans border-spacing-1.5  border-2 w-auto rounded-lg box-border p-8  bg-green-100  " }>
      <img className='w-6 h-6  mr-3 mt-0 align-top' src="https://pluspng.com/img-png/react-logo-png-js-logo-react-react-js-icon-512x512.png"></img>
      <div className=' '>
      <h2 className='text-xl text-slate-600 font-bold  mt-2'>{name}</h2>
      <h4 className='text-bg font-bold text-zinc-700 mt-2 mb-1'>Total Questions : {qno}</h4>

{
 ans==0 ?  <h6 className=' text-orange-800 italic mt-2 font-sans '>Not Yet Started</h6> :   
 Math.round((ans*100)/qno)!=100 ?
    // {console.log(ans)
    <div>      <div className=' justify-between mt-2  text-center flex ' >
      <h6 className=' rounded-xl  bg-green-300    pt-1 w-16  text-slate-700 text-xs  ' > STARTED </h6>
      <img src="https://th.bing.com/th/id/R.15e3df2a05ac767df4359bf37707b781?rik=YoELJf68lvMxWQ&riu=http%3a%2f%2fs3.amazonaws.com%2fpix.iemoji.com%2fimages%2femoji%2fapple%2fios-11%2f256%2fman-technologist-light-skin-tone.png&ehk=uinI8ak5dKPQXLDnNbEcTr%2bSuymPLXBS%2bBPUBpPLgcI%3d&risl=&pid=ImgRaw&r=0" className='w-5 h-5'></img>
      <h6 className='  text-green-700    ' >{Math.round((ans*100)/qno)}  %</h6>
      </div>

    <div className="h-2 rounded-lg  w-full mt-1 bg-green-300 ">
        <div className="h-2 rounded-lg bg-green-500  w-2  "></div>
      </div>
      </div> 
       :
       <div>
      <div className=' justify-between mt-2  text-center flex ' >
      <h6 className=' rounded-xl  bg-green-00    pt-1 w-16  text-slate-700 text-xs  ' > FINISHED </h6>
      <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Clapping_Hands_Emoji_ios10_d7ab242e-7230-47bf-b1e2-d46a4bc51b5b_grande.png?v=1571606090" className='w-5 h-5'></img>
      <h6 className='  text-green-700    ' >100%</h6>
        </div>
        <div className="h-2 rounded-lg  w-full mt-1 bg-green-500 ">
        <div className="h-2 rounded-lg bg-green-500  w-2   "></div>
      </div>
    </div>
      // </>
}
      </div>  
    </div> }
    </Link>
  )
}
