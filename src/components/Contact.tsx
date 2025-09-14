import { useState } from "react";
import {
  Mail,
  FileDown,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { predictions } from "../data/predictions";

function Contact() {
  const [prediction, setPrediction] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const getPrediction = () => {
    setIsShaking(true);

    // shake animation, 2 sec
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * predictions.length);
      setPrediction(predictions[randomIndex]);
      setIsShaking(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      {/* header */}
      <div className="text-center mb-16">
        <h2 className="mb-4 font-bold text-4xl dark:text-[oklch(0.9422_0.011_211.04)]">
          {"Let's Connect!"}
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-400">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about tech, cars or games
        </p>
      </div>

      {/* the layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* left column, 8ball */}
        <div className="hidden lg:block bg-white dark:bg-[oklch(0.2212_0.0108_260.68)] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-[oklch(0.9422_0.011_211.04)] mb-6 text-center">
            Will you contact me?
          </h3>

          <div className="flex flex-col items-center justify-center h-80">
            <div
              className={`text-8xl mb-8 ${isShaking ? "animate-bounce" : ""}`}
            >
              🎱
            </div>

            <div className="text-center mb-8 min-h-[60px] flex items-center justify-center">
              {isShaking ? (
                <p className="text-lg text-gray-500 dark:text-gray-400 animate-pulse">
                  Shaking the magical 8 ball...
                </p>
              ) : prediction ? (
                <p className="text-xl font-bold text-[oklch(0.3943_0.0647_203.9)] dark:text-[oklch(0.5_0.0647_203.9)]">
                  {prediction}
                </p>
              ) : (
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Let the Magic 8 Ball Decide
                </p>
              )}
            </div>

            <button
              onClick={getPrediction}
              disabled={isShaking}
              className="px-4 py-2 bg-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.3943_0.0647_203.9)] hover:bg-[oklch(0.35_0.07_203.9)] dark:hover:bg-[oklch(0.35_0.07_203.9)] disabled:bg-gray-400 text-white dark:text-[oklch(0.9422_0.011_211.04)] rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:cursor-not-allowed text-sm"
            >
              {isShaking ? "Shaking..." : "Ask the Magic 8 Ball"}
            </button>
          </div>
        </div>
        {/* right side - contact info & socials */}
        <div className="space-y-5 lg:h-full">
          {/* contact info */}
          <div className="bg-white dark:bg-[oklch(0.2212_0.0108_260.68)] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-[oklch(0.9422_0.011_211.04)] mb-4">
              Contact Information
            </h3>
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:riku.vaatanen@gmail.com"
                  className="hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition-colors"
                >
                  riku.vaatanen@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FileDown className="w-5 h-5" />
                <a
                  href="/cv.pdf"
                  download="Riku_Vaatanen_CV.pdf"
                  className="hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition-colors cursor-pointer"
                >
                  Download CV
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Espoo, Finland</span>
              </div>
            </div>
          </div>

          {/* find me on */}
          <div className="bg-white dark:bg-[oklch(0.2212_0.0108_260.68)] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-[oklch(0.9422_0.011_211.04)] mb-4">
              Find Me On
            </h3>
            <div className="space-y-3 text-xl">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Github className="w-5 h-5" />
                <a
                  href="https://github.com/Vaahtopahvi"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition-colors"
                >
                  @vaahtopahvi
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Linkedin className="w-5 h-5" />
                <a
                  href="https://www.linkedin.com/in/riku-vaatanen"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition-colors"
                >
                  Riku Väätänen
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Instagram className="w-5 h-5" />
                <a
                  href="https://www.instagram.com/riku.vaatanen/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="hover:text-[oklch(0.3943_0.0647_203.9)] dark:hover:text-[oklch(0.3943_0.0647_203.9)] transition-colors"
                >
                  @riku.vaatanen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* back to top btn */}
      <div className="mt-6">
        <div className="bg-[oklch(0.3943_0.0647_203.9)] dark:bg-[oklch(0.3943_0.0647_203.9)] rounded-xl p-6 shadow-lg">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-full text-center text-white cursor-pointer"
          >
            <div className="flex flex-col items-center gap-4">
              <ArrowUp className="w-12 h-12" />
              <span className="text-2xl font-bold">Back to Top</span>
              <span className="text-base opacity-90">
                Return to the beginning of the page
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
