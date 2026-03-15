import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import Chart from '../../components/Chart/Chart';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Progress.css';

const weightData = [
    { label: 'W1', value: 85 },
    { label: 'W2', value: 84.2 },
    { label: 'W3', value: 83.5 },
    { label: 'W4', value: 83.1 },
    { label: 'W5', value: 82.4 },
    { label: 'W6', value: 81.8 },
    { label: 'W7', value: 81.2 },
    { label: 'W8', value: 80.5 },
];

const trainingData = [
    { label: 'W1', value: 3 },
    { label: 'W2', value: 4 },
    { label: 'W3', value: 4 },
    { label: 'W4', value: 5 },
    { label: 'W5', value: 5 },
    { label: 'W6', value: 6 },
    { label: 'W7', value: 5 },
    { label: 'W8', value: 6 },
];

const powerData = [
    { label: 'W1', value: 62 },
    { label: 'W2', value: 65 },
    { label: 'W3', value: 68 },
    { label: 'W4', value: 70 },
    { label: 'W5', value: 73 },
    { label: 'W6', value: 76 },
    { label: 'W7', value: 78 },
    { label: 'W8', value: 82 },
];

function Progress() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="progress-screen">
            
            <header className="progress-screen__header">
                <button className="progress__back" onClick={() => navigate('/home')}>←</button>
                <div>
                    <h1 className="progress-screen__title">{t('progress.title')}</h1>
                    <p className="progress-screen__subtitle">{t('progress.subtitle')}</p>
                </div>
                <LanguageSwitcher />
            </header>

            <div className="progress-screen__charts">
                <Chart
                    title={t('progress.weight')}
                    data={weightData}
                    color="#00d4ff"
                    unit="kg"
                />
                <Chart
                    title={t('progress.training')}
                    data={trainingData}
                    color="#39ff14"
                />
                <Chart
                    title={t('progress.power')}
                    data={powerData}
                    color="#ff6b35"
                />
            </div>

            <BottomNav />
        </div>
    );
}

export default Progress;
