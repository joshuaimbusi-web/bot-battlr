import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState(""); 
  const [filters, setFilters] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  function handleSelectBot(bot) {
    setSelectedBot(bot);
  }

  function handleBackToList() {
    setSelectedBot(null);
  }

  function handleEnlist(bot) {
    const hasSameClass = army.some(b => b.bot_class === bot.bot_class);
    if (hasSameClass) {
      alert(`You already have a ${bot.bot_class} in your army.`);
      return;
    }

    setArmy([...army, bot]);
    setBots(bots.filter(b => b.id !== bot.id));
    setSelectedBot(null);
  }

  function handleRelease(bot) {
    setArmy(army.filter(b => b.id !== bot.id));
    setBots([...bots, bot]);
  }

  function handleDischarge(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      });
  }

  const filteredBots = filters.length > 0 
    ? bots.filter(bot => filters.includes(bot.bot_class))
    : bots;

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (!sortBy) return 0;
    return b[sortBy] - a[sortBy];
  });

  return (
    <div>
      <h1> Bot Battlr</h1>

      <YourBotArmy 
        army={army} 
        onRelease={handleRelease} 
        onDischarge={handleDischarge} 
      />

      {!selectedBot ? (
        <>
          <SortBar 
            sortBy={sortBy} 
            setSortBy={setSortBy} 
            filters={filters}
            setFilters={setFilters}
          />
          <BotCollection 
            bots={sortedBots} 
            onSelect={handleSelectBot} 
          />
        </>
      ) : (
        <BotSpecs 
          bot={selectedBot} 
          onBack={handleBackToList} 
          onEnlist={handleEnlist} 
        />
      )}
    </div>
  );
}

export default App;

