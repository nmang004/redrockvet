"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Heart, Users, Calendar, Award } from "lucide-react";

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: StatItem[] = [
  {
    icon: Heart,
    value: 5000,
    suffix: "+",
    label: "Happy Pets Treated"
  },
  {
    icon: Users,
    value: 15,
    suffix: "+",
    label: "Years of Experience"
  },
  {
    icon: Calendar,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction"
  },
  {
    icon: Award,
    value: 24,
    suffix: "/7",
    label: "Emergency Care"
  }
];

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, suffix, prefix]);

  return <span ref={ref} />;
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Pet Families Everywhere
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of thousands of pet families 
            throughout our community. Here&apos;s what we&apos;ve achieved together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors duration-300"
                >
                  <IconComponent className="w-8 h-8 text-primary" />
                </motion.div>
                
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <Counter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix}
                  />
                </div>
                
                <p className="text-lg font-medium text-secondary-foreground">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-secondary-foreground/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Why Pet Families Choose Red Rock Veterinary Health
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🏆 Award-Winning Care</h4>
                <p className="text-sm text-secondary-foreground/80">
                  Recognized for excellence in veterinary medicine and customer service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔬 Advanced Technology</h4>
                <p className="text-sm text-secondary-foreground/80">
                  State-of-the-art diagnostic equipment and treatment options.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">❤️ Compassionate Team</h4>
                <p className="text-sm text-secondary-foreground/80">
                  Experienced professionals who truly care about your pet&apos;s wellbeing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}