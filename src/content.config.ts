import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  tags: z.array(z.string()).default([]),
  date: z.coerce.date()
})

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './writing/recipes' }),
  schema: postSchema
})
const principles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './writing/principles' }),
  schema: postSchema
})
const techniques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './writing/techniques' }),
  schema: postSchema
})

// `about` has only `title` in frontmatter; unknown keys are stripped by Zod's
// default object behavior, so no `.passthrough()` (removed in Zod 4) is needed.
const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './writing/about' }),
  schema: z.object({ title: z.string().optional(), slug: z.string().optional(), date: z.coerce.date().optional() })
})

export const collections = { recipes, principles, techniques, about }
