import {Button, Card, Col, Form, Row} from "react-bootstrap"
import {useFormik} from "formik";
import {number, object, string} from "yup"
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";

const CreateUpdateEmployeeList = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [preEmployeeList, setPreEmployeeList] = useState([]);

    let employeeList = Array.isArray(preEmployeeList) ? preEmployeeList : [];
    const IsEditEmployeeList = useMemo(() => params?.id ? (preEmployeeList || [])?.find((item) => item?.id?.toString() === params?.id?.toString()) : null, [params?.id, preEmployeeList]);
    console.log("IsEditEmployeeList", IsEditEmployeeList)
    const handleEmployeeListValidation = () => object({
        employName: string().required("Employee Name is Requires"),
        employDesignation: string().required("Employee Designation is Requires"),
        employSalary: number().required("Employee Salary is Requires"),
        employLocation: string().required("Employee Location is Requires"),
        employeeJoinedDate: string().required("Employee Join Date is Requires"),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: IsEditEmployeeList?.id || Math.floor(Math.random() * 100),
            employName: IsEditEmployeeList !== undefined ? IsEditEmployeeList?.employName : '',
            employDesignation: (IsEditEmployeeList !== undefined && IsEditEmployeeList?.employDesignation) || '',
            employSalary: IsEditEmployeeList?.employSalary || '',
            employLocation: IsEditEmployeeList?.employLocation || '',
            employeeJoinedDate: IsEditEmployeeList?.employeeJoinedDate || '',
        },
        validationSchema: handleEmployeeListValidation(),
        onSubmit: (value, action) => {
            console.log({value})
            if (params.id) {
                const updateItem = employeeList.findIndex((item) => item.id === value.id)
                if (updateItem >= 0) {
                    employeeList[updateItem] = value
                }
            } else {
                employeeList.push(value)
            }
            localStorage.setItem("employeeList", JSON.stringify(employeeList));
            navigate('/')

            action.resetForm({
                employName: '',
                employDesignation: '',
                employSalary: '',
                employLocation: '',
                employeeJoinedDate: ''
            })
        }
    })

    useEffect(() => {
        const employeeDetails = JSON.parse(localStorage.getItem("employeeList") || "[]");
        setPreEmployeeList(employeeDetails);
    }, []);

    return (
        <>
            <Row className={'d-flex justify-content-center'}>
                <Col xxl={'4'} sm={'12'}>

                    <Card>
                        <Card.Header>
                            <h4>{params?.id ? "Update Employee List" : "Create Employee List"}</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit} autoCapitalize={'off'}>
                                <div className={'mb-2'}>
                                    <Form.Label htmlFor={'employName'} column={true}>Name</Form.Label>
                                    <Form.Control type={'text'} name={'employName'}
                                                  value={formik.values.employName || ''}
                                                  onChange={formik.handleChange}
                                                  isInvalid={formik.touched.employName && !!formik.errors.employName}/>
                                    {
                                        (formik.errors.employName && formik.touched.employName) ?
                                            <Form.Control.Feedback className={'d-flex'}
                                                                   type={'invalid'}>{formik.errors.employName}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <div className={'mb-2'}>
                                    <Form.Label htmlFor={'employDesignation'} column={true}>Designation</Form.Label>
                                    <Form.Control type={'text'} name={'employDesignation'}
                                                  value={formik.values.employDesignation}
                                                  onChange={formik.handleChange}
                                                  isInvalid={!!formik.values.employDesignation}/>
                                    {
                                        (formik.errors.employDesignation && formik.touched.employDesignation) ?
                                            <Form.Control.Feedback className={'d-flex'}
                                                                   type={'invalid'}>{formik.errors.employDesignation}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <div className={'mb-2'}>
                                    <Form.Label htmlFor={'employSalary'} column={true}>Salary</Form.Label>
                                    <Form.Control type={'number'} name={'employSalary'}
                                                  value={formik.values.employSalary}
                                                  onChange={formik.handleChange}
                                                  isInvalid={!!formik.values.employSalary}/>
                                    {
                                        (formik.errors.employSalary && formik.touched.employSalary) ?
                                            <Form.Control.Feedback className={'d-flex'}
                                                                   type={'invalid'}>{formik.errors.employSalary}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <div className={'mb-2'}>
                                    <Form.Label htmlFor={'employLocation'} column={true}>Location</Form.Label>
                                    <Form.Control type={'text'} name={'employLocation'}
                                                  value={formik.values.employLocation}
                                                  onChange={formik.handleChange}
                                                  isInvalid={!!formik.values.employLocation}/>
                                    {
                                        (formik.errors.employLocation && formik.touched.employLocation) ?
                                            <Form.Control.Feedback className={'d-flex'}
                                                                   type={'invalid'}>{formik.errors.employLocation}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <div className={'mb-2'}>
                                    <Form.Label htmlFor={'employeeJoinedDate'} column={true}>Joined Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        id="employeeJoinedDate"
                                        name="employeeJoinedDate"
                                        value={formik.values.employeeJoinedDate || ""}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={formik.touched.employeeJoinedDate && !!formik.errors.employeeJoinedDate}
                                    />

                                    {
                                        (formik.errors.employeeJoinedDate && formik.touched.employeeJoinedDate) ?
                                            <Form.Control.Feedback className={'d-flex'}
                                                                   type={'invalid'}>{formik.errors.employeeJoinedDate}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <Button type={'submit'}
                                        className={'w-50 btn btn-success float-end'}>{params?.id ? "Update" : "Save"}</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>
    )
}

export default CreateUpdateEmployeeList;