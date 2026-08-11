import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import successIcon from '../assets/success.png';
import errorIcon from '../assets/errorIcon.png';
import closeIcon from '../assets/Close.png';

type StatusVariant = "success" | "error";

interface StatusModalProps {
    variant: StatusVariant;
    message?: string;
    onclose: () => void;
}

const variantConfig: Record<
    StatusVariant,
    { icon: string; accent: string; accentSoft: string; defaultMessage: string }
> = {
    success: {
        icon: successIcon,
        accent: "rgba(34,197,94,0.35)",
        accentSoft: "rgba(34,197,94,0.15)",
        defaultMessage: "Message sent successfully!",
    },
    error: {
        icon: errorIcon,
        accent: "rgba(248,113,113,0.35)",
        accentSoft: "rgba(248,113,113,0.15)",
        defaultMessage: "Network Error!",
    },
};

const StatusModal = ({ variant, message, onclose }: StatusModalProps) => {
    const config = variantConfig[variant];

    return createPortal(
        <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-24 right-4 md:right-6 z-50 flex items-center gap-3 md:gap-4 px-4 md:px-5 py-4 rounded-2xl max-w-[92vw] md:max-w-md"
            style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: `1px solid ${config.accent}`,
                boxShadow: "0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
        >
            <span
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: config.accentSoft }}
            >
                <img src={config.icon} className="w-5 h-5" />
            </span>

            <p style={{ color: "var(--secondary)", fontSize: 14, fontWeight: 500 }}>
                {message ?? config.defaultMessage}
            </p>

            <button
                onClick={onclose}
                className="ml-auto w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
                <img src={closeIcon} className="w-3.5 h-3.5" />
            </button>
        </motion.div>,
        document.body
    );
};

export default StatusModal;