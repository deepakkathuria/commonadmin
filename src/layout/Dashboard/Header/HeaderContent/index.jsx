// // material-ui
// import useMediaQuery from '@mui/material/useMediaQuery';
// import IconButton from '@mui/material/IconButton';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';

// // project imports
// import Search from './Search';
// import Profile from './Profile';
// import Notification from './Notification';
// import MobileSection from './MobileSection';

// // project import
// import { GithubOutlined } from '@ant-design/icons';

// // ==============================|| HEADER - CONTENT ||============================== //

// export default function HeaderContent() {
//   const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

//   return (
//     <>
//       {!downLG && <Search />}
//       {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
//       <IconButton
//         component={Link}
//         href="https://github.com/codedthemes/mantis-free-react-admin-template"
//         target="_blank"
//         disableRipple
//         color="secondary"
//         title="Download Free Version"
//         sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
//       >
//         {/* <GithubOutlined /> */}
//       </IconButton>

//       {/* <Notification /> */}
//       {!downLG && <Profile />}
//       {downLG && <MobileSection />}
//     </>
//   );
// }



import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// project imports
import Profile from './Profile';
import MobileSection from './MobileSection';

export default function HeaderContent() {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: 2
      }}
    >
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </Box>
  );
}
