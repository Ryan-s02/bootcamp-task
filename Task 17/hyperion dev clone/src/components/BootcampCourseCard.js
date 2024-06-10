// BootcampCourseCard.js

import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './bootcampCards.modules.css';

function BootcampCourseCard({ bootcampCourse }) {
    //col-lg-6 mb-3
    return (

        // the reusable component that is used in bootcampCards
                <div>
            <Card className="card">

                <Card.Body className="card-body">
                    <Card.Title className="title" id="title">{bootcampCourse.name}</Card.Title>
                    <Card.Text className="text">{bootcampCourse.description}</Card.Text>
                    <Button id="learn-more">Learn more</Button>
                </Card.Body>
            </Card>
                </div>

    );
}

export default BootcampCourseCard;