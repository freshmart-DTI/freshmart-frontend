import React from "react";
import { HiX } from "react-icons/hi";

function CartSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-1/4 bg-white shadow-lg transition-transform duration-300 ease-in-out transform rounded-l-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <button onClick={onClose} className="float-right">
              <HiX className="text-fm-6" size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          </div>

          <div className="flex-grow">{/* Cart items */}</div>

          <div className="p-4 mt-auto">
            <div className="flex justify-between items-center">
              <span className="font-bold">Total: $0.00</span>
              <button className="p-4 rounded-lg border border-fm-4 bg-fm-1 btn-anim">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSidebar;
