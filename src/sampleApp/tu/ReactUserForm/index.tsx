import { Button } from "@/components/ui/button";
import React from "react";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import { useUserCRUD } from "./hooks/useUserCRUD";
import type { User } from "./types";

export const ReactUserForm: React.FC = () => {
  const {
    allUsers,
    editingUser,
    isFormVisible,
    handleFormSubmit,
    deleteUser,
    startEditing,
    cancelEditing,
    showCreateForm,
  } = useUserCRUD();

  const handleEdit = (user: User) => {
    startEditing(user);
  };

  const handleDelete = (userId: string) => {
    deleteUser(userId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            User Management System
          </h1>
          <p className="text-gray-600 text-lg">
            Complete CRUD operations with React Hook Form and Yup validation
          </p>
        </div>

        <div className="space-y-6">
          {!isFormVisible && (
            <div className="flex justify-center mb-6">
              <Button
                onClick={showCreateForm}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg transform hover:scale-105 transition-all duration-200"
                size="lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add New User
              </Button>
            </div>
          )}

          {isFormVisible && (
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <UserForm
                  onSubmit={handleFormSubmit}
                  initialData={editingUser}
                  isEditing={!!editingUser}
                  onCancel={cancelEditing}
                />
              </div>
            </div>
          )}

          {!isFormVisible && (
            <div className="w-full">
              <UserTable
                users={allUsers}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReactUserForm;
