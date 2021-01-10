import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { newTask, editTask } from '../actions'
import { TextField } from 'formik-material-ui'

import * as Yup from 'yup';

const ProjectSchema = Yup.object().shape({
    name: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    hours: Yup.number()
        .required('Required'),
});

const TaskForm = (props) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks)

    const handleEditSubmit = (values) => {
        console.log(values)
        dispatch(editTask(values))
        props.handleClose();
    }

    const handleSubmit = (values) => {
        console.log(values)
        dispatch(newTask(values))
        props.handleClose();
    }


    if (props.new) {
        return (
            <div>
                <Formik
                    initialValues=
                    {

                        {
                            name: '',
                            hours: '',
                            project_id: Number(props.id),

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
                                        label="Tehtävä"
                                        name='name'
                                        as='input'
                                    />
                                    <Field
                                        style={{ marginRight: '2%' }}
                                        component={TextField}
                                        label="Tunnit"
                                        type="number"
                                        name='hours'
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
        const task = tasks.find(task => task.id === props.id)
        return (
            <div>
                <Formik
                    initialValues=
                    {
                        {
                            id: task.id,
                            name: task.name,
                            hours: task.hours,
                            project_id: task.project_id,

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
                                        label="Tehtävä"
                                        name='name'
                                        as='input'
                                    />
                                    <Field
                                        style={{ marginRight: '2%' }}
                                        component={TextField}
                                        label="Tunnit"
                                        type="number"
                                        name='hours'
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

export default TaskForm




