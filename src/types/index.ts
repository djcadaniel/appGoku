import { z } from 'zod'

export const Character = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    race: z.string(),
    description: z.string(),
    ki: z.string(),
    maxKi: z.string(),
    gender: z.string(),
    image: z.string()
  })
)

export type Character = z.infer<typeof Character>

const originPlanetSchema = z.object({
  id: z.number(),
  description: z.string(),
  isDestroyed: z.boolean(),
  name: z.string(),
  image: z.string()
});

const transformationSchema = z.object({
  id: z.number(),
  name: z.string(),
  ki: z.string(),      
  image: z.string(),
});

export const CharacterSearch = z.object({
  id: z.number(),
  name: z.string(),
  race: z.string(),
  description: z.string(),
  ki: z.string(),
  maxKi: z.string(),
  gender: z.string(),
  image: z.string(),
  originPlanet: originPlanetSchema,
  transformations: z.array(transformationSchema)
})

export type CharacterSearch = z.infer<typeof CharacterSearch>