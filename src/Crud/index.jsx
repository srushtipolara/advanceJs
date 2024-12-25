import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteList} from "../Reducre/list/reducer";
import {Badge, Col, Row} from "react-bootstrap";
import moment from "moment";
import UpdateEmployeeList from "./UpdateEmployeList";
import DeleteModal from "./DeleteModal";
import {useContextStore} from "../Common/CreateContext";

const List = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)
    const [isDeleteId, setIsDeleteId] = useState(null)
    const [search, setSearch] = useState('')
    const [ListDetails, setListDetails] = useState([])
    const [sort, setSort] = useState({key: '', order: 'asc'})
    const [pageNum, setPageNum] = useState(1)
    const {formContext, setFormContext} = useContextStore()
    console.log("formContext ==>", formContext)
    // const list = useSelector(state => state.EmployeeList.list);
    let Page_size = 2;
    let total_page = Math.ceil(formContext.length / Page_size);
    const end = useMemo(() => Page_size * pageNum, [pageNum, Page_size]);
    const start = useMemo(() => end - Page_size, [end, Page_size]);

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
        dispatch(deleteList(isDeleteId))
        const deleteFormContext = formContext.filter((item) => item.id !== isDeleteId)
        setFormContext(deleteFormContext)
        setIsDeleteModalShow(false)
    }

    const handleSort = (key) => {
        const order = sort.order === 'asc' ? 'desc' : 'asc'
        setSort({key, order})
        const sortedList = [...ListDetails]?.sort((a, b) => {
            if (a[key] < b[key]) {
                return order === "asc" ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return order === "asc" ? 1 : -1;
            }
            return 0;
        });

        setListDetails(sortedList)
    }

    useEffect(() => {
        if (search.length > 0) {
            const keySearch = Object.keys(formContext[0] || {});

            const filteredList = formContext?.filter((item) =>
                keySearch?.some((key) =>
                    item[key]?.toString()?.toLowerCase()?.includes(search?.toLowerCase())
                )
            );
            setListDetails(filteredList)
        } else {
            setListDetails(formContext)
        }
    }, [search, formContext]);

    useEffect(() => setListDetails(formContext), [formContext]);

    return (
        <div>
            <div className={'d-flex justify-content-between m-2'}>
                <h4>Employ List</h4>
                <input value={search} onChange={(event) => setSearch(event.target.value)}/>
                <button className={'btn btn-outline-success'} onClick={handleCreateEmployeeList}>Create Employee List
                </button>
            </div>

            <hr/>

            <table className={'table'}>
                <thead>
                <tr>
                    <th onClick={() => handleSort('employName')}>Name {(sort.key === 'employName' && sort.order === 'asc') ? "↑" : "↓"}</th>
                    <th>Designation</th>
                    <th onClick={() => handleSort('employSalary')}>Salary {(sort.key === 'employSalary' && sort.order === 'asc') ? "↑" : "↓"}</th>
                    <th>Location</th>
                    <th>Skills</th>
                    <th>Joined Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    (ListDetails || [])?.slice(start, end)?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.employName}</td>
                            <td>{item.employDesignation}</td>
                            <td>
                                <Badge bg={'success'}>{item.employSalary}</Badge>
                            </td>
                            <td>{item.employLocation}</td>
                            <td>
                                <Row>
                                    {item?.employeeSkills?.length > 1 ? (item.employeeSkills || [])?.map((skills) => {
                                        return <Col sm={5} className={'bg-light me-1'}>{skills.skill} </Col>
                                    }) : <Col sm={10} className={'bg-light me-1'}>Not Found skill</Col>}
                                </Row>
                            </td>
                            <td>{moment(item?.employeeJoinedDate).format("DD MMMM yyyy")}</td>
                            <td className={'d-flex gap-2'}>
                                <button className={'border-0'}
                                        onClick={() => handleUpdateEmployeeItem(item.id)}>Update
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

            {total_page ? <div className={'d-flex gap-1 justify-content-center align-items-center'}>
                <button type={'button'} onClick={() => setPageNum(pageNum - 1)} disabled={pageNum <= 1}>Pre</button>
                <p className={'mb-0'}>{pageNum} / {total_page}</p>
                <button type={'button'} onClick={() => setPageNum(pageNum + 1)} disabled={pageNum >= total_page}>Next
                </button>
            </div> : <></>}

            {
                params?.id ? <UpdateEmployeeList id={params?.id}/> : <></>
            }


            <DeleteModal
                show={isDeleteModalShow}
                onHide={() => setIsDeleteModalShow(!isDeleteModalShow)}
                onHandleDeleteEmployeeDetails={onHandleDeleteEmployeeDetails}
            />
        </div>
    )
}
export default List;