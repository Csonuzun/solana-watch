import Image from "next/image";

export default function Statistics() {
  return (
    <section className="text-white body-font h-screen">
      <div className="container px-[200px] py-24 mx-auto">
        <div className="grid grid-cols-2 place-items-stretch items-stretch -m-4">
          <div className="px-12 py-8 lg:w-full">
            <div className="h-full bg-black bg-opacity-10 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-inner shadow-solana-watch">
              <div className="absolute -z-10">
                <Image src="/decorations/simple-1-cube.png" alt="" fill />
              </div>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Real-Time Data Monitoring
              </h1>
              <p className="leading-relaxed mb-3">
                Instantly track and analyze critical data for proactive health
                and environmental decisions.
              </p>
              <a
                href="https://github.com/Csonuzun/solana-watch/blob/main/README.md#technology-and-product-details"
                target="_blank"
                className="text-purple-200 inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="px-12 py-8 lg:w-full">
            <div className="h-full bg-black bg-opacity-10 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-inner shadow-solana-watch">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Blockchain-Secured Privacy
              </h1>
              <p className="leading-relaxed mb-3">
                Rely on Solana blockchain for unparalleled data security and
                personal privacy.
              </p>
              <a
                href="https://github.com/Csonuzun/solana-watch/blob/main/README.md#reward-mechanism-in-sow-tokenomics"
                target="_blank"
                className="text-purple-200 inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="px-12 py-8 lg:w-full">
            <div className="h-full bg-black bg-opacity-10 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-inner shadow-solana-watch">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Global Data Ecosystem
              </h1>
              <p className="leading-relaxed mb-3">
                Participate and earn SOW tokens for valuable data contributions
                to our community.
              </p>
              <a
                href="https://github.com/Csonuzun/solana-watch/blob/main/README.md#technology-and-product-details"
                target="_blank"
                className="text-purple-200 inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="px-12 py-8 lg:w-full">
            <div className="h-full bg-black bg-opacity-10 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-inner shadow-solana-watch">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
                Global Network
              </h1>
              <p className="leading-relaxed mb-3">
                Join our worldwide ecosystem, sharing and benefiting from
                diverse data insights.
              </p>
              <a
                href="https://github.com/Csonuzun/solana-watch/blob/main/README.md#technology-and-product-details"
                target="_blank"
                className="text-purple-200 inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
