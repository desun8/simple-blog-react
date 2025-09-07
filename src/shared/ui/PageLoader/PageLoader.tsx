import clsx from "clsx";
import cls from "./PageLoader.module.css";
import { Loader } from "../Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={clsx(cls.PageLoader, className)}>
      <Loader />
    </div>
  );
};
