type HealthResponse = {
  status: string;
};

export default async function Home() {
  const res = await fetch('http://localhost:3001/api/health');
  const data: HealthResponse = await res.json();

  return (
    <main>
      <h1>AMOR FATI</h1>
      <p>Backend status: {data.status}</p>
    </main>
  );
}
