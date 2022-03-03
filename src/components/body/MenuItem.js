import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetail'

const MenuItem = props => {
    // console.log(props);
    return (
        <div>
            <Card>
                <CardBody>
                    <CardImg src={props.dish.image} width="100%" alt={props.dish.name} style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }} onClick={props.DishSelect}> {props.dish.name} </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;