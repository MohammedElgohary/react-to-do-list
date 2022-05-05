import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swal = withReactContent(Swal);

export const MySwal = ({ position, text, icon, timer }) =>
  swal.fire({
    position: position || "top-end",
    text: text || "Process done successfully !",
    icon: icon || "success",
    showConfirmButton: false,
    timer: timer || 1500,
  });

export const MyErorr = ({ position, text, icon, timer }) =>
  swal.fire({
    position: position || "top-end",
    text: text || "Sorry, try again !",
    icon: icon || "erorr",
    showConfirmButton: false,
    timer: timer || 2500,
  });

export const confirm = ({
  text,
  yes,
  no,
  callback,
  fullback,
  Finally,
  icon,
  position,
  confirmButtonClass,
  cancelButtonClass,
  timer,
}) => {
  swal
    .fire({
      position: position || "top-end",
      text: text || "Are you sure of this ?",
      icon: icon || "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: yes || "yes",
      cancelButtonText: no || "no",
      customClass: {
        confirmButton: confirmButtonClass
          ? confirmButtonClass
          : "btn btn-primary mx-1",
        cancelButton: cancelButtonClass
          ? cancelButtonClass
          : "btn btn-danger mx-1",
      },
      buttonsStyling: false,
      timer: timer ? timer : 8000,
    })
    .then(async (result) => {
      if (result.isConfirmed) {
        if (callback) {
          callback();
        }
      } else {
        if (fullback) {
          fullback();
        }
      }
    })
    .finally(Finally);
};
