import { PublicLayout } from "../layouts/PublicLayout";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AuthCard } from "../components/AuthCard";

export function Login() {
  return (
    <PublicLayout>
      <AuthCard title="Auth Template">
        <div className="flex flex-col gap-4">
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Button>Entrar</Button>
        </div>
      </AuthCard>
    </PublicLayout>
  );
}
