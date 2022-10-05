function Page({ children, background }) {
  return (
    <main
      style={{ background: `url(${background})` }}
      className={`flex h-screen gap-2 !bg-cover !bg-center`}>
      {children}
    </main>
  );
}

Page.defaultProps = {
  background: "/img/home.jpg"
};

export default Page;
