import React from 'react';
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Title from './Title';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ProjectDialog from './ProjectDialog'
import TaskDialog from './TaskDialog'
import { delProject } from '../actions';
import { delTask } from '../actions'

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
      padding: '2%',
      paddingBottom: '0',
      paddingTop: '0',

    },
    seeMore: {
      marginTop: theme.spacing(3),

    },
  }
}));

function preventDefault(event) {
  event.preventDefault();
}
function Row({ project, fromHours, tasks }) {


  const task = tasks.filter(task => task.project_id == project.id)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();


  return (
    <>
      <TableRow className={classes.root}>
        <TableCell className={classes.table}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {project.id}
        </TableCell>
        <TableCell >{project.attributes.date}</TableCell>
        <TableCell >{project.attributes.name}</TableCell>
        <TableCell >{project.attributes.customer}</TableCell>
        <TableCell >
          {fromHours
            ? <TaskDialog id={project.id} forHours={true} label={<AddCircleOutlineIcon />} />
            : <> <ProjectDialog style={{ color: 'green' }} id={project.id} isEdit={true} label={<EditOutlinedIcon />} />
              <Button onClick={() => dispatch(delProject(project.id))}><DeleteOutlineIcon style={{ color: "red" }} /></Button>
            </>
          }
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="project-items">
                <TableHead >
                  <TableRow>
                    <TableCell >Tehtävä</TableCell>
                    <TableCell >Tunnit </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {task.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.hours}
                      </TableCell>
                      <TableCell >
                        <TaskDialog style={{ color: 'green' }} id={row.id} isEdit={true} label={<EditOutlinedIcon />} />
                        <Button onClick={() => dispatch(delTask(row.id))}><DeleteOutlineIcon style={{ color: "red" }} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function Project(props) {
  const classes = useRowStyles();

  return (
    <>
      <Title>{props.title}</Title>
      <Table size="small" padding="none">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pr.No:</TableCell>
            <TableCell >Pvm</TableCell>
            <TableCell >Projekti</TableCell>
            <TableCell >Asiakas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((project) => (
            <Row fromHours={props.fromHours} key={project.id} tasks={props.tasks} project={project} />
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </>
  );
}
