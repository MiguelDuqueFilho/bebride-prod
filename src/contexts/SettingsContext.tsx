import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { THEMES } from '../utils/constants';

export const defaultSettings = {
  theme: THEMES.LIGHT
};

export interface settingsProps {
  theme: string;
}

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: (theme: settingsProps) => {}
});

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: settingsProps) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

export const SettingsProvider = ({ settings, children }: any) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  );

  const handleSaveSettings = (update = currentSettings) => {
    const mergedSettings = update;
    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, [settings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
