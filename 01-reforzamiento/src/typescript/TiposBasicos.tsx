
export const TiposBasicos = () => {

  const nombre: string | number = 'Juanjo';
  const edad = 33;
  const estaActivo:boolean = true;

  const poderes: string[] = ['Velocidad','Volar','Pene gigante'];

  return (
    <>
        <h3>Tipos Básicos</h3>
        { nombre }, { edad }, { (estaActivo) ? 'activo' : 'No activo' }
        <br />
        { poderes.join(', ')}
    </>
  )
}
