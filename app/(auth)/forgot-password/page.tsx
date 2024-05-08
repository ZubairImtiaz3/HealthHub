import { AuthTemplate } from "@/components/auth/AuthTemplate";
import { ForgotPassForm } from "@/components/auth/ForgotPassForm";

const page = () => {
  return (
    <AuthTemplate
      title="Forgot Password?"
      description="Enter your email below to reset your password"
      imgOrder="left"
    >
      <ForgotPassForm />
    </AuthTemplate>
  );
};

export default page;
