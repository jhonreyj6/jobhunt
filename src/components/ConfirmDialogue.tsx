import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

const ConfirmDialogue = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-modal"
      >
        <div className="fixed pt-32 flex w-screen items-center justify-center p-4">
          <DialogPanel className="space-y-4 border bg-white p-6 rounded-lg w-[40rem]">
            <div className="text-center">
              <h2 className="text-5xl mb-4">
                <i className="fa-solid fa-circle-exclamation text-red-500"></i>
              </h2>
              <p className="text-xl mb-6">Are you sure you want to delete this proposal?</p>
              <div className="flex gap-4 justify-center">
                <button className="inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Proceed
                </button>
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default ConfirmDialogue;
