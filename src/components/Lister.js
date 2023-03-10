import React from 'react'
import Card from "./Card.js";
import Questions from "./Questions.js";

export default function Lister({qstate,setqstate}) {
  return (
    <div>
    <h1 className="text-4xl mt-24  flex justify-center">
  450 Dsa Questions
   </h1>
   <h3 className="text-4xl mt-5 text-purple-800  flex justify-center">
  Crack Product  based companies today
   </h3>
   
    <div className='flex flex-wrap p-16 m-12 mt-20    '>
    
    <Card qno={5} qstate={qstate} setqstate={setqstate} name="Array"/>
    <Card qno={5} qstate={qstate} setqstate={setqstate} name="Greedy"/>
    <Card qno={5} qstate={qstate} setqstate={setqstate} name="Dynamic Programming"/>
    <Card qno={5} qstate={qstate} setqstate={setqstate} name="Sliding Window"/>
    <Card qno={5} qstate={qstate} setqstate={setqstate} name="2 Pointer"/>
    <Card qno={5} qstate={qstate} setqstate={setqstate}  name="Recursion"/>


          </div>
          </div>
  )
}
