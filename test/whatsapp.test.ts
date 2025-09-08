import { shareToWhatsAppp, sendWhatsapp } from '../src/whatsapp';

describe('whatsapp.ts', () => {
    const originalUserAgent = navigator.userAgent;
    const originalWindowOpen = window.open;

    beforeEach(() => {
        // @ts-ignore
        window.open = jest.fn();
    });

    afterEach(() => {
        Object.defineProperty(navigator, 'userAgent', {
            value: originalUserAgent,
            configurable: true,
        });
        window.open = originalWindowOpen;
        jest.clearAllMocks();
    });

    const setUserAgent = (ua: string) => {
        Object.defineProperty(navigator, 'userAgent', {
            value: ua,
            configurable: true,
        });
    };

    describe('shareToWhatsAppp', () => {
        it('should open mobile whatsapp url on mobile', () => {
            setUserAgent('iPhone');
            shareToWhatsAppp('hello world');
            expect(window.open).toHaveBeenCalledWith(
                'whatsapp://send?text=hello world',
                '_blank'
            );
        });

        it('should open web whatsapp url on desktop', () => {
            setUserAgent('Windows');
            shareToWhatsAppp('test message');
            expect(window.open).toHaveBeenCalledWith(
                'https://web.whatsapp.com/send?text=test message',
                '_blank'
            );
        });
    });

    describe('sendWhatsapp', () => {
        it('should open mobile whatsapp url with encoded chat on mobile', () => {
            setUserAgent('Android');
            sendWhatsapp(1234567890, 'hello world');
            expect(window.open).toHaveBeenCalledWith(
                'whatsapp://send?phone=1234567890&text=hello%20world',
                '_blank'
            );
        });

        it('should open web whatsapp url with encoded chat on desktop', () => {
            setUserAgent('Macintosh');
            sendWhatsapp(9876543210, 'special chars: &?=');
            expect(window.open).toHaveBeenCalledWith(
                'https://web.whatsapp.com/send?phone=9876543210&text=special%20chars%3A%20%26%3F%3D',
                '_blank'
            );
        });
    });
});