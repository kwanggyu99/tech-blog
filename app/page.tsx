export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Tech Blog</h1>

      <p>
        This blog focuses on core Computer Science concepts
        for <b>CS and Data Engineer</b> roles,
        written at a level suitable for technical interviews.
      </p>

      <h2>Contents</h2>
      <ul>
        <li>
          <a href="/notes">CS Notes</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <p style={{ marginTop: 24 }}>
        GitHub:{" "}
        <a href="https://github.com/kwanggyu99" target="_blank" rel="noreferrer">
          https://github.com/kwanggyu99
        </a>
      </p>
    </div>
  );
}
