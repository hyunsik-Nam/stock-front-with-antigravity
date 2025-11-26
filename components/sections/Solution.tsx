"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              알고리즘은 <br />
              <span className="text-primary">잠들지 않습니다.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              감정을 배제한 철저한 데이터 분석과 기계적인 실행.
              QuantPulse는 당신이 잠든 사이에도 최적의 타이밍을 포착합니다.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-primary" />,
                  title: "24/7 자동 감시",
                  desc: "모든 시장 데이터를 실시간으로 분석하여 기회를 놓치지 않습니다.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  title: "리스크 관리 시스템",
                  desc: "설정된 손실 한도를 철저히 지키며 자산을 보호합니다.",
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
                  title: "검증된 전략",
                  desc: "수만 번의 백테스팅을 통과한 알고리즘만이 실전에 투입됩니다.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual: Code to Curve Animation Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full opacity-30" />
            <div className="relative bg-card border border-white/10 rounded-2xl p-6 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-xs text-muted-foreground font-mono">algorithm.py</div>
              </div>
              
              <div className="font-mono text-sm space-y-2 text-muted-foreground">
                <div className="flex">
                  <span className="text-secondary w-8">01</span>
                  <span className="text-purple-400">def</span> <span className="text-yellow-300">&nbsp;execute_strategy</span>(data):
                </div>
                <div className="flex">
                  <span className="text-secondary w-8">02</span>
                  <span className="pl-4 text-blue-400">if</span> data.rsi &lt; <span className="text-orange-400">30</span>:
                </div>
                <div className="flex">
                  <span className="text-secondary w-8">03</span>
                  <span className="pl-8 text-green-400">return</span> <span className="text-string">"BUY"</span>
                </div>
                <div className="flex">
                  <span className="text-secondary w-8">04</span>
                  <span className="pl-4 text-blue-400">elif</span> data.rsi &gt; <span className="text-orange-400">70</span>:
                </div>
                <div className="flex">
                  <span className="text-secondary w-8">05</span>
                  <span className="pl-8 text-green-400">return</span> <span className="text-string">"SELL"</span>
                </div>
              </div>

              {/* Overlay Chart Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent flex items-end justify-center pb-8">
                 <motion.div 
                   initial={{ pathLength: 0 }}
                   whileInView={{ pathLength: 1 }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   className="w-full h-32 relative"
                 >
                    <svg viewBox="0 0 100 40" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,227,150,0.5)]">
                      <motion.path
                        d="M0 40 Q 20 40, 30 30 T 50 20 T 70 10 T 100 5"
                        fill="none"
                        stroke="#00E396"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
