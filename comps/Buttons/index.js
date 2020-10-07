import React from 'react';

import styled from 'styled-components';


const Button1 =styled.div`
height: 46px;
width: 384px;
border-radius: 0px;
background: #4285F4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

cursor:pointer;
display:inline-flex;
justify-content:center;
align-items:center;
cursor:pointer;
div{
  
   flex-wrap: wrap;
   align-content: center;
   color:#FFF;
}
`;

const Rectangle =styled.div`
height: 46px;
width: 46px;
background-color:#FFF;
border-radius: 0px;
display:flex;
margin-right;
img{
    align-content:center;
    display:flex;
}
`;


const Buttons = () => {
    return <div>
        
       <Button1>
       <Rectangle><img src="/google.png"/></Rectangle>
    <div> log in with google</div>  
    </Button1>
     </div>
}


Buttons.defaultProps = {
}
    
export default Buttons;

