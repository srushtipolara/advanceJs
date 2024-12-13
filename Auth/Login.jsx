import {Alert, Button, Card, Col, Form, Row} from "react-bootstrap";
import {useFormik} from "formik";
import {object, string} from "yup";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Login = () => {

    const navigate = useNavigate()
    const [showErrorMsg, setShowErrorMsg] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    let getUSer = JSON.parse(sessionStorage.getItem("user"));

    const handleCloseErrorMsg = () => {
        setShowErrorMsg(false)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: getUSer?.email || "",
            password: atob(getUSer?.password) || ""
        },
        validationSchema: object({
            email: string().email().required(),
            password: string().required()
        }),
        onSubmit: (value) => {
            if (getUSer.email === value.email && getUSer.password === btoa(value.password)) {
                localStorage.setItem("authUser", JSON.stringify({...value, password: btoa(value.password)}))
                setTimeout(() => {
                    navigate("/");
                    setShowErrorMsg(false);
                }, 1000)
            } else {
                setShowErrorMsg(true)
            }
            value.resetForm();
        }
    })

    useEffect(() => {
        setTimeout(() => {
            setShowPassword(false)
        }, 100)
    }, [showPassword])

    return (
        <>
            <Alert show={showErrorMsg} variant={'danger'} dismissible onClose={handleCloseErrorMsg}>Invalid
                Email or Password</Alert>
            <Row className={'d-flex justify-content-center'}>
                <Col xxl={'4'} sm={'12'}>
                    <Card>
                        <Card.Header>
                            <h4>Sign In</h4>
                        </Card.Header>

                        <Card.Body>

                            <Form onSubmit={formik.handleSubmit}>
                                <div className={'mb-3'}>
                                    <Form.Label htmlFor={'email'} column={true}>Email</Form.Label>
                                    <Form.Control type={'email'} name={'email'} value={formik.values.email}
                                                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                  isInvalid={formik.touched.email && !!formik.errors.email}/>

                                    {
                                        formik.touched.email && formik.errors.email ?
                                            <Form.Control.Feedback
                                                type={'invalid'}> {formik.errors.email}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>
                                <div>
                                    <Form.Label column={true}>Password</Form.Label>
                                    <Form.Control type={showPassword ? "text" : 'password'} name={'password'}
                                                  value={formik.values.password}
                                                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                  isInvalid={formik.touched.password && !!formik.errors.password}
                                    />
                                    <div className={'d-flex gap-2 mt-2 text-secondary justify-content-between'}>
                                        <div className={'d-flex gap-2'}>
                                            <Form.Check type={'checkbox'} checked={showPassword}
                                                        onChange={handleShowPassword}/>
                                            <p>show Password</p>
                                        </div>
                                        <a href={'/forget-password'} className={'text-secondary'}>Forgot your
                                            Password</a>
                                    </div>

                                    {
                                        formik.touched.password && formik.errors.password ?
                                            <Form.Control.Feedback
                                                type={'invalid'}> {formik.errors.password}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>


                                <Button type={'submit'} variant={'secondary w-100'}>Login</Button>

                                <p className={'mt-2 d-flex justify-content-end gap-1'}>You don't have account? <a
                                    href={'/signup'} className={'text-danger'}> Sign up</a></p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Login;