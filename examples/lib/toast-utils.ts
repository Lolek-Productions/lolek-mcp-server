import { toast, useToast } from "@/hooks/use-toast";

/**
 * API response interface with success status and message
 */
export interface ApiResponse {
  success: boolean;
  message: string;
  [key: string]: any;
}

/**
 * Options for handleResponse method
 */
export interface ResponseOptions {
  successTitle?: string;
  errorTitle?: string;
}

/**
 * Return type for useNotify hook
 */
export interface NotifyMethods {
  success: (message: string, title?: string) => void;
  error: (error: string | Error, title?: string) => void;
  info: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  handleResponse: (response: ApiResponse, options?: ResponseOptions) => ApiResponse;
  // For backward compatibility
  showResponseToast: (response: ApiResponse, options?: ResponseOptions) => ApiResponse;
  showErrorToast: (error: string | Error, title?: string) => void;
}

/**
 * A flexible hook for displaying toast notifications
 * @returns Toast notification methods
 */
export const useNotify = (): NotifyMethods => {
  const { toast } = useToast();

  /**
   * Show a success toast notification
   * @param message - The success message to display
   * @param title - Optional custom title
   */
  const success = (message: string, title = "Success") => {
    toast({
      variant: "default",
      title,
      description: message
    });
  };

  /**
   * Show an error toast notification
   * @param error - Error message or Error object
   * @param title - Optional custom title
   */
  const error = (error: string | Error = "An unexpected error occurred", title = "Error") => {
    // Handle different error types (string, Error object, etc.)
    const errorMessage = error instanceof Error
      ? error.message
      : (typeof error === 'string' ? error : "An unexpected error occurred");

    toast({
      variant: "destructive",
      title,
      description: errorMessage
    });
  };

  /**
   * Show an info toast notification
   * @param message - The info message to display
   * @param title - Optional custom title
   */
  const info = (message: string, title = "Information") => {
    toast({
      variant: "default",
      title,
      description: message
    });
  };

  /**
   * Show a warning toast notification
   * @param message - The warning message to display
   * @param title - Optional custom title
   */
  const warning = (message: string, title = "Warning") => {
    toast({
      variant: "default", // Using default as shadcn doesn't have a warning variant by default
      title,
      description: message,
      className: "bg-amber-100 dark:bg-amber-900 border-amber-200 dark:border-amber-800"
    });
  };

  /**
   * Handle API response and show appropriate toast
   * @param response - API response object with success and message properties
   * @param options - Optional configuration
   */
  const handleResponse = (response: ApiResponse, { successTitle = "Success", errorTitle = "Error" }: ResponseOptions = {}) => {
    toast({
      variant: response.success ? "default" : "destructive",
      title: response.success ? successTitle : errorTitle,
      description: response.message
    });
    
    return response;
  };

  return { 
    success, 
    error, 
    info, 
    warning, 
    handleResponse,
    // For backward compatibility
    showResponseToast: handleResponse,
    showErrorToast: error
  };
};

// For backward compatibility
export const useApiToast = useNotify;
