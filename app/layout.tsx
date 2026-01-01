import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tech Blog",
  description: "CS & Backend 취업용 기술 정리 블로그",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">Tech Blog</Link>
            <nav className="flex gap-4 text-sm text-gray-700">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/notes">Notes</Link>
              <Link href="/projects">Projects</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-10">
          {children}
        </main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-4xl px-6 py-6 text-xs text-gray-600">
            본 블로그는 개인 학습 내용을 내 언어로 재정리한 자료입니다.
          </div>
        </footer>
      </body>
    </html>
  );
}
