


const isMobile = (): boolean => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export const shareToWhatsAppp = (chat: string) => {

    const whatsappUrl = isMobile()
        ? `whatsapp://send?text=${chat}`
        : `https://web.whatsapp.com/send?text=${chat}`;

    window.open(whatsappUrl, '_blank');
};



export const sendWhatsapp = (contact: string, chat: string) => {
    const encodedChat = encodeURIComponent(chat);
    const whatsappUrl = isMobile()
        ? `whatsapp://send?phone=${contact}&text=${encodedChat}`
        : `https://web.whatsapp.com/send?phone=${contact}&text=${encodedChat}`;

    window.open(whatsappUrl, '_blank');
}