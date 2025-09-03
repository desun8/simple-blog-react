import { useTranslation } from "react-i18next"

export const IndexPage = () => {
	const { t } = useTranslation('main')

	return (<div><h1>{t('title')}</h1></div>)
}
