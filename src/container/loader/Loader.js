import React from "react";
import {Divider} from 'antd'
import Spinner from "react-text-spinners";
import './style.css';
import {MutatingDots,Audio,BallTriangle,Bars,Blocks,Circles,
  CirclesWithBar,ColorRing,Comment,Discuss,
  Dna,FallingLines,FidgetSpinner,Grid,Hearts,
  InfinitySpin,LineWave, MagnifyingGlass,
   Oval, ProgressBar, Puff, Radio, RevolvingDot, Rings,
  RotatingLines, RotatingSquare, RotatingTriangles, TailSpin,
   ThreeCircles, ThreeDots, Triangle, Vortex, Watch

} from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const App = () => {
  
 return [
   <MutatingDots
    color="#123abc"
    height={100}
    type="Rings"
    width={100}
    timeout={3000} //3 secs
 />
, <Divider />,
 <Hearts
 color="#00F"
 height={100}
 width={100}
 timeout={3000}
/>,<Divider />,
<BallTriangle
 color="#00F"
 height={100}
 width={100}
 timeout={3000}
/>,<Divider />,
 <Oval
color="#123abc"
height={100}
width={100}
timeout={3000} //3 secs
/>
, <Divider />,
<Blocks
color="#00F"
height={100}
width={100}
timeout={3000}
/>,<Divider />,
<Circles
color="#00F"
height={100}
width={100}
timeout={3000}
/>
,<Divider />,
<Circles
color="#00F"
height={100}
width={100}
timeout={3000}
/>
,<Divider />,
<CirclesWithBar
color="#00F"
height={100}
width={100}
timeout={3000}
/>
,<Divider />,
<ColorRing
color="#00F"
height={100}
width={100}
timeout={3000}
/>
,<Divider />,
<Comment
color="#00F"
height={100}
width={100}
timeout={3000}
/>
,<Divider />,
<Discuss
color="#00F"
height={100}
width={100}
timeout={3000}
/>,
<Divider />,
<Spinner theme="dots2" />,
<Divider /> ,
<Dna
color="#00F"
height={100}
width={100}
// timeout={3000}
/>,<Divider /> ,
<RotatingSquare
color="#00F"
height={100}
width={100}
/>
,<Divider /> ,
<InfinitySpin
color="#00F"
height={1000}
width={1000}
/>,<Divider /> ,
<LineWave
color="#00F"
height={100}
width={100}
/>,<MagnifyingGlass
color="#00F"
height={100}
width={100}
/>,

// timeout={3000}
// RotatingSquare
// ,FallingLines,FidgetSpinner,Grid,Hearts,
// InfinitySpin,LineWave, MagnifyingGlass,
//  Oval, ProgressBar, Puff, Radio, RevolvingDot, Rings,
// RotatingLines, RotatingSquare, RotatingTriangles, TailSpin,
//  ThreeCircles, ThreeDots, Triangle, Vortex, Watch
]
  ;
};


export default ()=>(
<div className='loader'>
<MutatingDots
color="#123abc"
height={100}
width={100}
timeout={3000} //3 secs
/>
</div>)