// BotCard.js
import React from "react";

function BotCard({ bot, onClick, onDischarge }) {
  return (
    <div className="bot-card" onClick={() => onClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>❤️ {bot.health} | ⚔️ {bot.damage} | 🛡 {bot.armor}</p>
      {onDischarge && (
        <button 
          className="delete-btn" 
          onClick={(e) => { 
            e.stopPropagation(); 
            onDischarge(bot); 
          }}
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default BotCard;
