// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateAgentForm = (formData: any): ValidationResult => {
  const errors: string[] = [];

  // Required fields
  if (!formData.name?.trim()) {
    errors.push('Agent name is required');
  }

  if (!formData.description?.trim()) {
    errors.push('Description is required');
  }

  if (!formData.category?.trim()) {
    errors.push('Category is required');
  }

  if (!formData.githubUrl?.trim()) {
    errors.push('GitHub URL is required');
  }

  if (!formData.difficulty?.trim()) {
    errors.push('Difficulty level is required');
  }

  // URL validation
  if (formData.githubUrl && !isValidGitHubUrl(formData.githubUrl)) {
    errors.push('Please provide a valid GitHub repository URL');
  }

  if (formData.demoUrl && !isValidUrl(formData.demoUrl)) {
    errors.push('Please provide a valid demo URL');
  }

  // Length validation
  if (formData.name && formData.name.length > 100) {
    errors.push('Agent name must be less than 100 characters');
  }

  if (formData.description && formData.description.length > 500) {
    errors.push('Description must be less than 500 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidGitHubUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname === 'github.com' && urlObj.pathname.split('/').length >= 3;
  } catch {
    return false;
  }
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export const parseCommaSeparatedList = (input: string): string[] => {
  return input
    .split(',')
    .map(item => item.trim())
    .filter(item => item.length > 0);
};