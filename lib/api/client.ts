export type ApiEnvelope<T> = { success: true; data: T; message?: string };

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ApiRequestError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "ApiRequestError";
  }
}

export async function apiGet<T>(path: string, params?: Record<string, string | number | boolean | undefined>): Promise<T> {
  if (!baseUrl) throw new ApiRequestError("NEXT_PUBLIC_API_BASE_URL is not configured.");
  const url = new URL(`${baseUrl}/${path.replace(/^\/+/, "")}`);
  for (const [key, value] of Object.entries(params ?? {})) {
    if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
  }
  let response: Response;
  try {
    response = await fetch(url, { next: { revalidate: 60 } });
  } catch {
    throw new ApiRequestError("The content service is unavailable.");
  }
  const body = await response.json().catch(() => null) as ApiEnvelope<T> | { message?: string } | null;
  if (!response.ok) throw new ApiRequestError(body?.message || `Content request failed (${response.status}).`, response.status);
  if (!body || !("success" in body) || !body.success || !("data" in body)) {
    throw new ApiRequestError("The content service returned an invalid response.", response.status);
  }
  return body.data;
}

export type Paginated<T> = { items: T[]; pagination: { page: number; limit: number; total: number; totalPages: number } };

export async function apiPost<T>(path: string, bodyData: unknown): Promise<T> {
  if (!baseUrl) throw new ApiRequestError("NEXT_PUBLIC_API_BASE_URL is not configured.");
  const url = baseUrl + "/" + path.replace(/^\/+/, "");
  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });
  } catch {
    throw new ApiRequestError("The content service is unavailable.");
  }
  const body = (await response.json().catch(() => null)) as ApiEnvelope<T> | { message?: string } | null;
  if (!response.ok) throw new ApiRequestError(body?.message || ("Request failed (" + response.status + ")."), response.status);
  return (body as ApiEnvelope<T>).data;
}
