import { useState } from "react";
import { GlobeIcon } from "lucide-react";

const data = {
  US: {
    name: "United States",
    flag: "🇺🇸",
    categories: {
      Electronics: [
        { title: "Apple AirPods Pro", link: "https://amazon.com" },
        { title: "Kindle Paperwhite", link: "https://amazon.com" }
      ],
      Beauty: [
        { title: "CeraVe Moisturizing Cream", link: "https://amazon.com" }
      ]
    }
  },
  KR: {
    name: "South Korea",
    flag: "🇰🇷",
    categories: {
      Tech: [
        { title: "Samsung Galaxy Buds2 Pro", link: "https://coupang.com" }
      ],
      Fashion: [
        { title: "Musinsa Hoodies", link: "https://musinsa.com" }
      ]
    }
  },
  CN: {
    name: "China",
    flag: "🇨🇳",
    categories: {
      Gadgets: [
        { title: "Xiaomi Mi Band 8", link: "https://taobao.com" }
      ],
      Lifestyle: [
        { title: "Xiaohongshu Trending Lip Tint", link: "https://xiaohongshu.com" }
      ]
    }
  },
  JP: {
    name: "Japan",
    flag: "🇯🇵",
    categories: {
      Kitchen: [
        { title: "Zojirushi Rice Cooker", link: "https://rakuten.co.jp" }
      ],
      Beauty: [
        { title: "Shiseido Sunscreen", link: "https://amazon.co.jp" }
      ]
    }
  }
};

export default function Home() {
  const countries = Object.keys(data);
  const [selectedCountry, setSelectedCountry] = useState("US");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <GlobeIcon className="w-8 h-8" /> hotfind
      </h1>
      <div className="flex space-x-2 mb-6">
        {countries.map((code) => (
          <button key={code} onClick={() => setSelectedCountry(code)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            {data[code].flag} {data[code].name}
          </button>
        ))}
      </div>
      {Object.entries(data[selectedCountry].categories).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <div className="grid gap-4">
            {items.map((item, index) => (
              <div key={item.title} className="border p-4 rounded shadow">
                <p className="font-medium">
                  #{index + 1} - <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{item.title}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
