import React, {useState} from 'react';
import Modal from 'react-modal';
import Popup from './Modal';
import './CancelAppointment.css';


function ModalInFunctionalComponent (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
        <div class="reason_for_cancel">
        <div class="reason">
        <h1>Reason for Cancel of Appointment</h1>
        </div>
        <div class="reasons">
          1.<br></br>
          2.<br></br>
          3.<br></br>
          4.<br></br>
          5.<br></br>
          <input type="text" placeholder="Type the Reason" />
        </div>
        <br></br><br></br>
            <input type="button" className="button20" value="continue" onClick={setModalIsOpenToTrue} />
            </div>
            <Modal isOpen={modalIsOpen}>
            <Popup/>
                <button onClick={setModalIsOpenToFalse}>no</button>
              
            </Modal>
        </>
    )
}
export default ModalInFunctionalComponent;