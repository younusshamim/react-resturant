import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "20px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <CardText>{props.dish.description}</CardText>
                        <CardText>{props.dish.price}/-</CardText>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;