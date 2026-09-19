import { useState } from "react";

type Props = {
  /** Google Drive file id. */
  id: string;
  alt: string;
  /** Requested thumbnail width. */
  width?: number;
  className?: string;
  /** Shown in place of the image if Drive stops serving the file. */
  fallbackLabel?: string;
  eager?: boolean;
};

/*
  Drive files get moved and unshared over time. When that happens the thumbnail
  endpoint returns an error page rather than an image, so render a typographic
  placeholder instead of a broken-image icon.
*/
const DriveImage = ({ id, alt, width = 1000, className = "", fallbackLabel, eager }: Props) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-secondary px-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
          {fallbackLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={`https://drive.google.com/thumbnail?id=${id}&sz=w${width}`}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

export default DriveImage;
