import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { tokens } from "../../theme";

const Bar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Bar" subtitle="Simple Bar Chart" />
            <Box height="75vh" color={colors.grey[500]}>
                <BarChart />
            </Box>
        </Box>
    );
};

export default Bar;