import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Geography = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Geography" subtitle="Welcome to your Geography" />
            </Box>
        </Box>
    );
};

export default Geography;