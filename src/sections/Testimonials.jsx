import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaLightbulb, FaCode } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "McKinsey Forward Program 2025",
    description: "Selected for a prestigious global professional program focused on problem-solving, digital transformation, and leadership skills.",
    icon: <FaBriefcase className="text-3xl text-white" />,
  },
  {
    id: 2,
    title: "Virtual Micro-Internships (Deloitte & JP Morgan Chase)",
    description: "Completed software engineering virtual experiences, gaining hands-on exposure to backend development, cloud, and consulting case studies.",
    icon: <FaLaptopCode className="text-3xl text-white" />,
  },
  {
    id: 3,
    title: "SIH 2024 Qualifier",
    description: "Qualified in Smart India Hackathon 2024, showcasing problem-solving, innovation, and teamwork in real-world challenge scenarios.",
    icon: <FaLightbulb className="text-3xl text-white" />,
  },
  {
    id: 4,
    title: "Competitive Programming",
    description: "Achieved LeetCode rating 1739 and CodeChef rating 1348, solving 500+ coding problems across multiple platforms.",
    icon: <FaCode className="text-3xl text-white" />,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="min-h-screen w-full py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADINGS SECTION */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-lg sm:text-xl"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Recognitions and Milestones I've reached along my journey
          </motion.p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // Updated: Hover border is now Cyan (#1cd8d2)
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#111] hover:border-[#1cd8d2]/50 transition-all duration-300 group"
            >
              {/* Updated: Icon Background Gradient is now Cyan to Teal */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1cd8d2] to-[#00bf8f] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}