"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

// Generate more realistic stock data
const generateData = () => {
  const data = [];
  let prev = 100;
  for (let i = 0; i < 50; i++) {
    const change = (Math.random() - 0.5) * 10;
    prev += change;
    data.push({
      name: i,
      value: prev,
    });
  }
  return data;
};

const Hero = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    setChartData(generateData());
  }, []);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Chart */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00E396" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00E396" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#00E396"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              감정을 뺀 투자, <br />
              <span className="text-primary">데이터를 입다.</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Invisible Intelligence. 복잡한 수식은 뒤로 숨기고, 오직 결과와 평온함만을 제공합니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button variant="neon" size="lg" className="gap-2">
              무료 백테스팅 체험하기 <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg">
              알고리즘 성과 확인하기
            </Button>
          </motion.div>
        </div>

        {/* 3D Dashboard Mockup */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative hidden lg:block perspective-1000"
        >
          <div className="relative bg-card border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-sm transform-gpu">
            {/* Mockup Content */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-sm text-muted-foreground">Total Balance</h3>
                <p className="text-3xl font-bold">$124,592.00</p>
              </div>
              <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +34.5%
              </div>
            </div>
            
            <div className="h-[200px] w-full bg-black/20 rounded-lg mb-4 overflow-hidden relative">
               {/* Mini Chart inside Dashboard */}
               <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData.slice(0, 20)}>
                   <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#008FFB"
                    strokeWidth={2}
                    fill="url(#colorValue)"
                    fillOpacity={0.1}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-white/5 rounded-lg p-3">
                   <div className="h-2 w-12 bg-white/10 rounded mb-2"></div>
                   <div className="h-4 w-20 bg-white/20 rounded"></div>
                 </div>
               ))}
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-secondary/20 backdrop-blur-md p-4 rounded-lg border border-secondary/30"
          >
             <div className="text-secondary font-bold">AI Signal</div>
             <div className="text-white text-sm">Buy AAPL @ 150.2</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
