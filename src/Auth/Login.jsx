import {Alert, Card, Col, Form, Row} from "react-bootstrap";
import {Formik} from "formik";
import {object, string} from "yup";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {userLogin} from "../Reducre/Login/reducer";
import emailjs from "@emailjs/browser"
import {CustomBtn, FormEmailInputField, FormPasswordInputField} from "./FormField";
import {getCookie} from "../Common/Cookie";

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    let getUser = getCookie('user');

    const handleCloseErrorMsg = () => {
        setShowErrorMsg(false)
    }

    const generatedOpt = () => {
        let num = '0123456789'
        let otp = ''
        for (let i = 0; i < 4; i++) {
            otp += Math.floor(Math.random() * num.length)
        }
        return otp;
    }


    const handleSignInWithEmail = () => {
        const generateOpt = generatedOpt()
        const templateParams = {
            email: getUser?.email,
            otp: generateOpt,
            from_name: getUser?.name,
            message: "You Have login with this website"
        }
        emailjs.send("service_e9uwwbj", "template_53y506o", templateParams, "inzu2xhcbmke-suVE")
            .then((res) => {
                console.log("Email sent successfully!", res);
                if (res.status === 200) {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const initialValues = {
        email: getUser?.email || "",
        password: getUser?.password ? atob(getUser?.password) : ""
    }

    const validationSchema = object({
        email: string().matches(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+.[a-zA-z]{2,}/, 'Invalid Email').required(),
        password: string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*-+/*(),.])/).min(5).required(),
    })

    const handleSubmit = (value, actions) => {
        console.log({value})
        if (getUser.email === value.email && getUser.password === btoa(value.password)) {
            localStorage.setItem("authUser", JSON.stringify({
                ...value,
                password: btoa(value.password)
            }))
            dispatch(userLogin({...value, password: btoa(value.password)}))
            setTimeout(() => {
                navigate("/list");
                setShowErrorMsg(false);
            }, 1000)
        } else {
            setShowErrorMsg(true)
        }
        actions.resetForm();
    }

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
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form onSubmit={(event) => event.preventDefault()}>
                                    <FormEmailInputField/>
                                    <FormPasswordInputField/>
                                    <div className={'d-flex flex-column'}>

                                        <CustomBtn title={'Login'} variant={'secondary'} className={'w-100 mx-auto'}/>
                                        <p className={'mt-2 d-flex justify-content-center gap-1'}>You don't have
                                            account? <a
                                                href={'/signup'} className={'text-danger'}> Sign up</a></p>
                                    </div>
                                </Form>
                            </Formik>

                            <hr/>
                            <p className={'d-flex justify-content-center pe-auto'}
                               onClick={() => handleSignInWithEmail()}> SignIn with Email</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Login;