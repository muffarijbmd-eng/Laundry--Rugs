import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loader from '../components/Loader'; // assuming you have a loader component
import { useTranslation } from 'react-i18next'; // for translation

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { t } = useTranslation(); // for translation support

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError(t('login.failed')); // translation for error message
    } else {
      // Redirect based on user role
      const userRole = result.user.role;
      if (userRole === 'owner') {
        router.push('/owner');
      } else if (userRole === 'admin') {
        router.push('/admin');
      } else if (userRole === 'cashier') {
        router.push('/cashier');
      } else if (userRole === 'delivery') {
        router.push('/delivery');
      } else if (userRole === 'technician') {
        router.push('/technician');
      } else if (userRole === 'customer') {
        router.push('/customer');
      }
    }
  };

  return (
    <div className="login-container">
      <h1>{t('login.title')}</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>{t('login.email')}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>{t('login.password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : t('login.submit')}
        </button>
      </form>
      <div className="demo-accounts">
        <h2>{t('login.demoAccounts')}</h2>
        <p>Owner: owner@example.com / password: password1</p>
        <p>Admin: admin@example.com / password: password2</p>
        <p>Cashier: cashier@example.com / password: password3</p>
        <p>Delivery: delivery@example.com / password: password4</p>
        <p>Technician: technician@example.com / password: password5</p>
        <p>Customer: customer@example.com / password: password6</p>
      </div>
    </div>
  );
};

export default LoginPage;
