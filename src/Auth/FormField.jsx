import {useFormikContext} from "formik";
import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";

const FormErrorMsg = ({field}) => {
    const formik = useFormikContext();
    return formik.touched[field] && formik.errors[field] ?
        <Form.Control.Feedback
            type={'invalid'}> {formik.errors[field]}</Form.Control.Feedback>
        : null
}
const FormUserNameInputField = () => {
    const formik = useFormikContext();
    return (
        <>
            <div className={'mb-3'}>
                <Form.Label htmlFor={'name'} column={true}>Name</Form.Label>
                <Form.Control type={'text'} name={'name'} value={formik.values.name}
                              onChange={formik.handleChange} onBlur={formik.handleBlur}
                              isInvalid={formik.touched.name && !!formik.errors.name}/>

                <FormErrorMsg field={'name'}/>
            </div>
        </>
    );
}

const FormEmailInputField = () => {
    const formik = useFormikContext();
    return (
        <>

            <div className={'mb-3'}>
                <Form.Label htmlFor={'email'} column={true}>Email</Form.Label>
                <Form.Control type={'email'} name={'email'} value={formik.values.email}
                              onChange={formik.handleChange} onBlur={formik.handleBlur}
                              isInvalid={formik.touched.email && !!formik.errors.email}/>
                <FormErrorMsg field={'email'}/>

            </div>
        </>
    )
}


const FormPasswordInputField = () => {
    const formik = useFormikContext()
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowPassword(false)
        }, 100)
    }, [showPassword])
    return (
        <>

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

                <FormErrorMsg field={'password'}/>
            </div>
        </>
    )
}

const FormGenderInputField = () => {
    const formik = useFormikContext();
    return (
        <>
            <div className={'mb-3 d-flex gap-3'}>
                <Form.Check type={'radio'} label="Male" name={'gender'}
                            id={`inline-Male-gender`}
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
                <FormErrorMsg field={'gender'}/>
            </div>
        </>
    )
}

const CustomBtn = ({title, variant, className = ''}) => {
    const formik = useFormikContext();
    return (
        <>
            <Button type={'submit'} variant={variant} className={className} onClick={formik.submitForm}>{title}</Button>
        </>
    )
}

export {
    FormUserNameInputField,
    FormEmailInputField,
    FormPasswordInputField,
    FormGenderInputField,
    CustomBtn,
    FormErrorMsg
};