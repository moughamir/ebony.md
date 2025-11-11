// @FILE: src/lib/markdown.ts
export class MarkdownParser {
  // Parse wiki-style links [[Note Name]]
  static parseWikiLinks(content: string): string[] {
    const regex = /\[\[([^\]]+)\]\]/g;
    const matches = content.matchAll(regex);
    return Array.from(matches, m => m[1]);
  }

  // Parse tags #tag
  static parseTags(content: string): string[] {
    const regex = /#(\w+)/g;
    const matches = content.matchAll(regex);
    return Array.from(matches, m => m[1]);
  }

  // Extract frontmatter
  static parseFrontmatter(content: string): Record<string, any> | null {
    const regex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(regex);
    if (!match) return null;

    const frontmatter: Record<string, any> = {};
    const lines = match[1].split('\n');
    
    for (const line of lines) {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        frontmatter[key.trim()] = valueParts.join(':').trim();
      }
    }
    
    return frontmatter;
  }

  // Get note title from content
  static getTitle(content: string): string {
    const firstLine = content.split('\n')[0];
    if (firstLine.startsWith('#')) {
      return firstLine.replace(/^#+\s*/, '');
    }
    return 'Untitled';
  }
}

