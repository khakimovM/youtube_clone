import { create } from "zustand";

type ToggleState = {
  isOpen: boolean;
  authToggle: () => void;
};

export const authStore = create<ToggleState>((set) => ({
  isOpen: false,
  authToggle: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
}));
