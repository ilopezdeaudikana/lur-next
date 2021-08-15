import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: 15,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  button: {
    textTransform: 'none',
  },
}));