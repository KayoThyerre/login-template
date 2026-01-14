import { PublicLayout } from "../layouts/PublicLayout";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AuthCard } from "../components/AuthCard";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/home");
  }

  return (
    <PublicLayout>
      <AuthCard title="Auth Template">
        <div className="flex flex-col gap-4">
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Button onClick={handleLogin}>Entrar</Button>
        </div>
      </AuthCard>
    </PublicLayout>
  );
}
