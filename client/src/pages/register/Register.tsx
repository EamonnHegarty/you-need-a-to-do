import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback,
} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Loader } from '../../components/Loader/Loader';
import { useRegsiterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { UserInfo } from '../../interfaces/IUserInfo';

export const Register: FC = (): ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegsiterMutation();

  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [userInfo, navigate]);

  const handleOnNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value }: { value: string } = event.target;
      setName(value);
    },
    [],
  );

  const handleOnEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value }: { value: string } = event.target;
      setEmail(value);
    },
    [],
  );

  const handleOnPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value }: { value: string } = event.target;
      setPassword(value);
    },
    [],
  );

  const handleOnSubmitForm = useCallback(() => {
    const promise = register({ name, email, password }).unwrap();

    promise
      .then((response: UserInfo) => {
        dispatch(setCredentials(response));
        toast.success('Successfully logged In');
        navigate('/dashboard');
      })
      .catch(() => {
        toast.error('Failed to log in');
      })
      .finally(() => {
        setEmail('');
        setPassword('');
        setName('');
      });
  }, [dispatch, email, name, navigate, password, register]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                width: '96px',
                height: '96px',
                backgroundColor: 'primary.main',
                marginBottom: '16px',
              }}
            >
              <LockTwoToneIcon sx={{ width: '66px', height: '66px' }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <FormControl fullWidth>
                <TextField
                  margin="normal"
                  value={name}
                  onChange={handleOnNameChange}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="off"
                  autoFocus
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  margin="normal"
                  value={email}
                  onChange={handleOnEmailChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  margin="normal"
                  value={password}
                  onChange={handleOnPasswordChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                />
              </FormControl>
              <Button
                onClick={handleOnSubmitForm}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                Register
              </Button>
              <Link to="/">{'   '}Login</Link>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
