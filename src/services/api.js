const API_ORIGIN = import.meta.env.VITE_API_URL ? String(import.meta.env.VITE_API_URL).replace(/\/+$/, '') : '';
const BASE_URL = API_ORIGIN ? `${API_ORIGIN}/api` : '/api';

const TOKEN_KEY = 'pcbuilder_token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

async function request(path, options = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    headers,
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

export function login(credentials) {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}