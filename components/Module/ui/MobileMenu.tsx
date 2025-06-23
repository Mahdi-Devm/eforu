import React from "react";
import AuthButton from "./AuthButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <nav className="md:hidden bg-white shadow-lg border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-center border-t border-gray-200 py-3">
        <AuthButton />
      </div>
    </nav>
  );
};

export default MobileMenu;
