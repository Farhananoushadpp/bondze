const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <div className="section-header">
      <h2 className={`section-title ${light ? 'text-light' : ''}`}>
        {title}
      </h2>
      <div className="divider-gold"></div>
      {subtitle && (
        <p className={`section-description ${light ? 'text-light' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
