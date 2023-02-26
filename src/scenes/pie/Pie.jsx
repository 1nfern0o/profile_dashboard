import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Pie = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Pie" subtitle="Welcome to your Pie" />
            </Box>
        </Box>
    );
};

export default Pie;