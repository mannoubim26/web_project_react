import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import Button from '../../components/Button/Button';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Home.css';

function Home() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const stats = [
        { key: 'workouts', value: '12' },
        { key: 'calories', value: '8,420' },
        { key: 'minutes', value: '340' },
        { key: 'streak', value: '7' },
    ];

    return (
        <div className="home">
            {/* Top Bar */}
            <header className="home__header">
                <div className="home__greeting">
                    <h1 className="home__title">{t('home.greeting')}</h1>
                    <p className="home__subtitle">{t('home.subtitle')}</p>
                </div>
                <LanguageSwitcher />
            </header>

            {/* Stats Grid */}
            <section className="home__stats" id="stats-section">
                {stats.map((stat) => (
                    <div className="home__stat-card" key={stat.key}>
                        <span className="home__stat-value">{stat.value}</span>
                        <span className="home__stat-label">{t(`home.${stat.key}`)}</span>
                    </div>
                ))}
            </section>

            {/* Weekly Goal */}
            <section className="home__goal" id="weekly-goal">
                <div className="home__goal-header">
                    <h2 className="home__section-title">{t('home.weeklyGoal')}</h2>
                    <span className="home__goal-badge">5/7 {t('home.completed')}</span>
                </div>
                <div className="home__progress-track">
                    <div className="home__progress-bar" style={{ width: '71%' }} />
                </div>
            </section>
            {/* Today's Plan */}
            <section className="home__plan" id="today-plan">
                <h2 className="home__section-title">{t('home.todayPlan')}</h2>
                <div className="home__plan-buttons">
                    <Button variant="primary" fullWidth onClick={() => navigate(ROUTES.MEALS)}>
                        {t('home.meals')}
                    </Button>
                    <Button variant="primary" fullWidth onClick={() => navigate(ROUTES.EXERCISES)}>
                        {t('home.explore')} {t('nav.exercises')}
                    </Button>
                </div>
            </section>

            <BottomNav />
        </div>
    );
}

export default Home;
