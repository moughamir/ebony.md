import { useSettingsStore } from "@/stores/settingsStore";

export const SettingsPanel = () => {
  const { theme, setTheme } = useSettingsStore();

  return (
    <div className="p-4 space-y-4">
      <div>
        <label>Theme</label>
        <select
          value={theme}
          onChange={(e) =>
            setTheme(e.target.value as "system" | "light" | "dark")
          }
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      {/* More settings... */}
    </div>
  );
};
