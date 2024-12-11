import React from "react";
import { Button } from "@mui/material";

const SubmitButton = ({ label, loading, ...props }) => {
    return(
        <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            {...props}
        >
            {loading ? `${label}...` : label}
        </Button>
    );
};

export default SubmitButton;