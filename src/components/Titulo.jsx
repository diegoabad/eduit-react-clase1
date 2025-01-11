import Button from './Button/Button';

function Titulo({
  titulo = 'Titulo Desconocido',
  subtitulo = 'Subtitulo Desconocido',
}) {
  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{subtitulo}</h3>
      <Button
        texto="Aceptar"
        accion={() => {
          console.log('Aceptar');
        }}
        type="success"
      />
      <Button
        texto="Cancelar"
        accion={() => {
          console.log('Cancelar');
        }}
        type="danger"
      />
    </div>
  );
}

export default Titulo;
