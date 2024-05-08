import { AuthTemplate } from "@/components/auth/AuthTemplate";
import { SignUpForm } from "@/components/auth/SignUpForm";

const page = () => {
  return (
    <AuthTemplate
      title="Sign Up"
      description="Enter your details below to register your account"
      imgOrder="left"
    >
      <SignUpForm />
    </AuthTemplate>
  );
};

export default page;
