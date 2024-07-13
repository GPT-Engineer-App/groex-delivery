const Logo = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" fill="black" />
    <polygon points="50,20 80,70 20,70" fill="white" />
  </svg>
);

export default Logo;