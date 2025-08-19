import clsx from "clsx";
import cls from './Navbar.module.css';
import { AppLink, AppLinkTheme } from "../../../shared/ui";

interface NavbarProps {
	className?: string;

}

export const Navbar = (props: NavbarProps) => {
	const { className, } = props;

	return (
		<div className={clsx(cls.Navbar, className)}>
			<div className={cls.links}>
				<AppLink to="/" theme={AppLinkTheme.SECONDARY}>
					Home
				</AppLink>
				<AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
					About
				</AppLink>
			</div>
		</div>
	);
};

