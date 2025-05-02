interface CTAButtonProps {
  type?: 'primary' | 'secondary' | 'outline';
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ type = 'primary', href, children, className = '' }: CTAButtonProps) {
  const baseStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  return (
    <a href={href} className={`${baseStyles[type]} ${className}`}>
      {children}
    </a>
  );
}

