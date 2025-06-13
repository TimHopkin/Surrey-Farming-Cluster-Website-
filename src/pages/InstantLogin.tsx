import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/HybridAuthContext';

const InstantLogin: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const { login, signup, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill demo credentials for easy testing
  useEffect(() => {
    if (!isLogin) {
      setEmail('demo@farmer.com');
      setPassword('demo123');
      setName('Demo Farmer');
    } else {
      setEmail('demo@farmer.com');
      setPassword('demo123');
    }
  }, [isLogin]);

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      const targetUrl = currentUser.role === 'admin' ? '/admin' : '/farmerdashboard';
      const from = (location.state as any)?.from?.pathname || targetUrl;
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoading(true);
    setError('');
    setMessage('');

    try {
      if (isLogin) {
        await login(email, password);
        setMessage('✅ Login successful! Redirecting...');
        // Navigate based on current user after login
        setTimeout(() => {
          const targetUrl = currentUser?.role === 'admin' ? '/admin' : '/farmerdashboard';
          navigate(targetUrl);
        }, 500);
      } else {
        await signup(email, password, name, 'farmer');
        setMessage('✅ Account created! Redirecting to dashboard...');
        setTimeout(() => navigate('/farmerdashboard'), 500);
      }
      
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    try {
      await login('demo@farmer.com', 'demo123');
      navigate('/farmerdashboard');
    } catch (error) {
      // Create demo user if doesn't exist
      try {
        await signup('demo@farmer.com', 'demo123', 'Demo Farmer', 'farmer');
        navigate('/farmerdashboard');
      } catch (signupError: any) {
        setError(signupError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAdminDemoLogin = async () => {
    setLoading(true);
    try {
      await login('admin@surreycluster.com', 'admin123');
      navigate('/admin');
    } catch (error) {
      // Create demo admin user if doesn't exist
      try {
        await signup('admin@surreycluster.com', 'admin123', 'Sarah Johnson', 'admin');
        navigate('/admin');
      } catch (signupError: any) {
        setError(signupError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back!' : 'Join Surrey Farming Cluster'}
          </h2>
          <p className="text-gray-600">
            {isLogin ? 'Sign in to access your farmer dashboard' : 'Create your account in seconds'}
          </p>
        </div>

        {/* Demo Buttons */}
        <div className="mb-6 space-y-3">
          <button
            onClick={handleDemoLogin}
            disabled={loading}
            className="w-full bg-gradient-to-r from-cluster-green to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 disabled:opacity-50"
          >
            🌾 Try Farmer Demo (Instant Access)
          </button>
          <button
            onClick={handleAdminDemoLogin}
            disabled={loading}
            className="w-full bg-gradient-to-r from-cluster-blue to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50"
          >
            👨‍💼 Try Admin Demo (Platform Management)
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            No setup required - works immediately offline
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">Or use your own account</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name field for signup */}
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cluster-green focus:border-cluster-green"
                  placeholder="Your full name"
                />
              </div>
            )}
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cluster-green focus:border-cluster-green"
                placeholder="your.email@example.com"
              />
            </div>
            
            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cluster-green focus:border-cluster-green"
                placeholder={isLogin ? "Your password" : "At least 6 characters"}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {message && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cluster-blue text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cluster-blue disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isLogin ? 'Signing in...' : 'Creating account...'}
                </span>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Toggle between login/signup */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setMessage('');
                }}
                className="font-medium text-cluster-green hover:text-green-700"
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-gray-600 space-y-2">
          <div>
            <a href="/" className="text-cluster-green hover:text-green-700">← Back to Homepage</a>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 font-medium">⚡ Instant Authentication</p>
            <p className="text-blue-600 text-xs">Works immediately - no network required!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantLogin;