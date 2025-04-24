// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-500 mb-6">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        className="cursor-pointer bg-[#ff8888] px-4 py-2 rounded-xl text-[#fff] "
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
