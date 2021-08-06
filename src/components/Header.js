import React from 'react';
import styled from 'styled-components'
import Search from '@material-ui/icons/Search';


const Divcontainer = styled.div`
background-color:lightgreen;
display:flex;
flex-direction:row;
padding:10px 0px;
height:50px;
justify-content:center;
alin-items:center
`
const Logo = styled.img`
width:30px;
height:30px
`
const Divheader = styled.div`
display:flex;
align-items:center;
color:red;
`
const Divsearch = styled.div`
background-color:#fff;
display:flex;
align-items:center;
padding:0px 10px;
margin:5px;
color:gray;
border-radius:5px;
`
const Divspan = styled.span`
  color:black
`
const Divinput = styled.input`

`
function Header(props) {
  return (<Divcontainer>
    <img src='./favicon.ico' />
    <Divheader>Food Finder</Divheader>
    <Divsearch>
      <Search />
      <Divinput type='text' name='search' value={props.value} onChange={props.textChangeHandler} />
    </Divsearch>
  </Divcontainer>
  )

}

export default Header;