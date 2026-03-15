import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { DAY_KEYS, DAY_SHORT_KEYS } from '../../constants';
import BottomNav from '../../components/BottomNav/BottomNav';
import mealsData from './meals.json';
import './Meal.css';

const mealLabels = ['breakfast', 'lunch', 'snack', 'dinner'];

function Meal() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(0);

    const currentDayKey = DAY_KEYS[selectedDay];
    const dayMeals = mealsData.weeklyPlan[currentDayKey];
    const mealKeys = dayMeals ? Object.keys(dayMeals) : [];

    return (
        <div className="meal">
            <header className="meal__header">
                <button className="meal__back" onClick={() => navigate('/home')}>←</button>
                <div>
                    <h1 className="meal__title">{t('meals.title')}</h1>
                    <p className="meal__subtitle">{t('meals.subtitle')}</p>
                </div>
              
            </header>

            {/* Day Selector Calendar */}
            <section className="meal__calendar">
                {DAY_SHORT_KEYS.map((dayShort, index) => (
                    <button
                        key={dayShort}
                        className={`meal__day-btn ${selectedDay === index ? 'meal__day-btn--active' : ''}`}
                        onClick={() => setSelectedDay(index)}
                    >
                        <span className="meal__day-name">{t(`weeklyPlan.${dayShort}`)}</span>
                    </button>
                ))}
            </section>

            {/* Day Title */}
            <section className="meal__daily-summary">
                <h2 className="meal__day-title">{t(`weeklyPlan.${currentDayKey}`)}</h2>
            </section>

            {/* Meals List */}
            <section className="meal__list">
                {mealKeys.map((mealKey, index) => {
                    const meal = dayMeals[mealKey];
                    const items = Object.values(meal);
                    const label = mealLabels[index] || mealKey;
                    return (
                        <div className="meal__card" key={mealKey}>
                            <div className="meal__card-header">
                                <span className="meal__card-type">{t(`meals.${label}`)}</span>
                            </div>
                            <ul className="meal__card-items">
                                {items.map((item, i) => (
                                    <li key={i} className="meal__card-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </section>

            <BottomNav />
        </div>
    );
}

export default Meal;
