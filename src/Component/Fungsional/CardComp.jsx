import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CardComp(props) {
    return (
        <Card
            style={{
                width: '18rem'
            }}
        >
            <img
                alt="Sample"
                src="https://picsum.photos/300/200"
            />
            <CardBody>
                <CardTitle tag="h5">
                    {props.judul}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {props.tanggal}
                </CardSubtitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <Button>
                    <Link to={
                        {
                            pathname: `/detail/${props.id}`,
                            state: {
                                judul: props.judul,
                                tanggal: props.tanggal
                            }
                        }
                    }>Detail</Link>
                </Button>
            </CardBody>
        </Card>
    )
}

export default CardComp;