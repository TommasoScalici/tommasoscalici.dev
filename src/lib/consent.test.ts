import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from 'vitest';

import { getConsent, setConsent } from './consent';

describe('consent', () => {
    let setItemMock: Mock;
    let dispatchEventMock: Mock;

    beforeEach(() => {
        // Mock localStorage
        const store: Record<string, string> = {};

        // Define mocks
        setItemMock = vi.fn((key: string, value: string) => {
            store[key] = value;
        });
        const getItemMock = vi.fn((key: string) => store[key] || null);
        dispatchEventMock = vi.fn();

        vi.stubGlobal('localStorage', {
            getItem: getItemMock,
            setItem: setItemMock,
        });

        // Mock window (it might be undefined in some envs, but tests run in happy-dom usually)
        vi.stubGlobal('window', {
            dispatchEvent: dispatchEventMock,
            localStorage: localStorage,
        });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should return "pending" by default', () => {
        expect(getConsent()).toBe('pending');
    });

    it('should retrieve stored consent', () => {
        localStorage.setItem('user-consent', 'granted');
        expect(getConsent()).toBe('granted');
    });

    it('should save consent to localStorage', () => {
        setConsent('denied');
        expect(setItemMock).toHaveBeenCalledWith('user-consent', 'denied');
    });

    it('should dispatch "consent-update" event on change', () => {
        setConsent('granted');
        expect(dispatchEventMock).toHaveBeenCalled();
        const event = dispatchEventMock.mock.calls[0][0] as Event;
        expect(event.type).toBe('consent-update');
    });
});
