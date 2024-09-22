import React, { useState, useEffect } from "react";
import { HiTrash, HiPencilAlt } from "react-icons/hi";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Address {
  id: number;
  tag: string;
  recipient: string;
  phoneNumber: string;
  fullAddress: string;
  postalCode: string;
}

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeliveryModal: React.FC<DeliveryModalProps> = ({ isOpen, onClose }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAddAddressModalOpen, setAddAddressModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleAddAddress = (newAddress: Address) => {
    setAddresses([...addresses, newAddress]);
    setAddAddressModalOpen(false);
  };

  const handleEditAddress = (updatedAddress: Address) => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === updatedAddress.id ? updatedAddress : addr
      )
    );
    setEditingAddress(null);
  };

  const handleRemoveAddress = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-72 p-4 sm:w-1/2">
        <DialogHeader>
          <DialogTitle className="text-md sm:text-xl">
            Choose delivery location
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {addresses.length > 0 ? (
            addresses.map((address) => (
              <div key={address.id} className="border p-4 rounded-md">
                <h3 className="font-bold">{address.tag}</h3>
                <p>
                  {address.recipient}, {address.phoneNumber}
                </p>
                <p>
                  {address.fullAddress}, {address.postalCode}
                </p>
                <div className="mt-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingAddress(address)}
                  >
                    <HiPencilAlt className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveAddress(address.id)}
                  >
                    <HiTrash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No addresses found.</p>
          )}
          <Button
            className="btn-anim p-4 bg-fm-2 rounded-lg text-black hover:bg-fm-4"
            onClick={() => setAddAddressModalOpen(true)}
          >
            Add New Address
          </Button>
        </div>
      </DialogContent>
      <AddAddressModal
        isOpen={isAddAddressModalOpen || !!editingAddress}
        onClose={() => {
          setAddAddressModalOpen(false);
          setEditingAddress(null);
        }}
        onAddAddress={handleAddAddress}
        onEditAddress={handleEditAddress}
        editingAddress={editingAddress}
      />
    </Dialog>
  );
};

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAddress: (address: Address) => void;
  onEditAddress: (address: Address) => void;
  editingAddress: Address | null;
}

const AddAddressModal: React.FC<AddAddressModalProps> = ({
  isOpen,
  onClose,
  onAddAddress,
  onEditAddress,
  editingAddress,
}) => {
  const [address, setAddress] = useState<Address>({
    id: 0,
    tag: "",
    recipient: "",
    phoneNumber: "",
    fullAddress: "",
    postalCode: "",
  });

  useEffect(() => {
    if (editingAddress) {
      setAddress(editingAddress);
    } else {
      setAddress({
        id: 0,
        tag: "",
        recipient: "",
        phoneNumber: "",
        fullAddress: "",
        postalCode: "",
      });
    }
  }, [editingAddress]);

  const handleSubmit = () => {
    if (editingAddress) {
      onEditAddress(address);
    } else {
      onAddAddress({ ...address, id: Date.now() });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-72 p-4 sm:w-1/2">
        <DialogHeader>
          <DialogTitle className="text-md sm:text-xl">
            {editingAddress ? "Edit Address" : "Add New Address"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Address Tag (e.g., Home, Office)"
            value={address.tag}
            onChange={(e) => setAddress({ ...address, tag: e.target.value })}
          />
          <Input
            placeholder="Recipient Name"
            value={address.recipient}
            onChange={(e) =>
              setAddress({ ...address, recipient: e.target.value })
            }
          />
          <Input
            placeholder="Phone Number"
            value={address.phoneNumber}
            onChange={(e) =>
              setAddress({ ...address, phoneNumber: e.target.value })
            }
          />
          <Input
            placeholder="Full Address"
            value={address.fullAddress}
            onChange={(e) =>
              setAddress({ ...address, fullAddress: e.target.value })
            }
          />
          <Input
            placeholder="Postal Code"
            value={address.postalCode}
            onChange={(e) =>
              setAddress({ ...address, postalCode: e.target.value })
            }
          />
          <Button
            className="btn-anim p-4 bg-fm-2 rounded-lg text-black hover:bg-fm-4"
            onClick={handleSubmit}
          >
            {editingAddress ? "Update Address" : "Add Address"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryModal;
