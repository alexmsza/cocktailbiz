'use client';

import { useState } from 'react';
import { 
  Calculator, 
  Plus, 
  Trash2, 
  Wine, 
  CheckCircle2, 
  FileSpreadsheet, 
  DollarSign, 
  Sparkles,
  Info
} from 'lucide-react';
import { initialRecipes } from '@/data/mockManagementData';
import { CocktailRecipe } from '@/types';

export default function FichasTecnicasPage() {
  const [recipes, setRecipes] = useState<CocktailRecipe[]>(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<CocktailRecipe>(initialRecipes[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form de novo coquetel
  const [newCocktailName, setNewCocktailName] = useState('');
  const [newCategory, setNewCategory] = useState<'Clássico' | 'Autoral' | 'Tropical' | 'Mocktail'>('Tropical');
  const [newTargetMargin, setNewTargetMargin] = useState(75);
  const [ingredients, setIngredients] = useState([
    { name: 'Destilado Base', marketPrice: 50, packageSize: 1000, packageUnit: 'ml', portionUsed: 50, portionUnit: 'ml' },
    { name: 'Fruta / Insumo Fresco', marketPrice: 10, packageSize: 500, packageUnit: 'g', portionUsed: 50, portionUnit: 'g' },
    { name: 'Gelo Filtrado', marketPrice: 15, packageSize: 10000, packageUnit: 'g', portionUsed: 200, portionUnit: 'g' },
    { name: 'Canudo & Guardanapo', marketPrice: 15, packageSize: 100, packageUnit: 'un', portionUsed: 1, portionUnit: 'un' }
  ]);

  const addIngredientRow = () => {
    setIngredients([
      ...ingredients,
      { name: 'Novo Insumo', marketPrice: 20, packageSize: 1000, packageUnit: 'g', portionUsed: 50, portionUnit: 'g' }
    ]);
  };

  const removeIngredientRow = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, field: string, value: any) => {
    const updated = [...ingredients];
    updated[index] = { ...updated[index], [field]: value };
    setIngredients(updated);
  };

  // Cálculos do novo drink
  const computedIngredients = ingredients.map((item) => {
    const yieldCount = item.portionUsed > 0 ? item.packageSize / item.portionUsed : 0;
    const unitCost = yieldCount > 0 ? item.marketPrice / yieldCount : 0;
    return {
      ...item,
      yieldCount: Number(yieldCount.toFixed(1)),
      unitCost: Number(unitCost.toFixed(2))
    };
  });

  const computedTotalCost = computedIngredients.reduce((acc, curr) => acc + curr.unitCost, 0);
  const suggestedPrice = newTargetMargin < 100 ? computedTotalCost / (1 - newTargetMargin / 100) : 0;

  const handleSaveCocktail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCocktailName.trim()) return;

    const newRec: CocktailRecipe = {
      id: `rec-${Date.now()}`,
      name: newCocktailName,
      category: newCategory,
      ingredients: computedIngredients,
      totalCost: Number(computedTotalCost.toFixed(2)),
      targetMargin: newTargetMargin,
      suggestedPrice: Number(suggestedPrice.toFixed(2)),
      instructions: [
        'Adicione os insumos na ordem correta na coqueteleira.',
        'Bata com gelo por 12 segundos e sirva no copo adequado com guarnição fresca.'
      ]
    };

    setRecipes([newRec, ...recipes]);
    setSelectedRecipe(newRec);
    setIsModalOpen(false);
    setNewCocktailName('');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CD8C38] uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Engenharia de Cardápio & CMV</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Fichas Técnicas & Precificação Real</h1>
          <p className="text-xs text-zinc-400 mt-1">
            &quot;A Ficha Técnica é a Mãe dos Processos&quot; — Garanta que o drink de terça seja idêntico ao de sexta e apure a margem de cada dose.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#CD8C38]/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Nova Ficha</span>
        </button>
      </div>

      {/* Main Grid: Lista de Drinks + Detalhe da Ficha Ativa */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Coluna Esquerda: Catálogo de Fichas */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
            Coquetéis Cadastrados ({recipes.length})
          </h3>

          <div className="space-y-2">
            {recipes.map((rec) => (
              <button
                key={rec.id}
                onClick={() => setSelectedRecipe(rec)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between ${
                  selectedRecipe.id === rec.id
                    ? 'bg-[#161F26] border-[#CD8C38] shadow-lg shadow-[#CD8C38]/5'
                    : 'bg-black/30 hover:bg-[#161F26]/60 border-white/5 text-zinc-400'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{rec.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-zinc-300">
                      {rec.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    CMV: <strong className="text-emerald-400">R$ {rec.totalCost.toFixed(2)}</strong> • Margem: {rec.targetMargin}%
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-[#CD8C38]">
                    R$ {rec.suggestedPrice.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-zinc-500 block">Preço Sugerido</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Coluna Direita: Detalhe Matemático da Ficha Técnica */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#161F26] border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#CD8C38]/20 text-[#CD8C38] border border-[#CD8C38]/30">
                {selectedRecipe.category}
              </span>
              <h2 className="text-2xl font-black text-white mt-2">{selectedRecipe.name}</h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Custo de Mercadoria Vendida (CMV) & Tabela de Rendimento
              </p>
            </div>

            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/10">
              <div className="text-right">
                <span className="text-[11px] text-zinc-400 block uppercase font-medium">Custo Unitário (CMV)</span>
                <span className="text-xl font-black text-emerald-400">
                  R$ {selectedRecipe.totalCost.toFixed(2)}
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="text-right">
                <span className="text-[11px] text-zinc-400 block uppercase font-medium">Preço de Venda</span>
                <span className="text-xl font-black text-[#CD8C38]">
                  R$ {selectedRecipe.suggestedPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Tabela de Insumos da Ficha */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/10 text-zinc-400 uppercase text-[10px] font-semibold">
                <tr>
                  <th className="py-2.5 pr-4">Ingrediente / Material</th>
                  <th className="py-2.5 px-3">Preço Mercado</th>
                  <th className="py-2.5 px-3">Embalagem</th>
                  <th className="py-2.5 px-3">Porção</th>
                  <th className="py-2.5 px-3">Rendimento</th>
                  <th className="py-2.5 pl-3 text-right">Custo / Drink</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {selectedRecipe.ingredients.map((ing, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 font-semibold text-white">{ing.name}</td>
                    <td className="py-3 px-3">R$ {ing.marketPrice.toFixed(2)}</td>
                    <td className="py-3 px-3">{ing.packageSize} {ing.packageUnit}</td>
                    <td className="py-3 px-3 font-medium text-[#CD8C38]">{ing.portionUsed} {ing.portionUnit}</td>
                    <td className="py-3 px-3">{ing.yieldCount} doses</td>
                    <td className="py-3 pl-3 text-right font-bold text-emerald-400">
                      R$ {ing.unitCost.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t border-white/10 font-bold">
                <tr>
                  <td colSpan={5} className="py-3 text-white uppercase text-xs">
                    Custo Total dos Insumos por Coquetel:
                  </td>
                  <td className="py-3 text-right text-sm text-emerald-400 font-black">
                    R$ {selectedRecipe.totalCost.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Modo de Preparo Padronizado */}
          <div className="p-4 rounded-2xl bg-black/30 border border-white/5 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Modo de Preparo Padronizado (Procedimento Operacional Padrão)
            </h4>
            <ol className="space-y-1.5 text-xs text-zinc-300 list-decimal list-inside">
              {selectedRecipe.instructions.map((step, idx) => (
                <li key={idx} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Modal de Cadastro de Nova Ficha Técnica */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="w-full max-w-3xl my-8 p-6 sm:p-8 rounded-3xl bg-[#161F26] border border-white/15 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Criar Nova Ficha Técnica de Drink</h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Informe os insumos de mercado e a dose usada no copo para cálculo automático.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white text-lg font-bold p-2"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveCocktail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Nome do Drink / Coquetel</label>
                  <input
                    type="text"
                    required
                    value={newCocktailName}
                    onChange={(e) => setNewCocktailName(e.target.value)}
                    placeholder="Ex: Negroni da Casa, Caipirinha de Maracujá"
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Categoria</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#CD8C38]"
                  >
                    <option value="Tropical">Tropical</option>
                    <option value="Clássico">Clássico</option>
                    <option value="Autoral">Autoral</option>
                    <option value="Mocktail">Mocktail (Sem Álcool)</option>
                  </select>
                </div>
              </div>

              {/* Tabela Interativa de Insumos */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Insumos & Medidas de Mercado
                  </span>
                  <button
                    type="button"
                    onClick={addIngredientRow}
                    className="text-xs font-semibold text-[#CD8C38] hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Adicionar Ingrediente
                  </button>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {ingredients.map((ing, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-2 p-2.5 rounded-xl bg-black/30 border border-white/5 items-center text-xs">
                      <div className="col-span-4">
                        <input
                          type="text"
                          value={ing.name}
                          onChange={(e) => updateIngredient(idx, 'name', e.target.value)}
                          placeholder="Ingrediente"
                          className="w-full p-1.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          step="0.01"
                          value={ing.marketPrice}
                          onChange={(e) => updateIngredient(idx, 'marketPrice', Number(e.target.value))}
                          placeholder="Preço R$"
                          className="w-full p-1.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={ing.packageSize}
                          onChange={(e) => updateIngredient(idx, 'packageSize', Number(e.target.value))}
                          placeholder="Tam. Emb."
                          className="w-full p-1.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={ing.portionUsed}
                          onChange={(e) => updateIngredient(idx, 'portionUsed', Number(e.target.value))}
                          placeholder="Dose"
                          className="w-full p-1.5 rounded-lg bg-black/40 border border-white/10 text-white text-xs"
                        />
                      </div>
                      <div className="col-span-1 text-center font-bold text-emerald-400 text-[11px]">
                        R${computedIngredients[idx]?.unitCost || 0}
                      </div>
                      <div className="col-span-1 text-right">
                        <button
                          type="button"
                          onClick={() => removeIngredientRow(idx)}
                          className="text-zinc-500 hover:text-rose-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resumo Financeiro Automático */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-zinc-400 uppercase">Custo Total de Insumos (CMV)</span>
                  <p className="text-xl font-black text-emerald-400">R$ {computedTotalCost.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <label className="block text-[11px] text-zinc-400 mb-0.5">Margem Alvo (%)</label>
                    <input
                      type="number"
                      value={newTargetMargin}
                      onChange={(e) => setNewTargetMargin(Number(e.target.value))}
                      className="w-16 p-1 rounded-lg bg-black/60 border border-white/15 text-white text-xs text-center"
                    />
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-zinc-400 uppercase">Preço de Venda Sugerido</span>
                    <p className="text-xl font-black text-[#CD8C38]">R$ {suggestedPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs text-zinc-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#CD8C38] to-[#C2410C] text-white hover:opacity-90 shadow-md shadow-[#CD8C38]/20"
                >
                  Salvar Ficha Técnica
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
