/* eslint-disable react/prop-types */

export const Radio = ({ name, value, handleClick, defaultChecked = false }) => {
  const id = `${name}-${value}`;
  return (
    <div>
      <input
        className="radio"
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={handleClick}
        defaultChecked={defaultChecked}
        required
      />
      <label htmlFor={id} dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
};
