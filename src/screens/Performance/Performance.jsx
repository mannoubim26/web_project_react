import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Chart from '../../components/Chart/Chart';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Performance.css';

const bodyDevData = [
    { label: 'W1', value: 12 },
    { label: 'W2', value: 14 },
    { label: 'W3', value: 13 },
    { label: 'W4', value: 16 },
    { label: 'W5', value: 15 },
    { label: 'W6', value: 18 },
    { label: 'W7', value: 20 },
    { label: 'W8', value: 22 },
];

const weightData = [
    { label: 'W1', value: 85 },
    { label: 'W2', value: 84.2 },
    { label: 'W3', value: 83.5 },
    { label: 'W4', value: 83.8 },
    { label: 'W5', value: 82.6 },
    { label: 'W6', value: 82.0 },
    { label: 'W7', value: 81.3 },
    { label: 'W8', value: 80.5 },
];

const bmiData = [
    { label: 'W1', value: 27.8 },
    { label: 'W2', value: 27.5 },
    { label: 'W3', value: 27.3 },
    { label: 'W4', value: 27.4 },
    { label: 'W5', value: 27.0 },
    { label: 'W6', value: 26.8 },
    { label: 'W7', value: 26.5 },
    { label: 'W8', value: 26.3 },
];

const heartRateData = [
    { label: 'W1', value: 78 },
    { label: 'W2', value: 76 },
    { label: 'W3', value: 74 },
    { label: 'W4', value: 75 },
    { label: 'W5', value: 72 },
    { label: 'W6', value: 70 },
    { label: 'W7', value: 69 },
    { label: 'W8', value: 67 },
];

function Performance() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const summaryCards = [
        { key: 'currentWeight', value: '80.5', unit: 'kg', color: '#00d4ff' },
        { key: 'bmi', value: '26.3', unit: '', color: '#ff6b35' },
        { key: 'restingHR', value: '67', unit: 'bpm', color: '#ff4757' },
        { key: 'bodyFat', value: '18.2', unit: '%', color: '#39ff14' },
    ];

    return (
        <div className="performance">
            <header className="performance__header">
                <button className="performance__back" onClick={() => navigate('/home')}>←</button>
                <div>
                    <h1 className="performance__title">{t('performance.title')}</h1>
                    <p className="performance__subtitle">{t('performance.subtitle')}</p>
                </div>
            </header>

            {/* Summary Cards */}
            <section className="performance__summary">
                {summaryCards.map((card) => (
                    <div className="performance__summary-card" key={card.key}>
                        <span className="performance__summary-value" style={{ color: card.color }}>
                            {card.value}
                            <small>{card.unit}</small>
                        </span>
                        <span className="performance__summary-label">{t(`performance.${card.key}`)}</span>
                    </div>
                ))}
            </section>

            {/* Body Development Chart */}
            <Chart
                title={t('performance.bodyDev')}
                data={bodyDevData}
                color="#39ff14"
                unit=""
            />

            {/* Weight Development Chart */}
            <Chart
                title={t('performance.weightDev')}
                data={weightData}
                color="#00d4ff"
                unit="kg"
            />

            {/* BMI Trend Chart */}
            <Chart
                title={t('performance.bmiTrend')}
                data={bmiData}
                color="#ff6b35"
                unit=""
            />

            {/* Resting Heart Rate Chart */}
            <Chart
                title={t('performance.heartRate')}
                data={heartRateData}
                color="#ff4757"
                unit="bpm"
            />

            <BottomNav />
        </div>
    );
}

export default Performance;
