import Image from "next/image";
import LoginRegisterClient from "../../../../components/Module/Login/LoginRegisterClient";
import { loginMetadata } from "../../../../lib/Metadata";

export const metadata = loginMetadata;

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="relative w-full max-w-4xl h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl bg-white/10 flex flex-col md:flex-row">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-700 opacity-30 rounded-full filter blur-3xl animate-pulse z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-pulse z-0"></div>

        <div className="hidden md:block w-full md:w-1/2 h-64 md:h-full relative z-10 p-6">
          <div className="relative w-full h-full">
            <Image
              src="/images/imagecardlogin/card.png"
              alt="login-visual"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center px-6 md:px-10 text-black z-10">
          <LoginRegisterClient />
        </div>
      </div>
    </div>
  );
}
