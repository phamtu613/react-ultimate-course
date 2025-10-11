import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import type { User } from "../types";
import { COUNTRIES } from "../types";

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  onEdit,
  onDelete,
}) => {
  const getCountryLabel = (countryCode: string) => {
    const country = COUNTRIES.find((c) => c.value === countryCode);
    return country ? country.label : countryCode;
  };

  return (
    <Card className="w-full shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              User Directory
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              Manage your user database with advanced controls
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="w-[200px] font-semibold text-gray-700">
                  FULL NAME
                </TableHead>
                <TableHead className="w-[250px] font-semibold text-gray-700">
                  EMAIL ADDRESS
                </TableHead>
                <TableHead className="w-[180px] font-semibold text-gray-700">
                  ADDRESS
                </TableHead>
                <TableHead className="w-[120px] font-semibold text-gray-700">
                  CITY
                </TableHead>
                <TableHead className="w-[150px] font-semibold text-gray-700">
                  COUNTRY
                </TableHead>
                <TableHead className="w-[120px] text-right font-semibold text-gray-700">
                  ACTION
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <div className="flex flex-col items-center gap-3 text-gray-500">
                      <div className="p-4 bg-gray-100 rounded-full">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">
                          No users found
                        </p>
                        <p className="text-sm">
                          Add your first user to get started
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user, index) => (
                  <TableRow
                    key={user.id}
                    className={`transition-colors hover:bg-blue-50/50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                    }`}
                  >
                    <TableCell className="font-medium text-gray-900">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {user.fullName.charAt(0).toUpperCase()}
                        </div>
                        {user.fullName}
                      </div>
                    </TableCell>
                    <TableCell className="text-blue-600 hover:text-blue-800 transition-colors">
                      <a
                        href={`mailto:${user.email}`}
                        className="hover:underline"
                      >
                        {user.email}
                      </a>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {user.address}
                    </TableCell>
                    <TableCell className="text-gray-700">{user.city}</TableCell>
                    <TableCell className="text-gray-700">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {getCountryLabel(user.country)}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEdit(user)}
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDelete(user.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-200"
                        >
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
