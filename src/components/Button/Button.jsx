import style from './button.module.css';

const Button = ({ texto, accion, type }) => {
  return (
    <button
      className={type === 'success' ? style.aceptar : style.cancelar}
      onClick={accion}>
      {texto}
    </button>
  );
};

export default Button;
