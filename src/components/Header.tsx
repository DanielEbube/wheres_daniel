import { useDisconnect, shortenAddress, useAccount } from '@puzzlehq/sdk';
import Button from './Button';
import { useGameStore } from '@state/gameStore';
import { useNavigate } from 'react-router-dom';

export const AppHeader = () => {
  const { account } = useAccount();
  const { disconnect, loading } = useDisconnect();
  const navigate = useNavigate();

  const questKnightStyle = {
    fontFamily: 'Quest Knight, sans-serif', // Assuming Quest Knight is the font name
    fontWeight: 'bold', // Thicken the text
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Solid text shadow
    textAlign: 'center', // Center the text
    fontSize: '2em', // Increase font size by twice its present size
    lineHeight: '1.5', // Adjust the line spacing
  };

  return (
    <div className='flex flex-col items-center w-full gap-5 p-4'>
      {account && account.address ? (
        <>
          <div style={questKnightStyle}>
            <button
              onClick={() => {
                useGameStore.getState().clearFlowStores();
                navigate('/');
              }}
            >
              <strong>WHERE'S</strong>
            </button>
            <div><strong>THE TREASURE?</strong></div>
          </div>
          <Button
            size='sm'
            color='white'
            className='w-fit'
            onClick={disconnect}
            disabled={loading}
          >
            {shortenAddress(account.address)}
          </Button>
        </>
      ) : (
        <div className='w-full self-stretch' />
      )}
    </div>
  );
};
