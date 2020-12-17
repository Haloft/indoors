import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { newProject } from '../actions'
import { editProject } from '../actions'
import { TextField } from 'formik-material-ui'
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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
    rows: Yup.array().of(Yup.object({
        name: Yup.string()
            .required('Required'),
        hours: Yup.number()
            .required('Required')
    }))
});

const ProjectForm = (props) => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state)

    const generateNewId = () => projects.length + 1;

    const handleEditSubmit = (values) => {
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
                            id: generateNewId(),
                            done: false,
                            date: '',
                            name: '',
                            customer: '',
                            rows:
                                [
                                    {
                                        name: '',
                                        hours: '',
                                    },
                                ]
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
                                <h4>Projektin tehtävät</h4>
                                <FieldArray name="rows">
                                    {arrayHelpers => (
                                        <div>
                                            {props.values.rows.map((row, index) => {
                                                const name = `rows.${index}.name`
                                                const hours = `rows.${index}.hours`
                                                return (
                                                    <div key={index}>
                                                        <div>
                                                            <Field
                                                                style={{ marginRight: '1.5%' }}
                                                                component={TextField}
                                                                label="Tehtävä"
                                                                name={name}
                                                                as='input'
                                                            />
                                                            <Field
                                                                style={{ marginRight: '1.5%' }}
                                                                component={TextField}
                                                                label="Tunnit"
                                                                type="number"
                                                                name={hours}
                                                                as='input'
                                                            />
                                                            <DeleteOutlineIcon onClick={() => arrayHelpers.remove(index)} style={{ color: "red", marginLeft: '1%', marginTop: '3%' }} />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <Button color="primary" type="button" style={{ marginTop: "2%" }} variant="outlined"
                                                onClick={() =>
                                                    arrayHelpers.push({
                                                        name: '',
                                                        hours: ''
                                                    })}><AddIcon />Lisää Tehtävä</Button>
                                        </div>
                                    )}
                                </FieldArray>
                                <Button style={{ marginTop: "4%" }} color="primary" variant="contained" type="submit">Tallenna</Button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    } else {
        const project = projects.find(prj => prj.id === props.id)
        let forHours = props.forHours
        return (
            <div>
                <Formik
                    initialValues=
                    {
                        {
                            id: project.id,
                            done: project.done,
                            date: project.date,
                            name: project.name,
                            customer: project.customer,
                            rows: project.rows.map(row => ({ ...row })),
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
                                        style={{ marginRight: '2%' }}
                                        component={TextField}
                                        disabled={forHours}
                                        label="Pvm"
                                        name='date'
                                        type="date"
                                        as='input'
                                    />
                                    <Field
                                        style={{ marginRight: '2%' }}
                                        component={TextField}
                                        disabled={forHours}

                                        label="Projekti"
                                        name='name'
                                        as='input'
                                    />
                                    <Field
                                        component={TextField}
                                        disabled={forHours}

                                        label="Asiakas"
                                        name='customer'
                                        as='input'
                                    />
                                </div>
                                <h4>Projektin tehtävät</h4>
                                <FieldArray name="rows">
                                    {arrayHelpers => (
                                        <div>
                                            {props.values.rows.map((row, index) => {
                                                const name = `rows.${index}.name`
                                                const hours = `rows.${index}.hours`
                                                return (
                                                    <div key={index}>
                                                        <div>
                                                            <Field
                                                                style={{ marginRight: '2%' }}
                                                                component={TextField}
                                                                label="Tehtävä"
                                                                name={name}
                                                                as='input'
                                                            />
                                                            <Field
                                                                style={{ marginRight: '2%' }}
                                                                component={TextField}
                                                                label="Tunnit"
                                                                type="number"
                                                                name={hours}
                                                                as='input'
                                                            />
                                                            <DeleteOutlineIcon onClick={() => arrayHelpers.remove(index)} style={{ color: "red" }} />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <Button color="primary" type="button" style={{ marginTop: "2%" }} variant="outlined"
                                                onClick={() =>
                                                    arrayHelpers.push({
                                                        name: '',
                                                        hours: '',
                                                    })}><AddIcon />Lisää tehtävä</Button>
                                        </div>
                                    )}
                                </FieldArray>
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