import { promises as fs } from "fs";
import path from "path";
import { baseUrl } from "@/utils/content";
import { allBlogs } from "@/utils/blogs";
import { allResources } from "@/content/resources";

const getNoteSlugs = async (dir) => {
  try {
    const entries = await fs.readdir(dir, {
      recursive: true,
      withFileTypes: true,
    });
    return entries
      .filter((entry) => entry.isFile() && entry.name === "page.mdx")
      .map((entry) => {
        const relativePath = path.relative(
          dir,
          path.join(entry.parentPath, entry.name)
        );
        return path.dirname(relativePath);
      })
      .map((slug) => slug.replace(/\\/g, "/"))
      .filter((slug) => slug !== "." && slug !== ""); // Filter out root and empty slugs
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
};

const sitemap = async () => {
  const notesDirectory = path.join(process.cwd(), "app");
  const slugs = await getNoteSlugs(notesDirectory);

  // Filter out duplicate and invalid slugs
  const validSlugs = [...new Set(slugs)].filter(slug => 
    slug && 
    slug !== "." && 
    slug !== "work" && // Avoid duplicates with main routes
    !slug.includes("undefined")
  );

  const notes = validSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/writings`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Add blog posts (only those with valid slugs)
  const blogUrls = allBlogs
    .filter(blog => blog.slug && blog.slug !== 'undefined')
    .map((blog) => ({
      url: `${baseUrl}/writings/${blog.slug}`,
      lastModified: new Date(blog.formattedDate || blog.date).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  // Resources don't have individual pages, so we don't include them in sitemap
  // They are all accessible through the /resources page

  return [...routes, ...notes, ...blogUrls];
};

export default sitemap;