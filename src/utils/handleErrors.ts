const handleErrors = <T>(
  data: {
    success: boolean;
    code?: number;
    error?: unknown;
    data: T | null;
  },
  customMessage?: string,
): T => {
  if (!data.success) {
    const errorMessageText =
      data.error && typeof data.error === 'object' && 'message' in data.error
        ? (data.error as { message: string }).message
        : 'Try again';
    throw new Error(`Error: ${errorMessageText}`);
  }

  if (data.data === null) {
    throw new Error(customMessage || 'Try again');
  }

  return data.data;
};

export default handleErrors;
