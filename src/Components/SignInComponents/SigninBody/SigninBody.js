import React from "react";
import "./SigninBody.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import axios from "axios";

export default function SigninBody() {
  const navigate = useNavigate();
  // signup page linking
  const loadSignUp = () => {
    navigate("/signup");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    axios
      .post("http://localhost:3001/signin", data, {
        "Content-Type": "multipart/form-data;",
      })
      .then(function (response) {
        //handle success
        if (response.status == 200) {
          console.log(response.data);
          var data = response.data;
          if (data.type == "CUSTOMER") navigate(`/book?cid=${data.userId}`);
          else if (data.type == "DRIVER") navigate(`/driver/${data.userId}`);
          else if (data.type == "ADMIN") navigate("/admin");
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div className="signinbody__container">
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
              "url(https://img.freepik.com/premium-vector/female-order-online-taxi-tiny-woman-character-use-internet-mobile-app-service-isolated-white-cartoon-illustration_169479-954.jpg?w=2000)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{
            background: "rgb(220, 212, 180)",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* signin icon */}
            <Avatar
              style={{
                margin: "1",
                background: "orange",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              style={{
                fontSize: "30px",
                color: "black",
              }}
            >
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              {/* form */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* login checkbox */}
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    style={{
                      color: "orange",
                    }}
                  />
                }
                label="Remember me"
              />
              {/* login button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  cursor: "pointer",
                  color: "black",
                  background: "orange",
                }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  {/* link signup page */}
                  <div
                    onClick={loadSignUp}
                    variant="body2"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      marginTop: "10px",
                      fontFamily: "'Roboto', sans-serif",
                      color: "rgb(137, 119, 38)",
                      textDecoration: "underline",
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
