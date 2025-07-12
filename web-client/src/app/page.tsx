"use client"

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Finder Mini</h1>
        <p>
          This is a minimalistic clone of Daft Finder.
        </p>
      </main>
      <footer>
        <p>
          © {new Date().getFullYear()} Finder Mini. All rights reserved.
        </p>
      </footer>
    </div>
  );
}