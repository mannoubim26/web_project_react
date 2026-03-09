import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import WeeklyPlan from '../../components/WeeklyPlan/WeeklyPlan';
import BottomNav from '../../components/BottomNav/BottomNav';
import './MealPlan.css';

function getMealData(t) {
    const makeDayMeals = (b, l, s, d) => ({
        items: [
            { name: t('meals.breakfast'), detail: b, done: false },
            { name: t('meals.lunch'), detail: l, done: false },
            { name: t('meals.snack'), detail: s, done: false },
            { name: t('meals.dinner'), detail: d, done: false },
        ],
    });

    return [
        makeDayMeals('Oatmeal + Banana', 'Grilled Chicken Salad', 'Greek Yogurt', 'Salmon + Veggies'),
        makeDayMeals('Eggs + Toast', 'Turkey Wrap', 'Almonds', 'Steak + Rice'),
        makeDayMeals('Smoothie Bowl', 'Quinoa Bowl', 'Protein Bar', 'Pasta + Chicken'),
        makeDayMeals('Pancakes + Berries', 'Tuna Sandwich', 'Fruit Mix', 'Fish Tacos'),
        makeDayMeals('Avocado Toast', 'Chicken Soup', 'Trail Mix', 'Grilled Shrimp + Salad'),
        makeDayMeals('French Toast', 'Burrito Bowl', 'Rice Cakes', 'Pizza + Salad'),
        makeDayMeals('Granola + Milk', 'Caesar Salad', 'Hummus + Veggies', 'BBQ Chicken + Corn'),
    ];
}

function MealPlan() {
    const { t } = useLanguage();
    const [days, setDays] = useState(() => getMealData(t));

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
        <div className="meal-plan">
            <header className="meal-plan__header">
                <div>
                    <h1 className="meal-plan__title">{t('meals.title')}</h1>
                    <p className="meal-plan__subtitle">{t('meals.subtitle')}</p>
                </div>
                <LanguageSwitcher />
            </header>

            <WeeklyPlan days={days} onToggle={handleToggle} />

            <BottomNav />
        </div>
    );
}

export default MealPlan;
