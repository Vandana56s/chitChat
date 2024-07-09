import React, { Suspense, useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { orange } from '../../constants/color';
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchDialog = React.lazy(() => import("../specific/Search"));
const NotificationsDialog = React.lazy(() => import("../specific/Notifications"));
const NewGroupDialog = React.lazy(() => import("../specific/NewGroup"));

const Header = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const handleMobile = () => {
        setIsMobile(prev => !prev);
    };

    const openSearchDialog = () => {
        setIsSearch(prev => !prev);
    };

    const openNewGroup = () => {
        setIsNewGroup(prev => !prev);
    };

    const openNotification = () => {
        setIsNotification(prev => !prev);
    };

    const navigateToGroup = () => navigate("/groups");

    const logoutHandler = () => {
        console.log("Logout");
    };

    const IconBtn = ({ title, icon, onClick }) => {
        return (
            <Tooltip title={title}>
                <IconButton color="inherit" size='large' onClick={onClick}>
                    {icon}
                </IconButton>
            </Tooltip>
        );
    };

    return (
        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
            <AppBar position='static' sx={{ bgcolor: orange }}>
                <Toolbar>
                    <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                        chit-chat
                    </Typography>
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>
                        <IconButton color="inherit" onClick={handleMobile}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <IconBtn
                            title={"Search"}
                            icon={<SearchIcon />}
                            onClick={openSearchDialog}
                        />
                        <IconBtn
                            title={"New Group"}
                            icon={<AddIcon />}
                            onClick={openNewGroup}
                        />
                        <IconBtn
                            title={"Group"}
                            icon={<GroupIcon />}
                            onClick={navigateToGroup}
                        />
                        <IconBtn
                            title={"Notifications"}
                            icon={<NotificationsIcon />}
                            onClick={openNotification}
                        />
                        <IconBtn
                            title={"LogOut"}
                            icon={<LogoutIcon />}
                            onClick={logoutHandler}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
            {isSearch && (
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchDialog />
                </Suspense>
            )}
            {isNotification && (
                <Suspense fallback={<div>Loading...</div>}>
                    <NotificationsDialog />
                </Suspense>
            )}
            {isNewGroup && (
                <Suspense fallback={<div>Loading...</div>}>
                    <NewGroupDialog />
                </Suspense>
            )}
        </Box>
    );
};

export default Header;
