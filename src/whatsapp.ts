

/**
 * Detects if the current device is a mobile device based on the user agent.
 * @returns {boolean} True if the device is mobile, false otherwise.
 */
const isMobile = (): boolean => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

/**
 * Shares a message via WhatsApp.
 * Opens the WhatsApp app on mobile or WhatsApp Web on desktop with the provided message.
 * @param {string} chat - The message to share.
 */
export const shareToWhatsAppp = (chat: string) => {

    const whatsappUrl = isMobile()
        ? `whatsapp://send?text=${chat}`
        : `https://web.whatsapp.com/send?text=${chat}`;

    window.open(whatsappUrl, '_blank');
};


/**
 * Sends a WhatsApp message to a specific contact.
 * Opens the WhatsApp app on mobile or WhatsApp Web on desktop with the provided contact and message.
 * @param {string} contact - The phone number of the contact (in international format).
 * @param {string} chat - The message to send.
 */
export const sendWhatsapp = (contact: string, chat: string) => {
    const encodedChat = encodeURIComponent(chat);
    const whatsappUrl = isMobile()
        ? `whatsapp://send?phone=${contact}&text=${encodedChat}`
        : `https://wa.me/${contact}?text=${encodedChat}`;

    window.open(whatsappUrl, '_blank');
}