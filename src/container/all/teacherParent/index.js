import React from 'react'

const ParentTeacher = ({referredBy,type}) => {

    // console.log({referredBy,type})
 
    return (
    <div>
  {
  type==='p'?"Parent":
  type==='t'?"Teacher":
  'No match '
  }

    </div>
  )
}

export default ParentTeacher