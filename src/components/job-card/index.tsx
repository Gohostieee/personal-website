import React from "react";

interface JobCardProps {
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  tags?: string[];
  imageUrl?: string;
  linkUrl?: string;
  dateRange?: string;
}

/**
 * A neobrutal styled card for jobs or projects.
 */
const JobCard: React.FC<JobCardProps> = ({
  title,
  subtitle,
  description,
  tags = [],
  imageUrl,
  linkUrl,
  dateRange,
}) => {
  const cardContent = (
    <div className="neobrutal flex flex-col sm:flex-row gap-4 p-4 w-full shadow-shadow hover:shadow-xl border-2 border-border transition-shadow duration-150">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-base w-30 h-30 object-cover border-2 border-border bg-secondary-background"
        />
      )}
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2 justify-between">
          <h3 className="text-xl font-bold leading-tight">{title}</h3>
          {dateRange && (
            <span className="text-xs px-2 py-1 rounded neobrutal-secondary whitespace-nowrap">{dateRange}</span>
          )}
        </div>
        {subtitle && <div className="text-base font-medium text-main-foreground/80">{subtitle}</div>}
        {description && description}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-semibold rounded neobrutal-secondary">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return linkUrl ? (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default JobCard;