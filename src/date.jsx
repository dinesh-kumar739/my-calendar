import { useMemo } from "react";

const useDate = () => {
  const today = new Date();

  return useMemo(() => {
    return {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),

      dayName: today.toLocaleDateString("en-US", { weekday: "long" }),
      monthName: today.toLocaleDateString("en-US", { month: "long" }),
      fullDate: today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
  }, []);
};

export default useDate;