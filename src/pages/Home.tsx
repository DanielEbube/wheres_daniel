import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import TotalWinnings from '@components/TotalWinnings';
import TheirTurn from '@components/TheirTurn';
import YourTurn from '@components/YourTurn';
import { useGameStore } from '@state/gameStore';
import { useNewGameStore } from './NewGame/store';
import { useAccount } from '@puzzlehq/sdk';
import backpackerImage from '@assets/fun-illustration-3d-cartoon-backpacker-removebg-preview.png';

function Home() {
  const [yourTurn, theirTurn, totalBalance] = useGameStore((state) => [
    state.yourTurn,
    state.theirTurn,
    state.totalBalance,
  ]);
  const [initialize] = useNewGameStore((state) => [state.initialize]);
  const { account } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Any cleanup or additional logic can be added here
    // if needed for the component
    return () => {
      // Cleanup logic, if required
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='flex h-full flex-col justify-between '>
      <div className='flex w-full flex-col gap-4 px-1'>
        <Button
          color='yellow'
          onClick={() => {
            if (!account) return;
            initialize(account?.address);
            navigate('/new-game');
          }}
          disabled={!account}
        >
          NEW GAME
        </Button>
        <TotalWinnings amount={totalBalance} color ='orange' />
        {yourTurn.length > 0 && <YourTurn games={yourTurn} />}
        {theirTurn.length > 0 && <TheirTurn games={theirTurn} />}
        {yourTurn.length === 0 && theirTurn.length === 0 && (
          <p className='self-center font-semibold'>
            No ongoing games, start one with a friend!
          </p>
        )}
      </div>
      <div className='mt-4 px-4 pb-4 text-center'>
        <img
          src={backpackerImage}
          alt='Backpacker Image'
          style={{
            width: '50%', // Adjust the size of the image
            maxHeight: '200px', // Set a maximum height if needed
          }}
        />
        <Button color='pink' size='sm'>
          Past Games
        </Button>
      </div>
    </div>
  );
}

export default Home;
