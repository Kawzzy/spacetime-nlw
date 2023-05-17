import React from "react";

// A React component is a function that returns HTML
// Components help us to build simple maintenance code and reuse code
// Props (Properties) in React are the properties that a component receives as parameters
const Home = () => {
  return (
    <div className="h-screen bg-zinc-950 p-6 text-zinc-50">
      <h1 className="text-4xl font-bold">Sua cápsula do tempo</h1>
    </div>
  );
};

export default Home;
