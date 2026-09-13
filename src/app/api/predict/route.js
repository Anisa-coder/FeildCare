import { NextResponse } from 'next/server';

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png']);

function errorResponse(message, status) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return errorResponse('The upload could not be read.', 400);
  }

  const file = formData.get('file');
  if (!(file instanceof File) || file.size === 0) {
    return errorResponse('Choose a JPG, JPEG, or PNG image.', 400);
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return errorResponse('Upload a JPG, JPEG, or PNG image.', 415);
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return errorResponse('The image must be 5 MB or smaller.', 413);
  }

  const backendUrl = (process.env.BACKEND_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');
  const backendForm = new FormData();
  backendForm.append('file', file, file.name);

  let response;
  try {
    response = await fetch(`${backendUrl}/predict`, {
      method: 'POST',
      body: backendForm,
      cache: 'no-store',
      signal: AbortSignal.timeout(60_000),
    });
  } catch (error) {
    const timedOut = error?.name === 'TimeoutError';
    return errorResponse(
      timedOut
        ? 'Disease analysis timed out. Please try again.'
        : 'The detection service is unavailable. Make sure the backend is running.',
      timedOut ? 504 : 503,
    );
  }

  let payload;
  try {
    payload = await response.json();
  } catch {
    return errorResponse('The detection service returned an invalid response.', 502);
  }

  if (!response.ok) {
    return errorResponse(payload.detail || 'The image could not be analyzed.', response.status);
  }

  return NextResponse.json(payload);
}
