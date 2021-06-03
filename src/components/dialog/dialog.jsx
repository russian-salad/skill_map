import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  variant="contained" color="primary" onClick={handleClickOpen}>
        Подробнее
      </Button>
      <Dialog fullWidth={true} maxWidth={false} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.data.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Placeat veritatis distinctio harum quod dolore similique modi reprehenderit facere impedit vel.
           Blanditiis aspernatur eos exercitationem tempora delectus reprehenderit voluptatum temporibus aliquam!
         Molestias rem eum pariatur blanditiis quibusdam optio exercitationem reprehenderit neque animi assumenda 
         dignissimos ut, amet aliquid et tenetur enim minus! Ad voluptatem omnis quia autem fugiat rerum libero,
          sed perferendis!
         Fugiat neque repellat hic recusandae atque at. Rerum quasi laudantium officiis blanditiis quod laborum, 
         doloribus fuga nostrum obcaecati harum, dolores architecto voluptatibus reiciendis. Soluta vel,
          explicabo obcaecati tempora tenetur incidunt.0
          </Typography>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
