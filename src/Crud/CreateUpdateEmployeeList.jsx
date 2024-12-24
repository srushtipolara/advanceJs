import {Button, Card, Col, Form, Row} from "react-bootstrap"
import {useFormik} from "formik";
import {array, number, object, string} from "yup"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createNewList} from "../Reducre/list/reducer";
import {useContext} from "react";
import StoreDataContext from "../Common/CreateContext";

const CreateUpdateEmployeeList = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {setFormContext} = useContext(StoreDataContext)

    const handleEmployeeListValidation = () => object({
        employName: string().required("Employee Name is Requires"),
        employDesignation: string().required("Employee Designation is Requires"),
        employSalary: number().required("Employee Salary is Requires"),
        employLocation: string().required("Employee Location is Requires"),
        employeeJoinedDate: string().required("Employee Join Date is Requires"),
        employeeSkills: array().of(object({
            skill: string().required("Employee Skills is Requires")
        }))
    });

    const defaultSkill = {skill: ''}


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: '',
            employName: '',
            employDesignation: '',
            employSalary: '',
            employLocation: '',
            employeeJoinedDate: '',
            employeeSkills: [defaultSkill],
        },
        validationSchema: handleEmployeeListValidation(),
        onSubmit: (value, action) => {
            dispatch(createNewList(value))
            setFormContext([{...value, id: Math.floor(Math.random() * 1000)}])
            navigate('/')

            action.resetForm({
                employName: '',
                employDesignation: '',
                employSalary: '',
                employLocation: '',
                employeeJoinedDate: '',
                employeeSkills: []
            })
        }
    })

    const handleAddSkills = () => {
        const newSkills = {...defaultSkill, skill: ''}
        formik.setFieldValue('employeeSkills', formik.values.employeeSkills.concat(newSkills))
    }

    return (
        <>
            <Row className={'d-flex justify-content-center'}>
                <Col xxl={'4'} sm={'12'}>

                    <Card>
                        <Card.Header>
                            <h4>Create Employee List</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                <div className={'mb-2'}>
                                    <Form.Label htmlFor={'employName'} column={true}>Name</Form.Label>
                                    <Form.Control type={'text'} name={'employName'}
                                                  value={formik.values.employName || ''}
                                                  onChange={formik.handleChange}
                                                  onBlur={formik.handleBlur}
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
                                                  onBlur={formik.handleBlur}
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
                                                  onBlur={formik.handleBlur}
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
                                                  onBlur={formik.handleBlur}
                                                  isInvalid={!!formik.values.employLocation}/>
                                    {
                                        (formik.errors.employLocation && formik.touched.employLocation) ?
                                            <Form.Control.Feedback className={'d-flex'}
                                                                   type={'invalid'}>{formik.errors.employLocation}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>

                                <div className={'mb-2'}>
                                    <Form.Label htmlFor={'employeeJoinedDate'} column={true}>Joined
                                        Date</Form.Label>
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

                                <div className={'mb-2'}>
                                    <div className={'d-flex justify-content-between mb-2'}>
                                        <Form.Label column={true} htmlFor={'skills'}>Skills</Form.Label>
                                        <Button type={'button'} className={'btn btn-secondary'}
                                                onClick={handleAddSkills}>Add
                                            skills
                                        </Button>
                                    </div>

                                    {
                                        (formik.values.employeeSkills || [])?.map((item, index) => {
                                            const touchedSkill = formik.touched?.employeeSkills?.[index]?.skill;
                                            const errorSkill = formik.errors?.employeeSkills?.[index]?.skill;

                                            return <div className={'mb-2'} key={index}>
                                                <Form.Control type={'text'}
                                                              name={`formik.values.employeeSkills[${index}].skill`}
                                                              value={formik.values.employeeSkills[index].skill}
                                                              onChange={(event) => {
                                                                  const {value} = event.target;
                                                                  formik.setFieldValue(`employeeSkills[${index}].skill`, value)
                                                              }}
                                                              onBlur={formik.handleBlur}
                                                              isInvalid={touchedSkill && !!errorSkill}
                                                />
                                                {
                                                    touchedSkill && errorSkill ?
                                                        <Form.Control.Feedback type={'invalid'}
                                                                               className={'d-flex'}>{errorSkill}</Form.Control.Feedback> : null
                                                }
                                            </div>
                                        })
                                    }

                                </div>

                                <Button type={'submit'}
                                        className={'w-50 btn btn-success float-end'}>Save</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default CreateUpdateEmployeeList;