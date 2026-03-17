import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import './SignUp.css';

const PACKAGES = [
    {
        id: 'fitness',
        nameKey: 'signup.packageFitness',
        priceKey: 'signup.packageFitnessPrice',
        durationKey: 'signup.packageFitnessDuration',
        benefitKeys: [
            'signup.packageFitnessBenefit1',
            'signup.packageFitnessBenefit2',
            'signup.packageFitnessBenefit3',
            'signup.packageFitnessBenefit4',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 'essential',
        nameKey: 'signup.packageEssential',
        priceKey: 'signup.packageEssentialPrice',
        durationKey: 'signup.packageEssentialDuration',
        benefitKeys: [
            'signup.packageEssentialBenefit1',
            'signup.packageEssentialBenefit2',
            'signup.packageEssentialBenefit3',
            'signup.packageEssentialBenefit4',
        ],
        popular: true,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v9h9c-.47-4.68-4.32-8.53-9-9zm0 11v9c4.68-.47 8.53-4.32 9-9h-9z" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: 'premium',
        nameKey: 'signup.packagePremium',
        priceKey: 'signup.packagePremiumPrice',
        durationKey: 'signup.packagePremiumDuration',
        benefitKeys: [
            'signup.packagePremiumBenefit1',
            'signup.packagePremiumBenefit2',
            'signup.packagePremiumBenefit3',
            'signup.packagePremiumBenefit4',
            'signup.packagePremiumBenefit5',
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" fill="currentColor" />
            </svg>
        ),
    },
];

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [goal, setGoal] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => {
            navigate(ROUTES.LOGIN);
        }, 2500);
    };

    return (
        <div className="signup">
            {/* Language Switcher */}
            <div className="signup__lang">
            </div>

            {/* Success Overlay */}
            {showSuccess && (
                <div className="signup__overlay" id="success-overlay">
                    <div className="signup__overlay-card">
                        <div className="signup__overlay-icon">
                            <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26" r="25" stroke="#61C2FA" strokeWidth="2" />
                                <path d="M14 27l8 8 16-16" stroke="#61C2FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="signup__overlay-title">{t('signup.accountCreated')}</h3>
                        <p className="signup__overlay-text">{t('signup.redirecting')}</p>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="signup__container">
                {/* Header Card */}
                <div className="signup__card">
                    {/* Logo */}
                    <div className="signup__logo">
                        <div className="signup__logo-icon">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="32" width="8" height="12" rx="2" fill="#39ff14" />
                                <rect x="20" y="24" width="8" height="20" rx="2" fill="#00d4ff" />
                                <rect x="34" y="16" width="8" height="28" rx="2" fill="#39ff14" />
                            </svg>
                        </div>
                        <h1 className="signup__app-name">{t('app.name')}</h1>
                    </div>

                    {/* Header */}
                    <div className="signup__header">
                        <h2 className="signup__title">{t('signup.title')}</h2>
                        <p className="signup__subtitle">{t('signup.subtitle')}</p>
                    </div>

                    {/* Form */}
                    <form className="signup__form" onSubmit={handleCreateAccount} id="signup-form">
                        <Input
                            id="signup-username"
                            type="text"
                            label={t('signup.username')}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            id="signup-email"
                            type="email"
                            label={t('signup.email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            id="signup-password"
                            type="password"
                            label={t('signup.password')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Goal Dropdown */}
                        <div className={`signup__select-group ${goal ? 'signup__select-group--active' : ''}`}>
                            <select
                                id="signup-goal"
                                className="signup__select"
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                            >
                                <option value="" disabled>{t('signup.goalPlaceholder')}</option>
                                <option value="loseWeight">{t('signup.goalLoseWeight')}</option>
                                <option value="gainMuscle">{t('signup.goalGainMuscle')}</option>
                                <option value="other">{t('signup.goalOther')}</option>
                            </select>
                            <label className="signup__select-label">{t('signup.goalLabel')}</label>
                        </div>
                    </form>
                </div>

                {/* Subscription Section */}
                <div className="signup__subscription">
                    <div className="signup__subscription-header">
                        <h3 className="signup__subscription-title">{t('signup.subscriptionTitle')}</h3>
                        <p className="signup__subscription-subtitle">{t('signup.subscriptionSubtitle')}</p>
                    </div>

                    <div className="signup__packages">
                        {PACKAGES.map((pkg) => (
                            <div
                                key={pkg.id}
                                id={`package-${pkg.id}`}
                                className={`signup__package ${selectedPackage === pkg.id ? 'signup__package--selected' : ''} ${pkg.popular ? 'signup__package--popular' : ''}`}
                                onClick={() => setSelectedPackage(pkg.id)}
                            >
                                {pkg.popular && (
                                    <span className="signup__package-badge">⭐ Popular</span>
                                )}
                                <div className="signup__package-icon">{pkg.icon}</div>
                                <h4 className="signup__package-name">{t(pkg.nameKey)}</h4>
                                <div className="signup__package-price">
                                    <span className="signup__package-amount">{t(pkg.priceKey)}</span>
                                    <span className="signup__package-period">{t('signup.perMonth')}</span>
                                </div>
                                <span className="signup__package-duration">{t(pkg.durationKey)}</span>
                                <ul className="signup__package-benefits">
                                    {pkg.benefitKeys.map((bKey, i) => (
                                        <li key={i} className="signup__package-benefit">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 8l3.5 3.5L13 5" stroke="#61C2FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {t(bKey)}
                                        </li>
                                    ))}
                                </ul>
                                <div className="signup__package-select-btn">
                                    {selectedPackage === pkg.id ? t('signup.selected') : t('signup.selectPackage')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Create Account Button */}
                <div className="signup__actions">
                    <Button
                        id="create-account-btn"
                        type="submit"
                        variant="primary"
                        fullWidth
                        onClick={handleCreateAccount}
                    >
                        {t('signup.createAccount')}
                    </Button>
                </div>

                {/* Footer */}
                <p className="signup__footer">
                    {t('signup.hasAccount')}{' '}
                    <a
                        href="#"
                        className="signup__signin-link"
                        id="sign-in-link"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(ROUTES.LOGIN);
                        }}
                    >
                        {t('signup.signIn')}
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
