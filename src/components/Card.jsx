export default function Card({ title, children }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
