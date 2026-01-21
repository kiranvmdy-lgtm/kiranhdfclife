import { useState, useEffect } from "react";
import { X, Phone, User } from "lucide-react";

interface PopupCTAProps {
    delaySeconds?: number;
}

const PopupCTA = ({ delaySeconds = 5 }: PopupCTAProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);

    useEffect(() => {
        // Check if popup was already closed in this session
        const wasClosed = sessionStorage.getItem("popupCTAClosed");
        if (wasClosed) {
            setHasBeenClosed(true);
            return;
        }

        // Show popup after delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, delaySeconds * 1000);

        return () => clearTimeout(timer);
    }, [delaySeconds]);

    const handleClose = () => {
        setIsOpen(false);
        setHasBeenClosed(true);
        sessionStorage.setItem("popupCTAClosed", "true");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        alert("Thank you! We will call you back soon.");
        handleClose();
    };

    if (!isOpen || hasBeenClosed) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={handleClose}
            />

            {/* Popup Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-primary to-secondary p-6 text-center">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        aria-label="Close popup"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                        Get a Free Callback
                    </h3>
                    <p className="text-white/90 text-sm">
                        Our insurance expert will help you choose the best plan
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            pattern="[0-9]{10}"
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
                    >
                        Request Callback
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                        By submitting, you agree to receive a call from our team
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PopupCTA;
