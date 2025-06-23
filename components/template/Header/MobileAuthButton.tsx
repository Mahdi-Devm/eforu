import { FiUser } from "react-icons/fi";

type Props = {
  onClick: () => void;
};

const MobileAuthButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex md:hidden items-center gap-2 bg-primary hover:bg-primary-dark transition-colors text-white rounded-lg px-5 py-2 shadow-lg select-none"
      aria-label="باز کردن منوی موبایل"
    >
      <FiUser size={20} />
      ورود / ثبت‌نام
    </button>
  );
};

export default MobileAuthButton;
