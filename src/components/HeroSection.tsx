import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverPhoto from "@/assets/cover-photo.jpg";
import wechatQr from "@/assets/wechat-qr.jpg";

const HeroSection = () => {
  const [showWechat, setShowWechat] = useState(false);
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img src={coverPhoto} alt="王烨桐" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              王烨桐大王
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              这里是aka大王。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <Button onClick={() => setShowWechat(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              联系我
            </Button>
          </div>
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      {showWechat && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowWechat(false)}>
          <div className="bg-card rounded-2xl p-6 max-w-sm w-full shadow-xl animate-scale-in" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">扫码添加微信</h3>
              <button onClick={() => setShowWechat(false)} className="p-1 rounded-full hover:bg-muted transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-card rounded-xl">
              <img src={wechatQr} alt="微信二维码" className="w-full h-auto rounded-xl" />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              微信扫一扫，添加好友
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;