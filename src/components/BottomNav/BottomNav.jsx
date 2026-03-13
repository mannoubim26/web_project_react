import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants';
import './BottomNav.css';

const navItems = [
    { key: 'home', route: ROUTES.HOME, icon: 'H' },
    { key: 'meals', route: ROUTES.MEALS, icon: 'M' },
    { key: 'exercises', route: ROUTES.EXERCISES, icon: 'E' },
    { key: 'progress', route: ROUTES.PROGRESS, icon: 'P' },
    { key: 'profile', route: ROUTES.PROFILE, icon: 'U' },
    { key: 'about', route: ROUTES.ABOUT, icon: 'A' },
];

function BottomNav() {
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <nav className="bottom-nav" id="bottom-nav">
            {navItems.map((item) => {
                const isActive = location.pathname === item.route;
                return (
                    <button
                        key={item.key}
                        className={`bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
                        onClick={() => navigate(item.route)}
                        id={`nav-${item.key}`}
                    >
                        <span className="bottom-nav__icon">{item.icon}</span>
                        <span className="bottom-nav__label">{t(`nav.${item.key}`)}</span>
                    </button>
                );
            })}
            <div className="bottom-nav__spacer" />
            <button
                className="bottom-nav__item bottom-nav__item--signout"
                onClick={() => navigate(ROUTES.LOGIN)}
                id="nav-signout"
            >
                <span className="bottom-nav__icon">✕</span>
                <span className="bottom-nav__label">{t('nav.signOut')}</span>
            </button>
        </nav>
    );
}

export default BottomNav;
