import "./index.css";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";

function Register() {
  return (
    <div>
      <h1>Hello</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Register;
