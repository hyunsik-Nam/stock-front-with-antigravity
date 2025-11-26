"use client";

import { motion } from "framer-motion";
import { Activity, XCircle, BrainCircuit } from "lucide-react";

const Problem = () => {
  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pulse Effect */}
      <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            당신의 투자가 <span className="text-red-500">실패하는 이유</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            인간의 뇌는 투자에 적합하지 않습니다. 감정이 당신의 수익을 갉아먹고 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Activity className="w-12 h-12 text-red-500" />,
              title: "뇌동매매",
              desc: "급등하는 차트를 보면 이성을 잃고 추격 매수하게 됩니다.",
            },
            {
              icon: <XCircle className="w-12 h-12 text-red-500" />,
              title: "손절 타이밍 실패",
              desc: "'언젠간 오르겠지'라는 막연한 희망으로 손실을 키웁니다.",
            },
            {
              icon: <BrainCircuit className="w-12 h-12 text-red-500" />,
              title: "수면 부족 & 스트레스",
              desc: "24시간 돌아가는 시장을 감시하느라 본업과 일상이 무너집니다.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border border-red-500/20 p-8 rounded-xl hover:border-red-500/50 transition-colors group"
            >
              <div className="mb-6 bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
