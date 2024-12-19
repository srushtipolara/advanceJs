import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import {deleteTodos, getTodos} from "../Reducre/todos/thunk";
import CreatePostModal from "./CreatePostModal";
import DeleteModal from "../Crud/DeleteModal";

const ToDo = () => {

    const dispatch = useDispatch()
    const todo = useSelector(state => state.TodoList.todo)
    console.log({todo})
    const [todoList, setTodoList] = useState([])
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)
    const [isDeleteId, setIsDeleteId] = useState(null)
    const [pageNum, setPageNum] = useState(1)
    let page_size = 10;
    let totalPage = todoList.length / page_size;
    const totalEnd = useMemo(() => page_size * pageNum, [pageNum, page_size])
    const totalStart = useMemo(() => totalEnd - page_size, [totalEnd, page_size])

    const handlePostModal = () => {
        setIsOpenModal(!isOpenModal)
    }

    const handleDeletePostModal = () => setIsDeleteModalShow(!isDeleteModalShow)
    const handleDeletePost = (id) => {
        setIsDeleteId(id)
        handleDeletePostModal()
    }

    const onHandleDeletePostDetails = () => {
        dispatch(deleteTodos(isDeleteId))
        handleDeletePostModal()
    }


    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch]);

    useEffect(() => {
        setTodoList(todo)
    }, [todo]);

    return (
        <>
            <div>
                <div className={'d-flex justify-content-between m-2'}>
                    <h4>Todo List</h4>
                    <button className={'btn btn-outline-success'} onClick={handlePostModal}>
                        Add New Post
                    </button>
                </div>

                <hr/>

                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (todoList || [])?.slice(totalStart || 0, totalEnd || 10)?.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td className={'d-flex gap-2'}>
                                    {/*<button className={'border-0'}*/}
                                    {/*        onClick={() => handleUpdateEmployeeItem(item.id)}>Update*/}
                                    {/*</button>*/}
                                    <button className={'border-0'}
                                            onClick={() => handleDeletePost(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

                <div className={'d-flex gap-2 align-items-center'}>
                    <button type={'button'} onClick={() => setPageNum(pageNum - 1)} disabled={pageNum <= 1}>Prev
                    </button>
                    <p className={'mb-0'}>{`${pageNum} / ${totalPage}`}</p>
                    <button type={'button'} onClick={() => setPageNum(pageNum + 1)}
                            disabled={pageNum >= totalPage}>Next
                    </button>
                </div>
            </div>
            <CreatePostModal
                show={isOpenModal}
                onHide={handlePostModal}
            />

            <DeleteModal
                show={isDeleteModalShow}
                onHide={() => setIsDeleteModalShow(!isDeleteModalShow)}
                onHandleDeleteEmployeeDetails={onHandleDeletePostDetails}
                title={'Post'}
            />
        </>
    )
}

export default ToDo;