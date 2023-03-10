import './App.css';
import Lister from './components/Lister'
import Questions from './components/Questions'
import { BrowserRouter as Router,Link, Routes, Route } from "react-router-dom";
import { useState , useEffect} from 'react';
import React from 'react';
function App() {
  // const [qstate, setqstate] = useState([]);
 
  const [Checked1, setChecked1] = useState([]);
  const [Checked, setChecked] = useState([]);

  const [qstate, setqstate] = useState(localStorage.getItem('qstate'));

  useEffect(()=>{
      localStorage.setItem('qstate', qstate)
  },[qstate]);
  
  const [qstate2, setqstate2] = useState(localStorage.getItem('qstate2'));

  useEffect(()=>{
      localStorage.setItem('qstate2', qstate2)
  },[qstate2]);


  // useEffect(() => {
  //           setqstate (sessionStorage.getItem(qstate));
  // }, [])
  
  // const [qstate, setqstate] = React.useState(() => {
  //   return sessionStorage.getItem(qstate)
  // });
 
 
  // useEffect(() => {
  //   setCount(JSON.parse(window.sessionStorage.getItem("count")));
  // }, []);

  // useEffect(() => {
  //   window.sessionStorage.setItem("count", count);
  // }, [count]);



  const  arrayq = [ {ID:"1" , Q:"111" , status:"Incomplete" , done:"not"} ,
  {ID:"2" , Q:"222" , status:"Incomplete", done:"not"} ,
  {ID:"3" , Q:"333" , status:"Incomplete" , done:"not"} ,
  {ID:"4" , Q:"333" , status:"Incomplete" , done:"not"} ,
  {ID:"5" , Q:"333" , status:"Incomplete" , done:"not"} ,
];
const  greedyq = [ {ID:"1" , Q:"000" , status:"Incomplete" , done:"not"} ,
  {ID:"2" , Q:"111" , status:"Incomplete", done:"not"} ,
  {ID:"3" , Q:"222" , status:"Incomplete" , done:"not"} ,
  {ID:"4" , Q:"444" , status:"Incomplete" , done:"not"} ,
  {ID:"5" , Q:"555" , status:"Incomplete" , done:"not"} ,
];

  return (
  <>
<Router>  
   
   <Routes>
         <Route exact path="" element={<Lister qstate={qstate} setqstate={setqstate}  name="Array"/>}></Route>

          
          <Route exact path="/Array" element={<Questions Checked={Checked} setChecked={setChecked}  qstate={qstate} setqstate={setqstate} name="Array"  qlist={arrayq}/>}></Route>

          <Route exact path="/Greedy" element={<Questions Checked1={Checked1} setChecked1={setChecked1} qlist={greedyq} qstate={qstate2} setqstate={setqstate2} name="Greedy"/>}></Route>
          
          <Route exact path="/Dynamic Programming" element={<Questions qstate={qstate} setqstate={setqstate} name="Dynamic Programming"/>}></Route>
          
          <Route exact path="/Sliding window" element={<Questions qstate={qstate} setqstate={setqstate} name="Sliding window"/>}></Route>
          
          <Route exact path="/2 pointer" element={<Questions qstate={qstate} setqstate={setqstate} name="2 Pointer"/>}></Route>
          
          <Route exact path="/Recursion" element={<Questions qstate={qstate} setqstate={setqstate} name="Recursion"/>}></Route>
          </Routes>
</Router> 
  </>
  );
}

export default App;
