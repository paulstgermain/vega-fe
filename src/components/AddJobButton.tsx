import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface AddJobButtonProps {
  onClick: () => void;
}

const AddJobButton: React.FC<AddJobButtonProps> = ({ onClick }) => {
  const [isBottomReached, setIsBottomReached] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;
    const scrolledFromTop = window.scrollY + windowHeight;

    setIsBottomReached(scrolledFromTop >= fullHeight - 50);
  };

  const checkInitialScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    // If content doesn't fill the window height, place the button in its upper position
    if (fullHeight <= windowHeight) {
      setIsBottomReached(true);
    } else {
      setIsBottomReached(false);
    }
  };

  useEffect(() => {
    checkInitialScroll();
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fab
      color="secondary"
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: isBottomReached ? 148 : 16,
        right: 16,
        transition: 'bottom 0.3s ease-in-out',
        bgcolor: 'secondary.main',
        '&:hover': {
          bgcolor: 'secondary.dark',
        },
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddJobButton;