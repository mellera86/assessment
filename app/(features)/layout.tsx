export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen flex flex-col">
      <div>{children}</div>
    </main>
  );
}
