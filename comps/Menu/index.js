import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:inline-flex;
flex-direction:column;
`;

const DropDownMenu = styled.div`
border: 1px solid #BDBDBD;
box-sizing: border-box;
border-radius: 20px;
display:inline-flex;
justify-content:center;
align-items:center;
cursor:pointer;
background-color:#FFF;

transition:background-color 0.5s;
&:hover{
    background-color:#DDD;
}

`;

const Expand = styled.div`
background: #FFFFFF;
border: 1px solid #EAEAEA;
box-sizing: border-box;
/* Sidebar Shadow */
display:${props=>props.expanded ? "inline-flex" : "hidden"};
height:${props=>props.expanded ? "auto" : "0px"};
font-size:${props=>props.expanded ? "18px" : "0px"};
opacity:${props=>props.expanded ? 1 : 0};
flex-direction:column;
margin-top:10px;
box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
div{
    padding:${props=>props.expanded ? "10px 15px" : "0px"};
    margin:${props=>props.expanded ? "5px 0px" : "0px"};
    cursor:pointer;
    &:hover{
        background-color:#DDD;
    }
}
`;

const DropDownBox = styled.div`
width:100%;
padding:5px;
display:flex;
div{
    margin:0 10px;
}
`;


const Menu = ({expand,onMenuSelect})=>{

    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand)
    },[expand])

    return <Container>
        <DropDownMenu onClick={()=>{
            setExpanded(!expanded);
        }}>
            <DropDownBox>
                <div><img src="/user.png"/></div>
         <div>  johndoe@bcit.ca</div>   
         <div><img src="/user.png"/></div>
            </DropDownBox>

        </DropDownMenu>
        <Expand expanded={expanded}>
        <div onClick= {()=>{
            onMenuSelect("bg");
        }}>Change BG color</div>
        <div onClick= {()=>{
            onMenuSelect("img");
        }}>
            Change BG color</div>

        <div onClick= {()=>{
            onMenuSelect("help");
        }}>>Help</div>

        </Expand>
    </Container>
}

Menu.defaultProps = {
    expanded:false

}
export default Menu;