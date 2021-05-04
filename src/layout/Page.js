import Header from "./Header";

const Page = ({ title, children }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header title={title} />
      <div
        style={{ display: "flex", flexGrow: 1, backgroundColor: "aliceblue" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
