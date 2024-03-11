import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export const postDirectory = () => join(process.cwd(), 'src/_post');

export function getPostSlugs() {
  return fs.readdirSync(postDirectory());
}

export function getBlogBySlug(slug: string, fields: string[], dir: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postDirectory(), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: any = {};
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllBlogs(fields: any[], dir: string) {
  const slug = getPostSlugs();

  const posts = slug
    .map((slug) => getBlogBySlug(slug, fields, dir))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
