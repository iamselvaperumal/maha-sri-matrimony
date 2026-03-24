import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import authService from '../../services/api/authService';
export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [lang, setLang] = useState('en');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      userName : emailOrPhone,
      password : password,
      rememberMe : rememberMe
    }

    handleLoginAPI(payload)

    // authService.login( payload);
    // console.log('Login:', { emailOrPhone, password, rememberMe });
    // navigate('/dashboard');
  };

  const handleLoginAPI = async (payload) => {
  try {
    const response = await authService.login(payload);

    // assuming response contains token
    const token = response.data.token;

    // store token in localStorage
    localStorage.setItem("token", token);

    console.log("Login success:", response.data);

    // navigate AFTER storing token
    navigate("/dashboard");

  } catch (error) {
    console.error("Login failed:", error);
  }
};

  const handleOtpLogin = () => {
    console.log('OTP login');
  };

  return (
    <div className="auth-wrapper">
      {/* Decorative background dots */}
      <div className="auth-bg-dots"></div>

      <div className="auth-container">
        {/* Header */}
        <div className="auth-top-bar">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
          >
            {lang === 'en' ? 'தமிழ்' : 'English'}
          </button>
          <div className="help-text">
            Help: <span className="help-number">9363358156</span>
          </div>
        </div>

        {/* Welcome */}
        <div className="auth-heading">
          <h1>
            {lang === 'en' ? (
              <>Welcome <em>Back</em></>
            ) : (
              <>மீண்டும் <em>வரவேற்கிறோம்</em></>
            )}
          </h1>
          <p className="auth-subtitle">
            {lang === 'en'
              ? 'Sign in to discover your perfect match'
              : 'உங்கள் இணையை கண்டறிய உள்நுழையவும்'}
          </p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleLogin}>
          {/* Email/Phone */}
          <div className="form-group">
            <label className="form-label">
              {lang === 'en' ? 'EMAIL OR PHONE' : 'மின்னஞ்சல் அல்லது தொலைபேசி'} <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill="#1a90d9"/>
                </svg>
              </span>
              <input
                id="emailOrPhone"
                type="text"
                className="form-input"
                placeholder={lang === 'en' ? 'Enter email or mobile number' : 'மின்னஞ்சல் அல்லது கைபேசி எண்'}
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">
              {lang === 'en' ? 'PASSWORD' : 'கடவுச்சொல்'} <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">
                <span className="key-emoji">🔑</span>
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder={lang === 'en' ? 'Enter your password' : 'கடவுச்சொல் உள்ளிடவும்'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="1" y1="1" x2="23" y2="23" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot */}
          <div className="form-row">
            <label className="remember-label">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="remember-checkbox"
              />
              <span className="remember-text">
                {lang === 'en' ? 'Remember Me' : 'என்னை நினைவில் வை'}
              </span>
            </label>
            <Link to="/forgot-password" className="forgot-link">
              {lang === 'en' ? 'Forgot Password?' : 'கடவுச்சொல் மறந்தீர்களா?'}
            </Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="auth-btn-primary" id="loginBtn">
            {lang === 'en' ? 'LOGIN TO YOUR ACCOUNT' : 'உள்நுழைக'}
          </button>

          {/* Divider */}
          <div className="divider">
            <span>{lang === 'en' ? 'OR CONTINUE WITH' : 'அல்லது'}</span>
          </div>

          {/* OTP Login */}
          <button type="button" className="auth-btn-otp" id="otpLoginBtn" onClick={handleOtpLogin}>
            <span className="otp-icon">📱</span>
            {lang === 'en' ? 'Login with OTP' : 'OTP மூலம் உள்நுழைக'}
          </button>
        </form>

        {/* Register Link */}
        <p className="auth-switch">
          {lang === 'en' ? "Don't have an account?" : 'கணக்கு இல்லையா?'}{' '}
          <Link to="/register" className="auth-link" id="createAccountLink">
            {lang === 'en' ? 'Create Account' : 'கணக்கு உருவாக்கு'}
          </Link>
        </p>

        {/* Terms */}
        <p className="auth-terms">
          {lang === 'en' ? 'By logging in, you agree to our' : 'உள்நுழைவதன் மூலம் நீங்கள் ஒப்புக்கொள்கிறீர்கள்'}{' '}
          <Link to="/terms" className="terms-link">
            {lang === 'en' ? 'Terms of Service' : 'சேவை விதிமுறைகள்'}
          </Link>{' '}
          &amp;{' '}
          <Link to="/privacy" className="terms-link">
            {lang === 'en' ? 'Privacy Policy' : 'தனியுரிமை கொள்கை'}
          </Link>.
        </p>
      </div>
    </div>
  );
}
