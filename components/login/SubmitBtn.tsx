import React from "react";

interface SubmitBtnProps {
  isSubmitting: boolean;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
        isSubmitting
          ? "bg-primary"
          : "bg-primary hover:bg-white hover:text-primary hover:border hover:border-primary"
      } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors`}
    >
      {isSubmitting ? "در حال ورود..." : "ورود"}
    </button>
  );
};

export default SubmitBtn;
