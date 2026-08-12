const BASE_URL = '/api';

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || 'Error de red');
  }

  return response.json();
}

export function getComponents(filters = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(key, value);
    }
  });
  const query = params.toString();
  return request(`/components${query ? `?${query}` : ''}`);
}

export function getComponentById(id) {
  return request(`/components/${id}`);
}

export function checkCompatibility(components) {
  return request('/compatibility/check', {
    method: 'POST',
    body: JSON.stringify({ components }),
  });
}

export function optimizeBuild(payload) {
  return request('/builds/optimize', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function getPresets(useType) {
  const query = useType ? `?useType=${encodeURIComponent(useType)}` : '';
  return request(`/builds/presets${query}`);
}