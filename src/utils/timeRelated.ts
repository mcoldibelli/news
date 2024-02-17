import { parse } from 'date-fns';

export const daysSincePublished = (date: Date | undefined): number => {
  if (!date) return 0;

  const now = new Date();

  const differenceInMs = Math.abs(now.getTime() - date.getTime());
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  if (Number.isNaN(differenceInDays)) {
    return 0;
  }

  return differenceInDays;
};

export const formatTimeStamp = (date: Date):string => {
  if (daysSincePublished(date) === 0) {
    return 'Publicado Hoje';
  }
  return `${daysSincePublished(date)} dias atrás`;
};

export const formatToDate = (date: string): Date => {
  const dateString = date;
  const dateFormat = 'dd/MM/yyyy HH:mm:ss';
  const dateObject = parse(dateString, dateFormat, new Date()); return dateObject;
};
