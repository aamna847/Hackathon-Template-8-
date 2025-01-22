export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-28";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  "Missing environment variable: NEXT_PUBLIC_SANITY_AUTH_TOKEN"
);
export const secretkey = assertValue(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
  "Missing environment variable: NEXT_PUBLIC_STRIPE_SECRET_KEY"
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
