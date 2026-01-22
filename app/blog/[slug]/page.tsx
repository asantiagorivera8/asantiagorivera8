import { blogPostsData } from "@/lib/blog-data"
import type { Metadata } from "next"
import BlogArticleClient from "./BlogArticleClient"

interface BlogArticlePageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = params
  const post = blogPostsData.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${post.title} | Blog TechBiz`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [post.imageUrl],
    },
  }
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  return <BlogArticleClient params={params} />
}
