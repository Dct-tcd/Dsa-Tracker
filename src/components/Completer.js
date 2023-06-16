import React from 'react'
import Status from './Status'

function Completer() {
  return (
    <div className='flex justify-center mt-8 flex-wrap'>
      {/* <Status /> */}
      
      <img src={"https://1.bp.blogspot.com/-vgeS11udEZI/X_c3MHIFAmI/AAAAAAAAA8g/JExrMTpJ_c40IqGMOffSQcLuAgVcd-ZmwCLcBGAsYHQ/w400-h225/20210107_122411.jpg"} className='w-auto m-2 h-96'/>
      
      <img src={"https://indianmemetemplates.com/wp-content/uploads/bas-yahi-tak-tha-jo-tha-1200x674.jpg"} className='w-auto m-2 h-96'/>

      <button className='p-2 bg-blue-600 text-white rounded m-20' onClick={()=>{alert("Delete the Site cookies to Restart")}}>Restart the Journey</button>
    </div>
  )
}

export default Completer
