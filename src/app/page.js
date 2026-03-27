export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "16px",
      }}
    >
      <img
        src="https://s1.koder.com/app/logos/app-logo.svg"
        alt="koderAI"
        width={200}
      />
      <h1 style={{ fontSize: "24px", fontWeight: 600 }}>
        Welcome to your React app on koderAI
      </h1>
    </main>
  );
}
