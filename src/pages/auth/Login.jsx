import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import { login } from 'utils/auth';

// ================================|| STATIC LOGIN PAGE ||================================ //

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = login(username, password);
    if (isValid) {
      navigate('/dashboard/default');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            sx={{
              alignItems: 'baseline',
              justifyContent: 'space-between',
              mb: { xs: -0.5, sm: 0.5 }
            }}
          >
            <Typography variant="h3">Login</Typography>
            <Typography
              component={Link}
              to={'/register'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <Typography color="error">{error}</Typography>}
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
