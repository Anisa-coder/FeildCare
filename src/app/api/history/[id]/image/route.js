export async function GET(_request, { params }) {
  const { id } = await params;
  if (!/^[1-9]\d*$/.test(id)) {
    return Response.json({ detail: 'Invalid scan ID.' }, { status: 400 });
  }

  const backendUrl = (process.env.BACKEND_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');
  try {
    const response = await fetch(`${backendUrl}/history/${id}/image`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      return Response.json({ detail: 'Scan image was not found.' }, { status: response.status });
    }

    return new Response(await response.arrayBuffer(), {
      status: 200,
      headers: {
        'Content-Type': response.headers.get('content-type') || 'image/jpeg',
        'Cache-Control': 'private, max-age=3600',
      },
    });
  } catch {
    return Response.json({ detail: 'Scan image is unavailable.' }, { status: 503 });
  }
}
