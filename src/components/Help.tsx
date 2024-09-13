import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h2" gutterBottom>
        About the Game
      </Typography>
      <Typography variant="h6" paragraph>
        Welcome to the Memory Card Game! This is a fun and engaging game designed to test your memory and concentration. The objective is to find and match pairs of cards. The game ends when all pairs have been matched.
      </Typography>
      <Typography variant="h6" paragraph>
        <strong>How to Play:</strong>
        <ul>
          <li>Click on a card to flip it over and reveal its value.</li>
          <li>Click on another card to reveal its value and try to find a matching pair.</li>
          <li>If you find a matching pair, both cards will stay face up. If they don't match, they will flip back over.</li>
          <li>Keep track of your number of clicks and try to match all pairs with the fewest clicks.</li>
        </ul>
      </Typography>
      <Typography variant="h6" paragraph>
        <strong>Scoring:</strong>
        <ul>
          <li>Each match will decrease your score by 20 points.</li>
          <li>Each incorrect attempt will increase your score by 10 points.</li>
        </ul>
      </Typography>
      <Typography variant="h6" paragraph>
        <strong>Highest Score:</strong>
        <p>Your highest score will be saved and displayed on the main screen once the game is finished.</p>
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Back to Game
      </Button>
    </Container>
  );
};

export default About;
