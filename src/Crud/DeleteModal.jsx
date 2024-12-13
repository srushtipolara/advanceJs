import {Button, Modal} from "react-bootstrap";

const DeleteModal = ({show, onHide, onHandleDeleteEmployeeDetails}) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Body>
                <p>Are you sure You Want to Delete Employee Details</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>Cancel</Button>
                <Button variant={'secondary'} onClick={onHandleDeleteEmployeeDetails}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;