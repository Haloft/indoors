import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TaskForm from './TaskForm'

export default function TaskDialog(props) {
    console.log(props)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button style={props.style} variant={props.vrnt} color={props.color} onClick={handleClickOpen}>
                {props.label}{props.title}
            </Button>
            <Dialog maxWidth={false} fullWidth={false} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                {props.isEdit ?
                    <DialogTitle>Muokkaa Tehtävää</DialogTitle> :
                    <DialogTitle>Lisää Tehtävä</DialogTitle>
                }
                <DialogContent>
                    {props.isEdit ?
                        <TaskForm handleClose={handleClose} id={props.id} /> :
                        <TaskForm handleClose={handleClose} new={true} id={props.id} />
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}