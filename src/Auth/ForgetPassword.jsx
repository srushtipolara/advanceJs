import {Alert, Button, Card, Col, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showAlertMsg, setShowAlertMsg] = useState(false)
    const user = JSON.parse(sessionStorage.getItem("user"))

    const handleCloseAlertMsg = () => {
        setShowAlertMsg(!showAlertMsg)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: ""
        },
        onSubmit: (value, action) => {
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
    })

    useEffect(() => {
        setTimeout(() => {
            setShowPassword(false)
        }, 100)
    }, [showPassword])

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
                            <Form className={'mt-1'} onSubmit={formik.handleSubmit} autoComplete={'off'}>
                                <div className={'mb-2'}>
                                    <Form.Label column={true}>New Password</Form.Label>
                                    <Form.Control type={showPassword ? "text" : 'password'} name={'password'}
                                                  value={formik.values.password}
                                                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className={'d-flex gap-2 mt-2 text-secondary'}>
                                        <Form.Check type={'checkbox'} checked={showPassword}
                                                    onChange={handleShowPassword}/>
                                        <p>show Password</p>
                                    </div>
                                </div>

                                <Button type={'submit'} variant={'success'} className={'w-100'}>Change Password</Button>

                            </Form>
                        </Card.Body>

                    </Card>

                </Col>

            </Row>
        </>
    )
}

export default ForgetPassword;