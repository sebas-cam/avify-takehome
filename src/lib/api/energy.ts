import { EnergyResponse } from "../../types/energy";

export async function fetchEnergyData(): Promise<EnergyResponse> {
  const response = await fetch('https://api.carbonintensity.org.uk/generation');
  if (!response.ok) {
    throw new Error('Failed to fetch energy data');
  }
  return response.json();
}