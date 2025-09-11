import clsx from "clsx";
import cls from "./Navbar.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={clsx(cls.Navbar, className)}>
      <div className={cls.links}></div>
    </div>
  );
};
