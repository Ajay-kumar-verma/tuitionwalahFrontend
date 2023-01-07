import React from 'react'
import Teacher from './TeacherForm'
import Parent from './ParentForm'

const ParentTeacher = ({referredBy,type}) => {
 
  
 return (
     <div  className='form container'>
 
   {type==='p'?<Parent referredBy={referredBy}  />:
    type==='t'?<Teacher referredBy={referredBy}  />:
   null
   }
 
      </div>
  )
}

export default ParentTeacher