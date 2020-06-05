import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './modal.css';

const Modal: React.FC<{ show: boolean }> = ({ show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={ showHideClassName }>
      <div className="modal-main" tabIndex={0}>
        <span>
          <FiCheckCircle color="#34CB79" size="40" />
        </span>
        <h1>
          Cadastro concluído!
        </h1>
      </div>
    </div>
  );
}

export default Modal;