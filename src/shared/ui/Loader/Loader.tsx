import clsx from "clsx";
import cls from "./Loader.module.css";

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return <span className={clsx(cls.Loader, className)}></span>;
};
