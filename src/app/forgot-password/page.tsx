import ImageComponents from "../../../components/ui/ImageComponents";
import FormForgotPas from "../../../components/forgot-password/FormForgotPas";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <ImageComponents />

      <div className="w-full md:w-150 min-h-[350px] bg-white p-8 rounded-xl shadow-md flex justify-center items-center">
        <FormForgotPas />
      </div>
    </div>
  );
}
