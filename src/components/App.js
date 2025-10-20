import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter(b => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => setArmy(army.filter(b => b.id !== bot.id)))
      .then(() => setBots(bots.filter(b => b.id !== bot.id)));
  }

  return (
    <div>
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy 
        army={army} 
        onRelease={releaseBot} 
        onDischarge={dischargeBot} 
      />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default App;
