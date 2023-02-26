import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Form = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Form" subtitle="Welcome to your Form" />
            </Box>
        </Box>
    );
};

export default Form;