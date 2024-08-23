import React from 'react';
import './FormularioCheckout.css';

const FormularioCheckout = ({ datosForm, handleChangeInput, handleSubmitForm, errores }) => {
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
        {errores.nombre && <div className="error-alert">{errores.nombre}</div>}
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
        {errores.telefono && <div className="error-alert">{errores.telefono}</div>}
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
        {errores.email && <div className="error-alert">{errores.email}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="emailConfirm">Confirmar correo electrónico:</label>
        <input
          type="email"
          id="emailConfirm"
          name="emailConfirm"
          value={datosForm.emailConfirm}
          onChange={handleChangeInput}
          required
        />
        {errores.emailConfirm && <div className="error-alert">{errores.emailConfirm}</div>}
      </div>

      <button type="submit" className="button-form">
        Enviar orden
      </button>
    </form>
  );
};

export default FormularioCheckout;