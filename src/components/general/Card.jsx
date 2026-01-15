export default function Card({ children }) {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      {children}
    </div>
  );
}