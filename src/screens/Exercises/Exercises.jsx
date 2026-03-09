import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import WeeklyPlan from '../../components/WeeklyPlan/WeeklyPlan';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Exercises.css';

function getExerciseData(t) {
    const makeDay = (items) => ({
        items: items.map((i) => ({ ...i, done: false })),
    });

    return [
        makeDay([
            { name: 'Bench Press', detail: `${t('exercises.exercises')} · 4x12` },
            { name: 'Dumbbell Flyes', detail: `${t('exercises.exercises')} · 3x15` },
            { name: 'Push-ups', detail: `${t('exercises.exercises')} · 3x20` },
            { name: 'Treadmill Run', detail: `${t('exercises.cardio')} · 30 min` },
        ]),
        makeDay([
            { name: 'Squats', detail: `${t('exercises.exercises')} · 4x10` },
            { name: 'Leg Press', detail: `${t('exercises.exercises')} · 3x12` },
            { name: 'Lunges', detail: `${t('exercises.exercises')} · 3x14` },
            { name: 'Cycling', detail: `${t('exercises.cardio')} · 25 min` },
        ]),
        makeDay([
            { name: 'Pull-ups', detail: `${t('exercises.exercises')} · 4x8` },
            { name: 'Barbell Rows', detail: `${t('exercises.exercises')} · 3x12` },
            { name: 'Deadlift', detail: `${t('exercises.exercises')} · 3x8` },
            { name: 'Jump Rope', detail: `${t('exercises.cardio')} · 20 min` },
        ]),
        makeDay([
            { name: 'Shoulder Press', detail: `${t('exercises.exercises')} · 4x10` },
            { name: 'Lateral Raises', detail: `${t('exercises.exercises')} · 3x15` },
            { name: 'Plank', detail: `${t('exercises.exercises')} · 3x60s` },
            { name: 'Rowing Machine', detail: `${t('exercises.cardio')} · 20 min` },
        ]),
        makeDay([
            { name: 'Bicep Curls', detail: `${t('exercises.exercises')} · 4x12` },
            { name: 'Tricep Dips', detail: `${t('exercises.exercises')} · 3x15` },
            { name: 'Hammer Curls', detail: `${t('exercises.exercises')} · 3x12` },
            { name: 'Elliptical', detail: `${t('exercises.cardio')} · 25 min` },
        ]),
        makeDay([
            { name: 'Hiking', detail: `${t('exercises.cardio')} · 60 min` },
            { name: 'Bodyweight Circuit', detail: `${t('exercises.exercises')} · 3 rounds` },
            { name: 'Stretching', detail: `${t('exercises.exercises')} · 20 min` },
        ]),
        makeDay([
            { name: 'Rest Day', detail: 'Recovery' },
            { name: 'Light Walk', detail: `${t('exercises.cardio')} · 30 min` },
            { name: 'Foam Rolling', detail: '15 min' },
        ]),
    ];
}

function Exercises() {
    const { t } = useLanguage();
    const [days, setDays] = useState(() => getExerciseData(t));

    const handleToggle = (dayIndex, itemIndex) => {
        setDays((prev) => {
            const updated = prev.map((day, di) => {
                if (di !== dayIndex) return day;
                return {
                    ...day,
                    items: day.items.map((item, ii) => {
                        if (ii !== itemIndex) return item;
                        return { ...item, done: !item.done };
                    }),
                };
            });
            return updated;
        });
    };

    return (
        <div className="exercises">
            <header className="exercises__header">
                <div>
                    <h1 className="exercises__title">{t('exercises.title')}</h1>
                    <p className="exercises__subtitle">{t('exercises.subtitle')}</p>
                </div>
                <LanguageSwitcher />
            </header>

            <WeeklyPlan days={days} onToggle={handleToggle} />

            <BottomNav />
        </div>
    );
}

export default Exercises;
