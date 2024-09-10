
const API_KEY = '1e7265a200a144168fe976b1aa574779';
const API_URL = 'https://openexchangerates.org/api/latest.json?app_id=1e7265a200a144168fe976b1aa574779';

export async function fetchData() {
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar dados');
  }

  return response.json();
}