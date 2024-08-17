import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Link, Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const BottomNavbar: React.FC = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/jobs');
        break;
      case 2:
        navigate('/search');
        break;
      case 3:
        navigate('/notifications');
        break;
      case 4:
        navigate('/profile');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Jobs" icon={<WorkIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Notifications" icon={<NotificationsIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
          <Link href="https://www.buymeacoffee.com/paulstgermain" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me a Coffee"
              style={{ height: '36px', width: '130px' }}
            />
          </Link>
        </Box>
      </BottomNavigation>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 1, backgroundColor: '#f8f8f8' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Paul St.Germain
        </Typography>
      </Box>
    </Paper>
  );
};

export default BottomNavbar;