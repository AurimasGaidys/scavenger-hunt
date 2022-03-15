import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Modal() {

    const [open, setOpen] = useRecoilState(modalState);

    return <Transition.Root show={open} as={Fragment}>
        <Dialog
            as={"div"}
            className="fixed z-10 inset-0 overflow-auto"
            onClose={() => {
                setOpen(false)
            }}
        >
            <Transition.Child>
                <Dialog.Overlay />
            </Transition.Child>
            <Transition.Child>
                <h1 onClick={() => {setOpen(false)}}>Bonus page</h1>
                {
                    open &&
                    <div>Modal is open</div>
                }
            </Transition.Child>
        </Dialog>
    </Transition.Root >
}

export default Modal;