import { seasons, SeasonType } from '@/data/seasons';
import { createContext } from 'react';

export const seasonContext = createContext<SeasonType>(seasons[0]);
