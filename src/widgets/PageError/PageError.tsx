import clsx from "clsx";
import cls from "./PageError.module.css";
import { AppButton } from "shared/ui";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
}

export const PageError = (props: PageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={clsx(cls.PageError, className)}>
      <p>{t("error_msg")}</p>
      <AppButton onClick={reloadPage}>{t("reload_page")}</AppButton>
    </div>
  );
};
