import React from 'react';
import {
    Typography,
    TextField,
    Card,
    Button,
    Container,
    Grid
  } from "@material-ui/core";
  import styles from "./style";
  import { Link } from 'react-router-dom';

  import { authenticationService } from '../../_services/authentication.service';

  import clsx from 'clsx';
  import { makeStyles } from '@material-ui/core/styles';
  import IconButton from '@material-ui/core/IconButton';
  import Input from '@material-ui/core/Input';
  import FilledInput from '@material-ui/core/FilledInput';
  import OutlinedInput from '@material-ui/core/OutlinedInput';
  import InputLabel from '@material-ui/core/InputLabel';
  import InputAdornment from '@material-ui/core/InputAdornment';
  import FormHelperText from '@material-ui/core/FormHelperText';
  import FormControl from '@material-ui/core/FormControl';
  import Visibility from '@material-ui/icons/Visibility';
  import VisibilityOff from '@material-ui/icons/VisibilityOff';


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

export default function Login(props) {

    // redirect to home if already logged in
    /*if (authenticationService.currentUserValue) { 
      props.history.push('/');
    }*/

    //authenticationService.login("leonardo@gmail.com","leo")

    const classes = styles();
    const classes2 = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      email: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleSendLogin = () => { 
     authenticationService.login(values.email,values.password)
      console.log(values);
    }
    return(
        <Container className={classes.container}>
          <Card variant="outlined"  className={classes.cardContainer}>

          <Typography  variant="h4" style={{marginBottom:'40px'}}>Inicial seccion</Typography>

          <FormControl style={{width:'70%'}} className={clsx(classes2.margin, classes2.textField)}>
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            id="standard-adornment-email"
            type={ 'text' }
            value={values.email}
            onChange={handleChange('email')} 
          />
        </FormControl>
          
        
          <FormControl className={clsx(classes2.margin, classes2.textField)} style={{width:'70%'}}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Container style={{display: 'flex', justifyContent:"space-around", marginTop:'40px'}}>
          <Button>
            <Link to="/" style={{color:'#3F51B5', textDecoration:'none'}}>olvidé mi contraseña</Link>
          </Button>
          <Button variant="contained" onClick={handleSendLogin} color="primary">Inicial seccion</Button>
        </Container>
          </Card>
        </Container>
    )
}

