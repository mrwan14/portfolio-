import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="bg-neutral-900 rounded-2xl p-10 border border-neutral-800 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-light mb-5 text-white">
          Let's build something exceptional together 👋
        </h3>
        <p className="text-neutral-400 leading-relaxed mb-8">
          Have an idea that deserves a clean, modern web presence?  
          Whether it's a product, a platform, or a full experience — I'd love to help bring it to life.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <a
          href="mailto:marwanabdelwahab9@gmail.com"
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-light hover:bg-neutral-200 transition-colors"
        >
          Contact Me
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mrwan14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/marwanabdelwahab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
