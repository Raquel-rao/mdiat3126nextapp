import React from 'react';

import styled from 'styled-components';


const Text1 =styled.div`
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size:30px;




`;
const Text = () => {
    return <div>
        
       <Text1>
    <div>Welcome Back!</div>  
    </Text1>
     </div>
}


Text.defaultProps = {
}
    
export default Text;

