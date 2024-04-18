import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children, open, close }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }

    if (close) {
      dialog.current.closeModal();
    }
  }, [open, close]);

  return createPortal(
    <dialog ref={dialog} className="modal">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
