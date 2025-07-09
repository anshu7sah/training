import React, { useEffect, useState } from "react";

export const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineChecker = () => {
      setOnline(true);
    };

    const offlineChecker = () => {
      setOnline(false);
    };

    window.addEventListener("online", onlineChecker);
    window.addEventListener("offline", offlineChecker);

    return () => {
      // clearup
      window.removeEventListener("online");
      window.removeEventListener("offline");
    };
  }, []);

  return online;
};
