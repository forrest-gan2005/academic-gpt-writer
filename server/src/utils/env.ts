import dotenv from 'dotenv';

dotenv.config();

// Required environment variables
const requiredEnvVars = ['HUGGINGFACE_API_TOKEN', 'NODE_ENV'] as const;

// Validate that all required environment variables are set
export const validateEnv = () => {
  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  if (!['development', 'production'].includes(process.env.NODE_ENV!)) {
    throw new Error(
      'NODE_ENV must be either "development" or "production"'
    );
  }
};

// Get environment variable with type safety
export const getEnvVar = (key: typeof requiredEnvVars[number]): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}; 