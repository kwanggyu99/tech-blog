export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Tech Blog</h1>
      <p>
        CS & Backend 개념을 <b>면접에서 말로 설명 가능한 수준</b>으로 정리합니다.
      </p>

      <h2>정리 중인 분야</h2>
      <ul>
        <li>Network</li>
        <li>Operating System</li>
        <li>Database</li>
        <li>Algorithm</li>
      </ul>

      <p style={{ marginTop: "24px" }}>
        GitHub:{" "}
        <a href="https://github.com/kwanggyu99" target="_blank">
          https://github.com/kwanggyu99
        </a>
      </p>
    </div>
  );
}
