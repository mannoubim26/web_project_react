import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGES } from '../../constants';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div className="lang-switcher" id="language-switcher">
            <span className="lang-switcher__icon">🌐</span>
            <select
                className="lang-switcher__select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label={t('language.label')}
            >
                {LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                        {t(`language.${lang}`)}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LanguageSwitcher;
