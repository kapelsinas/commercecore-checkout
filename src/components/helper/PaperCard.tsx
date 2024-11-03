import { cn } from 'src/lib/utils';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const PaperCard = ({ children, className, title, subtitle, ...props }: PaperCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col border-[1px] text-[#333333] border-[#E0E0E0] bg-[#FFFFFF] lg:border-none p-4 lg:p-0 gap-3',
        className,
      )}
    >
      {(title || subtitle) && (
        <div className="flex flex-col lg:mb-1">
          {title && <h2 className="text-large-title font-large-title text-left">{title}</h2>}
          {subtitle && <p className="text-xs-body text-[#828282]">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default PaperCard;
