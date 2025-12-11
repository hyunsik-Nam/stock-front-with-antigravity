import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-bold">
                Q
              </div>
              Woookiki
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Invisible Intelligence. <br />
              개인 투자자를 위한 최고의 알고리즘 트레이딩 솔루션.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Backtest</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Download</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Woookiki. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
