import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DAY_SHORT_KEYS } from '../../constants';
import './WeeklyPlan.css';

function WeeklyPlan({ days, onToggle }) {
    const [activeDay, setActiveDay] = useState(0);
    const { t } = useLanguage();

    return (
        <div className="weekly-plan">
            {/* Day Tabs */}
            <div className="weekly-plan__tabs">
                {DAY_SHORT_KEYS.map((dayKey, index) => (
                    <button
                        key={dayKey}
                        className={`weekly-plan__tab ${activeDay === index ? 'weekly-plan__tab--active' : ''}`}
                        onClick={() => setActiveDay(index)}
                    >
                        {t(`weeklyPlan.${dayKey}`)}
                    </button>
                ))}
            </div>

            {/* Items List */}
            <div className="weekly-plan__items">
                {days[activeDay] && days[activeDay].items.map((item, itemIndex) => (
                    <div
                        key={itemIndex}
                        className={`weekly-plan__item ${item.done ? 'weekly-plan__item--done' : ''}`}
                    >
                        <label className="weekly-plan__checkbox-label">
                            <input
                                type="checkbox"
                                className="weekly-plan__checkbox"
                                checked={item.done}
                                onChange={() => onToggle(activeDay, itemIndex)}
                            />
                            <span className="weekly-plan__checkmark">
                                {item.done ? '✓' : ''}
                            </span>
                            <div className="weekly-plan__item-info">
                                <span className="weekly-plan__item-name">{item.name}</span>
                                {item.detail && (
                                    <span className="weekly-plan__item-detail">{item.detail}</span>
                                )}
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeeklyPlan;
