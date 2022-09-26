// Assets
import MoonIcon from "components/svgs/MoonIcon";
import SunIcon from "components/svgs/SunIcon";

// Utils
import { useTheme } from "next-themes";

const iconTransformOrigin = { transformOrigin: "50% 100px" } as const;

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className={
        "border-gray-700 hover:border-primary focus:border-primary focus:outline-none inline-flex items-center justify-center overflow-hidden rounded-full border-2 p-1 transition"
      }
    >
      {/* note that the duration is longer then the one on body, controlling the bg-color */}
      <div className="relative h-8 w-8">
        <span
          className="absolute inset-0 rotate-90 transform text-black transition duration-700 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}
        >
          <MoonIcon />
        </span>
        <span
          className="absolute inset-0 rotate-0 transform text-black transition duration-700 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}
        >
          <SunIcon />
        </span>
      </div>
    </button>
  );
};

export default DarkModeToggle;
