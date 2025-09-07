import clsx from "clsx";
import cls from "./TheSidebar.module.css";
import { useMemo, useState } from "react";
import { AppButton, ThemeSwitcher } from "shared/ui";
import { LangSwitcher } from "./LangSwitcher";

interface TheSidebarProps {
  className?: string;
}

export const TheSidebar = (props: TheSidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const toggleLabel = useMemo(() => (collapsed ? ">" : "<"), [collapsed]);

  return (
    <aside
      className={clsx(cls.TheSidebar, className, collapsed && cls.collapsed)}
    >
      <AppButton onClick={onToggle}>{toggleLabel}</AppButton>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher isShort={collapsed} />
      </div>
    </aside>
  );
};
