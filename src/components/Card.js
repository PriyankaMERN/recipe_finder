
import React, { useState } from 'react'
import styled from 'styled-components'
import { DialogTitle } from '@material-ui/core'
import { Dialog } from '@material-ui/core'
import { DialogContent } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions';

const DivMainContainer = styled.div`
display:flex;
flex-direction:row;
`
const DivCardContainer = styled.div`
width:220px;
box-shadow:0px 4px 5px #ccc;
border:1px solid gray;
margin-bottom:20px;
padding:5px
`
const CardImg = styled.img`
height:220px;
object-fit:cover;
`
const Name = styled.h4`

padding-right:12px`
const Ingredients = styled.p`
border-radius:5px;
border:1px solid gray;
padding:8px;
margin:10px;
display:flex;
justify-content:center;
align-items:center;
text-transform: uppercase
`
const SeeMore = styled.button`
border:1px solid gree;
`
const CloseMenu = styled.button`
border:1px solid red;
`
function Card(props) {

    const [state, setShowState] = useState(false)
    const { ingredients } = props.data
    return (
        < >
            <Dialog open={state} onClose={() => setShowState(false)}>
                <DialogTitle id="alert-dialog-title">Ingredients</DialogTitle>
                <DialogContent>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Ingredients</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ingredients.map((ingredient, index) => {
                                    return <tr key={index}>
                                        <td>{ingredient.text}</td>
                                        <td >{ingredient.weight}</td></tr>
                                })

                            }
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <SeeMore onClick={() => window.open(props.data.url) } color="primary">
                    See More
                    </SeeMore>
                    <CloseMenu onClick={() => setShowState('')} color="primary" autoFocus>
                        Close
                    </CloseMenu>
                </DialogActions>

            </Dialog>
            <DivCardContainer>
                <CardImg src={props.data.image} />
                <Name>{props.data.label}</Name>
                <Ingredients onClick={() => setShowState(true)}>
                    Ingredients
                </Ingredients>

            </DivCardContainer>

        </>
    )
}

export default Card
