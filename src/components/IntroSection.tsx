const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
          这里是一个探索想法、记录成长、分享技术与生活的个人空间。
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          从编程学习到生活感悟，从技术探索到个人成长，
          我在这里记录每一个值得分享的瞬间。欢迎你和我一起探索这个充满可能性的世界。
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
