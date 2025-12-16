export default async function Home() {
  const res = await fetch("http://localhost:3001");
  const text = await res.text();

  return (
    <main>
      <h1>AMOR FATI</h1>
      <p>{text}</p>
    </main>
  );
}
