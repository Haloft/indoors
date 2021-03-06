import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { newProject, editProject } from '../actions'
import { TextField } from 'formik-material-ui'

import * as Yup from 'yup';

const ProjectSchema = Yup.object().shape({
    name: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    customer: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    date: Yup.date()
        .required('Required'),

});

const ProjectForm = (props) => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects)

    const handleEditSubmit = (values) => {
        console.log(values)
        dispatch(editProject(values))
        props.handleClose();
    }

    const handleSubmit = (values) => {
        dispatch(newProject(values))
        props.handleClose();
    }

    if (props.new) {
        return (
            <div>
                <Formik
                    initialValues=
                    {

                        {
                            done: false,
                            date: '',
                            name: '',
                            customer: '',
                        }
                    }
                    validationSchema={ProjectSchema}
                    onSubmit={handleSubmit}
                >
                    {props => {

                        return (
                            <Form>
                                <div>
                                    <Field
                                        style={{ marginRight: '2%', marginTop: "3%" }}
                                        component={TextField}
                                        name='date'
                                        type="date"
                                        as='input'
                                    />
                                    <Field
                                        style={{ marginRight: '2%' }}
                                        component={TextField}
                                        label="Projekti"
                                        name='name'
                                        as='input'
                                    />
                                    <Field
                                        component={TextField}
                                        label="Asiakas"
                                        name='customer'
                                        as='input'
                                    />
                                </div>
                                <Button style={{ marginTop: "4%" }} color="primary" variant="contained" type="submit">Tallenna</Button>

                            </Form>
                        )

                    }}
                </Formik>
            </div>
        )

    } else {
        const project = projects.find(pro => pro.id === props.id)
        return (
            <div>
                <Formik
                    initialValues=
                    {

                        {
                            id: project.id,
                            done: project.attributes.done,
                            date: project.attributes.date,
                            name: project.attributes.name,
                            customer: project.attributes.customer,
                        }
                    }
                    validationSchema={ProjectSchema}
                    onSubmit={handleEditSubmit}
                >
                    {props => {
                        return (
                            <Form>
                                <div>
                                    <Field
                                        style={{ marginRight: '2%', marginTop: "3%" }}
                                        component={TextField}
                                        name='date'
                                        type="date"
                                        as='input'
                                    />
                                    <Field
                                        style={{ marginRight: '2%' }}
                                        component={TextField}
                                        label="Projekti"
                                        name='name'
                                        as='input'
                                    />
                                    <Field
                                        component={TextField}
                                        label="Asiakas"
                                        name='customer'
                                        as='input'
                                    />
                                </div>
                                <Button style={{ marginTop: "4%" }} color="primary" variant="contained" type="submit">Tallenna</Button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    }
}

export default ProjectForm