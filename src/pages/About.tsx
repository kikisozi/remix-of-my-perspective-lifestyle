import Header from "@/components/Header";
import wechatQr from "@/assets/wechat-qr.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            关于我
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            欢迎来到我的个人空间，扫码添加微信好友
          </p>
        </div>

        {/* WeChat QR Code Section */}
        <section className="flex flex-col items-center justify-center py-12 animate-slide-up stagger-2">
          <div className="bg-card rounded-2xl p-8 shadow-lg max-w-md w-full">
            <img 
              src={wechatQr} 
              alt="微信二维码" 
              className="w-full h-auto rounded-xl"
            />
            <p className="text-center text-muted-foreground mt-6">
              扫一扫上面的二维码图案，加我为朋友
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
