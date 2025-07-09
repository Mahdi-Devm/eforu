import ImageComponents from "../../components/ui/ImageComponents";
import FormLogin from "../../components/login/FormLogin";
import HeadInputForm from "../../components/login/HeadInputForm";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <ImageComponents />
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <HeadInputForm />
        <FormLogin />
      </div>
    </div>
  );
}
