const daysSincePublished = (date: Date | undefined): number => {
  if (!date) return 0;

  const now = new Date();
  const differenceInMs = now.getTime() - date.getTime();

  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  if (Number.isNaN(differenceInDays)) {
    return 0;
  }

  return differenceInDays;
};

export default daysSincePublished;
