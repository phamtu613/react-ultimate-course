import { useCallback, useState } from "react";
import type { User } from "../types";
import type { UserFormData } from "../validation";

const ITEMS_PER_PAGE = 4;

export const useUserCRUD = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      fullName: "experiencea datadas",
      email: "experiencea@peepace@gmail.com",
      address: "cow",
      city: "1231",
      country: "CA",
    },
    {
      id: "2",
      fullName: "experiencea datadas",
      email: "experiencea@peepace@gmail.com",
      address: "cow",
      city: "1231",
      country: "CA",
    },
    {
      id: "3",
      fullName: "experiencea datadas",
      email: "experiencea@peepace@gmail.com",
      address: "cow",
      city: "1231",
      country: "CA",
    },
    {
      id: "4",
      fullName: "experiencea datadas",
      email: "experiencea@peepace@gmail.com",
      address: "cow",
      city: "1231",
      country: "CA",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const createUser = useCallback((userData: UserFormData) => {
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
    };

    setUsers((prev) => [newUser, ...prev]);
    setIsFormVisible(false);
  }, []);

  const updateUser = useCallback(
    (userData: UserFormData) => {
      if (!editingUser) return;

      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id ? { ...user, ...userData } : user
        )
      );

      setEditingUser(null);
      setIsFormVisible(false);
    },
    [editingUser]
  );

  const deleteUser = useCallback((userId: string) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  }, []);

  const handleFormSubmit = useCallback(
    (userData: UserFormData) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          if (editingUser) {
            updateUser(userData);
          } else {
            createUser(userData);
          }
          resolve();
        }, 500);
      });
    },
    [editingUser, updateUser, createUser]
  );

  const startEditing = useCallback((user: User) => {
    setEditingUser(user);
    setIsFormVisible(true);
  }, []);

  const cancelEditing = useCallback(() => {
    setEditingUser(null);
    setIsFormVisible(false);
  }, []);

  const showCreateForm = useCallback(() => {
    setEditingUser(null);
    setIsFormVisible(true);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    users: paginatedUsers,
    allUsers: users,
    editingUser,
    isFormVisible,
    currentPage,
    totalPages,
    handleFormSubmit,
    deleteUser,
    startEditing,
    cancelEditing,
    showCreateForm,
    handlePageChange,
    setIsFormVisible,
  };
};
