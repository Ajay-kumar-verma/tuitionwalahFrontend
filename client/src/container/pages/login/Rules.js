
const Rules = _ => {
  return {
   userName:[
    {
      required: true,
      message: 'Please input your Username!',
    },
    // {
    //   pattern:"^[a-zA-Z0-9]{10,50}$",
    //   message: 'Username can only include letters ',
    // },
     {
        pattern:"^[a-zA-Z0-9@.]{10,50}$",
        message: 'Invalid  Username  ',
     },
    
  ],
  password:[
   {
    required: true,
    message: 'Please input your Password!',
   },
   { min: 6, message: 'Password must be minimum 6 characters.' },
   { max: 50, message: 'Password must be maximum 50 characters.' },
    
  ]

  }

} 

export default Rules

