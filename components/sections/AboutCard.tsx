import Image from 'next/image';
import profile from '../../public/formal.png';

export function AboutCard() {
  return (
    <div className="rounded-2xl p-6 sm:p-8 border border-neutral-800/60 bg-neutral-950/30">
      <div className="flex flex-row items-center gap-5 sm:gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 relative rounded-full overflow-hidden bg-neutral-800 ring-1 ring-white/10">
          <Image
            src={profile}
            alt="Marwan Abdelwahab"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="min-w-0 text-left">
          <p className="text-white font-light text-lg sm:text-xl mb-1">
            Marwan Abdelwahab
          </p>
          <p className="text-neutral-500 text-sm font-light leading-relaxed">
            Frontend engineer, Cairo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
