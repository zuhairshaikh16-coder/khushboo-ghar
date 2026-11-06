import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedScentFamily: string;
  onSelectScentFamily: (family: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedScentFamily,
  onSelectScentFamily,
  searchQuery,
  onSearchChange,
  totalCount,
}) => {
  const categories = [
    { id: 'all', label: 'All Treasures' },
    { id: 'attar', label: 'Organic Attars' },
    { id: 'umrah', label: 'Umrah & Hajj Essentials' },
    { id: 'islamic-lifestyle', label: 'Islamic Lifestyle' },
  ];

  const scentFamilies = [
    { id: 'all', label: 'All Profiles' },
    { id: 'woody-oudh', label: 'Oud & Woods' },
    { id: 'musk', label: 'Pure Musk' },
    { id: 'floral', label: 'Damask Rose & Florals' },
    { id: 'oriental-amber', label: 'Amber & Spices' },
    { id: 'unscented', label: 'Ihram Unscented' },
  ];

  return (
    <div className="space-y-4">
      {/* Top row: Category Segmented Tabs & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg overflow-x-auto scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#053b2f] text-white shadow-sm font-semibold'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search input with functional affordance */}
        <div className="relative min-w-[240px] lg:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search attars, oudh, soap, tasbih..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-stone-200 rounded-lg placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#053b2f] focus:border-[#053b2f] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Secondary filter: Scent family / Profile bar (especially when attars or all is active) */}
      <div className="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-stone-200/60">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none text-xs">
          <span className="text-stone-500 font-medium whitespace-nowrap mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#c59b27]" />
            Scent Notes:
          </span>
          {scentFamilies.map((f) => {
            const isSelected = selectedScentFamily === f.id;
            return (
              <button
                key={f.id}
                onClick={() => onSelectScentFamily(f.id)}
                className={`px-2.5 py-1 rounded text-xs whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#c59b27] text-stone-950 font-bold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Unboxed items count */}
        <div className="text-xs text-stone-500 font-medium">
          Showing <span className="font-semibold text-stone-800 font-mono tabular-nums">{totalCount}</span> authentic items
        </div>
      </div>
    </div>
  );
};
