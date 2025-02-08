import { motion } from "framer-motion";

const quotes = [
  "Struggle is beautiful while the sucess is ugly",
  "The only easy day was yesterday",
  "Laugh and the world will laugh with you. Weep and you weep alone",
  "There is no tommorow",
];

export default function QuotesMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-4 flex items-center mt-40">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {/* Repeat quotes infinitely by wrapping them in a large container */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex">
            {quotes.map((quote, i) => (
              <div key={i} className="mx-4 shadow-lg p-4 bg-black rounded-2xl min-w-[300px] border border-gray-300">
                <div className="text-center text-lg font-semibold text-gray-400">
                  {quote}
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
