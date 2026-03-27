import Image from "next/image";

export default function Home() {
  return (
    <div><div>Home page</div>
      <Image src="/next.svg" alt="Next.js logo" width={100} height={20} loading="eager"/>
    </div>
  );
}
