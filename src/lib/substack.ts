const FEED_URL = "https://ceciliagutierrez.substack.com/feed";

export interface SubstackPost {
  title: string;
  description: string;
  url: string;
  pubDate: string;
  image: string;
}

function decodeEntities(str: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "'",
  };
  return str
    .replace(/&(?:amp|lt|gt|quot|apos);/g, (m) => entities[m] ?? m)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)),
    );
}

function extractCData(raw: string): string {
  const match = raw.match(/<!\[CDATA\[(.*?)\]\]>/s);
  return decodeEntities(match ? match[1] : raw);
}

function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, "s");
  const match = xml.match(regex);
  return match ? extractCData(match[1].trim()) : "";
}

function extractEnclosureUrl(xml: string): string {
  const match = xml.match(/<enclosure[^>]+url="([^"]+)"/);
  return match ? match[1] : "";
}

export async function getLatestPosts(count = 3): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.match(/<item>(.*?)<\/item>/gs);
    if (!items) return [];

    return items.slice(0, count).map((item) => ({
      title: extractTag(item, "title"),
      description: extractTag(item, "description"),
      url: extractTag(item, "link"),
      pubDate: extractTag(item, "pubDate"),
      image: extractEnclosureUrl(item),
    }));
  } catch {
    return [];
  }
}
