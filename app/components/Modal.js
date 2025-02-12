Modal.js
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-md w-96"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}