import { render, screen, act, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import { HungerDisplay } from "../components/HungerDisplay";
import { usePets } from "../services/queries/petQueries";
import { useUpdateHunger } from "../services/mutations/petmutations";
import { useAuth } from "../context/AuthContext";
import { vi, beforeEach, afterEach, describe, it, Mock } from "vitest";
import React from 'react';

// Mocking modules
vi.mock("../services/queries/petQueries");
vi.mock("../services/mutations/petmutations");
vi.mock("../context/AuthContext");

describe("HungerDisplay", () => {
    beforeEach(() => {
        vi.useFakeTimers();
        cleanup();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("renders correctly with the initial HungerValue", () => {
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };

        // Mock implementations
        (useAuth as Mock).mockReturnValue({ user: mockUser });
        (usePets as Mock).mockReturnValue({ data: [mockPet] });

        render(<HungerDisplay/>)

        //now we're gonna check if they're being displayed
        expect(screen.getByText("70")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "meat");
    });

    it("decreases hunger every 2 seconds", async () =>{
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };
        const mockUpdateHunger = vi.fn();

        (useAuth as Mock).mockReturnValue({ user: mockUser });
        (usePets as Mock).mockReturnValue({ data: [mockPet] });
        (useUpdateHunger as Mock).mockReturnValue({ mutateAsync: mockUpdateHunger, });

        render(<HungerDisplay />);

        act(() => {
            vi.advanceTimersByTime(2000); // 2 seconds
          });

        expect(mockUpdateHunger).toHaveBeenCalledWith({
            player_uuid: "mock_user",
            hunger_status: 65, // 70 - 5
        });
    });

    it("clears the interval on unmount", () => {
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };
        
        (useAuth as Mock).mockReturnValue({ user: mockUser });
        (usePets as Mock).mockReturnValue({ data: [mockPet] });
    
        const { unmount } = render(<HungerDisplay />);
    
        unmount();
        act(() => {
          vi.advanceTimersByTime(2000);
        });
    
        // No update calls after unmount
        expect(useUpdateHunger().mutateAsync).not.toHaveBeenCalled();
      });

})