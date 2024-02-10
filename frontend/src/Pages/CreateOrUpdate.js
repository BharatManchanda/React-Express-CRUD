import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Form, Row } from 'react-bootstrap';
import api from '../Constant/api';
import { useParams } from 'react-router-dom';
import Constant from './Constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function CreateOrUpdate() {
    const [data, setData] = useState(Constant.data);
    const {id} = useParams();
    const navigate = useNavigate();

    function handleChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (data._id != null) {
                await api.student.update(data, id)
                toast.success('Student Detail updated successfully.');
            } else {
                await api.student.create(data)
                toast.success('Student added updated successfully.');
                navigate('/')
            }
        } catch (error) {
            toast.error('Please Fill the all input field.');
        }
    }

    async function fetchStudentDetail() {
        if (id) {
            let response = await api.student.get(id)
            setData(response);
        }
    }

    useEffect(() => {
        fetchStudentDetail();
    },[])

    return (
        <Row className='p-5 m-0'>
            <ToastContainer />
            <h3 className='text-center'>Manage Student</h3>
            <Form className='p-0'>
                <Row className="mb-3 p-0">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            name="name"
                            placeholder="Enter name"
                            onChange={handleChange}
                            value={data?.name}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            value={data?.email}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number"
                            name="phone"
                            placeholder="phone"
                            onChange={handleChange}
                            value={data?.phone}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="address_line_1"
                        placeholder="1234 Main St"
                        onChange={handleChange}
                        value={data?.address_line_1}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="address_line_2"
                        placeholder="Apartment, studio, or floor"
                        onChange={handleChange}
                        value={data?.address_line_2}
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type='text'
                            name="city"
                            placeholder='Cityville'
                            onChange={handleChange}
                            value={data?.city}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select name="state" defaultValue="Choose..." value={data?.state} onChange={handleChange}>
                            <option>Choose...</option>
                            <option value={'haryana'}>Haryana</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip code</Form.Label>
                        <Form.Control
                            type='number'
                            name="zip_code"
                            placeholder="00000"
                            onChange={handleChange}
                            value={data?.zip_code}
                        />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Row>
    )
}

export default CreateOrUpdate;