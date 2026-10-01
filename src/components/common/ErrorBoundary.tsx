import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Compass } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Atlas ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    // Clear URL parameters if they caused a state glitch
    if (window.location.search) {
      window.history.replaceState({}, '', window.location.pathname);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] h-full w-full p-8 bg-[#08090d] text-slate-100 font-sans select-none">
          <div className="max-w-md w-full bg-[#0d1017] border border-red-500/30 rounded-xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-cyan-500" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white tracking-wide">
                  {this.props.fallbackTitle || 'Visualization Encountered an Issue'}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Atlas Research Engine Safeguard
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4 bg-black/40 p-3 rounded-lg border border-white/5 font-mono">
              {this.state.error?.message || 'An unexpected rendering anomaly occurred.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-medium rounded-lg transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reload View
              </button>
              <button
                onClick={() => {
                  window.location.href = window.location.pathname;
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-all"
              >
                <Compass className="w-3.5 h-3.5" />
                Reset Atlas
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
