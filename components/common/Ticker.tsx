"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

const stocks = [
  { name: "AAPL", price: "189.50", change: "+1.2%", up: true },
  { name: "TSLA", price: "245.30", change: "-0.5%", up: false },
  { name: "NVDA", price: "485.10", change: "+2.5%", up: true },
  { name: "MSFT", price: "375.80", change: "+0.8%", up: true },
  { name: "GOOGL", price: "135.40", change: "-0.2%", up: false },
  { name: "AMZN", price: "145.20", change: "+1.5%", up: true },
  { name: "META", price: "325.60", change: "+1.1%", up: true },
  { name: "BTC", price: "42,500", change: "+3.2%", up: true },
  { name: "ETH", price: "2,250", change: "+2.1%", up: true },
];

const Ticker = () => {
  return (
    <div className="bg-black/50 border-b border-white/5 overflow-hidden py-2 backdrop-blur-sm fixed top-16 left-0 right-0 z-40">
      <div className="flex animate-scroll whitespace-nowrap hover:pause">
        {/* Duplicate for infinite loop */}
        {[...stocks, ...stocks, ...stocks].map((stock, i) => (
          <div key={i} className="flex items-center gap-2 mx-6 text-sm">
            <span className="font-bold text-muted-foreground">{stock.name}</span>
            <span className="text-white">{stock.price}</span>
            <span
              className={`flex items-center gap-0.5 ${
                stock.up ? "text-primary" : "text-red-500"
              }`}
            >
              {stock.up ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
