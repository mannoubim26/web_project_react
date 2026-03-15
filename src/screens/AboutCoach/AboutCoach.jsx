import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav/BottomNav';
import './AboutCoach.css';

const CERTIFICATES = [
    'aboutCoach.cert1',
    'aboutCoach.cert2',
    'aboutCoach.cert3',
    'aboutCoach.cert4',
];

const SOCIALS = [
    {
        key: 'instagram',
        url: 'https://instagram.com/johndoe',
        handle: '@johndoe',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#e1306c" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" stroke="#e1306c" strokeWidth="2" />
                <circle cx="18" cy="6" r="1.5" fill="#e1306c" />
            </svg>
        ),
    },
    {
        key: 'tiktok',
        url: 'https://tiktok.com/@johndoe',
        handle: '@johndoe',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12a4 4 0 1 0 4 4V4c1 3 4 4 6 4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        key: 'linkedin',
        url: 'https://linkedin.com/in/johndoe',
        handle: 'John Doe',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" stroke="#0a66c2" strokeWidth="2" />
                <rect x="2" y="9" width="4" height="12" stroke="#0a66c2" strokeWidth="2" />
                <circle cx="4" cy="4" r="2" stroke="#0a66c2" strokeWidth="2" />
            </svg>
        ),
    },
];

function AboutCoach() {
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="about-coach">
            {/* Header */}
            <header className="about-coach__header">
                <button className="about-coach__back" onClick={() => navigate('/home')}>←</button>
                <div>
                    <h2 className="about-coach__title">{t('aboutCoach.title')}</h2>
                    <p className="about-coach__subtitle">{t('aboutCoach.subtitle')}</p>
                </div>
                
            </header>

            {/* Coach Profile */}
            <div className="about-coach__profile">
                <div className="about-coach__avatar">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className="about-coach__name">John Doe</h3>
                <p className="about-coach__role">Personal Fitness Coach</p>
                <p className="about-coach__bio">{t('aboutCoach.bio')}</p>
            </div>

            {/* Certificates */}
            <div className="about-coach__certs">
                <h3 className="about-coach__section-title">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15l-3 3v5l3-2 3 2v-5l-3-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    {t('aboutCoach.certificatesTitle')}
                </h3>
                <ul className="about-coach__cert-list">
                    {CERTIFICATES.map((certKey, i) => (
                        <li key={i} className="about-coach__cert-item">
                            <div className="about-coach__cert-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="about-coach__cert-name">{t(certKey)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact / Social */}
            <div className="about-coach__contact">
                <h3 className="about-coach__section-title">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t('aboutCoach.connectTitle')}
                </h3>
                <div className="about-coach__socials">
                    {SOCIALS.map((social) => (
                        <a
                            key={social.key}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-coach__social-link"
                        >
                            <div className={`about-coach__social-icon about-coach__social-icon--${social.key}`}>
                                {social.icon}
                            </div>
                            <div className="about-coach__social-info">
                                <span className="about-coach__social-label">{t(`aboutCoach.${social.key}`)}</span>
                                <span className="about-coach__social-handle">{social.handle}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <BottomNav />
        </div>
    );
}

export default AboutCoach;
