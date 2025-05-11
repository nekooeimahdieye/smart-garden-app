import { useState } from "react";
import { ChevronDown, Trash2, Plus } from "lucide-react";

const initialProducts = [
  { id: 1, name: "پسته", color: "bg-green-200" },
  { id: 2, name: "عناب", color: "bg-red-200" },
  { id: 3, name: "خرما", color: "bg-yellow-200" },
  { id: 4, name: "مرکبات", color: "bg-orange-200" },
  { id: 5, name: "زیتون", color: "bg-lime-200" },
];

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = () => {
    const newName = prompt("نام محصول جدید را وارد کنید:");
    if (newName) {
      const newProduct = {
        id: Date.now(),
        name: newName,
        color: "bg-slate-200",
      };
      setProducts([...products, newProduct]);
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-emerald-600 text-white rounded-xl shadow-md hover:bg-emerald-700 transition"
      >
        مدیریت محصولات
        <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="bg-white shadow-lg rounded-xl mt-2 p-4 space-y-3 border border-emerald-100">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex items-center justify-between p-2 rounded-lg ${product.color}`}
            >
              <span className="font-medium">{product.name}</span>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}

          <button
            onClick={handleAddProduct}
            className="flex items-center justify-center gap-2 w-full py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded-lg mt-4"
          >
            <Plus size={18} /> افزودن محصول جدید
          </button>
        </div>
      )}
    </div>
  );
}
