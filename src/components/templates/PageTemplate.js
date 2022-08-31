function Page({ children, background }) {
  return (
    <main className={`flex h-screen gap-2 bg-cover bg-center ${background}`}>
      {children}
    </main>
  );
}

Page.defaultProps = {
  background: "bg-hero"
};

export default Page;
