import coverPhoto from "@/assets/cover-photo.jpg";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "001",
    title: "王烨桐大王",
    subtitle: "闪电宝宝",
    category: "Hello World",
    date: "Jan 2, 2026",
    readTime: "3 min",
    image: coverPhoto,
    author: {
      name: "王烨桐",
      avatar: coverPhoto,
      bio: "闪电宝宝，Hello World 探索者",
    },
    content: {
      introduction: "我是闪电",
      sections: [
        {
          heading: "Hello World 的起源",
          content: "Hello World 是程序员学习编程时写的第一个程序。这个简单的问候语已经成为了技术世界的一个标志性符号，代表着新的开始和无限的可能。",
        },
        {
          heading: "我的 Hello World",
          content: "每个人都有自己的 Hello World 时刻。那是你第一次尝试新事物、踏入未知领域的时刻。无论是学习一门新语言，开始一个新项目，还是遇见新的朋友，这些都是我们人生中的 Hello World。",
        },
        {
          heading: "拥抱新的开始",
          content: "Hello World 不仅仅是一个程序，它是一种态度。它告诉我们，不要害怕开始，不要害怕尝试。每一个伟大的成就都是从一个简单的 Hello World 开始的。",
        },
      ],
      conclusion: "所以，让我们一起说：Hello World! 欢迎来到这个充满可能性的世界。这只是开始，更精彩的故事还在后面。",
    },
    tags: ["Hello World", "新开始", "编程", "人生"],
  },
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find((article) => article.id === id);
};

export const getRelatedArticles = (currentId: string): Article[] => {
  return articles.filter((article) => article.id !== currentId).slice(0, 3);
};
