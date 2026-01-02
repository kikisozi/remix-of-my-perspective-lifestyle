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
      introduction: "",
      sections: [],
      conclusion: "我是闪电",
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
