import { AuthTemplate } from "@/components/auth/AuthTemplate";
import { LoginForm } from "@/components/auth/LoginForm";

const page = () => {
  return (
    <AuthTemplate
      title="Login"
      description="Enter your credentials below to login to your account"
    >
      <LoginForm />
    </AuthTemplate>
  );
};

export default page;
