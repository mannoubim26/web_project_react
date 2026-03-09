import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { DAY_KEYS, DAY_SHORT_KEYS } from '../../constants';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Training.css';

const weeklyTraining = {
    monday: {
        type: 'strength',
        focus: 'Chest & Triceps',
        exercises: [
            { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
            { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '75s' },
            { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '60s' },
            { name: 'Tricep Dips', sets: 3, reps: '10-12', rest: '60s' },
            { name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: '60s' },
        ],
        cardio: { name: 'Treadmill Walk', duration: '10 min', intensity: 'Low' },
    },
    tuesday: {
        type: 'strength',
        focus: 'Back & Biceps',
        exercises: [
            { name: 'Deadlift', sets: 4, reps: '6-8', rest: '120s' },
            { name: 'Pull-Ups', sets: 3, reps: '8-10', rest: '90s' },
            { name: 'Barbell Row', sets: 3, reps: '10-12', rest: '75s' },
            { name: 'Face Pulls', sets: 3, reps: '15', rest: '60s' },
            { name: 'Barbell Curl', sets: 3, reps: '10-12', rest: '60s' },
        ],
        cardio: { name: 'Stair Climber', duration: '10 min', intensity: 'Medium' },
    },
    wednesday: {
        type: 'cardio',
        focus: 'Cardio & Core',
        exercises: [
            { name: 'Plank Hold', sets: 3, reps: '60s', rest: '30s' },
            { name: 'Russian Twists', sets: 3, reps: '20', rest: '30s' },
            { name: 'Leg Raises', sets: 3, reps: '15', rest: '30s' },
            { name: 'Mountain Climbers', sets: 3, reps: '30s', rest: '30s' },
        ],
        cardio: { name: 'Running', duration: '30 min', intensity: 'High' },
    },
    thursday: {
        type: 'strength',
        focus: 'Shoulders & Abs',
        exercises: [
            { name: 'Overhead Press', sets: 4, reps: '8-10', rest: '90s' },
            { name: 'Lateral Raises', sets: 3, reps: '12-15', rest: '60s' },
            { name: 'Front Raises', sets: 3, reps: '12', rest: '60s' },
            { name: 'Rear Delt Flyes', sets: 3, reps: '15', rest: '60s' },
            { name: 'Cable Crunches', sets: 3, reps: '15-20', rest: '45s' },
        ],
        cardio: { name: 'Rowing Machine', duration: '10 min', intensity: 'Medium' },
    },
    friday: {
        type: 'strength',
        focus: 'Legs & Glutes',
        exercises: [
            { name: 'Barbell Squat', sets: 4, reps: '8-10', rest: '120s' },
            { name: 'Romanian Deadlift', sets: 3, reps: '10-12', rest: '90s' },
            { name: 'Leg Press', sets: 3, reps: '12', rest: '75s' },
            { name: 'Walking Lunges', sets: 3, reps: '12/leg', rest: '60s' },
            { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
        ],
        cardio: { name: 'Cycling', duration: '10 min', intensity: 'Low' },
    },
    saturday: {
        type: 'cardio',
        focus: 'Full Body HIIT',
        exercises: [
            { name: 'Burpees', sets: 4, reps: '12', rest: '45s' },
            { name: 'Kettlebell Swings', sets: 4, reps: '15', rest: '45s' },
            { name: 'Box Jumps', sets: 3, reps: '10', rest: '45s' },
            { name: 'Battle Ropes', sets: 3, reps: '30s', rest: '30s' },
        ],
        cardio: { name: 'Jump Rope', duration: '15 min', intensity: 'High' },
    },
    sunday: {
        type: 'rest',
        focus: 'Rest & Recovery',
        exercises: [
            { name: 'Foam Rolling', sets: 1, reps: '15 min', rest: '-' },
            { name: 'Light Stretching', sets: 1, reps: '20 min', rest: '-' },
            { name: 'Yoga Flow', sets: 1, reps: '30 min', rest: '-' },
        ],
        cardio: { name: 'Leisure Walk', duration: '30 min', intensity: 'Low' },
    },
};

function Training() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(0);

    const currentDayKey = DAY_KEYS[selectedDay];
    const dayTraining = weeklyTraining[currentDayKey];

    const getTypeColor = (type) => {
        switch (type) {
            case 'strength': return '#39ff14';
            case 'cardio': return '#00d4ff';
            case 'rest': return '#ff6b35';
            default: return '#8892b0';
        }
    };

    const getIntensityColor = (intensity) => {
        switch (intensity) {
            case 'High': return '#ff4757';
            case 'Medium': return '#ff6b35';
            case 'Low': return '#2ed573';
            default: return '#8892b0';
        }
    };

    return (
        <div className="training">
            <header className="training__header">
                <button className="training__back" onClick={() => navigate('/home')}>←</button>
                <div>
                    <h1 className="training__title">{t('training.title')}</h1>
                    <p className="training__subtitle">{t('training.subtitle')}</p>
                </div>
            </header>

            {/* Day Selector */}
            <section className="training__calendar">
                {DAY_SHORT_KEYS.map((dayShort, index) => {
                    const dayType = weeklyTraining[DAY_KEYS[index]].type;
                    return (
                        <button
                            key={dayShort}
                            className={`training__day-btn ${selectedDay === index ? 'training__day-btn--active' : ''}`}
                            onClick={() => setSelectedDay(index)}
                        >
                            <span className="training__day-name">{t(`weeklyPlan.${dayShort}`)}</span>
                            <span
                                className="training__day-dot"
                                style={{ backgroundColor: getTypeColor(dayType) }}
                            />
                        </button>
                    );
                })}
            </section>

            {/* Day Info Badge */}
            <section className="training__day-info">
                <div className="training__day-info-header">
                    <h2 className="training__day-title">{t(`weeklyPlan.${currentDayKey}`)}</h2>
                    <span
                        className="training__type-badge"
                        style={{ color: getTypeColor(dayTraining.type), borderColor: getTypeColor(dayTraining.type) }}
                    >
                        {t(`training.${dayTraining.type}`)}
                    </span>
                </div>
                <p className="training__focus">{dayTraining.focus}</p>
            </section>

            {/* Exercises List */}
            <section className="training__exercises">
                <h3 className="training__section-title">{t('training.exercises')}</h3>
                <div className="training__exercise-list">
                    {dayTraining.exercises.map((exercise, idx) => (
                        <div className="training__exercise-card" key={idx}>
                            <div className="training__exercise-index">{idx + 1}</div>
                            <div className="training__exercise-info">
                                <span className="training__exercise-name">{exercise.name}</span>
                                <div className="training__exercise-details">
                                    <span>{exercise.sets} {t('training.sets')}</span>
                                    <span>×</span>
                                    <span>{exercise.reps} {t('training.reps')}</span>
                                    <span className="training__exercise-rest">⏱ {exercise.rest}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cardio Section */}
            <section className="training__cardio">
                <h3 className="training__section-title">{t('training.cardioSession')}</h3>
                <div className="training__cardio-card">
                    <div className="training__cardio-info">
                        <span className="training__cardio-name">{dayTraining.cardio.name}</span>
                        <span className="training__cardio-duration">{dayTraining.cardio.duration}</span>
                    </div>
                    <span
                        className="training__intensity-badge"
                        style={{ color: getIntensityColor(dayTraining.cardio.intensity) }}
                    >
                        {dayTraining.cardio.intensity}
                    </span>
                </div>
            </section>

            <BottomNav />
        </div>
    );
}

export default Training;
