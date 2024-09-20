import { HttpException, HttpStatus } from '@nestjs/common';

export const withTryCatch = async (fn: () => Promise<any>, message: string) => {
  try {
    return await fn();
  } catch (error) {
    console.error('Error:', error);
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
};
