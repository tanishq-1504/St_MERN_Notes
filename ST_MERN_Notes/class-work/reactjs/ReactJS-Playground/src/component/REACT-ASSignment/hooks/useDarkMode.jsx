import useToggle from "./useToggle";

export default function useDarkMode (initialValue = false) {
  const [darkMode, toggleDarkMode] = useToggle(initialValue);

  const styles = {
    backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  return [darkMode, toggleDarkMode, styles];
}

