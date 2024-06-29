const XSvg = (props) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
    <path d="M4 2h16v4H4V2zM10 6h4v16h-4V6z" fill="#000" />

    <path d="M4 2h16l-2 2H2L4 2z" fill="blue" />

    <path d="M10 6v16l-2-2V4l2 2z" fill="blue" />

    <path d="M14 6v16l2-2V4l-2 2z" fill="blue" />

    <path d="M10 22h4l-2 2-2-2z" fill="blue" />
  </svg>
);
export default XSvg;
