"use client";

import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function OfflineToast() {
  useEffect(() => {
    function handleOffline() {
      toast.error("اتصال اینترنت قطع شده است!", {
        position: "top-center",
        duration: 5000,
      });
    }

    function handleOnline() {
      toast.dismiss();
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    if (!navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return <Toaster />;
}
