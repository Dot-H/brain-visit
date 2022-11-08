// Helpers
import DownloadIcon from "components/svgs/DownloadIcon";

// Utils
import cn from "classnames";

export type DownloadButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const DownloadButton = ({
  className,
  children,
  ...props
}: DownloadButtonProps) => {
  return (
    <a
      download
      {...props}
      className={cn(
        className,
        "text-l flex align-center justify-center border border-black dark:border-white rounded-full p-4 mt-7 m-auto hover:border-gray-400 hover:bg-gray-200/25 hover:text-secondary dark:hover:text-primary transition-colors duration-300"
      )}
    >
      <DownloadIcon className="w-[20px] mr-3" />
      {children}
    </a>
  );
};

export default DownloadButton;
