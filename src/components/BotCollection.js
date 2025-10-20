import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onSelect }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onClick={onSelect} 
        />
      ))}
    </div>
  );
}

export default BotCollection;

