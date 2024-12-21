export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET||'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const token = assertValue(
  process.env.SANITY_TOKEN || "skEObKiTr5eZtOcwxXyOK4Bw4vjQRmhGI4AUO5OnpOJuUirYfGr5t0hFy66w6lGHz7Dn6CSeQLGDv7Na9LLh0UodXmAdx3OBdB1ljRozVBxLmWReFc8XdSFU9nUiToCK4V1yx75mWM6A5R5pXVxPXVpyCuA1IqiMoO1NxzfKACLH4h7YY4Nj",
'Missing environment variable: SANITY_TOKEN'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const readToken = assertValue(
  process.env.SANITY_READ_TOKEN || "skxinLB8y94jyaSHHIRXuXQHKGgMy6Dj2SxYguPxs2ujR88Axz5vmqpp5Jfgn2kHopHkhAl2OCOUpwG5u3QKFMFsn1i6Svep99PBVPG4rMzAnPlWFVQBUvEdBUaKClxjyArKIbQ6bT4ga04c3RRfY5RbBoEiEyQWAvsIxdRSmwI5WtbdyNDn",
  'Missing environment variable: SANITY_READ_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
