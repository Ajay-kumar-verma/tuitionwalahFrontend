import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '90vh',
  width: '90vw',
  background: '#364d79',
  margin:"auto"
};
const App = () => (
  <Carousel autoplay>
    <img style={contentStyle}
     src="https://media.istockphoto.com/id/1353379323/photo/mature-black-father-helping-son-with-homework.jpg?s=612x612&w=0&k=20&c=b-S-AlL8vKZAey-Da5ij-uP_vhPkXfdhBu4MH4-bByY=" alt="Girl in a jacket" width="500" height="600" />
    <img style={contentStyle}
     src="https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHV0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Girl in a jacket" width="500" height="600" />
    <img style={contentStyle}
     src="https://media.istockphoto.com/id/1352585814/photo/smiling-female-tutor-helping-young-student-doing-homework-tutorial-and-educational-concept.jpg?b=1&s=170667a&w=0&k=20&c=hizfDF92valqGZmqua1NvfQLcdsKFrashfF7zgWXsKw=" alt="Girl in a jacket" width="500" height="600" />
    <img style={contentStyle}
     src="https://media.istockphoto.com/id/1354582979/photo/grandfather-tutoring-his-grandson-at-home.jpg?b=1&s=170667a&w=0&k=20&c=1Tmf9p415RlHVwRqYl96wOI2P2L_dIGQ354AJcZh3gA=" alt="Girl in a jacket" width="500" height="600" />
  
     </Carousel>
);
export default App;