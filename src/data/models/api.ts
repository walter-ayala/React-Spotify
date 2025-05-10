
export interface APIResponse<T> {
    data: T | null;
    code: number;
    success: boolean;
    error: unknown;
  }