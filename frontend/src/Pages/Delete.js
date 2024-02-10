import React from 'react';
import {Button, Modal} from 'react-bootstrap';

function Display(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className='text-center'>Are You Sure?</h4>
                <p className='text-center p-3'>
                    Do you really want to delete these records? This process cannot be undone. 
                </p>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-center'>
                <Button onClick={props.onHide} className='me-4'>Close</Button>
                <Button variant='danger' onClick={() => { props.handleDelete(props._id); props.onHide(); }}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Delete({ handleDelete, _id }) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button variant="danger" className='btn-sm me-2' onClick={() => setOpen(true)}>
                Delete
            </Button>
            <Display
                show={open}
                onHide={() => setOpen(false)}
                handleDelete={handleDelete}
                _id={_id}
            />
        </>
    );
}