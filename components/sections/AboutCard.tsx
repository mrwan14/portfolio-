import Image from 'next/image';
import profile from '../../public/formal.png';

export function AboutCard() {
  return (
    <div className="bg-neutral-900/80 rounded-2xl p-8 border border-neutral-800/80 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row lg:flex-col items-center text-center sm:text-left lg:text-center gap-6">
        <div className="w-24 h-24 shrink-0 relative rounded-full overflow-hidden bg-neutral-800 ring-1 ring-white/10">
          <Image
            src={profile}
            alt="Marwan Abdelwahab"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div>
          <p className="text-white font-light text-lg mb-1">Marwan Abdelwahab</p>
          <p className="text-neutral-500 text-sm font-light leading-relaxed">
            Cairo · Frontend engineer building product-grade interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
