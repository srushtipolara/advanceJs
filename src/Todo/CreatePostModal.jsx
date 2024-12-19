import {Button, Form, Modal} from "react-bootstrap";
import {useFormik} from "formik";
import {object, string} from "yup"
import {useDispatch} from "react-redux";
import {postTodos} from "../Reducre/todos/thunk";

const CreatePostModal = (props) => {
    const {show, onHide} = props;
    const dispatch = useDispatch()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: '',
            body: ''
        },
        validationSchema: object({
            title: string().required('Title is required'),
            body: string().required('Description is required'),
        }),
        onSubmit: (value, action) => {
            console.log({value})
            dispatch(postTodos(value))
            onHide();
            action({
                title: '',
                body: ''
            })

        }
    })
    return (
        <>
            <Modal show={show} onHide={onHide} centered={true}>
                <Modal.Header>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                        <div className={'mb-2'}>
                            <Form.Label column={true} htmlFor={'post-title'}>Title</Form.Label>
                            <Form.Control name={'title'} value={formik.values.title} onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          isInvalid={formik.touched.title && !formik.errors.title}/>
                            {
                                formik.touched.title && formik.errors.title ?
                                    <Form.Control.Feedback
                                        type={'invalid'}
                                        className={'d-flex'}>{formik.errors.title}</Form.Control.Feedback>
                                    : null
                            }
                        </div>
                        <div className={'mb-2'}>
                            <Form.Label column={true} htmlFor={'post-body'}>Description</Form.Label>
                            <Form.Control name={'body'}
                                          value={formik.values.body} onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          isInvalid={formik.touched.body && !formik.errors.body}/>
                            {
                                formik.touched.body && formik.errors.body ?
                                    <Form.Control.Feedback
                                        type={'invalid'}
                                        className={'d-flex'}>{formik.errors.body}</Form.Control.Feedback>
                                    : null
                            }
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button type={'submit'}> Save New Post</Button>
                        <Button variant={'secondary'} onClick={onHide}>Close</Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        </>
    )
}

export default CreatePostModal;