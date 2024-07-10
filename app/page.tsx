import Image from "next/image";
import Login from "./(auth)/login/page";
import Register from "./(auth)/register/page";
import AuthLayout from "./(auth)/layout";

export default function Home() {
  return (
    <main className="">
      <AuthLayout>
        <Login />
      </AuthLayout>
    </main>
  );
}
