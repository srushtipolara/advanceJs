import {Button, Form, Modal} from "react-bootstrap";
import {useFormik} from "formik";
import {updateList} from "../Reducre/list/reducer";
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {array, number, object, string} from "yup";
import {useContextStore} from "../Common/CreateContext";

const UpdateEmployeeList = ({id}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {formContext, setFormContext} = useContextStore()
    // const preEmployeeList = useSelector(state => state.EmployeeList.list)
    const IsEditEmployeeList = useMemo(() => id ? (formContext || [])?.find((item) => item?.id?.toString() === id.toString()) : null, [id, formContext]);

    const handleEmployeeListValidation = () => object({
        employName: string().required("Employee Name is Requires"),
        employDesignation: string().required("Employee Designation is Requires"),
        employSalary: number().required("Employee Salary is Requires"),
        employLocation: string().required("Employee Location is Requires"),
        employeeJoinedDate: string().required("Employee Join Date is Requires"),
        employeeSkills: array().of(object({
            skill: string().required("Skill is Requires")
        }))
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: IsEditEmployeeList?.id,
            employName: IsEditEmployeeList?.employName,
            employDesignation: IsEditEmployeeList?.employDesignation,
            employSalary: IsEditEmployeeList?.employSalary,
            employLocation: IsEditEmployeeList?.employLocation,
            employeeJoinedDate: IsEditEmployeeList?.employeeJoinedDate,
            employeeSkills: IsEditEmployeeList?.employeeSkills?.map(item => item) || []
        },
        validationSchema: handleEmployeeListValidation(),
        onSubmit: (value, action) => {
            dispatch(updateList(value))
            const updateFormContext = formContext.findIndex((item) => item.id === value.id)
            if (updateFormContext >= 0) {
                formContext[updateFormContext] = value
            }
            setFormContext(formContext)
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

    const onHide = () => navigate('/list');
    return (
        <Modal show={id} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>Update Employee List</Modal.Title>
            </Modal.Header>
            <Form onSubmit={formik.handleSubmit}>
                <Modal.Body>
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
                    <div className={'mb-2'}>
                        <Form.Label column={true} htmlFor={'employeeSkills'}>Skills</Form.Label>

                        {
                            (formik.values.employeeSkills || [])?.map((item, index) => {
                                return <div className={'mb-1'}>
                                    <Form.Control name={`formik.values.employeeSkills[${index}].skill`}
                                                  value={formik.values.employeeSkills[index].skill}
                                                  onChange={(event) => {
                                                      const {value} = event.target;
                                                      formik.setFieldValue(`employeeSkills[${index}].skill`, value)
                                                  }}
                                                  isInvalid={formik?.touched?.employeeSkills?.[index]?.skill && !!formik?.errors?.employeeSkills?.[index]?.skill}
                                    />

                                    {
                                        formik?.touched?.employeeSkills?.[index]?.skill && !!formik?.errors?.employeeSkills?.[index]?.skill ?
                                            <Form.Control.Feedback type={'invalid'}
                                                                   className={'d-flex'}>{formik?.errors?.employeeSkills?.[index]?.skill}</Form.Control.Feedback>
                                            : null
                                    }
                                </div>
                            })
                        }

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type={'button'}
                            className={'btn btn-secondary'} onClick={onHide}>Cancel</Button>
                    <Button type={'submit'}
                            className={'btn btn-success'}>Update</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default UpdateEmployeeList;