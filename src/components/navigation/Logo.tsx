export const Logo = () => {
  return (
    <a 
      href="/" 
      className="flex-shrink-0 flex items-center gap-2" 
      aria-label="Home"
    >
      <img
        src="/lovable-uploads/695e7c5c-21ab-43b6-81eb-390c5abdaf9d.png"
        alt="Mbonge Council Logo"
        className="h-12 w-12"
        loading="eager"
      />
      <span className="text-xl font-bold text-gray-900">
        Mbonge Council
      </span>
    </a>
  );
};