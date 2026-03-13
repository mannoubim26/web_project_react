import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DAY_KEYS, DAY_SHORT_KEYS } from '../../constants';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import BottomNav from '../../components/BottomNav/BottomNav';
import exercisesData from './exercises.json';
import './Exercises.css';

function Exercises() {
    const { t } = useLanguage();
    const [selectedDay, setSelectedDay] = useState(0);

    const currentDayKey = DAY_KEYS[selectedDay];
    const dayExercises = exercisesData.weeklyPlan[currentDayKey];
    const groupKeys = dayExercises ? Object.keys(dayExercises) : [];

    return (
        <div className="exercises">
            <header className="exercises__header">
                <div>
                    <h1 className="exercises__title">{t('exercises.title')}</h1>
                    <p className="exercises__subtitle">{t('exercises.subtitle')}</p>
                </div>
                <LanguageSwitcher />
            </header>

            {/* Day Selector */}
            <div className="exercises__calendar">
                {DAY_SHORT_KEYS.map((dayShort, index) => (
                    <button
                        key={dayShort}
                        className={`exercises__day-btn ${selectedDay === index ? 'exercises__day-btn--active' : ''}`}
                        onClick={() => setSelectedDay(index)}
                    >
                        <span className="exercises__day-name">{t(`weeklyPlan.${dayShort}`)}</span>
                    </button>
                ))}
            </div>

            {/* Day Title */}
            <div className="exercises__day-header">
                <h2 className="exercises__day-title">{t(`weeklyPlan.${currentDayKey}`)}</h2>
            </div>

            {/* Exercise Groups */}
            <div className="exercises__list">
                {groupKeys.map((groupKey) => {
                    const group = dayExercises[groupKey];
                    const items = Object.values(group);
                    return (
                        <div className="exercises__card" key={groupKey}>
                            <div className="exercises__card-header">
                                <span className="exercises__card-type">{groupKey}</span>
                            </div>
                            <ul className="exercises__card-items">
                                {items.map((item, i) => (
                                    <li key={i} className="exercises__card-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <BottomNav />
        </div>
    );
}

export default Exercises;
