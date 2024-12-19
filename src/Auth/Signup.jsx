import {Card, Col, Form, Row} from "react-bootstrap";
import {Formik} from "formik";
import {object, string} from "yup";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLogin} from "../Reducre/Login/reducer";
import {
    CustomBtn,
    FormEmailInputField,
    FormGenderInputField,
    FormPasswordInputField,
    FormUserNameInputField
} from "./FormField";
import {setCookie} from "../Common/Cookie";

const Signup = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const initialValues = {
        name: "",
        email: "",
        password: "",
        gender: ""
    }

    const validationSchema = object({
        name: string().required(),
        email: string().email().required(),
        password: string().required(),
        gender: string().required()
    })

    const onSubmit = (value, actions) => {
        console.log({value})
        dispatch(userLogin({...value, password: btoa(value.password)}))
        setCookie("user", JSON.stringify({...value, password: btoa(value.password)}), 1)
        navigate("/login")
        actions.resetForm();
    }
    return (
        <>
            <Row className={'d-flex justify-content-center'}>
                <Col xxl={4} sm={12}>
                    <Card>
                        <Card.Header>
                            <h4>Creat New Account</h4>
                        </Card.Header>
                        <Card.Body>
                            <Formik initialValues={initialValues} validationSchema={validationSchema}
                                    onSubmit={onSubmit}>
                                <Form onSubmit={(event) => event.preventDefault()}>
                                    <FormUserNameInputField/>
                                    <FormEmailInputField/>
                                    <FormPasswordInputField/>
                                    <hr/>
                                    <FormGenderInputField/>
                                    <div className={'d-flex flex-column'}>

                                        <CustomBtn title={'Sign Up'} variant={'secondary'} className={'w-100 mx-auto'}/>
                                        <p className={'mt-2 d-flex justify-content-center gap-1'}>You do have account
                                            ? <a
                                                href={'/login'}
                                                className={'text-danger'}>Sign
                                                In</a>
                                        </p>
                                    </div>
                                </Form>
                            </Formik>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Signup;