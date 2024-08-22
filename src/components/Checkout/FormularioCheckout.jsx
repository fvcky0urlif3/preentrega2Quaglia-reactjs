import React from 'react';
import './FormularioCheckout.css';

const FormularioCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} className="form-checkout">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datosForm.nombre}
          onChange={handleChangeInput}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={datosForm.telefono}
          onChange={handleChangeInput}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={datosForm.email}
          onChange={handleChangeInput}
          required
        />
      </div>

      <button type="submit" className="button-form">
        Enviar orden
      </button>
    </form>
  );
};

export default FormularioCheckout;