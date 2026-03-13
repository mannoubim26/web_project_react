import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate(ROUTES.HOME);
    };

    return (
        <div className="login">
            {/* Language Switcher */}
            <div className="login__lang">
                <LanguageSwitcher />
            </div>

            {/* Main Card */}
            <div className="login__card">
                {/* Logo */}
                <div className="login__logo">
                    <div className="login__logo-icon">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6" y="32" width="8" height="12" rx="2" fill="#39ff14" />
                            <rect x="20" y="24" width="8" height="20" rx="2" fill="#00d4ff" />
                            <rect x="34" y="16" width="8" height="28" rx="2" fill="#39ff14" />
                        </svg>
                    </div>
                    <h1 className="login__app-name">{t('app.name')}</h1>
                </div>

                {/* Header */}
                <div className="login__header">
                    <h2 className="login__title">{t('login.welcome')}</h2>
                    <p className="login__subtitle">{t('login.subtitle')}</p>
                </div>

                {/* Form */}
                <form className="login__form" onSubmit={handleSignIn}>
                    <Input
                        id="login-email"
                        type="email"
                        label={t('login.email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        id="login-password"
                        type="password"
                        label={t('login.password')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <a href="#" className="login__forgot" id="forgot-password">
                        {t('login.forgotPassword')}
                    </a>

                    <Button id="sign-in-btn" type="submit" variant="primary" fullWidth>
                        {t('login.signIn')}
                    </Button>
                </form>

                {/* Footer */}
                <p className="login__footer">
                    {t('login.noAccount')}{' '}
                    <a
                        href="#"
                        className="login__signup-link"
                        id="sign-up-link"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(ROUTES.SIGNUP);
                        }}
                    >
                        {t('login.signUp')}
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
