export default function Hero() {
  const repeatedWords = Array.from({ length: 100 }, (_, i) => (
    <p key={i}>Hello</p>
  ));

  return (
    <section className="h-screen flex items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
        ANGE ZANETTI
      </h1>
    <div>
      {repeatedWords}
    </div>
    </section>
  );
}
