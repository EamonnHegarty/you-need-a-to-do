import React, { FC, ReactElement, useCallback } from 'react';
import { Avatar, Box, Typography, Tooltip, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutClient } from '../../slices/authSlice';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';

interface IProfile {
  name: string;
}

export const Profile: FC<IProfile> = (): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userInfo } = useAppSelector((state) => state.auth);
  const [logout] = useLogoutMutation();

  const handleOnLogout = useCallback(() => {
    const promise = logout({}).unwrap();

    promise
      .then(() => {
        toast.success('Log out successful');
        dispatch(logoutClient());
        navigate('/');
      })
      .catch(() => {
        console.log('Failed to log out');
      });
  }, [dispatch, logout, navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingTop={5}
    >
      <Box position="relative" display="inline-flex">
        <Avatar
          sx={{
            width: '96px',
            height: '96px',
            backgroundColor: 'primary.main',
          }}
        >
          <Typography variant="h4" color="text.primary">
            {`${userInfo?.name.substring(0, 1) || 'U'}`}
          </Typography>
        </Avatar>
        <Tooltip title="Logout" placement="right">
          <IconButton
            onClick={handleOnLogout}
            sx={{
              position: 'absolute',
              bottom: '0px',
              right: '-30px',
            }}
          >
            <LogoutIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant="h6" color="text.primary">
        {`Welcome ${userInfo?.name || 'User'}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};
