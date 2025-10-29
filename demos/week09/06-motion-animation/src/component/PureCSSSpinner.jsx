export default function LoadingCircleSpinnerCSS() {
    return (
      <div className="inline-flex items-center justify-center">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
      </div>
    );
  }