import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from "../Constant/api";
import { useParams } from "react-router";
import Loader from '../Components/Loader';

function View() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    async function fetchStudent() {
        setLoading(true);
        let response = await api.student.get(id)
        setData(response);
        setLoading(false);
    }

    useEffect(() => {
        fetchStudent();
    }, []);

    return (
        <>
            {loading && <Loader />}
            {
                !!data && <div  className="m-5">
                    <h4 className="text-center">Student Detail</h4>
                    <Card>
                        <Card.Header>
                            <h5>Personal Detail</h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <p className="fw-bolder">Name</p>
                                    <p className="text-capitalize">{data.name}</p>
                                </Col>
                                <Col sm={4}>
                                    <p className="fw-bolder">Email</p>
                                    <p>{data.email}</p>
                                </Col>
                                <Col sm={4}>
                                    <p className="fw-bolder">Phone</p>
                                    <p>{data.phone}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3">
                        <Card.Header>
                            <h5>Address Detail</h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={4}>
                                    <p className="fw-bolder">City</p>
                                    <p className="text-capitalize">{data.city}</p>
                                </Col>
                                <Col sm={4}>
                                    <p className="fw-bolder">State</p>
                                    <p className="text-capitalize">{data.state}</p>
                                </Col>
                                <Col sm={4}>
                                    <p className="fw-bolder">Zip Code</p>
                                    <p>{data.zip_code}</p>
                                </Col>
                                <Col sm={12}>
                                    <p className="fw-bolder">Address</p>
                                    <p className="text-capitalize">{data.address_line_1}</p>
                                </Col>
                                <Col sm={12}>
                                    <p className="fw-bolder">Address 2</p>
                                    <p className="text-capitalize">{data.address_line_2}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            }
        </>
    );
}

export default View;