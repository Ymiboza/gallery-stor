import { useState, useMemo } from "react";

export const useSortArts = (arts = []) => {
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedArts = useMemo(() => {
    const sortableArts = [...arts];
    sortableArts.sort((a, b) => {
      if (+a.price < +b.price) return isDescSort ? 1 : -1;
      if (+a.price > +b.price) return isDescSort ? -1 : 1;
      return 0;
    });
    return sortableArts;
  }, [isDescSort, arts]);

  return {
    isDescSort,
    setIsDescSort,
    sortedArts,
  };
};
