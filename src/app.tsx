import React, { useEffect, useState } from "react";
import { EnergyData, GenerationMix } from "./types/energy";
import { fetchEnergyData } from "./lib/api/energy";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CardEnergyStats } from "./components/CardEnergyStats";
import { LineChartEnergy } from "./components/LineChartEnergy";
import { Loader2 } from "lucide-react";

const App = () => {
  const [data, setData] = useState<EnergyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchEnergyData();
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  if (error) return <div className="error">{error}</div>;
  if (!data) return null;

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Generación de Energía en el Reino Unido
        </h1>

        {/* Gráfico Lineal */}
        <div className="mb-8">
          <LineChartEnergy data={data.generationmix} />
        </div>

        {/* Tarjetas de Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.generationmix.map((item: GenerationMix, index: number) => (
            <CardEnergyStats data={item} key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export { App };
