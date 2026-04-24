/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface SiteConfig {
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl?: string;
  fontFamily: 'font-sans' | 'font-serif' | 'font-mono';
  socialLinks: {
    instagram?: string;
    naverBlog?: string;
    facebook?: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  posts: Post[];
  features: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export const initialSiteData: SiteConfig = {
  name: "쑤기월드",
  heroTitle: "전략적 사고의 즐거움,\n보드게임 교육의 정점",
  heroSubtitle: "창의력과 논리력을 키우는 쑤기월드 보드게임 학원입니다.",
  description: "쑤기월드는 단순한 게임 그 이상을 가르칩니다. 문제를 해결하는 즐거움과 함께 성장하는 커뮤니티를 지향합니다.",
  primaryColor: "#001f3f", // Deep Navy
  secondaryColor: "#ffffff",
  fontFamily: 'font-sans',
  socialLinks: {
    instagram: "https://instagram.com",
    naverBlog: "https://blog.naver.com",
  },
  contact: {
    address: "서울특별시 강남구 테헤란로 123 쑤기빌딩 4층",
    phone: "02-1234-5678",
    email: "info@ssugiworld.com",
  },
  features: [
    {
      id: '1',
      title: "맞춤형 커리큘럼",
      description: "연령별, 수준별 최적화된 보드게임 선정과 교육 시스템을 제공합니다.",
      icon: "Target",
    },
    {
      id: '2',
      title: "전문 강사진",
      description: "국제 보드게임 연맹 인증을 받은 전문 강사들이 직접 지도합니다.",
      icon: "Users",
    },
    {
      id: '3',
      title: "프리미엄 라운지",
      description: "집중력을 극대화할 수 있는 쾌적하고 고급스러운 게임 환경을 자랑합니다.",
      icon: "Layout",
    }
  ],
  posts: [
    {
      id: 'p1',
      title: "새로운 전략 보드게임 '테라포밍 마스' 클래스 오픈",
      excerpt: "화성 개척의 꿈을 실현하는 전략 게임 클래스가 이번 달 새롭게 시작됩니다.",
      content: "화성 개척의 꿈을 실현하는 전략 게임 클래스가 이번 달 새롭게 시작됩니다. 상세 일정은 공지사항을 확인해주세요.",
      date: "2024-04-24",
      category: "교육 소식",
      imageUrl: "https://picsum.photos/seed/boardgame1/800/600",
    },
    {
      id: 'p2',
      title: "제1회 쑤기월드 보드게임 대회 성황리 종료",
      excerpt: "지난 주말 열린 토너먼트의 열기를 전해드립니다. 우승하신 모든 분들 축하드립니다!",
      content: "지난 주말 열린 토너먼트의 열기를 전해드립니다. 우승하신 모든 분들 축하드립니다! 다음 대회도 많은 기대 부탁드립니다.",
      date: "2024-04-20",
      category: "이벤트",
      imageUrl: "https://picsum.photos/seed/boardgame2/800/600",
    }
  ],
};
