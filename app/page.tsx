import { redirect } from "next/navigation";

export default async function App() {
  // Once authentication is implemented, we can check here where to route users to login or home
  // For now, we'll just redirect to the home page.
  const isAuth = true;

  if (isAuth) {
    redirect("/home");
  }

  return null;
}
