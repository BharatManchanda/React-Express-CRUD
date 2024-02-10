import React, { useEffect, useState } from 'react';
import api from '../Constant/api';
import { Row, Col, Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Delete from './Delete';
import Loader from '../Components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function List() {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchList() {
        try {
            setLoading(true)
            let response = await api.student.list()
            setList(response);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.success(error.message);
        }
    }
    
    async function handleDelete(id) {
        try {
            setLoading(true)
            await api.student.delete(id)
            setLoading(false)
            fetchList();
            toast.success('Student deleted successfully');
        } catch (error) {
            setLoading(false)
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchList();
    }, []);


    return (
        <Row className='m-5 p-0'>
            {loading && <Loader />}
            <ToastContainer />
            <Row className='my-2'>
                <Col className='text-start'>
                    <h4>Student List</h4>
                </Col>
                <Col className='text-end'>
                    <Link to={'/manage-student'} className='btn btn-primary'>+ Create</Link>
                </Col>
            </Row>
            {!!list.length ?
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((value, _) => {
                            const {_id, name, email, city, state, zip_code } = value;
                            return (
                                <tr key={_}>
                                    <td>{_id}</td>
                                    <td className="text-capitalize">{name}</td>
                                    <td>{email}</td>
                                    <td className="text-capitalize">{city}</td>
                                    <td className="text-capitalize">{state}</td>
                                    <td>{zip_code}</td>
                                    <td>
                                        <Link to={`/manage-student/${_id}`} className='btn btn-primary btn-sm me-2'>Edit</Link>
                                        <Delete handleDelete={handleDelete} _id={_id} />
                                        <Link to={`/detail/${_id}`} className='btn btn-primary btn-sm me-2'>View</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                :
                <div className='text-center'>
                    <hr />
                    <h3>Student Not Found...!!</h3>
                </div>
            }
        </Row>
    );
}

export default List;