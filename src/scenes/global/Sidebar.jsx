import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/styles/StyledUl';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import user_profile from "../../assets/user_profile.jpg";


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !impotrant`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !impotrant"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !impotrant"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !impotrant"
            },
            "& .pro-inner-item.active": {
                color: "#6870fa !impotrant"
            },
        }}>
            <ProSidebarProvider collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{ margin: "10px 0 20px 0", color: colors.grey[100], }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h3" color={colors.grey[100]}>ADMINS</Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USERS */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img src={user_profile} alt="profile-user" width="100px" height="100px" style={{ cursor: "poiner", borderRadius: "50%" }} />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Rog
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebarProvider>
        </Box>
    )
}

export default Sidebar;