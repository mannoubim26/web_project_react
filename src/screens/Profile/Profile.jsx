import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Profile.css';

function Profile() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [weight, setWeight] = useState('');
    const [message, setMessage] = useState('');
    const [weightSaved, setWeightSaved] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const handleSaveWeight = (e) => {
        e.preventDefault();
        if (!weight) return;
        setWeightSaved(true);
        setTimeout(() => setWeightSaved(false), 2000);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!message) return;
        setMessageSent(true);
        setMessage('');
        setTimeout(() => setMessageSent(false), 2000);
    };

    return (
        <div className="profile">
            <header className="profile__header">
                <button className="profile__back" onClick={() => navigate('/home')}>←</button>
                <div>
                    <h1 className="profile__title">{t('profile.title')}</h1>
                    <p className="profile__subtitle">{t('profile.subtitle')}</p>
                </div>
                <LanguageSwitcher />
            </header>

            {/* Update Weight */}
            <section className="profile__section">
                <h2 className="profile__section-title">{t('profile.updateWeight')}</h2>
                <form className="profile__form" onSubmit={handleSaveWeight}>
                    <Input
                        id="profile-weight"
                        type="number"
                        label={t('profile.currentWeight')}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <Button id="save-weight-btn" type="submit" variant="primary" fullWidth>
                        {t('profile.save')}
                    </Button>
                    {weightSaved && (
                        <p className="profile__feedback">{t('profile.weightUpdated')}</p>
                    )}
                </form>
            </section>

            {/* Message Coach */}
            <section className="profile__section">
                <h2 className="profile__section-title">{t('profile.messageCoach')}</h2>
                <form className="profile__form" onSubmit={handleSendMessage}>
                    <div className="profile__textarea-wrap">
                        <textarea
                            id="coach-message"
                            className="profile__textarea"
                            placeholder={t('profile.messagePlaceholder')}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                        />
                    </div>
                    <Button id="send-message-btn" type="submit" variant="primary" fullWidth>
                        {t('profile.send')}
                    </Button>
                    {messageSent && (
                        <p className="profile__feedback">{t('profile.messageSent')}</p>
                    )}
                </form>
            </section>

            <BottomNav />
        </div>
    );
}

export default Profile;
