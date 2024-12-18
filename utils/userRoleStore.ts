import { create } from 'zustand';

type Role = 'learner' | 'tutor';

interface UserRoleState {
  role: Role;
  isInitialized: boolean;
  toggleRole: () => void;
  setRole: (role: Role) => void;
  initializeRole: () => void;
}

const useUserRoleStore = create<UserRoleState>()((set) => ({
  role: 'learner', // Default state for SSR
  isInitialized: false,
  setRole: (role: Role) => {
    localStorage.setItem('role', role);
    set({ role });
  },
  toggleRole: () => set((state) => {
    const newRole = state.role === 'learner' ? 'tutor' : 'learner';
    localStorage.setItem('role', newRole);
    return { role: newRole };
  }),
  initializeRole: () => {
    if (typeof window === 'undefined') return;
    const storedRole = localStorage.getItem('role');
    const validRole = (storedRole === 'tutor' || storedRole === 'learner') ? storedRole : 'learner';
    set({ role: validRole, isInitialized: true });
  }
}));

export default useUserRoleStore;