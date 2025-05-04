import { useTheme } from '@mui/material/styles';
import logoRKD from '../../assets/rkd.png'; // ✅ import your logo

export default function LogoMain() {
  const theme = useTheme();

  return (
    <img
      src={logoRKD}
      alt="RKD Logo"
      width="100"
      style={{
        filter: theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none'
      }}
    />
  );
}
