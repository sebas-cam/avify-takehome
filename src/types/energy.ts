export interface GenerationMix {
  fuel: string;
  perc: number;
}

export interface EnergyData {
  from: string;
  to: string;
  generationmix: GenerationMix[];
}

export interface EnergyResponse {
  data: EnergyData;
}
