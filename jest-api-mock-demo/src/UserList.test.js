import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';
import { fetchUsers } from './api/userService';

// Mock the entire userService module
jest.mock('./api/userService');

describe('UserList Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('displays loading state initially', () => {
    // Mock fetchUsers to return a promise that never resolves (keeps loading)
    fetchUsers.mockImplementation(() => new Promise(() => {}));

    render(<UserList />);
    
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.getByText('Loading users...')).toBeInTheDocument();
  });

  test('displays users after successful API call', async () => {
    // Mock successful API response
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
    ];

    fetchUsers.mockResolvedValue(mockUsers);

    render(<UserList />);

    // Wait for loading to disappear
    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });

    // Verify user list is displayed
    expect(screen.getByTestId('user-list')).toBeInTheDocument();
    expect(screen.getByText('User List')).toBeInTheDocument();

    // Verify all users are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/)).toBeInTheDocument();
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText(/jane@example.com/)).toBeInTheDocument();
    
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    expect(screen.getByText(/bob@example.com/)).toBeInTheDocument();

    // Verify fetchUsers was called once
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });

  test('displays error message when API call fails', async () => {
    // Mock API error
    const errorMessage = 'Failed to fetch users';
    fetchUsers.mockRejectedValue(new Error(errorMessage));

    render(<UserList />);

    // Wait for error to appear
    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
    });

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    expect(screen.queryByTestId('user-list')).not.toBeInTheDocument();
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });

  test('handles empty user list', async () => {
    // Mock empty API response
    fetchUsers.mockResolvedValue([]);

    render(<UserList />);

    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });

    expect(screen.getByTestId('user-list')).toBeInTheDocument();
    expect(screen.getByText('User List')).toBeInTheDocument();
    
    // Verify no user items are rendered
    const userItems = screen.queryAllByTestId(/^user-\d+$/);
    expect(userItems).toHaveLength(0);
  });
});
