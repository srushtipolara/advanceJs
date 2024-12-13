import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useFormik} from "formik";
import {object, string} from "yup";
import {useNavigate} from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            gender: "",
        },
        validationSchema: object({
            name: string().required(),
            email: string().email().required(),
            password: string().required(),
            gender: string().required()
        }),
        onSubmit: (value) => {
            sessionStorage.setItem("user", JSON.stringify({...value, password: btoa(value.password)}))
            navigate("/login")
            value.resetForm();
        }
    })

    return (
        <>
            <Row className={'d-flex justify-content-center'}>
                <Col xxl={4} sm={12}>
                    <Card>
                        <Card.Header>
                            <h4>Creat New Account</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit}>

                                <div className={'mb-3'}>
                                    <Form.Label htmlFor={'name'} column={true}>Name</Form.Label>
                                    <Form.Control type={'text'} name={'name'} value={formik.values.name}
                                                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                  isInvalid={formik.touched.name && !!formik.errors.name}/>

                                    {
                                        formik.touched.name && formik.errors.name ?
                                            <Form.Control.Feedback
                                                type={'invalid'}> {formik.errors.name}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

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
                                <div className={'mb-5'}>
                                    <Form.Label column={true}>Password</Form.Label>
                                    <Form.Control type={'password'} name={'password'}
                                                  value={formik.values.password}
                                                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                                                  isInvalid={formik.touched.password && !!formik.errors.password}
                                    />

                                    {
                                        formik.touched.password && formik.errors.password ?
                                            <Form.Control.Feedback
                                                type={'invalid'}> {formik.errors.password}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <hr/>
                                <div className={'mb-3 d-flex gap-3'}>
                                    <Form.Check type={'radio'} label="Male" name={'gender'} id={`inline-Male-gender`}
                                                value={'male'}
                                                checked={formik.values.gender === 'male'}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={formik.touched.gender && !!formik.errors.gender}/>
                                    <Form.Check type={'radio'} label="Female" name={'gender'}
                                                id={`inline-Female"-gender`}
                                                checked={formik.values.gender === 'female'}
                                                value={"female"} onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={formik.touched.gender && !!formik.errors.gender}/>

                                    {
                                        formik.touched.gender && formik.errors.gender ?
                                            <Form.Control.Feedback
                                                type={'invalid'}> {formik.errors.gender}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <Button type={'submit'} variant={'secondary w-100'}>Sign up</Button>

                                <p className={'mt-2 d-flex justify-content-end gap-1'}>You do have account ? <a
                                    href={'/login'}
                                    className={'text-danger'}>Sign
                                    In</a></p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Signup;