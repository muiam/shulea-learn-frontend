export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET||'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const token = assertValue(
  
  process.env.SANITY_TOKEN,
'Missing environment variable: SANITY_TOKEN'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const readToken = assertValue(
  process.env.SANITY_READ_TOKEN,
  'Missing environment variable: SANITY_READ_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
