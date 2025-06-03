import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Gig buddy app</h1>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/account">My account</Link>
        <Link href="/event/1">Event 1</Link>
        <Link href="/profile/12345">Profile</Link>
      </div>
    </div>
  );
}
