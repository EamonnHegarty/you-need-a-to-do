import React, { FC, ReactElement, useCallback } from 'react';
import { Avatar, Box, Typography, Tooltip, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../store/user/apiActions';
import { logoutClient } from '../../store/user/action';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

interface IProfile {
  name: string;
}

export const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'Eamonn' } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnLogout = useCallback(() => {
    const promise = dispatch(logout()).unwrap();
    promise
      .then((response) => {
        console.log(response);
        dispatch(logoutClient());
        navigate('/');
      })
      .catch(() => {
        console.log('Failed to log out');
      });
  }, [dispatch, navigate]);

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
            {`${name.substring(0, 1)}`}
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
        {`Welcome ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
