import React from 'react'

function Status(props) {
  return (
  <div>
  {props.visi=="visible" ?  
   <div className="alert alert-warning" role="alert">
    Try reloading the page inside the topic to remove any discrepancy
        </div> : <div className="h-4 bg-transparent border-transparent " role="alert"></div>
}
  
    </div>
  )
}

export default Status
