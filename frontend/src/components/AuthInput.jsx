import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AuthInput = ({ label, type, value, onChange }) => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const inputType = type === "password" && !passwordVisible ? "password" : "text";

    return(
        <TextField
            label={label}
            variant="outlined"
            margin="normal"
            value={value}
            onChange={onChange}
            fullWidth
            type={type === "password" ? inputType: type}
            InputProps={
                type === "password"
                    ? {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>                           
                        ),
                    } 
                : undefined
            }
        />
    );
};

export default AuthInput;