import inputValidationChecker from "./utils/inputValidationChecker";
import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationTests, setValidationTests] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleSubmission = (event) => {
    event.preventDefault();

    setValidationTests([]);
    setShowResult(true);

    setValidationTests(inputValidationChecker(password, confirmPassword));
  };

  return (
    <div className="App">
      <h1>Password Validator</h1>

      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4 }} variant="h6" component="div">
          In order to have a good Password, it is recommended that your:
        </Typography>
        <List sx={{ pb: 2 }}>
          <ListItem sx={{ py: 0.3 }}>
            <ListItemText primary="Password has a minimum length of 6 characters" />
          </ListItem>
          <ListItem sx={{ py: 0.3 }}>
            <ListItemText primary="Password has at least 1 uppercase character" />
          </ListItem>
          <ListItem sx={{ py: 0.3 }}>
            <ListItemText primary="Password has at least 1 lowercase character" />
          </ListItem>
          <ListItem sx={{ py: 0.3 }}>
            <ListItemText primary="Password has at least 1 number" />
          </ListItem>
          <ListItem sx={{ py: 0.3 }}>
            <ListItemText primary="Password has at least 1 special character" />
          </ListItem>
        </List>
      </Grid>

      <form className="inputFieldsContainer">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="16px"
          color="white"
          pb="2rem"
        >
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="standard"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button variant="contained" onClick={handleSubmission}>
            Submit
          </Button>
        </Box>
      </form>

      {showResult && (
        <Grid xs={12} md={6} display="flex" flexDirection="column">
          {validationTests?.[0] !== "Success" ? (
            <Grid item>
              <Typography sx={{ mt: 4 }} variant="h5" component="div">
                Your Password has the following issues:
              </Typography>
              <List sx={{ pt: 1 }}>
                {validationTests.map((test) => (
                  <ListItem sx={{ py: 0.3 }}>
                    <ListItemText primary={test} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ) : (
            <Alert
              severity="success"
              sx={{
                margin: "auto",
              }}
            >
              Your Password is Strong and Ready to Go!
            </Alert>
          )}
        </Grid>
      )}
    </div>
  );
}

export default App;
