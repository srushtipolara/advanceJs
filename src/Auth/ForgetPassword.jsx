import {Alert, Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userLogin} from "../Reducre/Login/reducer";
import {CustomBtn, FormPasswordInputField} from "./FormField";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAlertMsg, setShowAlertMsg] = useState(false)
    const user = JSON.parse(sessionStorage.getItem("user"))

    const handleCloseAlertMsg = () => {
        setShowAlertMsg(!showAlertMsg)
    }
    const initialValues = {
        password: ""
    }
    const onSubmit = (value, action) => {
        dispatch(userLogin({...user, password: btoa(value.password)}))
        sessionStorage.setItem("user", JSON.stringify({...user, password: btoa(value.password)}))
        handleCloseAlertMsg()
        setTimeout(() => {
            navigate("/login");
            handleCloseAlertMsg()
            action.resetForm({
                password: ""
            })
        }, 1000)
    }

    return (
        <>
            <Alert show={showAlertMsg} variant={'success'} dismissible onClose={handleCloseAlertMsg}>Changed
                Password Successfully</Alert>
            <Row className={'d-flex justify-content-center'}>
                <Col xxl={4} sm={12}>
                    <Card>

                        <Card.Header>
                            <h4>Forgot Password</h4>
                        </Card.Header>
                        <Card.Body>

                            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                                <Form className={'mt-1'} onSubmit={(event) => event.preventDefault()}
                                      autoComplete={'off'}>
                                    <FormPasswordInputField/>
                                    <CustomBtn title={'Change Password'} variant={'success'} className={'w-100'}/>
                                </Form>
                            </Formik>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>
        </>
    )
}

export default ForgetPassword;