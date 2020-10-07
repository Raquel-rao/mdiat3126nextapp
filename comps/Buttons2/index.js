import React from 'react';

import styled from 'styled-components';


const Button2 = styled.div`
height: 46px;
width: 384px;
border-radius: 0px;
background: #3D6FF1;
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




const Buttons2 = () => {
    return <div>
       <Button2>
    <div> log in</div>  
    </Button2>
     </div>
}


Buttons2.defaultProps = {
}
    
export default Buttons2;

