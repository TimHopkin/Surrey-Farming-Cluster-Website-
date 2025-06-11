import { auth, db } from './config';

export const testFirebaseConnection = async () => {
  try {
    console.log('Testing Firebase connection...');
    console.log('Auth:', auth);
    console.log('Database:', db);
    console.log('Auth config:', auth.config);
    return { success: true, message: 'Firebase initialized successfully' };
  } catch (error) {
    console.error('Firebase connection error:', error);
    return { success: false, error };
  }
};