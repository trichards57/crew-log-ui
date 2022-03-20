import ExternalLayout from "../external-layout";
import { useAuth } from "react-oidc-context";

function Login() {
  const { signinRedirect } = useAuth();

  return (
    <ExternalLayout>
      <div className="text-center mt-5">
        <button className="btn btn-primary" onClick={() => signinRedirect()}>
          Sign In
        </button>
      </div>
    </ExternalLayout>
  );
}

export default Login;
