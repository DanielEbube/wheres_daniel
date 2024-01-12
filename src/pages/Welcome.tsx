import React, { useEffect } from 'react';
import { useConnect, useAccount } from '@puzzlehq/sdk';
import rightImageSrc from '../assets/13463-removebg-preview.png'; 
import leftImageSrc from '../assets/13463-removebg-preview.png';
import bottomImageSrc from '../assets/bottle-love-potion-with-heart-pink-background-removebg-preview.png';
import backgroundImageSrc from '../assets/nature-beauty-blue-sky-green-landscape-generative-ai.jpg'; // Import the background image
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button.js';

export const Welcome = () => {
  const navigate = useNavigate();
  const { account } = useAccount();
  const { loading, connect } = useConnect();

  useEffect(() => {
    if (account) {
      navigate('/');
    }
  }, [account, navigate]);

  return (
    
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        <img
          src={rightImageSrc}
          alt='Top-right Alex'
          className='fixed right-0 top-0 h-full max-h-[18rem] max-w-[50%] object-contain'
        />
        <img
          src={leftImageSrc}
          alt='Left Alex'
          className='fixed left-0 top-1/4 h-full max-h-[20rem] max-w-[50%] -translate-y-20 object-contain'
        />
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            textAlign: 'center',
            overflow: 'visible',
            whiteSpace: 'nowrap',
            zIndex: 10,
            maxWidth: '100%',
            animation: 'slideIn 5s ease-out',
            color: 'yellow', // Set text color to yellow
          }}
        >
          WHERE'S
          <br />
          THE TREASURE?
        </h1>
        <p
          className='z-10 mb-8 mt-8 max-w-[400px] text-center text-base font-bold tracking-tight text-primary-white'
        >
          A thrilling game showcasing the power of Aleo and the Puzzle
          multiparty privacy stack through a wager between friends!
        </p>
        <Button
          className='max-w-[250px]'
          onClick={connect}
          color='yellow'
          disabled={loading}
        >
          {loading ? 'Loading...' : loading ? 'Connecting...' : 'Play!'}
        </Button>
        <img
          src={bottomImageSrc}
          alt='Bottom Alex'
          className='center -translate-y-100 fixed bottom-0 h-full max-h-[12rem] w-3/5 max-w-[35%] transform object-contain'
        />
      </div>
  );
};
