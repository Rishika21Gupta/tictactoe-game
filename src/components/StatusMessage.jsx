// eslint-disable-next-line react/prop-types
const StatusMessage=({winner,gamingBoard})=>
{
// eslint-disable-next-line react/prop-types
const {squares,isNext}=gamingBoard;

    // eslint-disable-next-line react/prop-types
    const noMovesLeft=squares.every((squareValue)=>squareValue !== null);
    const nextPlayer =isNext? 'X' : 'O';
    
    const renderStatusMessage=()=>{
        if(winner)
        {
            return ( <>
              
              Winner is{' '}

                <span className={winner==='X'?'text-green':'text-orange'}>
                 {winner}
                 </span>
            </>
            );
        }

        if(!winner && noMovesLeft){
            return (
            
            <>
            <span className='text-green'>O</span> and {' '}
            <span className='text-orange'>X</span> tied
            
            </>
            
            );
        }
        if(!winner && !noMovesLeft)
        {
            return (
            <>
            Next player is {' '}
            <span className={isNext?'text-green':'text-orange'}>
                {nextPlayer}
            </span>
            
            </>
            
            );
        }

        return null;
    };

    return <h2 className="status-message">{renderStatusMessage()}</h2>;

};

export default StatusMessage;