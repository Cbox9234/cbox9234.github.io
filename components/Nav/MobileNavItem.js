export default function MobileNavItem({ title, ExpandedElem }) {
  return (
    <div className={`mobile-nav-item`}>
      <div className="header">
        <div className="title">{title}</div>
        <i className="ri-arrow-drop-down-line"></i>
      </div>
      {ExpandedElem}
    </div>
  );
}
