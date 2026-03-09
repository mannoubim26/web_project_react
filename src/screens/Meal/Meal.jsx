import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { DAY_KEYS, DAY_SHORT_KEYS } from '../../constants';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Meal.css';

const weeklyMeals = {
    monday: {
        breakfast: { name: 'Oatmeal & Berries', calories: 350, protein: 12, carbs: 55, fat: 8 },
        lunch: { name: 'Grilled Chicken Salad', calories: 480, protein: 42, carbs: 18, fat: 22 },
        snack: { name: 'Greek Yogurt & Nuts', calories: 220, protein: 15, carbs: 12, fat: 14 },
        dinner: { name: 'Salmon & Quinoa', calories: 560, protein: 38, carbs: 45, fat: 20 },
    },
    tuesday: {
        breakfast: { name: 'Protein Pancakes', calories: 410, protein: 28, carbs: 48, fat: 12 },
        lunch: { name: 'Turkey Wrap', calories: 520, protein: 35, carbs: 42, fat: 18 },
        snack: { name: 'Protein Shake', calories: 180, protein: 25, carbs: 8, fat: 4 },
        dinner: { name: 'Lean Beef Stir Fry', calories: 590, protein: 40, carbs: 38, fat: 24 },
    },
    wednesday: {
        breakfast: { name: 'Avocado Toast & Eggs', calories: 420, protein: 20, carbs: 32, fat: 24 },
        lunch: { name: 'Tuna Poke Bowl', calories: 510, protein: 36, carbs: 52, fat: 14 },
        snack: { name: 'Apple & Almond Butter', calories: 250, protein: 6, carbs: 28, fat: 14 },
        dinner: { name: 'Chicken Breast & Rice', calories: 540, protein: 44, carbs: 50, fat: 12 },
    },
    thursday: {
        breakfast: { name: 'Smoothie Bowl', calories: 380, protein: 18, carbs: 52, fat: 10 },
        lunch: { name: 'Grilled Fish Tacos', calories: 490, protein: 32, carbs: 40, fat: 18 },
        snack: { name: 'Trail Mix', calories: 280, protein: 8, carbs: 22, fat: 18 },
        dinner: { name: 'Pasta & Turkey Meatballs', calories: 620, protein: 38, carbs: 65, fat: 18 },
    },
    friday: {
        breakfast: { name: 'Egg White Omelette', calories: 320, protein: 28, carbs: 12, fat: 16 },
        lunch: { name: 'Chicken Caesar Wrap', calories: 530, protein: 38, carbs: 36, fat: 22 },
        snack: { name: 'Cottage Cheese & Fruit', calories: 200, protein: 20, carbs: 18, fat: 4 },
        dinner: { name: 'Grilled Shrimp & Veggies', calories: 480, protein: 36, carbs: 28, fat: 20 },
    },
    saturday: {
        breakfast: { name: 'French Toast & Berries', calories: 440, protein: 16, carbs: 58, fat: 14 },
        lunch: { name: 'Mediterranean Bowl', calories: 500, protein: 22, carbs: 52, fat: 20 },
        snack: { name: 'Protein Bar', calories: 210, protein: 20, carbs: 22, fat: 8 },
        dinner: { name: 'Grilled Steak & Sweet Potato', calories: 650, protein: 45, carbs: 42, fat: 28 },
    },
    sunday: {
        breakfast: { name: 'Acai Bowl', calories: 390, protein: 10, carbs: 62, fat: 12 },
        lunch: { name: 'Sushi Platter', calories: 550, protein: 28, carbs: 68, fat: 14 },
        snack: { name: 'Hummus & Veggies', calories: 190, protein: 8, carbs: 20, fat: 10 },
        dinner: { name: 'Roasted Chicken & Salad', calories: 520, protein: 42, carbs: 22, fat: 24 },
    },
};

const mealTypes = ['breakfast', 'lunch', 'snack', 'dinner'];

function Meal() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(0);

    const currentDayKey = DAY_KEYS[selectedDay];
    const dayMeals = weeklyMeals[currentDayKey];
    const totalCalories = mealTypes.reduce((sum, type) => sum + dayMeals[type].calories, 0);
    const totalProtein = mealTypes.reduce((sum, type) => sum + dayMeals[type].protein, 0);
    const totalCarbs = mealTypes.reduce((sum, type) => sum + dayMeals[type].carbs, 0);
    const totalFat = mealTypes.reduce((sum, type) => sum + dayMeals[type].fat, 0);

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

            {/* Daily Summary */}
            <section className="meal__daily-summary">
                <h2 className="meal__day-title">{t(`weeklyPlan.${currentDayKey}`)}</h2>
                <div className="meal__macros">
                    <div className="meal__macro">
                        <span className="meal__macro-value meal__macro-value--cal">{totalCalories}</span>
                        <span className="meal__macro-label">{t('meals.calories')}</span>
                    </div>
                    <div className="meal__macro">
                        <span className="meal__macro-value meal__macro-value--protein">{totalProtein}g</span>
                        <span className="meal__macro-label">{t('meals.protein')}</span>
                    </div>
                    <div className="meal__macro">
                        <span className="meal__macro-value meal__macro-value--carbs">{totalCarbs}g</span>
                        <span className="meal__macro-label">{t('meals.carbs')}</span>
                    </div>
                    <div className="meal__macro">
                        <span className="meal__macro-value meal__macro-value--fat">{totalFat}g</span>
                        <span className="meal__macro-label">{t('meals.fat')}</span>
                    </div>
                </div>
            </section>

            {/* Meals List */}
            <section className="meal__list">
                {mealTypes.map((type) => {
                    const meal = dayMeals[type];
                    return (
                        <div className="meal__card" key={type}>
                            <div className="meal__card-header">
                                <span className="meal__card-type">{t(`meals.${type}`)}</span>
                                <span className="meal__card-cal">{meal.calories} kcal</span>
                            </div>
                            <h3 className="meal__card-name">{meal.name}</h3>
                            <div className="meal__card-macros">
                                <span className="meal__card-macro">P: {meal.protein}g</span>
                                <span className="meal__card-macro">C: {meal.carbs}g</span>
                                <span className="meal__card-macro">F: {meal.fat}g</span>
                            </div>
                        </div>
                    );
                })}
            </section>

            <BottomNav />
        </div>
    );
}

export default Meal;
