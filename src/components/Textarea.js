const Textarea = ({ label, id, error,...rest }) => (
    <div className = "form-group">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} className = "form-control mb-3" {...rest} />
      {error && <p className = 'text-danger'>{error}</p>}
    </div>
  );

export default Textarea