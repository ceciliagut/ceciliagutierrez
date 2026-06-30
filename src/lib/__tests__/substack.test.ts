import { describe, it, expect, vi, beforeEach } from "vitest";
import { getLatestPosts } from "../substack";

const MOCK_FEED = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<item>
  <title><![CDATA[4 a\u00f1os de escritura]]></title>
  <description><![CDATA[Que fruta noble el diario &#237;ntimo.]]></description>
  <link>https://ceciliagutierrez.substack.com/p/4-anos-de-escritura</link>
  <pubDate>Thu, 26 Jun 2026 12:00:00 GMT</pubDate>
  <enclosure url="https://substackcdn.com/image/post1.jpeg" length="0" type="image/jpeg"/>
</item>
<item>
  <title><![CDATA[Que bonita vecindad]]></title>
  <description><![CDATA[Esto va dedicado a mi vecino.]]></description>
  <link>https://ceciliagutierrez.substack.com/p/que-bonita-vecindad</link>
  <pubDate>Sat, 14 Jun 2026 12:00:00 GMT</pubDate>
  <enclosure url="https://substackcdn.com/image/post2.jpeg" length="0" type="image/jpeg"/>
</item>
<item>
  <title><![CDATA[Third post]]></title>
  <description><![CDATA[Description three.]]></description>
  <link>https://ceciliagutierrez.substack.com/p/third</link>
  <pubDate>Tue, 27 May 2026 12:00:00 GMT</pubDate>
  <enclosure url="https://substackcdn.com/image/post3.jpeg" length="0" type="image/jpeg"/>
</item>
<item>
  <title><![CDATA[Fourth post]]></title>
  <description><![CDATA[Should not appear.]]></description>
  <link>https://ceciliagutierrez.substack.com/p/fourth</link>
  <pubDate>Mon, 12 May 2026 12:00:00 GMT</pubDate>
  <enclosure url="https://substackcdn.com/image/post4.jpeg" length="0" type="image/jpeg"/>
</item>
</channel></rss>`;

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("getLatestPosts", () => {
  it("parses RSS feed and returns the requested number of posts", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(MOCK_FEED),
    }));

    const posts = await getLatestPosts(3);

    expect(posts).toHaveLength(3);
    expect(posts[0]).toEqual({
      title: "4 a\u00f1os de escritura",
      description: "Que fruta noble el diario \u00edntimo.",
      url: "https://ceciliagutierrez.substack.com/p/4-anos-de-escritura",
      pubDate: "Thu, 26 Jun 2026 12:00:00 GMT",
      image: "https://substackcdn.com/image/post1.jpeg",
    });
    expect(posts[2].title).toBe("Third post");
  });

  it("decodes HTML entities in CDATA", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(MOCK_FEED),
    }));

    const posts = await getLatestPosts(1);
    expect(posts[0].description).toBe("Que fruta noble el diario \u00edntimo.");
  });

  it("returns empty array on fetch failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));

    const posts = await getLatestPosts();
    expect(posts).toEqual([]);
  });

  it("returns empty array on network error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));

    const posts = await getLatestPosts();
    expect(posts).toEqual([]);
  });

  it("extracts enclosure image URL", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(MOCK_FEED),
    }));

    const posts = await getLatestPosts(2);
    expect(posts[0].image).toBe("https://substackcdn.com/image/post1.jpeg");
    expect(posts[1].image).toBe("https://substackcdn.com/image/post2.jpeg");
  });
});
