import {Badge} from "react-bootstrap"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import DeleteModal from "./DeleteModal";

const List = () => {

    const navigate = useNavigate()
    const [employeeList, setEmployeeList] = useState([]);
    const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)
    const [isDeleteId, setIsDeleteId] = useState(null)

    console.log({employeeList})

    const handleCreateEmployeeList = () => {
        navigate('/list/create')
    }

    const handleUpdateEmployeeItem = (id) => {
        navigate(`/list/update/${id}`)
    }

    const handleDeleteEmployeeItem = (id) => {
        setIsDeleteId(id)
        setIsDeleteModalShow(true)
    }

    const onHandleDeleteEmployeeDetails = () => {
        const filterItem = employeeList?.filter(item => item.id !== isDeleteId)
        setEmployeeList(filterItem)
        localStorage.setItem("employeeList", JSON.stringify(filterItem))
        setIsDeleteModalShow(false)
    }


    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("employeeList")) || []
        setEmployeeList(getItem)
    }, []);

    return (
        <div>
            <div className={'d-flex justify-content-between m-2'}>
                <h4>Employ List</h4>
                <button className={'btn btn-outline-success'} onClick={handleCreateEmployeeList}>Create Employee List
                </button>
            </div>

            <hr/>

            <table className={'table'}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Location</th>
                    <th>Joined Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    (employeeList || [])?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.employName}</td>
                            <td>{item.employDesignation}</td>
                            <td>
                                <Badge bg={'success'}>{item.employSalary}</Badge>
                            </td>
                            <td>{item.employLocation}</td>
                            <td>{item?.joinedDate}</td>
                            <td className={'d-flex gap-2'}>
                                <button className={'border-0'} onClick={() => handleUpdateEmployeeItem(item.id)}>Update
                                </button>
                                <button className={'border-0'}
                                        onClick={() => handleDeleteEmployeeItem(item.id)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>


            <DeleteModal
                show={isDeleteModalShow}
                onHide={() => setIsDeleteModalShow(!isDeleteModalShow)}
                onHandleDeleteEmployeeDetails={onHandleDeleteEmployeeDetails}
            />
        </div>
    )
}
export default List;