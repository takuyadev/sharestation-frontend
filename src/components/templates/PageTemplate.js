function Page({ children }) {
  return (
    <main className="flex h-screen gap-2 bg-hero bg-cover bg-center">
      {children}
    </main>
  );
}

export default Page;
