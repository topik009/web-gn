"use client";

import { useEffect, useState } from "react";

const yearFormatter = new Intl.DateTimeFormat("es-PE", {
  year: "numeric",
  timeZone: "America/Lima",
});

function getCurrentYear() {
  return yearFormatter.format(new Date());
}

export function CurrentYear() {
  const fallbackYear = getCurrentYear();
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(getCurrentYear());
  }, []);

  return (
    <time dateTime={year || fallbackYear} suppressHydrationWarning>
      {year || fallbackYear}
    </time>
  );
}
