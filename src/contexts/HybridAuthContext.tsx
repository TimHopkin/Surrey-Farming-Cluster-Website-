import React, { createContext, useContext, useEffect, useState } from 'react';

// Simple user interface - works with both localStorage and Firebase
export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'farmer' | 'admin';
  authMethod: 'localStorage' | 'firebase';
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string, role: 'farmer' | 'admin') => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// LocalStorage auth service - instant, reliable
const localAuthService = {
  // Simple user storage - for demo/development
  getUsers: (): Record<string, any> => {
    try {
      return JSON.parse(localStorage.getItem('sfc_users') || '{}');
    } catch {
      return {};
    }
  },

  saveUsers: (users: Record<string, any>) => {
    localStorage.setItem('sfc_users', JSON.stringify(users));
  },

  createUser: (email: string, password: string, displayName: string, role: 'farmer' | 'admin'): User => {
    const users = localAuthService.getUsers();
    const uid = `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const user: User = {
      uid,
      email,
      displayName,
      role,
      authMethod: 'localStorage'
    };

    users[email] = { ...user, password }; // Store password for demo
    localAuthService.saveUsers(users);
    
    return user;
  },

  authenticateUser: (email: string, password: string): User | null => {
    const users = localAuthService.getUsers();
    const userData = users[email];
    
    if (userData && userData.password === password) {
      return {
        uid: userData.uid,
        email: userData.email,
        displayName: userData.displayName,
        role: userData.role,
        authMethod: 'localStorage'
      };
    }
    
    return null;
  },

  getCurrentUser: (): User | null => {
    try {
      const userData = localStorage.getItem('sfc_currentUser');
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  },

  setCurrentUser: (user: User | null) => {
    if (user) {
      localStorage.setItem('sfc_currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('sfc_currentUser');
    }
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth on startup
  useEffect(() => {
    const user = localAuthService.getCurrentUser();
    setCurrentUser(user);
    setLoading(false);
    
    // Load Firebase in background for future enhancement
    loadFirebaseInBackground();
  }, []);

  const loadFirebaseInBackground = async () => {
    try {
      // Load Firebase asynchronously after initial render
      setTimeout(async () => {
        console.log('Loading Firebase in background...');
        // Firebase loading will be implemented later
      }, 2000);
    } catch (error) {
      console.log('Firebase not available, continuing with localStorage');
    }
  };

  const signup = async (email: string, password: string, displayName: string, role: 'farmer' | 'admin') => {
    try {
      setError(null);
      setLoading(true);

      // Check if user already exists
      const users = localAuthService.getUsers();
      if (users[email]) {
        throw new Error('An account with this email already exists');
      }

      // Validate inputs
      if (!email || !password || !displayName) {
        throw new Error('Please fill in all fields');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Create user with localStorage
      const user = localAuthService.createUser(email, password, displayName, role);
      localAuthService.setCurrentUser(user);
      setCurrentUser(user);

    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);

      // Validate inputs
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }

      // Try localStorage authentication first
      const user = localAuthService.authenticateUser(email, password);
      
      if (user) {
        localAuthService.setCurrentUser(user);
        setCurrentUser(user);
        return;
      }

      // If no local user found, suggest signup
      throw new Error('No account found with these credentials. Please sign up first or check your email and password.');

    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      localAuthService.setCurrentUser(null);
      setCurrentUser(null);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      throw error;
    }
  };

  const value: AuthContextType = {
    currentUser,
    loading,
    error,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};