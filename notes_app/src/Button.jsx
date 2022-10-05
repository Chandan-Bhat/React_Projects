import "./Button.css";

function Button() {
  
    return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default Button;