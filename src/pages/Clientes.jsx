
const Clientes = () => {
  const datosClientes = [
    { id: 1, nombre: 'Cliente 1', servicio: 'Servicio A', fechaInicio: '01/01/2023', duracion: '6 meses', costo: '$5000', estado: 'Activo' },
    { id: 2, nombre: 'Cliente 2', servicio: 'Servicio B', fechaInicio: '05/03/2023', duracion: '12 meses', costo: '$8000', estado: 'Inactivo' },
  ];

  return (
    <div className="clientes-container">
      <h2>Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Servicio</th>
            <th>Fecha de Inicio</th>
            <th>Duración</th>
            <th>Costo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {datosClientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.servicio}</td>
              <td>{cliente.fechaInicio}</td>
              <td>{cliente.duracion}</td>
              <td>{cliente.costo}</td>
              <td>{cliente.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;
