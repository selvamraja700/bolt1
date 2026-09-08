import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface TransactionOverlayProps {
  isProcessing: boolean;
  status: 'idle' | 'success' | 'error';
  message: string;
}

export default function TransactionOverlay({
  isProcessing,
  status,
  message,
}: TransactionOverlayProps) {
  if (!isProcessing && status === 'idle') return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-950/90 backdrop-blur-md animate-fade-in">
      <div className="flex flex-col items-center gap-6 px-6 text-center max-w-md">
        {status === 'idle' && (
          <>
            <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center">
              <Loader2 size={36} className="text-lime-300 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-paper-50 mb-2">
                Processing your enquiry
              </h3>
              <p className="text-sm text-paper-400">
                Securely submitting your supply request...
              </p>
            </div>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-20 h-20 rounded-full bg-success-500/15 flex items-center justify-center animate-scale-in">
              <CheckCircle2 size={40} className="text-success-400" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-paper-50 mb-2">
                Enquiry submitted
              </h3>
              <p className="text-sm text-paper-400">{message}</p>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-20 h-20 rounded-full bg-error-500/15 flex items-center justify-center animate-scale-in">
              <AlertCircle size={40} className="text-error-400" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-paper-50 mb-2">
                Fallback activated
              </h3>
              <p className="text-sm text-paper-400">{message}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
