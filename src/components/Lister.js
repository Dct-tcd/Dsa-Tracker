import React from "react";
import Card from "./Card.js";
import Questions from "./Questions.js";
import { Link } from "react-router-dom";
import TopLoader from "react-top-loader";
import { useEffect } from "react";
import styles from "./Lister.css"

export default function Lister({
  Checked1,
  Checked2,
  Checked3,
  Checked4,
  Checked5,
  Checked6,
  Checked7,
  Checked8,
  Checked9,
  Checked10,
  Checked11,
  Checked12,
  Checked13,

  
}) {

 

  // let op=0;
// useEffect(() => {
// op=0;  
let count=0;  
for(let no=0;no<=12;no++)
{
let  op = JSON.parse(localStorage.getItem('Checked'+`${no}`));
//  let ans=0;
if (op!=null)
  {
    op  = [...new Set(op)];
    
    for(let i=0;i<op.length;i++)
    {
      // let iop = parseInt(strs[i] + strs[i+1]);

      //  if (strs[i]==='+') { item2.push((strs[i] + strs[i+1] + strs[i+2])); i+=3;}
 if ((op[i]!=',' && op[i]!='/' &&  op[i]!='"' && op[i]!='['&& op[i]!=']' && (op[i]<'a'|| op[i]>'z')&& op[i]!="\\"&& op[i]!='+') || op.length==3 ) {count++;}
    }

  }
}
  // let ans = op!=null? kk :0;
    
  // op += Checked1!=null ? Checked1.length : 0;
  // op += Checked2!=null ? Checked2.length : 0;
  // op += Checked3!=null ? Checked3.length : 0;
  // op += Checked4!=null ? Checked4.length : 0;
  // op += Checked5!=null ? Checked5.length : 0;
  // op += Checked6!=null ? Checked6.length : 0;
  // op += Checked7!=null ? Checked7.length : 0;
  // op += Checked8!=null ? Checked8.length : 0;
  // op += Checked9!=null ? Checked9.length : 0;
  // op += Checked10!=null ? Checked10.length : 0;
  // op += Checked11!=null ? Checked11.length : 0;
  // op += Checked12!=null ? Checked12.length : 0;
  // op += Checked13!=null ? Checked13.length : 0;

//   setprogress(op);
// }, [])

  //  let total = 88 ;

  // console.log(op,"op");
  const containerStyles = {
    height: 20,
    // width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop:50,
    marginBottom:50,
    marginLeft : 200,
    marginRight : 200,
}

  const fillerStyles = {
    height: '100%',
    width: `${Math.round((count*100)/102)}%`,
    backgroundColor: "#ff9933",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div >
      <h1 className="text-4xl mt-24  flex justify-center">100 Dsa Questions</h1>
      <h3 className="text-4xl mt-3 text-purple-800 align-items-center  flex justify-center">
        Crack Product based companies today
      </h3>
{/* <div className="flex justify-center ">
      <div className="w3-light-grey w3-round mt-10 flex m-5 w-56 ">
        <div
          className="w3-container w3-round w3-blue"
          style={{
            width: `${Math.round((progress * 100) / 88)}` + "%",
            height: "10px",
          }}
        ></div>
        </div>
        {progress}
      </div> */}

<div  style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${count }% `}</span> 
        {/* <span style={labelStyles}>Completed</span> */}
 </div>
</div>

{/*        
       useEffect(() => {
    ans = op!=null?op.length:0;
   
 }, [Checked1,Checked2,Checked3,Checked4,Checked1,Checked5,Checked6,Checked7,Checked8,Checked9,Checked10,Checked11,Checked12,Checked13,]) */}
 
 
      <div className="flex flex-wrap p-16 m-12 mt-12  mb-12 justify-center  ">
        <Card qno={25} no={"12"} ans={Checked12} Checked={Checked12} name="Array and String" />
        <Card qno={5} no={"1"} ans={Checked1}  Checked={Checked1} name="Greedy" />
        <Card qno={13} no={"2"} ans={Checked2} Checked={Checked2} name="Dynamic Programming" />
        <Card qno={7} no={"3"} ans={Checked3}  Checked={Checked3} name="Binary search" />
        <Card qno={5} no={"4"} ans={Checked12} Checked={Checked4} name="Heaps" />
        <Card qno={6} no={"5"} ans={Checked12} Checked={Checked5} name="Recursion" />
        <Card qno={8} no={"6"} ans={Checked12} Checked={Checked6} name="Linked List" />
        <Card qno={8} no={"7"} ans={Checked12} Checked={Checked7} name="Binary Tree" />
        <Card qno={6} no={"8"} ans={Checked12} Checked={Checked8} name="Binary Search Tree" />
        <Card qno={7} no={"9"}  ans={Checked12} Checked={Checked9} name="Stack and Queue" />
        <Card qno={6} no={"10"} ans={Checked12}  Checked={Checked10} name="Backtracking" />
        <Card qno={6} no={"11"} ans={Checked12}  Checked={Checked11} name="Graphs" />
        {/* <Card qno={7} no={"13"} Checked={Checked13} name="String" /> */}
      </div>
      <div className="mb-10">
        <div className="flex justify-center ">
          <p className="text-slate-600 font-nunito "> Linkedin : &nbsp;</p>
          <Link
            target="_blank"
            className=" text-blue-700 font-nunito "
            to="https://www.linkedin.com/in/Dev-chaitanya-tiwari-a30478200/"
          >
            {" "}
            Dev Chaitanya tiwari &nbsp;
          </Link>

          <img
            src="https://th.bing.com/th/id/R.1dde1bbff3a49d9a2d8e3ad315f9f137?rik=hx1P1nWyX7TYaw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fheart-symbol-transparent%2fheart-symbol-transparent-7.png&ehk=tnXY15k5brhD0QZZmipdAq6M64XmIA6XDvtWxc1EXZA%3d&risl=&pid=ImgRaw&r=0"
            className="w-6 h-6"
          ></img>
        </div>
        <div className="flex justify-center">
          {" "}
          Made with Love | &nbsp;
          <img
            className="h-6 w-6"
            src="https://th.bing.com/th/id/R.968421ef5d794eb8cb555bb49dff4acd?rik=uxIlq%2bqiSDLTsA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1061%2f1924%2fproducts%2fStar_Emoji_grande.png%3fv%3d1480481043&ehk=1a3L6akK6vOPWmacDkHduTA1L5brh2me2a3w7ivd%2fHE%3d&risl=&pid=ImgRaw&r=0"
          ></img>
          <Link
            target="_blank"
            className="text-sky-600 "
            to="https://github.com/Dct-tcd"
          >
            &nbsp; Github \ Dct-tcd{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
