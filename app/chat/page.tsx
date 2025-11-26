import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatInterface from "@/components/chat/ChatInterface";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center gap-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              AI Investment <span className="text-primary">Assistant</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              24시간 깨어있는 당신만의 투자 비서. 시장 분석부터 종목 추천까지, 무엇이든 물어보세요.
            </p>
          </div>
          
          <ChatInterface />
        </div>
      </div>
      <Footer />
    </main>
  );
}
