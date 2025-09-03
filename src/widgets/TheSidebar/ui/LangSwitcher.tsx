import clsx from "clsx";
import cls from './LangSwitcher.module.css';
import { AppButton, AppButtonTheme } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

interface LangSwitcherProps {
	className?: string;
	isShort?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
	const { className, isShort } = props;

	const { t, i18n } = useTranslation()
	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}
	const label = useMemo(() => isShort ? t('lang_short') : t('lang'), [isShort, i18n.language])

	return (
		<AppButton className={clsx(cls.LangSwitcher, className)} theme={AppButtonTheme.CLEAR} onClick={toggleLang}>{label}</AppButton>
	);
};

