import React from 'react';

const fiftyFifty = Math.round(Math.random()) < 1;

class TodaysPlan extends React.Component{
    render(){
       if(fiftyFifty){
           return <h1>Tonight I'm going Out WOO</h1>;
       }else{
           return <h1>Tonight I'm going to bed</h1>
       }

       return(
           <div>
               {fiftyFifty};
           </div>
       )
    }
}

export default TodaysPlan;