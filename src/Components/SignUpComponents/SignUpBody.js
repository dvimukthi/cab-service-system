import React,{useState} from "react";
import "./SignUpBody.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import axios from 'axios'

const initialVals = {
  first_name:'',
  last_name:'',
  email:'',
  password:'',
  allowExtraEmails:false,
  address:'',
  phone_number:'',
  trip_count:0,
  type:'CUSTOMER'
};

export default function SignUpBody() {
  const [values, setValues] = useState(initialVals);
  const navigate = useNavigate();
  // link signin page
  const loadSignIn = () => {
    navigate("/signin");
  };


  function handleChange(e) {
    var name = e.target.name;
    var val = e.target.value;
    console.log(name,e.target.checked )
    if('allowExtraEmails'==name) {
      val = e.target.checked;
    } 
    setValues({
      ...values,
      [name]:val
   });
   console.log(values);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('first_name',values.first_name);
    data.append('last_name',values.last_name);
    data.append('email',values.email);
    data.append('password',values.password);
    data.append('allowExtraEmails',values.allowExtraEmails);
    data.append('address',values.address);
    data.append('phone_number',values.phone_number);
    data.append('trip_count',values.trip_count);
    data.append('type',values.type);

    axios.post("http://localhost:3001/customer",
      data,
      {
          'Content-Type':  'multipart/form-data;',
      }).then(function (response) {
        //handle success
        if(response.status == 201){
          loadSignIn();
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <div className="Signupbody__container">
      <Grid
        container
        component="main"
        style={{
          height: "100vh",
        }}
      >
        <CssBaseline />
        {/* bg image */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage:
              "url(https://img.freepik.com/vector-premium/pedir-taxi-plano-vector-ilustracion-dibujos-animados_82574-2190.jpg?w=2000)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* signup icon */}
            <Avatar
              style={{
                marginTop: "60px",
                margin: "1",
                background: "orange",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {/* form */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="first_name"
                    required
                    fullWidth
                    onChange={handleChange}
                    id="first_name"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    name="last_name"
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* signup checkbox */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        name="allowExtraEmails"
                        style={{
                          color: "orange",
                        }}
                        onChange={handleChange}
                      />
                    }
                    label="I want to receive updates via email."
                  />
                </Grid>
              </Grid>
              {/* signup button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  color: "black",
                  background: "orange",
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* signin link */}
                  <div
                    onClick={loadSignIn}
                    variant="body2"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      marginTop: "5px",
                      fontFamily: "'Roboto', sans-serif",
                      color: "rgb(137, 119, 38)",
                      textDecoration: "underline",
                    }}
                  >
                    Already have an account? Sign in
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </div>
  );
}
