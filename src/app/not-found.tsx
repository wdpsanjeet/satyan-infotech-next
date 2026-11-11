import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page"><h1>Page not found</h1><p>The page you requested does not exist.</p><Link className="button background-primary text-white" href="/">Return home</Link></main>;
}
