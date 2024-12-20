import { render, screen, act, cleanup,  } from "@testing-library/react";

import { HungerDisplay } from "../components/HungerDisplay";
import { usePets } from "../services/queries/petQueries";
import { useUpdateHunger } from "../services/mutations/petmutations";
import { useAuth } from "../context/AuthContext";
import { vi, beforeEach, afterEach, describe, it, Mock, expect } from "vitest";
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

    //"renders correctly with the initial HungerValue"
    it("Display Initial HungerValue", () => {
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };

        // Mock implementations
        (useAuth as Mock).mockReturnValue({ user: mockUser });
        (usePets as Mock).mockReturnValue({ data: [mockPet] });

        render(<HungerDisplay/>)
        // screen.debug();

        //now we're gonna check if they're being displayed
        expect(screen.getByText((context) => context.includes("70"))).toBeDefined();
        expect(screen.getByRole("img").getAttribute("src")).toContain("meat");
    });

    // "decreases hunger value every 2 seconds"
    it("Automatic HungerValue Decrease", async () =>{
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };
        const mockUpdateHunger = vi.fn();

        (useAuth as Mock).mockReturnValue({ user: mockUser });
        (usePets as Mock).mockReturnValue({ data: [mockPet] });
        (useUpdateHunger as Mock).mockReturnValue({ mutateAsync: mockUpdateHunger, });

        render(<HungerDisplay />);

        act(() => {
            vi.advanceTimersByTime(3000); // 3 seconds
          });

        expect(mockUpdateHunger).toHaveBeenCalledWith({
            player_uuid: "mock_user",
            hunger_status: 65
        });
    });

    // clears the interval on unmount
    it("Clear Interval", () => {
        const mockUser = { id: "mock_user" };
        const mockPet = { hunger_status: 70 };
        const mockUpdateHunger = vi.fn();

        (useAuth as Mock).mockReturnValue({ user: mockUser });
        (usePets as Mock).mockReturnValue({ data: [mockPet] });
        (useUpdateHunger as Mock).mockReturnValue({ mutateAsync: mockUpdateHunger, });

        const { unmount } = render(<HungerDisplay />);
    
        unmount();
        act(() => {
          vi.advanceTimersByTime(2000);
        });
    
        // No update calls after unmount
        expect(mockUpdateHunger).not.toHaveBeenCalled();
      });

});