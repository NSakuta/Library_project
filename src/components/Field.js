const Field = ({ label, id, error, ...rest }) => (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
export default Field;  