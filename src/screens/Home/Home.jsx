import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import Button from '../../components/Button/Button';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Home.css';

function Home() {
    const { t } = useLanguage();

    const stats = [
        { key: 'workouts', value: '12' },
        { key: 'calories', value: '8,420' },
        { key: 'minutes', value: '340' },
        { key: 'streak', value: '7' },
    ];

    const quickActions = [
        { key: 'startWorkout' },
        { key: 'logMeal' },
        { key: 'viewProgress' },
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

            {/* Quick Actions */}
            <section className="home__actions" id="quick-actions">
                <h2 className="home__section-title">{t('home.quickActions')}</h2>
                <div className="home__actions-grid">
                    {quickActions.map((action) => (
                        <Button key={action.key} variant="secondary" id={`action-${action.key}`}>
                            {t(`home.${action.key}`)}
                        </Button>
                    ))}
                </div>
            </section>

            {/* Today's Plan */}
            <section className="home__plan" id="today-plan">
                <h2 className="home__section-title">{t('home.todayPlan')}</h2>
                <div className="home__plan-list">
                    <div className="home__plan-item home__plan-item--done">
                        <span className="home__plan-check">✓</span>
                        <div className="home__plan-info">
                            <span className="home__plan-name">Morning Run</span>
                            <span className="home__plan-detail">5km · 28 min</span>
                        </div>
                    </div>
                    <div className="home__plan-item">
                        <span className="home__plan-check home__plan-check--pending" />
                        <div className="home__plan-info">
                            <span className="home__plan-name">Upper Body Workout</span>
                            <span className="home__plan-detail">45 min · Intermediate</span>
                        </div>
                    </div>
                    <div className="home__plan-item">
                        <span className="home__plan-check home__plan-check--pending" />
                        <div className="home__plan-info">
                            <span className="home__plan-name">Evening Yoga</span>
                            <span className="home__plan-detail">20 min · Beginner</span>
                        </div>
                    </div>
                </div>
            </section>

            <BottomNav />
        </div>
    );
}

export default Home;
