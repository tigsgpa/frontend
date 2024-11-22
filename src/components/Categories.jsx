import { Button, Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const tiles = [
    {
      id: 1,
      title: 'Navigation',
      description: 'Find shops and navigate easily through the mall.',
      img_url:
        'https://images.squarespace-cdn.com/content/v1/64073c3afdb5c4737243d022/277c4047-7c06-4a75-b135-af645a3e13c6/designinternational-lulu+mall+trivandrum-thiruvananthapuram-india-plaza+people.jpg',
      buttonText: 'Start Navigation',
      action: () => navigate('/shops'),
    },
    {
      id: 2,
      title: 'Food Court',
      description: 'Discover delicious food options and cuisines.',
      img_url:
        'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg',
      buttonText: 'Explore Food',
      action: () => navigate('/explore'),
    },
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {tiles.map((tile) => (
        <Box
          key={tile.id}
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: 'pointer',
            overflow: 'hidden',
            '&:hover .tile-image': {
              transform: 'scale(1.1)',
            },
            '&:hover .tile-overlay': {
              opacity: 0.7,
              background: 'linear-gradient(120deg, rgba(255,0,150,0.7), rgba(0,204,255,0.7))',
            },
            '&:hover .tile-content': {
              transform: 'translateY(0)',
              opacity: 1,
            },
          }}
          onClick={tile.action}
        >
          {/* Parallax Background */}
          <Box
            className="tile-image"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${tile.img_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)',
              transition: 'transform 1.5s ease',
            }}
          />
          {/* Animated Gradient Overlay */}
          <Box
            className="tile-overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
              transition: 'background 0.5s ease, opacity 0.5s ease',
            }}
          />
          {/* Content */}
          <Box
            className="tile-content"
            sx={{
              position: 'relative',
              textAlign: 'center',
              color: '#fff',
              zIndex: 2,
              transition: 'transform 0.5s ease, opacity 0.5s ease',
              opacity: 0.9,
              transform: 'translateY(20px)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                marginBottom: 2,
                textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
                background: 'linear-gradient(90deg, #ff6e40, #ff3d00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {tile.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.2rem',
                color: '#ddd',
                textShadow: '1px 1px 8px rgba(0, 0, 0, 0.6)',
                marginBottom: 3,
              }}
            >
              {tile.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundImage: 'linear-gradient(to right, #ff6e40, #ff3d00)',
                color: '#fff',
                fontWeight: 'bold',
                padding: '12px 28px',
                textTransform: 'none',
                borderRadius: 50,
                fontSize: '1rem',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                '&:hover': {
                  backgroundImage: 'linear-gradient(to right, #ff3d00, #ff6e40)',
                  transform: 'scale(1.1)',
                  boxShadow: '0 8px 20px rgba(255, 61, 0, 0.4)',
                },
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the tile's click event
                tile.action();
              }}
            >
              {tile.buttonText}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
