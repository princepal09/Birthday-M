/**
 * Reusable romantic button with glassmorphism styling.
 * Uses CSS transitions (no Framer Motion).
 */
export default function Button({ children, onClick, className = "", id }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`btn-romantic ${className}`}
    >
      {children}
    </button>
  );
}
