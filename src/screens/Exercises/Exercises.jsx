import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { DAY_KEYS, DAY_SHORT_KEYS } from '../../constants';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import BottomNav from '../../components/BottomNav/BottomNav';
import exercisesData from './exercises.json';
import './Exercises.css';

function Exercises() {
    const { t } = useLanguage();
    const [selectedDay, setSelectedDay] = useState(0);
    const navigate = useNavigate();

    const currentDayKey = DAY_KEYS[selectedDay];
    const dayExercises = exercisesData.weeklyPlan[currentDayKey];
    const groupKeys = dayExercises ? Object.keys(dayExercises) : [];

    return (
        <div className="exercises">
            <header className="exercises__header">
                <button className="exercise__back" onClick={() => navigate('/home')}>←</button>
                <div>
                    <h1 className="exercises__title">{t('exercises.title')}</h1>
                    <p className="exercises__subtitle">{t('exercises.subtitle')}</p>
                </div>
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

                    return items.map((item, i) => (
                    <div className="exercises__card" key={i}>
                    <div className="exercises__card-header">
                    <span className="exercises__card-type">{groupKey}</span>
                    </div>
                        <div className="exercises__card-item-container">
                        <span className="exercises__card-item-name">
                        {item.name}
                        </span>
                    <div className="exercises__image-wrapper">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="exercises__item-img"
                        />
                    </div>
                </div>
            </div>
        ));
    })}
</div>

            <BottomNav />
        </div>
    );
}

export default Exercises;
