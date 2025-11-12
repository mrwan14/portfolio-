import Image from "next/image";
import profile from "../../public/formal.png";

export default function AboutCard() {
  return (
    <div className="bg-neutral-900 rounded-2xl p-10 border border-neutral-800">
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 mb-8 relative rounded-full overflow-hidden bg-neutral-800">
          <Image
            src={profile}
            alt="Profile"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <p className="text-neutral-300 leading-relaxed">
          Hi, I&apos;m Marwan, a frontend engineer from Cairo, Egypt, dedicated
          to building clean, accessible, and high-performance web applications.
        </p>
      </div>
    </div>
  );
}
