import React from 'react';

import styled from 'styled-components';


const Input =styled.div`
height: 45px;
width: 384px;
border-radius: 0px;
background:#F2F4FB;
display:inline-flex;
cursor:pointer;
div{
    justify-content:center;
    align-items:center;
    display:inline-flex;
    margin-right:100px;
    
}
`;




const Inputs = () => {
    return <div>
        
       <Input>
    <div>joe@gmail.com</div>  
    </Input>
     </div>
}


Inputs.defaultProps = {
}
    
export default Inputs;

