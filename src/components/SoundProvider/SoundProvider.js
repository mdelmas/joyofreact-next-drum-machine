import React from "react";

export const SoundContext = React.createContext();

function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const toggleSoundEnabled = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
