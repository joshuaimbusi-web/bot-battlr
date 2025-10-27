import React from "react";

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <p>Health {bot.health} | Damage {bot.damage} | Armor {bot.armor}</p>

      <div className="buttons">
        <button onClick={onBack}>Back to Collection</button>
        <button onClick={() => onEnlist(bot)}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;
