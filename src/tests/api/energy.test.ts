import { fetchEnergyData } from '../../lib/api/energy';

describe('API Energy Tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get energy data correctly', async () => {
    const mockData = {
      data: {
        from: "2024-04-05T12:30Z",
        to: "2024-04-05T13:00Z",
        generationmix: [
          { fuel: "solar", perc: 20 },
          { fuel: "wind", perc: 30 },
          { fuel: "gas", perc: 25 },
          { fuel: "nuclear", perc: 15 },
          { fuel: "biomass", perc: 5 },
          { fuel: "hydro", perc: 3 },
          { fuel: "coal", perc: 1 },
          { fuel: "imports", perc: 0.5 },
          { fuel: "other", perc: 0.5 }
        ]
      }
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData)
    });

    const result = await fetchEnergyData();
    expect(result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith('https://api.carbonintensity.org.uk/generation');
  });

  it('should handle API errors', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    await expect(fetchEnergyData()).rejects.toThrow('Failed to fetch energy data');
  });

  it('should handle network errors', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchEnergyData()).rejects.toThrow('Network error');
  });
}); 