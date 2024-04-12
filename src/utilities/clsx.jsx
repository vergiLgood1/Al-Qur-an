import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function clsx (...inputs){
    return twMerge(clsx(...inputs));
}